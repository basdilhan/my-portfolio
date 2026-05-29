import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PageIntro.module.css';

/* ══════════════════════════════════════════════════
   Canvas: particles + data-streams + matrix rain
   ══════════════════════════════════════════════════ */
function TechCanvas({ canvasRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId, t = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* Particles */
    const N = 80;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.6,
      hue: [170, 200, 280][Math.floor(Math.random() * 3)],
    }));

    /* Data streams */
    const streams = Array.from({ length: 12 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      angle: (i / 12) * Math.PI * 2,
      speed: 1.5 + Math.random() * 2.5,
      length: 50 + Math.random() * 100,
      alpha: 0.3 + Math.random() * 0.4,
    }));

    /* Matrix rain columns */
    const chars = 'アイウエオカキクケコ01100110REACT{}()<>/'.split('');
    const colW = 18;
    const cols = Math.ceil(canvas.width / colW);
    const drops = Array.from({ length: cols }, () => Math.random() * -100);

    const draw = () => {
      t++;

      // Fading trail effect
      ctx.fillStyle = 'rgba(2,12,27,0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      /* ── Matrix rain ── */
      ctx.font = '13px monospace';
      for (let i = 0; i < cols; i++) {
        if (Math.random() > 0.97 || drops[i] * colW > canvas.height) {
          drops[i] = Math.random() * -50;
        }
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * colW;
        const brightness = Math.max(0, 1 - (y / canvas.height) * 0.8);
        ctx.fillStyle = `rgba(100,255,218,${0.05 + brightness * 0.08})`;
        ctx.fillText(ch, i * colW, y);
        drops[i] += 0.4;
      }

      /* ── Data streams ── */
      streams.forEach(s => {
        const tx = s.x + Math.cos(s.angle) * s.length;
        const ty = s.y + Math.sin(s.angle) * s.length;
        const grad = ctx.createLinearGradient(s.x, s.y, tx, ty);
        grad.addColorStop(0, `rgba(100,255,218,0)`);
        grad.addColorStop(0.8, `rgba(100,255,218,${s.alpha * 0.6})`);
        grad.addColorStop(1, `rgba(97,218,251,${s.alpha})`);
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        if (s.x < -300 || s.x > canvas.width + 300 || s.y < -300 || s.y > canvas.height + 300) {
          s.x = Math.random() * canvas.width;
          s.y = Math.random() * canvas.height;
          s.angle = Math.random() * Math.PI * 2;
        }
      });

      /* ── Connection lines ── */
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100,255,218,${0.1 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      /* ── Nodes ── */
      nodes.forEach(p => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.03 + p.x * 0.008);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (1 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},90%,65%,${0.2 + pulse * 0.25})`;
        ctx.fill();
        // Glow ring on some
        if (pulse > 0.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${p.hue},80%,60%,${0.05})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    // Initial clear
    ctx.fillStyle = '#020c1b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef]);
  return null;
}

/* ══════════════════════════════════════════════════
   Typing code animation
   ══════════════════════════════════════════════════ */
const codeLines = [
  { text: 'const dev = {', color: '#c792ea' },
  { text: '  name: "Samudu Dilhan",', color: '#c3e88d' },
  { text: '  role: "Full Stack Developer",', color: '#c3e88d' },
  { text: '  skills: ["React", "Spring Boot",', color: '#f78c6c' },
  { text: '           "Flutter", "Python"],', color: '#f78c6c' },
  { text: '  passion: "AI / ML"', color: '#82aaff' },
  { text: '};', color: '#c792ea' },
];

function TypingCode() {
  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeDot} style={{ background: '#ff5f56' }} />
        <span className={styles.codeDot} style={{ background: '#ffbd2e' }} />
        <span className={styles.codeDot} style={{ background: '#27c93f' }} />
        <span className={styles.codeFileName}>portfolio.js</span>
      </div>
      <div className={styles.codeBody}>
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            className={styles.codeLine}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0 + i * 0.25, duration: 0.4 }}
          >
            <span className={styles.lineNum}>{i + 1}</span>
            <span style={{ color: line.color }}>{line.text}</span>
          </motion.div>
        ))}
        <motion.span
          className={styles.codeCursor}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 4.0, duration: 1, repeat: Infinity }}
        >▊</motion.span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   Orbiting tech pills
   ══════════════════════════════════════════════════ */
const techLabels = [
  { label: 'React.js',    angle: -80,  color: '#61dafb' },
  { label: 'Spring Boot', angle: -30,  color: '#6db33f' },
  { label: 'Flutter',     angle: 25,   color: '#54c5f8' },
  { label: 'Python',      angle: 80,   color: '#ffd343' },
  { label: 'AI / ML',     angle: 135,  color: '#ff6b6b' },
  { label: 'Node.js',     angle: 190,  color: '#68a063' },
  { label: 'Firebase',    angle: 245,  color: '#ffca28' },
  { label: 'MySQL',       angle: 300,  color: '#00758f' },
];

const ORBIT_R = 175;

function OrbitPill({ label, angle, color, delay }) {
  const rad = (angle * Math.PI) / 180;
  const x   = Math.cos(rad) * ORBIT_R;
  const y   = Math.sin(rad) * ORBIT_R;

  return (
    <motion.div
      className={styles.pill}
      style={{ x, y, translateX: '-50%', translateY: '-50%', '--pill-color': color }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 16 }}
    >
      <span className={styles.pillDot} style={{ background: color }} />
      {label}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════
   Main component
   ══════════════════════════════════════════════════ */
const DURATION = 5500;

const PageIntro = () => {
  const [visible,  setVisible]  = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase,    setPhase]    = useState(0); // 0=boot, 1=reveal, 2=ready
  const canvasRef = useRef(null);

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const pct = Math.min(100, Math.round(((Date.now() - start) / DURATION) * 100));
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Phase transitions
    setTimeout(() => setPhase(1), 600);
    setTimeout(() => setPhase(2), 2000);
    const timer = setTimeout(() => setVisible(false), DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.intro}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -80,
            scale: 1.08,
            filter: 'blur(24px) brightness(2.5)',
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ── Background layers ── */}
          <canvas ref={canvasRef} className={styles.canvas} />
          <TechCanvas canvasRef={canvasRef} />
          <div className={styles.vignette} />

          {/* Animated glow orbs */}
          <motion.div
            className={styles.orb1}
            animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={styles.orb2}
            animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0], scale: [1, 0.9, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={styles.orb3}
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Scan-line sweep */}
          <motion.div
            className={styles.scanLine}
            initial={{ top: '-4px' }}
            animate={{ top: '104%' }}
            transition={{ duration: 3, ease: 'linear', repeat: Infinity, repeatDelay: 0.8 }}
          />

          {/* Corner brackets */}
          {['TL','TR','BL','BR'].map(c => (
            <motion.div
              key={c}
              className={styles[`corner${c}`]}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
            />
          ))}

          {/* ── 3-col layout ── */}
          <div className={styles.layout}>

            {/* LEFT */}
            <motion.div
              className={styles.leftCol}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Terminal greeting */}
              <motion.div
                className={styles.helloLine}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className={styles.prompt}>&gt;&nbsp;</span>
                <span className={styles.helloText}>Hello, World!</span>
                <span className={styles.cursor}>_</span>
              </motion.div>

              {/* Name */}
              <div className={styles.nameGroup}>
                <div className={styles.nameRow}>
                  {'SAMUDU'.split('').map((c, i) => (
                    <motion.span
                      key={i}
                      className={styles.nameChar}
                      initial={{ opacity: 0, y: 80, rotateY: -120 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{
                        delay: 0.5 + i * 0.06,
                        type: 'spring',
                        stiffness: 150,
                        damping: 10,
                      }}
                    >{c}</motion.span>
                  ))}
                </div>
                <div className={styles.nameRow2}>
                  {'DILHAN'.split('').map((c, i) => (
                    <motion.span
                      key={i}
                      className={styles.nameCharSub}
                      initial={{ opacity: 0, y: 50, rotateY: -90 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{
                        delay: 0.9 + i * 0.06,
                        type: 'spring',
                        stiffness: 140,
                        damping: 11,
                      }}
                    >{c}</motion.span>
                  ))}
                </div>
              </div>

              {/* Role tags */}
              {['Full Stack Developer', 'AI / ML Enthusiast', 'Mobile Developer'].map((role, i) => (
                <motion.div
                  key={role}
                  className={styles.roleTag}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1.6 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
                >
                  <motion.span
                    className={styles.roleBar}
                    initial={{ width: 0 }}
                    animate={{ width: 24 }}
                    transition={{ delay: 1.8 + i * 0.15, duration: 0.4 }}
                  />
                  {role}
                </motion.div>
              ))}
            </motion.div>

            {/* CENTER — photo + orbit */}
            <motion.div
              className={styles.centerCol}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.2, type: 'spring', stiffness: 80, damping: 14 }}
            >
              <div className={styles.orbitWrapper}>
                <div className={styles.ring1} />
                <div className={styles.ring2} />
                <div className={styles.ring3} />

                {[0, 90, 180, 270].map((a, i) => (
                  <motion.div
                    key={i}
                    className={styles.orbitDot}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8 - i, repeat: Infinity, ease: 'linear' }}
                    style={{ '--start-angle': `${a}deg`, transformOrigin: `${180 - i * 20}px 0` }}
                  />
                ))}

                {techLabels.map((t, i) => (
                  <OrbitPill key={t.label} label={t.label} angle={t.angle} color={t.color} delay={1.0 + i * 0.08} />
                ))}

                <motion.div
                  className={styles.photoShell}
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(100,255,218,0.3), 0 0 60px rgba(100,255,218,0.1), 0 0 100px rgba(100,255,218,0.05)',
                      '0 0 50px rgba(97,218,251,0.5), 0 0 100px rgba(97,218,251,0.2), 0 0 150px rgba(97,218,251,0.08)',
                      '0 0 40px rgba(167,139,250,0.4), 0 0 80px rgba(167,139,250,0.15), 0 0 120px rgba(167,139,250,0.05)',
                      '0 0 30px rgba(100,255,218,0.3), 0 0 60px rgba(100,255,218,0.1), 0 0 100px rgba(100,255,218,0.05)',
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img src="/samudu.jpg" alt="Samudu Dilhan" className={styles.photo} />
                  <div className={styles.holoOverlay} />
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT — code block + stats */}
            <motion.div
              className={styles.rightCol}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Typing code block */}
              <TypingCode />

              {/* Quick stats */}
              <div className={styles.miniStats}>
                {[
                  { v: '3+', l: 'Years' },
                  { v: '10+', l: 'Projects' },
                  { v: '5+', l: 'Stacks' },
                ].map((s, i) => (
                  <motion.div
                    key={s.l}
                    className={styles.miniStat}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 + i * 0.15 }}
                  >
                    <span className={styles.miniVal}>{s.v}</span>
                    <span className={styles.miniLbl}>{s.l}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className={styles.statusBadge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.0, type: 'spring', stiffness: 200 }}
              >
                <span className={styles.statusDot} />
                <span>Open to Work</span>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Bottom HUD ── */}
          <div className={styles.hud}>
            <motion.span
              className={styles.hudText}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {phase === 0 ? 'BOOTING SYSTEM...' : phase === 1 ? 'LOADING MODULES...' : 'INITIALIZING PORTFOLIO'}
            </motion.span>
            <span className={styles.hudPct}>{progress}%</span>
          </div>
          <div className={styles.barTrack}>
            <motion.div
              className={styles.barFill}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.2, duration: DURATION / 1000 - 0.8, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageIntro;
