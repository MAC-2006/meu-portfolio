import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, BookOpen, User, ChevronRight, Menu, X, Download, Server, GitBranch, LayoutDashboard, CheckCircle2, ZoomIn } from 'lucide-react';

const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-10 md:py-16">
    <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
      <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-emerald-500/50 blur-[2px] shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
    </div>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [githubRepos, setGithubRepos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/MAC-2006/repos?sort=updated&per_page=3')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setGithubRepos(data);
      })
      .catch(err => console.error("Erro API GitHub", err));
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  const fallbackProjects = [
    { name: "Especialista Frappe", description: "Automação de fluxos com Frappe.", topics: ["Python", "MariaDB", "Frappe"], html_url: "#" },
    { name: "APIs REST", description: "Pontes de dados via Webhooks.", topics: ["Node.js", "Express", "APIs"], html_url: "#" },
    { name: "IoT Embarcados", description: "Monitoramento industrial Fatec.", topics: ["C++", "ESP32", "MQTT"], html_url: "#" }
  ];

  const displayProjects = githubRepos.length > 0 ? githubRepos : fallbackProjects;
  const menuItems = ['Sobre', 'Habilidades', 'Workflow', 'Projetos'];

  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400 bg-[#0b0f1a] text-white overflow-x-hidden">
      
      {/* MODAL IMAGEM */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0f1a]/95 backdrop-blur-lg p-4 cursor-zoom-out"
          >
            <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white bg-slate-800/80 p-3 rounded-full">
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage} 
              alt="Ampliada" 
              className="w-full max-w-5xl max-h-[85vh] object-contain rounded-xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-[#0b0f1a]/90 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo(0, 0)}
            className="font-black text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer relative z-[60]"
          >
            MAC<span className="text-white">.</span>dev
          </motion.span>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-[0.2em]">
            {menuItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-slate-400 hover:text-white">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Botão Mobile */}
          <button 
            className="md:hidden text-white p-2 relative z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Dropdown Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed top-0 left-0 w-full bg-[#0b0f1a] z-50 flex flex-col justify-center items-center md:hidden"
            >
              <div className="flex flex-col gap-8 text-xl font-black uppercase tracking-[0.2em] text-center w-full px-6">
                {menuItems.map(item => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-emerald-400 py-4 border-b border-white/5 w-full"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO SECTION */}
      <header className="relative min-h-[100svh] flex items-center pt-28 pb-10 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/20 blur-[100px] md:blur-[150px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto w-full z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-emerald-500/20">
              Junior Fullstack Developer
            </span>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[1]">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                Miguel <br className="hidden md:block" />
              </motion.span>
              <span className="text-slate-600 break-words">Azevedo Costa</span>
            </h1>

            <p className="text-base md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Desenvolvedor focado em <span className="text-white font-semibold">Python</span>, 
              <span className="text-white font-semibold"> JavaScript</span> e arquiteturas para 
              <span className="text-emerald-400 font-semibold italic"> ERPNext/Frappe</span>.
            </p>
            
            {/* BOTÕES: 100% largura no celular, lado a lado no PC */}
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/miguel-costa-051253249/" target="_blank" rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 w-full md:w-auto"
              >
                <Linkedin size={20}/> LinkedIn
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="/Currículo Miguel.pdf" download
                className="flex justify-center items-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-4 rounded-xl font-bold border border-emerald-500/20 w-full md:w-auto"
              >
                <Download size={20}/> Baixar CV
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="#projetos"
                className="flex justify-center items-center gap-2 bg-slate-800 text-white px-6 py-4 rounded-xl font-bold border border-white/5 w-full md:w-auto"
              >
                Projetos <ChevronRight size={20}/>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-32">
        
        {/* SOBRE MIM */}
        <section id="sobre" className="scroll-mt-24 pt-10 md:pt-20">
          <motion.div {...fadeInUp} className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-3">
                <User className="text-emerald-400" size={28} /> 01. Sobre Mim
              </h2>
              <div className="space-y-4 text-slate-400 text-sm md:text-lg leading-relaxed">
                <p>Nascido na <span className="text-white">Etec</span>, aprofundando na <span className="text-white font-bold">Fatec</span> em Sistemas Embarcados.</p>
                <p>Atuo na <span className="text-emerald-400 font-bold">Trezzuri Tecnologia</span>, enfrentando desafios reais com Frappe Framework e otimizando o core business de clientes.</p>
              </div>
            </div>
            
            <div className="w-full grid gap-4">
              <div className="p-6 md:p-8 bg-slate-800/30 rounded-2xl border border-white/5">
                <BookOpen className="text-blue-400 mb-3" size={24} />
                <h3 className="text-lg md:text-xl font-bold mb-1">Graduação</h3>
                <p className="text-slate-400 text-xs md:text-sm italic">Sistemas Embarcados - Fatec (24-26)</p>
              </div>
              <div className="p-6 md:p-8 bg-slate-800/30 rounded-2xl border border-white/5">
                <Terminal className="text-emerald-400 mb-3" size={24} />
                <h3 className="text-lg md:text-xl font-bold mb-1">Técnico</h3>
                <p className="text-slate-400 text-xs md:text-sm italic">Informática para Internet - Etec (22-23)</p>
              </div>
            </div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* HABILIDADES */}
        <section id="habilidades" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-3 flex items-center gap-3 md:justify-center">
              <Cpu className="text-blue-400" size={28} /> 02. Habilidades
            </h2>
            <p className="text-slate-500 text-sm md:text-base md:text-center">Tecnologias do dia a dia</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { title: "Backend", icon: <Terminal size={20}/>, items: ["Python", "Frappe", "Node.js", "SQL/MariaDB", "APIs"], color: "emerald" },
              { title: "Frontend", icon: <Code2 size={20}/>, items: ["React", "JavaScript", "Tailwind", "HTML/CSS"], color: "blue" },
              { title: "DevOps", icon: <Server size={20}/>, items: ["Docker", "Git/GitHub", "Linux", "Nginx"], color: "purple" },
              { title: "Soft Skills", icon: <GitBranch size={20}/>, items: ["ERP", "Regras de Negócio", "Integrações"], color: "orange" }
            ].map(cat => (
              <motion.div key={cat.title} variants={fadeInUp} className="p-6 bg-slate-800/20 rounded-2xl border border-white/5 flex flex-col h-full">
                <div className={`mb-4 text-${cat.color}-400`}>{cat.icon}</div>
                <h3 className="text-lg font-bold mb-4 italic">{cat.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map(i => <span key={i} className="px-2 py-1 bg-slate-900 rounded text-[10px] md:text-xs text-slate-400 border border-white/5">{i}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <SectionDivider />

        {/* WORKFLOW */}
        <section id="workflow" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="w-full order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-3">
                <LayoutDashboard className="text-purple-400" size={28} /> 03. Metodologia
              </h2>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-6">Trabalho orientado à metodologia <span className="text-white font-bold">Scrum</span>, garantindo entregas contínuas.</p>
              <ul className="space-y-3">
                {["Sprints e Dailys", "Gestão via ClickUp", "Code Review estruturado"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                    <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full order-1 md:order-2 group cursor-zoom-in" onClick={() => setSelectedImage('/clickup-print.png')}>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f1a] p-1.5 shadow-xl relative">
                <img src="/clickup-print.png" alt="ClickUp" className="w-full h-auto rounded-lg opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={40} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* PROJETOS */}
        <section id="projetos" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-2 flex items-center gap-3">
                <Code2 className="text-emerald-400" size={28} /> 04. Projetos
              </h2>
              <p className="text-slate-500 text-sm">Sincronizado com o GitHub</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map(project => (
              <motion.div key={project.name} variants={fadeInUp} className="p-6 md:p-8 bg-slate-800/20 rounded-2xl border border-white/5 flex flex-col">
                <h3 className="text-xl font-black mb-3 text-white capitalize">{project.name.replace(/-/g, ' ')}</h3>
                <p className="text-slate-400 text-xs md:text-sm mb-6 flex-grow">{project.description || "Projeto focado em automação."}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.topics?.slice(0,3).map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase px-2 py-1 bg-emerald-400/10 text-emerald-400 rounded">{tag}</span>
                  ))}
                </div>
                <a href={project.html_url} target="_blank" className="flex items-center gap-2 text-xs font-black uppercase text-white hover:text-emerald-400 mt-auto">
                  Repositório <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 md:pt-40 text-center relative mt-10">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-black">Vamos <span className="text-slate-700">conversar?</span></h2>
            <div className="flex justify-center gap-4 md:gap-8 pb-10">
              {[
                { icon: <Mail size={20}/>, href: "mailto:miguelazecosta@gmail.com" },
                { icon: <Linkedin size={20}/>, href: "https://www.linkedin.com/in/miguel-costa-051253249/" },
                { icon: <Github size={20}/>, href: "https://github.com/MAC-2006" }
              ].map(social => (
                <a key={social.href} href={social.href} target="_blank" className="p-4 bg-slate-800/50 rounded-xl border border-white/5 hover:text-emerald-400">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};

export default App;