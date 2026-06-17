import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Github, Globe, CheckCircle2, User, Clock, Users,
  Layers, BookOpen, Cpu, ExternalLink, Lightbulb, ArrowRight,
} from 'lucide-react';
import { projects } from './projects';
import { useLang } from './App';

const tPage = {
  en: {
    notFound: 'Project not found',
    back: 'Back to portfolio',
    caseStudy: 'Case Study',
    viewGithub: 'View on GitHub',
    liveDemo: 'Live Demo',
    role: 'Role',
    duration: 'Duration',
    team: 'Team',
    origin: 'How it started',
    overview: 'Overview',
    highlights: 'Key Highlights',
    learned: 'What I Learned',
    stack: 'Tech Stack',
    other: 'Other Projects',
  },
  pt: {
    notFound: 'Projeto não encontrado',
    back: 'Voltar ao portfólio',
    caseStudy: 'Case Study',
    viewGithub: 'Ver no GitHub',
    liveDemo: 'Demo ao Vivo',
    role: 'Função',
    duration: 'Duração',
    team: 'Equipe',
    origin: 'Como surgiu',
    overview: 'Visão Geral',
    highlights: 'Destaques',
    learned: 'O que Aprendi',
    stack: 'Tecnologias',
    other: 'Outros Projetos',
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const fadeInDelay = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function ProjectPage() {
  const { slug } = useParams();
  const { lang } = useLang();
  const tx = tPage[lang];

  const project = projects.find((p) => p.slug === slug);

  // Campos traduzíveis
  const name       = project?.[`name_${lang}`]             || project?.name;
  const shortDesc  = project?.[`shortDescription_${lang}`] || project?.shortDescription;
  const origin     = project?.[`origin_${lang}`]           || project?.origin;
  const overview   = project?.[`overview_${lang}`]         || project?.overview;
  const highlights = project?.[`highlights_${lang}`]       || project?.highlights;
  const lessons    = project?.[`lessons_${lang}`]          || project?.lessons;
  const role       = project?.[`role_${lang}`]             || project?.role;
  const team       = project?.[`team_${lang}`]             || project?.team;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b0f1a] text-white flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="text-4xl font-black">{tx.notFound}</h1>
        <Link to="/" className="text-emerald-400 hover:text-white transition-colors flex items-center gap-2">
          <ArrowLeft size={16} /> {tx.back}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-400">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b0f1a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> {tx.back}
          </Link>
          <span className="font-black text-xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            MAC<span className="text-white">.</span>dev
          </span>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-36 pb-28">

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-emerald-500/20">
            {tx.caseStudy}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-6">
            {name}
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            {shortDesc}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-black uppercase px-3 py-1 bg-emerald-400/5 text-emerald-400 rounded border border-emerald-400/15"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-xl font-bold border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-200 text-sm"
            >
              <Github size={16} /> {tx.viewGithub}
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-5 py-3 rounded-xl font-bold border border-emerald-500/20 hover:bg-emerald-500/20 hover:-translate-y-1 transition-all duration-200 text-sm"
              >
                <Globe size={16} /> {tx.liveDemo} <ExternalLink size={12} />
              </a>
            )}
          </div>
        </motion.div>

        {/* ── Meta cards ────────────────────────────────────── */}
        <motion.div
          {...fadeInDelay(0.1)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {[
            { icon: <User size={16} className="text-blue-400" />,    label: tx.role,     value: role },
            { icon: <Clock size={16} className="text-emerald-400" />, label: tx.duration, value: project.duration },
            { icon: <Users size={16} className="text-purple-400" />,  label: tx.team,     value: team },
          ].map((meta) => (
            <div
              key={meta.label}
              className="p-5 bg-slate-800/30 rounded-2xl border border-white/5"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                {meta.icon} {meta.label}
              </div>
              <p className="text-white font-bold">{meta.value}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Main grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">

            {/* Origin story */}
            {origin && (
              <motion.section {...fadeInDelay(0.13)}>
                <h2 className="flex items-center gap-2 text-xl font-black mb-5 text-white">
                  <Lightbulb size={18} className="text-amber-400" /> {tx.origin}
                </h2>
                {/* Render each paragraph separated by \n\n */}
                <div className="space-y-4">
                  {origin.split('\n\n').map((para, i) => (
                    <p
                      key={i}
                      className="text-slate-400 leading-relaxed text-base md:text-lg"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Overview */}
            <motion.section {...fadeInDelay(0.15)}>
              <h2 className="flex items-center gap-2 text-xl font-black mb-5 text-white">
                <BookOpen size={18} className="text-blue-400" /> {tx.overview}
              </h2>
              <div className="space-y-4">
                {(overview || '').split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    className="text-slate-400 leading-relaxed text-base md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <motion.section {...fadeInDelay(0.2)}>
                <h2 className="flex items-center gap-2 text-xl font-black mb-5 text-white">
                  <CheckCircle2 size={18} className="text-emerald-400" /> {tx.highlights}
                </h2>
                <ul className="space-y-4">
                  {highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm md:text-base"
                    >
                      <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[10px] font-black text-emerald-400">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Lessons */}
            {lessons && (
              <motion.section {...fadeInDelay(0.25)}>
                <h2 className="flex items-center gap-2 text-xl font-black mb-5 text-white">
                  <Layers size={18} className="text-purple-400" /> {tx.learned}
                </h2>
                <blockquote className="border-l-2 border-emerald-500/40 pl-6 text-slate-400 italic leading-relaxed text-base md:text-lg">
                  {lessons}
                </blockquote>
              </motion.section>
            )}
          </div>

          {/* ── Sidebar ────────────────────────────────────── */}
          {project.stack && project.stack.length > 0 && (
            <motion.aside
              {...fadeInDelay(0.3)}
              className="lg:col-span-1"
            >
              <div className="sticky top-28 p-6 bg-slate-800/20 rounded-2xl border border-white/5">
                <h2 className="flex items-center gap-2 text-base font-black mb-6 text-white">
                  <Cpu size={16} className="text-blue-400" /> {tx.stack}
                </h2>
                <dl className="space-y-4">
                  {project.stack.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                        {item.label}
                      </dt>
                      <dd className="text-sm text-white font-medium">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.aside>
          )}
        </div>

        {/* ── Other projects ────────────────────────────────── */}
        <motion.section
          {...fadeInDelay(0.35)}
          className="mt-24 pt-12 border-t border-white/5"
        >
          <h2 className="text-xl font-black mb-8 text-slate-400">{tx.other}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group p-5 bg-slate-800/20 rounded-2xl border border-white/5 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-black text-white group-hover:text-emerald-400 transition-colors text-sm">
                      {p[`name_${lang}`] || p.name}
                    </h3>
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-emerald-400 transition-colors flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {p[`shortDescription_${lang}`] || p.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-black uppercase px-2 py-0.5 bg-slate-700/50 text-slate-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}