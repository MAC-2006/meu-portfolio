import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, BookOpen, User, ChevronRight, Menu, X, Download, Server, GitBranch, LayoutDashboard, CheckCircle2, ZoomIn } from 'lucide-react';

// Componente do Separador Visual (Para reutilizar entre as seções)
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
  const [selectedImage, setSelectedImage] = useState(null); // Estado para a imagem ampliada

  useEffect(() => {
    fetch('https://api.github.com/users/MAC-2006/repos?sort=updated&per_page=3')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setGithubRepos(data);
        }
      })
      .catch(err => console.error("Erro ao buscar projetos do GitHub:", err));
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  const fallbackProjects = [
    {
      name: "Especialista Frappe & ERPNext",
      description: "Desenvolvimento de módulos robustos e automação de fluxos empresariais utilizando o ecossistema Frappe.",
      topics: ["Python", "JavaScript", "MariaDB", "Frappe"],
      html_url: "https://github.com/MAC-2006/portfolio-dev"
    },
    {
      name: "Integrador de APIs REST",
      description: "Construção de pontes de dados entre sistemas distintos, focando em performance e segurança via Webhooks.",
      topics: ["Node.js", "Express", "PostgreSQL", "APIs"],
      html_url: "https://github.com/MAC-2006/portfolio-dev"
    },
    {
      name: "IoT / Sistemas Embarcados",
      description: "Projetos de hardware e software integrado para monitoramento industrial desenvolvidos na Fatec.",
      topics: ["C++", "ESP32", "MQTT", "Arduino"],
      html_url: "https://github.com/MAC-2006/portfolio-dev"
    }
  ];

  const displayProjects = githubRepos.length > 0 ? githubRepos : fallbackProjects;
  const menuItems = ['Sobre', 'Habilidades', 'Workflow', 'Projetos'];

  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400 bg-[#0b0f1a] text-white overflow-x-hidden">
      
      {/* MODAL DE IMAGEM AMPLIADA (LIGHTBOX) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0f1a]/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-slate-800/50 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage} 
              alt="Imagem ampliada" 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Evita fechar se clicar na própria imagem
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVEGAÇÃO FIXA */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-[#0b0f1a]/90 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo(0, 0)}
            className="font-black text-xl md:text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer z-50"
          >
            MAC<span className="text-white">.</span>dev
          </motion.span>
          
          <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-[0.2em]">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="relative group text-slate-400 hover:text-white transition-colors"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-[#0b0f1a]/95 backdrop-blur-2xl border-b border-white/5 md:hidden shadow-2xl"
            >
              <div className="flex flex-col px-8 py-8 gap-6 text-sm font-black uppercase tracking-[0.2em] text-center">
                {menuItems.map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-emerald-400 transition-colors py-4 border-b border-white/5"
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
      <header className="relative min-h-screen flex items-center pt-24 md:pt-20 px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/20 blur-[100px] md:blur-[150px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto w-full z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block py-1 px-3 md:px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-emerald-500/20"
            >
              Junior Fullstack Developer
            </motion.span>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.1]">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Miguel <br />
              </motion.span>
              <span className="text-slate-600">Azevedo Costa</span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Desenvolvedor focado em <span className="text-white font-semibold">Python</span>, 
              <span className="text-white font-semibold"> JavaScript</span> e arquiteturas para 
              <span className="text-emerald-400 font-semibold italic"> ERPNext/Frappe</span>. 
              Unindo software de gestão corporativa e sistemas embarcados.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/miguel-costa-051253249/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 w-full sm:w-auto"
              >
                <Linkedin size={20}/> LinkedIn
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/curriculo.pdf" 
                download
                className="flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-4 rounded-2xl font-bold border border-emerald-500/20 hover:bg-emerald-500/20 transition-all w-full sm:w-auto"
              >
                <Download size={20}/> Baixar CV
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projetos"
                className="flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-4 rounded-2xl font-bold border border-white/5 hover:bg-slate-700 transition-all w-full sm:w-auto"
              >
                Projetos <ChevronRight size={20}/>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Uso de Py-20 ao invés de Space-y para os separadores funcionarem perfeitamente */}
      <main className="max-w-6xl mx-auto px-6 pb-32">
        
        {/* 01. SEÇÃO SOBRE MIM */}
        <section id="sobre" className="scroll-mt-24 pt-10 md:pt-20">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="hidden md:block absolute -left-4 -top-4 w-20 h-20 border-l-4 border-t-4 border-emerald-500/30" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 flex items-center gap-4">
                <User className="text-emerald-400" size={32} /> 01. Sobre Mim
              </h2>
              <div className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed">
                <p>
                  Minha paixão pela tecnologia nasceu na <span className="text-white">Etec</span>, onde aprendi a transformar código em interfaces funcionais. Hoje, busco aprofundar esse conhecimento na <span className="text-white font-bold">Fatec</span>, explorando a fundo o desenvolvimento de Sistemas Embarcados.
                </p>
                <p>
                  No dia a dia, atuo na <span className="text-emerald-400 font-bold">Trezzuri Tecnologia</span>, enfrentando desafios reais com o Frappe Framework e criando integrações que otimizam o core business de nossos clientes.
                </p>
              </div>
            </div>
            
            <div className="grid gap-4 md:gap-6">
              <div className="p-6 md:p-8 bg-slate-800/30 rounded-3xl border border-white/5 backdrop-blur-sm shadow-xl hover:border-white/10 transition-colors">
                <BookOpen className="text-blue-400 mb-4" size={24} />
                <h3 className="text-lg md:text-xl font-bold mb-2">Graduação</h3>
                <p className="text-slate-400 text-sm italic">Sistemas Embarcados - Fatec (2024-2026)</p>
              </div>
              <div className="p-6 md:p-8 bg-slate-800/30 rounded-3xl border border-white/5 backdrop-blur-sm shadow-xl hover:border-white/10 transition-colors">
                <Terminal className="text-emerald-400 mb-4" size={24} />
                <h3 className="text-lg md:text-xl font-bold mb-2">Técnico</h3>
                <p className="text-slate-400 text-sm italic">Informática para Internet - Etec (2022-2023)</p>
              </div>
            </div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* 02. SEÇÃO HABILIDADES */}
        <section id="habilidades" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 flex justify-center items-center gap-4">
              <Cpu className="text-blue-400" size={32} /> 02. Habilidades
            </h2>
            <p className="text-slate-500 text-sm md:text-base">Tecnologias e conceitos que domino no dia a dia</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Backend", icons: <Terminal size={24}/>, items: ["Python", "Frappe Framework", "Node.js", "SQL/MariaDB", "APIs REST"], color: "emerald" },
              { title: "Frontend", icons: <Code2 size={24}/>, items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"], color: "blue" },
              { title: "Cloud & DevOps", icons: <Server size={24}/>, items: ["Docker", "Git/GitHub", "Linux", "Nginx"], color: "purple" },
              { title: "Soft Skills", icons: <GitBranch size={24}/>, items: ["Sistemas ERP", "Regras de Negócio", "Integrações B2B", "Resolução de Problemas"], color: "orange" }
            ].map((cat) => (
              <motion.div 
                key={cat.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 bg-slate-800/20 rounded-3xl border border-white/5 hover:border-white/20 transition-all flex flex-col h-full shadow-lg hover:shadow-xl"
              >
                <div className={`mb-4 md:mb-6 text-${cat.color}-400`}>{cat.icons}</div>
                <h3 className="text-lg md:text-xl font-bold mb-4 italic">{cat.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map(item => (
                    <span key={item} className="px-2 py-1 md:px-3 md:py-1.5 bg-slate-900 rounded-lg text-[10px] md:text-xs font-bold text-slate-400 border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <SectionDivider />

        {/* 03. SEÇÃO: WORKFLOW & METODOLOGIA */}
        <section id="workflow" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 flex items-center gap-4">
                <LayoutDashboard className="text-purple-400" size={32} /> 03. Metodologia
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                Em desenvolvimento corporativo e integrações complexas, a organização do projeto é tão crítica quanto o código. Trabalho orientado à metodologia <span className="text-white font-bold">Scrum</span>, garantindo entregas contínuas e comunicação transparente.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Planejamento de Sprints e Daily meetings",
                  "Gestão de tarefas, bugs e épicos via ClickUp",
                  "Versionamento semântico e Code Review estruturado"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Imagem do ClickUp CLICÁVEL */}
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              <div 
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a] p-2 shadow-2xl cursor-zoom-in group"
                onClick={() => setSelectedImage('/clickup-print.png')}
              >
                <div className="flex gap-2 px-2 pb-2 pt-1 border-b border-white/5 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                </div>
                
                <div className="relative">
                  <img 
                    src="/clickup-print.png" 
                    alt="Meu fluxo de trabalho no ClickUp" 
                    className="w-full h-auto rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Overlay Escuro e Ícone de Lupa que aparece no Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <ZoomIn size={48} className="text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* 04. SEÇÃO PROJETOS */}
        <section id="projetos" className="scroll-mt-24">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-2 flex items-center gap-4">
                <Code2 className="text-emerald-400" size={32} /> 04. Projetos
              </h2>
              <p className="text-slate-500 text-sm md:text-base">Sincronizado automaticamente com meu GitHub</p>
            </div>
            <a href="https://github.com/MAC-2006" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm font-bold hover:underline flex items-center gap-2">
              Ver todos repositórios <ExternalLink size={16}/>
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayProjects.map((project) => (
              <motion.div
                key={project.name}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group p-6 md:p-8 bg-slate-800/20 rounded-3xl border border-white/5 flex flex-col relative overflow-hidden transition-all hover:bg-slate-800/40 hover:border-emerald-500/30"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/20 transition-all" />
                
                <h3 className="text-xl md:text-2xl font-black mb-3 group-hover:text-emerald-400 transition-colors capitalize">
                  {project.name.replace(/-/g, ' ')}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {project.description || "Projeto desenvolvido focado em integrações e automação de sistemas."}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.topics && project.topics.length > 0) ? (
                     project.topics.slice(0,3).map(tag => (
                      <span key={tag} className="text-[8px] md:text-[9px] font-black tracking-widest uppercase px-2 py-1 bg-emerald-400/5 text-emerald-400 rounded-md border border-emerald-400/10">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase px-2 py-1 bg-blue-400/5 text-blue-400 rounded-md border border-blue-400/10">
                      {project.language || "Código Source"}
                    </span>
                  )}
                </div>
                
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-emerald-400 transition-colors mt-auto w-fit">
                  Acessar Repositório <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTATO */}
        <footer className="pt-20 md:pt-40 text-center relative mt-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-emerald-500/10 md:bg-emerald-500/5 blur-[80px] md:blur-[100px] rounded-full -z-10" />
          
          <motion.div {...fadeInUp} className="space-y-8 md:space-y-12">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter">
              Vamos <span className="text-slate-700">conversar?</span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto text-sm md:text-base px-4">
              Estou sempre aberto a novos desafios e parcerias envolvendo backend, integrações corporativas ou IoT.
            </p>
            
            <div className="flex justify-center flex-wrap gap-4 md:gap-8 pb-10 md:pb-20">
              {[
                { icon: <Mail size={20} className="md:w-6 md:h-6"/>, href: "mailto:miguelazecosta@gmail.com", label: "Email" },
                { icon: <Linkedin size={20} className="md:w-6 md:h-6"/>, href: "https://www.linkedin.com/in/miguel-costa-051253249/", label: "LinkedIn" },
                { icon: <Github size={20} className="md:w-6 md:h-6"/>, href: "https://github.com/MAC-2006", label: "GitHub" }
              ].map((social) => (
                <motion.a 
                  key={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 md:p-5 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-all shadow-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-600 px-4">
              © {new Date().getFullYear()} Miguel Azevedo Costa • Built with React & Tailwind
            </p>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};

export default App;