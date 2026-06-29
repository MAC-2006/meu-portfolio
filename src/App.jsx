import { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu,
  BookOpen, User, ChevronRight, Menu, X, Download, Server,
  GitBranch, LayoutDashboard, CheckCircle2, ZoomIn, Globe,
  MessageCircle, ArrowRight
} from 'lucide-react';

import { projects as staticProjects } from './projects';
import ProjectPage from './ProjectPage';

/* ─────────────────────────── Contexto de idioma ── */

export const LangContext = createContext();
export const useLang = () => useContext(LangContext);

/* ─────────────────────────── Traduções ── */

const t = {
  en: {
    badge: 'Software Developer',
    heroDesc1: 'developer focused on',
    heroDesc2: 'scalable architectures and enterprise integrations',
    heroDesc3: 'Turning complex business rules into high-performance software.',
    btnLinkedin: 'LinkedIn',
    btnWhatsapp: 'WhatsApp',
    btnCV: 'Download CV',
    btnProjects: 'Projects',

    navAbout: 'About',
    navSkills: 'Skills',
    navWorkflow: 'Workflow',
    navProjects: 'Projects',

    aboutTitle: '01. About Me',
    aboutP1: 'Started at',
    aboutP1b: ', going deeper at',
    aboutP1c: 'with a focus on Embedded Systems.',
    aboutP2: 'Day-to-day I work at',
    aboutP2b: ', tackling real production challenges and building integrations that optimise the core business of enterprise clients.',
    aboutP3: 'I write software grounded in',
    aboutP3b: '— which lets me absorb new languages and frameworks quickly in large-scale environments.',
    degreeTitle: 'Degree',
    degreeDesc: 'Embedded Systems — Fatec (2024–2026)',
    courseTitle: 'Technical Course',
    courseDesc: 'Web Development — Etec (2022–2023)',

    skillsTitle: '02. Skills',
    skillsSub: 'Technologies and concepts applied in production',
    skillBackend: 'Backend',
    skillFrontend: 'Frontend',
    skillDevops: 'DevOps',
    skillDomain: 'Domain',

    workflowTitle: '03. Methodology',
    workflowDesc: 'I work within a',
    workflowDesc2: 'methodology in an agile environment, focused on high-value deliveries.',
    workflowItems: ['Sprints & Daily stand-ups', 'Task management via ClickUp', 'Structured code review & Git Flow'],

    projectsTitle: '04. Projects',
    projectsSub: 'Synced via GitHub API (v3) · click any card to read more',
    projectsAll: 'All repos on GitHub',
    caseStudy: 'Case Study',

    footerCTA: "Let's",
    footerCTA2: 'talk?',
    footerBuilt: 'Built with',
  },
  pt: {
    badge: 'Desenvolvedor de Software',
    heroDesc1: 'desenvolvedor com foco em',
    heroDesc2: 'arquiteturas escaláveis e integrações corporativas',
    heroDesc3: 'Transformando regras de negócio complexas em software de alta performance.',
    btnLinkedin: 'LinkedIn',
    btnWhatsapp: 'WhatsApp',
    btnCV: 'Baixar CV',
    btnProjects: 'Projetos',

    navAbout: 'Sobre',
    navSkills: 'Habilidades',
    navWorkflow: 'Workflow',
    navProjects: 'Projetos',

    aboutTitle: '01. Sobre Mim',
    aboutP1: 'Nascido na',
    aboutP1b: ', aprofundando na',
    aboutP1c: 'em Sistemas Embarcados.',
    aboutP2: 'No dia a dia, atuo na',
    aboutP2b: ', enfrentando desafios reais em produção e criando integrações que otimizam o core business de clientes do setor corporativo.',
    aboutP3: 'Construo software com base sólida em',
    aboutP3b: ', o que me permite absorver rapidamente novas linguagens e frameworks em ambientes de grande escala.',
    degreeTitle: 'Graduação',
    degreeDesc: 'Sistemas Embarcados — Fatec (2024–2026)',
    courseTitle: 'Técnico',
    courseDesc: 'Informática para Internet — Etec (2022–2023)',

    skillsTitle: '02. Habilidades',
    skillsSub: 'Tecnologias e conceitos aplicados em produção',
    skillBackend: 'Backend',
    skillFrontend: 'Frontend',
    skillDevops: 'DevOps',
    skillDomain: 'Domínio',

    workflowTitle: '03. Metodologia',
    workflowDesc: 'Trabalho orientado à metodologia',
    workflowDesc2: 'em um ambiente ágil, focado em entregas de alto valor para o cliente.',
    workflowItems: ['Sprints e Dailys', 'Gestão via ClickUp', 'Code Review estruturado e Git Flow'],

    projectsTitle: '04. Projetos',
    projectsSub: 'Sincronizado via GitHub API (v3) · clique em um card para saber mais',
    projectsAll: 'Ver todos no GitHub',
    caseStudy: 'Ver Projeto',

    footerCTA: 'Vamos',
    footerCTA2: 'conversar?',
    footerBuilt: 'Desenvolvido com',
  },
};

/* ─────────────────────────── helpers ── */

const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-10 md:py-16">
    <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
      <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-emerald-500/50 blur-[2px] shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
    </div>
  </div>
);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

/* ─────────────────────────── Botão de idioma ── */

const LangToggle = () => {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-slate-800/60 hover:border-emerald-500/40 hover:bg-slate-700/60 transition-all duration-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white"
    >
      <Globe size={12} />
      {lang === 'en' ? 'PT' : 'EN'}
    </button>
  );
};

/* ─────────────────────────── Home ── */

const Home = () => {
  const { lang } = useLang();
  const tx = t[lang];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [githubRepos, setGithubRepos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/MAC-2006/repos?sort=updated&per_page=100')
      .then(res => (res.ok ? res.json() : []))
      .then(data => {
        if (Array.isArray(data)) setGithubRepos(data.filter(r => !r.fork));
      })
      .catch(() => setGithubRepos([]));
  }, []);

  // Merge defensivo: o GitHub enriquece os dados, mas NUNCA sobrescreve
  // github nem demo do staticProject com valores vazios/nulos.
  const displayProjects = staticProjects.map((sp) => {
    const gh = githubRepos.find(r => r.name === sp.slug);
    if (!gh) return sp;

    return {
      ...sp,
      name: gh.name.replace(/-/g, ' '),
      shortDescription: gh.description || sp.shortDescription,
      tags: gh.topics?.length ? gh.topics.slice(0, 5) : sp.tags,
      // Só substitui se o valor do GitHub for uma string não-vazia
      github: gh.html_url || sp.github,
      demo: gh.homepage || sp.demo,
    };
  });

  const menuItems = [
    { label: tx.navAbout,    href: '#about' },
    { label: tx.navSkills,   href: '#skills' },
    { label: tx.navWorkflow, href: '#workflow' },
    { label: tx.navProjects, href: '#projects' },
  ];

  const skills = [
    { title: tx.skillBackend,  icon: <Terminal size={20}/>, items: ['Python', 'Node.js', 'SQL/MariaDB', 'REST APIs', 'OOP'], color: 'emerald' },
    { title: tx.skillFrontend, icon: <Code2 size={20}/>,    items: ['React', 'JavaScript', 'Tailwind', 'HTML/CSS'],          color: 'blue' },
    { title: tx.skillDevops,   icon: <Server size={20}/>,   items: ['Docker', 'Git/GitHub', 'Linux', 'Nginx'],               color: 'purple' },
    { title: tx.skillDomain,   icon: <GitBranch size={20}/>,items: lang === 'en' ? ['ERP Systems','Business Rules','B2B Integrations'] : ['Sistemas ERP','Regras de Negócio','Integrações B2B'], color: 'orange' },
  ];

  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400 bg-[#0b0f1a] text-white overflow-x-hidden">

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0f1a]/95 backdrop-blur-lg p-4 cursor-zoom-out"
          >
            <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white bg-slate-800/80 p-3 rounded-full transition-colors">
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              src={selectedImage} alt="Expanded view"
              className="w-full max-w-5xl max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)]"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-[#0b0f1a]/90 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-black text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer relative z-[60]"
          >
            MAC<span className="text-white">.</span>dev
          </motion.span>

          <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-[0.2em]">
            {menuItems.map(item => (
              <a key={item.label} href={item.href} className="relative group text-slate-400 hover:text-white transition-colors">
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <LangToggle />
          </div>

          <div className="md:hidden flex items-center gap-3 relative z-[60]">
            <LangToggle />
            <button className="text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: '100vh' }} exit={{ opacity: 0, height: 0 }}
              className="fixed top-0 left-0 w-full bg-[#0b0f1a] z-50 flex flex-col justify-center items-center md:hidden"
            >
              <div className="flex flex-col gap-8 text-xl font-black uppercase tracking-[0.2em] text-center w-full px-6">
                {menuItems.map(item => (
                  <a
                    key={item.label} href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-emerald-400 py-4 border-b border-white/5 w-full transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero */}
      <header className="relative min-h-[100svh] flex items-center pt-28 pb-10 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/20 blur-[100px] md:blur-[150px] rounded-full -z-10" />
        <div className="max-w-6xl mx-auto w-full z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              {tx.badge}
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[1]">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                Miguel <br className="hidden md:block" />
              </motion.span>
              <span className="text-slate-600 break-words">Azevedo Costa</span>
            </h1>

            <p className="text-base md:text-2xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
              <span className="text-white font-semibold">Python</span> &amp;{' '}
              <span className="text-white font-semibold">JavaScript</span>{' '}
              {tx.heroDesc1}{' '}
              <span className="text-emerald-400 font-semibold italic">{tx.heroDesc2}</span>.{' '}
              {tx.heroDesc3}
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <a href="https://www.linkedin.com/in/miguel-costa-051253249/" target="_blank" rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-blue-600/40 transition-all duration-300 w-full md:w-auto">
                <Linkedin size={20} /> {tx.btnLinkedin}
              </a>
              <a href="https://wa.me/5511985857366" target="_blank" rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-emerald-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 hover:-translate-y-1 hover:shadow-emerald-600/40 transition-all duration-300 w-full md:w-auto">
                <MessageCircle size={20} /> {tx.btnWhatsapp}
              </a>
              <a 
                href={lang === 'pt' ? "/Currículo Miguel.pdf" : "/Resume Miguel.pdf"} 
                download
                className="flex justify-center items-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-4 rounded-xl font-bold border border-emerald-500/20 hover:bg-emerald-500/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 w-full md:w-auto"
              >
                <Download size={20} /> {tx.btnCV}
              </a>
              <a href="#projects"
                className="flex justify-center items-center gap-2 bg-slate-800 text-white px-6 py-4 rounded-xl font-bold border border-white/5 hover:bg-slate-700 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 w-full md:w-auto">
                {tx.btnProjects} <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">

        {/* Sobre */}
        <section id="about" className="scroll-mt-24 pt-10 md:pt-20">
          <motion.div {...fadeInUp} className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-3">
                <User className="text-emerald-400" size={28} /> {tx.aboutTitle}
              </h2>
              <div className="space-y-4 text-slate-400 text-sm md:text-lg leading-relaxed">
                <p>
                  {tx.aboutP1} <span className="text-white">Etec</span>{tx.aboutP1b}{' '}
                  <span className="text-white font-bold">Fatec</span>{tx.aboutP1c}
                </p>
                <p>
                  {tx.aboutP2} <span className="text-emerald-400 font-bold">Trezzuri Tecnologia</span>{tx.aboutP2b}
                </p>
                <p>
                  {tx.aboutP3} <span className="text-white font-bold">Lógica, SQL e Design Patterns</span>{tx.aboutP3b}
                </p>
              </div>
            </div>
            <div className="w-full grid gap-4">
              {[
                { icon: <BookOpen className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={24}/>, title: tx.degreeTitle, desc: tx.degreeDesc },
                { icon: <Terminal className="text-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={24}/>, title: tx.courseTitle, desc: tx.courseDesc },
              ].map(card => (
                <div key={card.title} className="group p-6 md:p-8 bg-slate-800/30 rounded-2xl border border-white/5 hover:border-emerald-500/30 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] transition-all duration-300 cursor-default">
                  {card.icon}
                  <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-white transition-colors">{card.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm italic">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* Skills */}
        <section id="skills" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-3 flex items-center gap-3 md:justify-center">
              <Cpu className="text-blue-400" size={28} /> {tx.skillsTitle}
            </h2>
            <p className="text-slate-500 text-sm md:text-base md:text-center">{tx.skillsSub}</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map(cat => (
              <motion.div key={cat.title} variants={fadeInUp}
                className="group p-6 bg-slate-800/20 rounded-2xl border border-white/5 flex flex-col h-full hover:border-emerald-500/30 hover:-translate-y-2 hover:bg-slate-800/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 cursor-default">
                <div className={`mb-4 text-${cat.color}-400 group-hover:scale-110 transition-transform duration-300 origin-left`}>{cat.icon}</div>
                <h3 className="text-lg font-bold mb-4 italic group-hover:text-white transition-colors">{cat.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map(i => (
                    <span key={i} className="px-2 py-1 bg-slate-900 rounded text-[10px] md:text-xs text-slate-400 border border-white/5 group-hover:border-white/10 transition-colors">{i}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <SectionDivider />

        {/* Workflow */}
        <section id="workflow" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="w-full order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-3">
                <LayoutDashboard className="text-purple-400" size={28} /> {tx.workflowTitle}
              </h2>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-6">
                {tx.workflowDesc} <span className="text-white font-bold">Scrum</span> {tx.workflowDesc2}
              </p>
              <ul className="space-y-3">
                {tx.workflowItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                    <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full order-1 md:order-2 group cursor-zoom-in hover:-translate-y-2 transition-transform duration-500"
              onClick={() => setSelectedImage('/clickup-print.png')}>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f1a] p-1.5 shadow-xl relative group-hover:border-emerald-500/30 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500">
                <img src="/clickup-print.png" alt="ClickUp Workflow"
                  className="w-full h-auto rounded-lg opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                  <ZoomIn size={48} className="text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* Projects */}
        <section id="projects" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-2 flex items-center gap-3">
                <Code2 className="text-emerald-400" size={28} /> {tx.projectsTitle}
              </h2>
              <p className="text-slate-500 text-sm">{tx.projectsSub}</p>
            </div>
            <a href="https://github.com/MAC-2006" target="_blank" rel="noopener noreferrer"
              className="text-xs font-black uppercase text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
              {tx.projectsAll} <ExternalLink size={14} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map(project => (
              <motion.div key={project.slug} variants={fadeInUp}
                className="group p-6 md:p-8 bg-slate-800/20 rounded-2xl border border-white/5 flex flex-col relative overflow-hidden hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] transition-all duration-300">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/0 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500" />
                <h3 className="text-xl font-black mb-3 text-white capitalize group-hover:text-emerald-400 transition-colors">{project[`name_${lang}`] || project.name}</h3>
                <p className="text-slate-400 text-xs md:text-sm mb-6 flex-grow">{project[`shortDescription_${lang}`] || project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase px-2 py-1 bg-emerald-400/5 text-emerald-400 rounded border border-emerald-400/10 group-hover:bg-emerald-400/10 transition-colors">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-6 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-black uppercase text-white hover:text-emerald-400 z-10 transition-colors"
                      onClick={e => e.stopPropagation()}>
                      GitHub <Github size={14} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-400 hover:text-white z-10 transition-colors"
                      onClick={e => e.stopPropagation()}>
                      Demo <Globe size={14} />
                    </a>
                  )}
                  <Link to={`/projects/${project.slug}`}
                    className="ml-auto flex items-center gap-1 text-[10px] font-black uppercase text-slate-500 hover:text-emerald-400 z-10 transition-colors">
                    {tx.caseStudy} <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 md:pt-40 text-center relative mt-10">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-black">
              {tx.footerCTA} <span className="text-slate-700">{tx.footerCTA2}</span>
            </h2>
            <div className="flex justify-center gap-4 md:gap-8 pb-6">
              {[
                { icon: <Mail size={20} />, href: 'mailto:miguelazecosta@gmail.com' },
                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/miguel-costa-051253249/' },
                { icon: <Github size={20} />, href: 'https://github.com/MAC-2006' },
                { icon: <MessageCircle size={20} />, href: 'https://wa.me/5511985857366' },
              ].map(social => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-slate-800/50 rounded-xl border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(16,185,129,0.15)] transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="pt-10 border-t border-white/5 mt-10">
              <p className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-600 mb-2">
                {tx.footerBuilt} <span className="text-emerald-500/50">React &amp; Tailwind</span>
              </p>
              <p className="text-[10px] md:text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Miguel Azevedo Costa.
              </p>
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};

/* ─────────────────────────── Root ── */

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </HashRouter>
    </LangContext.Provider>
  );
}