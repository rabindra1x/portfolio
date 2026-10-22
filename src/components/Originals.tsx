import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { useDesktop, useFinePointer, useReducedMotionPref } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';
import { RailButtons } from './Rail';

/**
 * ORIGINALS — on desktop the section pins and the project track moves sideways
 * with the page scroll like a title sequence. On touch / small screens /
 * reduced motion it becomes a native swipe rail.
 */
export default function Originals({ onOpen }: { onOpen: (p: Project) => void }) {
  const desktop = useDesktop();
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  return desktop && fine && !reduced ? <PinnedOriginals onOpen={onOpen} /> : <RailOriginals onOpen={onOpen} />;
}

function Intro() {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw]">
      <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
        <span className="h-px w-8 bg-crimson-2" /> {projects.length} Originals · {projects[0].year}
      </p>
      <RevealText as="h2" text="ORIGINALS" className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] text-bone" />
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-mist">
        Two Originals from the resume — an AI-powered cybersecurity analysis platform and an autonomous AI software engineering agent. Open any title for the full story.
      </p>
      <p className="mt-6 hidden text-xs tracking-[0.24em] text-smoke lg:block">SCROLL TO BROWSE →</p>
    </div>
  );
}

function Outro() {
  return (
    <a
      href={profile.links.github}
      target="_blank"
      rel="noreferrer"
      className="group flex aspect-[3/4] w-[70vw] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 text-center transition hover:border-crimson-2/60 sm:w-[44vw] lg:aspect-auto lg:h-[66vh] lg:w-[24vw]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 text-2xl text-bone transition group-hover:scale-110 group-hover:border-crimson-2 group-hover:text-crimson-2">↗</span>
      <span className="font-display text-3xl tracking-wide text-bone">More on GitHub</span>
      <span className="text-xs text-mist">github.com/rabindra1x</span>
    </a>
  );
}

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

function PinnedOriginals({ onOpen }: { onOpen: (p: Project) => void }) {
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();
  const wrap = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  const [dist, setDist] = useState(0);
  const [active, setActive] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const distRef = useRef(0);
  const boundsRef = useRef({ start: true, end: false });
  const suppressClickUntil = useRef(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] });
  // The track transform is the only horizontal movement. No native scroll is
  // applied at the same time, so the two can never cancel each other out.
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  const measure = useCallback(() => {
    const vw = viewport.current?.clientWidth ?? 0;
    const tw = track.current?.scrollWidth ?? 0;
    const next = Math.max(0, Math.round(tw - vw));
    distRef.current = next;
    setDist((prev) => (prev === next ? prev : next));

    if (next === 0) {
      if (!boundsRef.current.start || !boundsRef.current.end) {
        boundsRef.current = { start: true, end: true };
        setAtStart(true);
        setAtEnd(true);
      }
    } else {
      const end = scrollYProgress.get() >= 0.998;
      const start = !end && scrollYProgress.get() <= 0.002;
      if (start !== boundsRef.current.start || end !== boundsRef.current.end) {
        boundsRef.current = { start, end };
        setAtStart(start);
        setAtEnd(end);
      }
    }
  }, [scrollYProgress]);

  useLayoutEffect(() => {
    measure();

    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    if (viewport.current) ro.observe(viewport.current);
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const d = distRef.current;
    const start = d === 0 || v <= 0.002;
    const end = d === 0 || v >= 0.998;
    if (start !== boundsRef.current.start || end !== boundsRef.current.end) {
      boundsRef.current = { start, end };
      setAtStart(start);
      setAtEnd(end);
    }
  });

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const sectionTop = useCallback(() => {
    const el = wrap.current;
    if (!el) return 0;
    return el.getBoundingClientRect().top + window.scrollY;
  }, []);

  /** Scroll the page (which advances the pinned track) by one bounded step. */
  const pan = useCallback(
    (dir: 1 | -1) => {
      const d = distRef.current;
      if (!d) return;
      const current = clamp(scrollYProgress.get(), 0, 1) * d;
      const step = Math.min(d, Math.max(280, (viewport.current?.clientWidth ?? 900) * 0.82));
      const next = clamp(current + dir * step, 0, d);
      scrollTo(sectionTop() + next, { offset: 0 });
    },
    [scrollTo, scrollYProgress, sectionTop],
  );

  // Horizontal trackpad swipes over the pinned rail advance the same track.
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const d = distRef.current;
      if (!d || Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      const current = clamp(scrollYProgress.get(), 0, 1) * d;
      const next = clamp(current + e.deltaX, 0, d);
      scrollTo(sectionTop() + next, { offset: 0, immediate: true });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [scrollTo, scrollYProgress, sectionTop]);

  const onTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!fine || e.button !== 0 || e.pointerType === 'touch') return;
    const target = e.target as Element | null;
    if (target?.closest('a, button, input, textarea, select, [data-no-drag]')) return;

    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: window.scrollY,
      moved: false,
    };
    suppressClickUntil.current = 0;
    setDragging(true);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      const state = drag.current;
      if (!state.active) return;
      const dx = e.clientX - state.startX;
      if (!state.moved && Math.abs(dx) < 6) return;

      state.moved = true;
      if (e.cancelable) e.preventDefault();

      const d = distRef.current;
      const top = sectionTop();
      const start = clamp(state.startScroll - top, 0, d);
      const next = clamp(start - dx, 0, d);
      scrollTo(top + next, { offset: 0, immediate: true });
    };

    const onStop = () => {
      if (drag.current.moved) suppressClickUntil.current = performance.now() + 250;
      drag.current.active = false;
      setDragging(false);
    };

    window.addEventListener('pointermove', onMove, { passive: false });
    window.addEventListener('pointerup', onStop);
    window.addEventListener('pointercancel', onStop);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onStop);
      window.removeEventListener('pointercancel', onStop);
    };
  }, [dragging, scrollTo, sectionTop]);

  // A drag that started on a card must not also open that card.
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (performance.now() >= suppressClickUntil.current) return;
    e.preventDefault();
    e.stopPropagation();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      pan(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      pan(-1);
    }
  };

  const canLeft = dist > 0 && !atStart;
  const canRight = dist > 0 && !atEnd;

  const arrowBase =
    'absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-ink/80 backdrop-blur-md text-bone flex items-center justify-center text-[19px] font-display transition focus-ring disabled:text-smoke disabled:opacity-50 disabled:pointer-events-none disabled:border-white/10';

  return (
    <div ref={wrap} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center" onKeyDown={onKeyDown}>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(229,19,43,0.10),transparent_70%)]" />
        <div
          ref={viewport}
          className={`relative flex items-center overflow-hidden no-scrollbar ${dragging ? 'select-none' : ''}`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Original projects"
          onPointerDown={onTrackPointerDown}
          onClickCapture={onClickCapture}
        >
          <motion.div ref={track} style={{ x }} className="flex w-max items-center gap-8 px-[var(--gutter)]">
            <Intro />
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
            ))}
            <Outro />
          </motion.div>
        </div>
        {active && dist > 0 && (
          <>
            <button
              type="button"
              aria-label="Previous project"
              disabled={!canLeft}
              onClick={() => pan(-1)}
              className={`${arrowBase} left-[var(--gutter)] hover:bg-white hover:text-ink`}
            >
              <span aria-hidden className="pointer-events-none">‹</span>
            </button>
            <button
              type="button"
              aria-label="Next project"
              disabled={!canRight}
              onClick={() => pan(1)}
              className={`${arrowBase} right-[var(--gutter)] hover:bg-white hover:text-ink`}
            >
              <span aria-hidden className="pointer-events-none">›</span>
            </button>
          </>
        )}
        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">ORIGINALS</span>
          <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div className="h-full origin-left bg-crimson" style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RailOriginals({ onOpen }: { onOpen: (p: Project) => void }) {
  const rail = useRef<HTMLDivElement>(null);
  return (
    <div className="py-6">
      <div className="gutter mb-6">
        <Intro />
      </div>
      <div className="group/rail relative">
        <div className="[overflow-x:clip]">
          <motion.div
            ref={rail}
            className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
            role="region"
            aria-roledescription="carousel"
            aria-label="Original projects"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
            ))}
            <Outro />
          </motion.div>
        </div>
        <RailButtons rail={rail} />
      </div>
    </div>
  );
}
