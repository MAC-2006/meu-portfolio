import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, BookOpen, User, ChevronRight, Menu, X, Download, Server, GitBranch, LayoutDashboard, CheckCircle2, ZoomIn, Globe } from 'lucide-react';

// Linha divisória brilhante
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
    // Busca repositórios - DICA: Adicione "portfolio" como tópico no GitHub para filtrar se quiser
    fetch('https://api.github.com/users/MAC-2006/repos?sort=updated&per_page=6')
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        if (Array.isArray(data)) {
          // Filtra para remover forks e garantir que apareçam os melhores
          const mainRepos = data.filter(repo => !repo.fork).slice(0, 3);
          setGithubRepos(mainRepos);
        }
      })
      .catch(err => {
        console.error("Erro API GitHub", err);
        setGithubRepos([]);
      });
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
    { 
      name: "Sistemas ERP & Automação", 
      description: "Desenvolvimento de módulos robustos e automação de fluxos corporativos na Trezzuri.", 
      topics: ["Python", "MariaDB", "Arquitetura"], 
      html_url: "https://github.com/MAC-2006",
      homepage: "https://meu-portfolio-tawny-iota.vercel.app/" 
    },
    { 
      name: "Integrador de APIs REST", 
      description: "Pontes de dados seguras entre sistemas distintos via Webhooks.", 
      topics: ["Node.js", "Express", "APIs"], 
      html_url: "https://github.com/MAC-2006",
      homepage: null 
    },
    { 
      name: "IoT & Sistemas Embarcados", 
      description: "Monitoramento industrial e integração hardware-software (Fatec).", 
      topics: ["C++", "ESP32", "MQTT"], 
      html_url: "https://github.com/MAC-2006",
      homepage: null 
    }
  ];

  const displayProjects = githubRepos.length > 0 ? githubRepos : fallbackProjects;
  const menuItems = ['Sobre', 'Habilidades', 'Workflow', 'Projetos'];

  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400 bg-[#0b0f1a] text-white overflow-x-hidden">
      
      {/* MODAL IMAGEM LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0f1a]/95 backdrop-blur-lg p-4 cursor-zoom-out"
          >
            <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white bg-slate-800/80 p-3 rounded-full transition-colors">
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage} 
              alt="Ampliada" 
              className="w-full max-w-5xl max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.15)]"
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
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="font-black text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer relative z-[60]"
          >
            MAC<span className="text-white">.</span>dev
          </motion.span>
          
          <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-[0.2em]">
            {menuItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-slate-400 hover:text-white transition-colors">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white p-2 relative z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Dropdown Mobile */}
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
                    className="text-slate-300 hover:text-emerald-400 py-4 border-b border-white/5 w-full transition-colors"
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
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Software Developer
            </span>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[1]">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                Miguel <br className="hidden md:block" />
              </motion.span>
              <span className="text-slate-600 break-words">Azevedo Costa</span>
            </h1>

            <p className="text-base md:text-2xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
              Desenvolvedor <span className="text-white font-semibold">Python</span> e 
              <span className="text-white font-semibold"> JavaScript</span> com foco em 
              <span className="text-emerald-400 font-semibold italic"> arquiteturas escaláveis e integrações corporativas</span>. 
              Transformando regras de negócio complexas em software de alta performance.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <a 
                href="https://www.linkedin.com/in/miguel-costa-051253249/" target="_blank" rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-blue-600/40 transition-all duration-300 w-full md:w-auto"
              >
                <Linkedin size={20}/> LinkedIn
              </a>
              
              <a 
                href="/curriculo.pdf" download
                className="flex justify-center items-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-4 rounded-xl font-bold border border-emerald-500/20 hover:bg-emerald-500/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 w-full md:w-auto"
              >
                <Download size={20}/> Baixar CV
              </a>

              <a 
                href="#projetos"
                className="flex justify-center items-center gap-2 bg-slate-800 text-white px-6 py-4 rounded-xl font-bold border border-white/5 hover:bg-slate-700 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 w-full md:w-auto"
              >
                Projetos <ChevronRight size={20}/>
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        
        {/* SOBRE MIM */}
        <section id="sobre" className="scroll-mt-24 pt-10 md:pt-20">
          <motion.div {...fadeInUp} className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-3">
                <User className="text-emerald-400" size={28} /> 01. Sobre Mim
              </h2>
              <div className="space-y-4 text-slate-400 text-sm md:text-lg leading-relaxed">
                <p>Nascido na <span className="text-white">Etec</span>, aprofundando na <span className="text-white font-bold">Fatec</span> em Sistemas Embarcados.</p>
                <p>No dia a dia, atuo na <span className="text-emerald-400 font-bold">Trezzuri Tecnologia</span>, enfrentando desafios reais em produção e criando integrações que otimizam o core business de clientes do setor corporativo.</p>
                <p>Construo software com uma base sólida em <span className="text-white font-bold">Lógica, SQL e Design Patterns</span>, o que me permite absorver rapidamente novas linguagens e frameworks em ambientes de grande escala.</p>
              </div>
            </div>
            
            <div className="w-full grid gap-4">
              <div className="group p-6 md:p-8 bg-slate-800/30 rounded-2xl border border-white/5 hover:border-emerald-500/30 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] transition-all duration-300 cursor-default">
                <BookOpen className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-white transition-colors">Graduação</h3>
                <p className="text-slate-400 text-xs md:text-sm italic">Sistemas Embarcados - Fatec (24-26)</p>
              </div>
              <div className="group p-6 md:p-8 bg-slate-800/30 rounded-2xl border border-white/5 hover:border-emerald-500/30 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] transition-all duration-300 cursor-default">
                <Terminal className="text-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-white transition-colors">Técnico</h3>
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
            <p className="text-slate-500 text-sm md:text-base md:text-center">Tecnologias e conceitos aplicados em produção</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { title: "Backend", icon: <Terminal size={20}/>, items: ["Python", "Node.js", "SQL/MariaDB", "APIs REST", "POO"], color: "emerald" },
              { title: "Frontend", icon: <Code2 size={20}/>, items: ["React", "JavaScript", "Tailwind", "HTML/CSS"], color: "blue" },
              { title: "DevOps", icon: <Server size={20}/>, items: ["Docker", "Git/GitHub", "Linux", "Nginx"], color: "purple" },
              { title: "Soft Skills", icon: <GitBranch size={20}/>, items: ["Sistemas ERP", "Regras de Negócio", "Integrações B2B"], color: "orange" }
            ].map(cat => (
              <motion.div 
                key={cat.title} 
                variants={fadeInUp} 
                className="group p-6 bg-slate-800/20 rounded-2xl border border-white/5 flex flex-col h-full hover:border-emerald-500/30 hover:-translate-y-2 hover:bg-slate-800/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 cursor-default"
              >
                <div className={`mb-4 text-${cat.color}-400 group-hover:scale-110 transition-transform duration-300 origin-left`}>{cat.icon}</div>
                <h3 className="text-lg font-bold mb-4 italic group-hover:text-white transition-colors">{cat.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map(i => (
                    <span key={i} className="px-2 py-1 bg-slate-900 rounded text-[10px] md:text-xs text-slate-400 border border-white/5 group-hover:border-white/10 transition-colors">
                      {i}
                    </span>
                  ))}
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
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-6">Trabalho orientado à metodologia <span className="text-white font-bold">Scrum</span> em um ambiente ágil, focado em entregas de alto valor para o cliente.</p>
              <ul className="space-y-3">
                {["Sprints e Dailys", "Gestão via ClickUp", "Code Review estruturado e Git Flow"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                    <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full order-1 md:order-2 group cursor-zoom-in hover:-translate-y-2 transition-transform duration-500" onClick={() => setSelectedImage('/clickup-print.png')}>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0f1a] p-1.5 shadow-xl relative group-hover:border-emerald-500/30 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500">
                <img src="/clickup-print.png" alt="ClickUp Workflow" className="w-full h-auto rounded-lg opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                  <ZoomIn size={48} className="text-white drop-shadow-lg" />
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
              <p className="text-slate-500 text-sm">Sincronizado via GitHub API (v3)</p>
            </div>
            <a href="https://github.com/MAC-2006" target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
              Ver todos no GitHub <ExternalLink size={14}/>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map(project => (
              <motion.div 
                key={project.name} 
                variants={fadeInUp} 
                className="group p-6 md:p-8 bg-slate-800/20 rounded-2xl border border-white/5 flex flex-col relative overflow-hidden hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(16,185,129,0.1)] transition-all duration-300"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/0 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500" />
                
                <h3 className="text-xl font-black mb-3 text-white capitalize group-hover:text-emerald-400 transition-colors">
                  {project.name.replace(/-/g, ' ')}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm mb-6 flex-grow">
                  {project.description || "Explorando novas fronteiras tecnológicas e arquiteturas de software."}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {(project.topics?.length > 0 ? project.topics.slice(0,3) : ["Dev", "Software"]).map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase px-2 py-1 bg-emerald-400/5 text-emerald-400 rounded border border-emerald-400/10 group-hover:bg-emerald-400/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 mt-auto">
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase text-white hover:text-emerald-400 z-10 transition-colors">
                    GitHub <Github size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  
                  {project.homepage && (
                    <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-400 hover:text-white z-10 transition-colors">
                      Demo <Globe size={14} className="group-hover:rotate-12 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 md:pt-40 text-center relative mt-10">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-black">Vamos <span className="text-slate-700">conversar?</span></h2>
            
            <div className="flex justify-center gap-4 md:gap-8 pb-6">
              {[
                { icon: <Mail size={20}/>, href: "mailto:miguelazecosta@gmail.com" },
                { icon: <Linkedin size={20}/>, href: "https://www.linkedin.com/in/miguel-costa-051253249/" },
                { icon: <Github size={20}/>, href: "https://github.com/MAC-2006" }
              ].map(social => (
                <a 
                  key={social.href} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-800/50 rounded-xl border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(16,185,129,0.15)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="pt-10 border-t border-white/5 mt-10">
              <p className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-600 mb-2">
                Desenvolvido com <span className="text-emerald-500/50">React & Tailwind</span>
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

export default App;