import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, BookOpen, User, ChevronRight } from 'lucide-react';

const App = () => {
  // Variantes de Animação
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  const projects = [
    {
      title: "Especialista Frappe & ERPNext",
      description: "Desenvolvimento de módulos robustos e automação de fluxos empresariais utilizando o ecossistema Frappe.",
      tags: ["Python", "JavaScript", "MariaDB", "Frappe"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    },
    {
      title: "Integrador de APIs REST",
      description: "Construção de pontes de dados entre sistemas distintos, focando em performance e segurança via Webhooks.",
      tags: ["Node.js", "Express", "PostgreSQL", "APIs"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    },
    {
      title: "IoT / Sistemas Embarcados",
      description: "Projetos de hardware e software integrado para monitoramento industrial desenvolvidos na Fatec.",
      tags: ["C++", "ESP32", "MQTT", "Arduino"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400">
      
      {/* NAVEGAÇÃO FIXA (GLASSMORPHISM) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-[#0b0f1a]/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="font-black text-2xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          >
            MAC<span className="text-white">.</span>dev
          </motion.span>
          
          <div className="hidden md:flex gap-10 text-xs font-black uppercase tracking-[0.2em]">
            {[
              { name: 'Sobre', href: '#sobre' },
              { name: 'Habilidades', href: '#skills' },
              { name: 'Projetos', href: '#projetos' }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="relative group text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        {/* Efeito de Luz de Fundo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block py-1 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-emerald-500/20"
            >
              Junior Fullstack Developer
            </motion.span>
            
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Miguel <br />
              </motion.span>
              <span className="text-slate-700">Azevedo Costa</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
              Desenvolvedor focado em <span className="text-white font-semibold">Python</span>, 
              <span className="text-white font-semibold"> JavaScript</span> e arquiteturas para 
              <span className="text-emerald-400 font-semibold italic"> ERPNext/Frappe</span>. 
              Unindo software de gestão e sistemas embarcados.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/miguel-costa-051253249/" 
                target="_blank"
                className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-500"
              >
                <Linkedin size={20}/> Conectar no LinkedIn
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projetos"
                className="flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold border border-white/5 hover:bg-slate-700 transition-all"
              >
                Ver Projetos <ChevronRight size={20}/>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-40 pb-32">
        
        {/* SEÇÃO SOBRE MIM */}
        <section id="sobre" className="scroll-mt-40">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 border-l-4 border-t-4 border-emerald-500/30" />
              <h2 className="text-4xl font-black mb-8 flex items-center gap-4">
                <User className="text-emerald-400" size={32} /> 01. Sobre Mim
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Minha paixão pela tecnologia nasceu na <span className="text-white">Etec</span>, onde aprendi a transformar código em interfaces funcionais. Hoje, busco aprofundar esse conhecimento na <span className="text-white">Fatec</span>, explorando a fundo o desenvolvimento de Sistemas Embarcados.
                </p>
                <p>
                  No dia a dia, atuo na <span className="text-emerald-400 font-bold">Trezzuri Tecnologia</span>, enfrentando desafios reais com o Frappe Framework e criando integrações que otimizam o core business de nossos clientes.
                </p>
              </div>
            </div>
            
            <div className="grid gap-6">
              <div className="p-8 bg-slate-800/30 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl">
                <BookOpen className="text-blue-400 mb-4" size={28} />
                <h3 className="text-xl font-bold mb-2">Graduação</h3>
                <p className="text-slate-400 text-sm italic">Sistemas Embarcados - Fatec (2024-2026)</p>
              </div>
              <div className="p-8 bg-slate-800/30 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl">
                <Terminal className="text-emerald-400 mb-4" size={28} />
                <h3 className="text-xl font-bold mb-2">Técnico</h3>
                <p className="text-slate-400 text-sm italic">Informática para Internet - Etec (2022-2023)</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SEÇÃO HABILIDADES */}
        <section id="skills" className="scroll-mt-40">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 flex justify-center items-center gap-4">
              <Cpu className="text-blue-400" size={32} /> 02. Habilidades
            </h2>
            <p className="text-slate-500">Tecnologias que utilizo para dar vida a projetos</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Backend", icons: <Terminal size={24}/>, items: ["Python", "Frappe Framework", "Node.js", "SQL", "APIs REST"], color: "emerald" },
              { title: "Frontend", icons: <Code2 size={24}/>, items: ["React", "JavaScript", "Tailwind CSS", "WordPress"], color: "blue" },
              { title: "Sistemas", icons: <Cpu size={24}/>, items: ["C++", "Arduino/ESP32", "Docker", "Git/GitHub", "Linux"], color: "yellow" }
            ].map((cat) => (
              <motion.div 
                key={cat.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-800/20 rounded-3xl border border-white/5 hover:border-white/10 transition-all"
              >
                <div className={`mb-6 text-${cat.color}-400`}>{cat.icons}</div>
                <h3 className="text-xl font-bold mb-6 italic">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-slate-900 rounded-lg text-xs font-bold text-slate-400 border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SEÇÃO PROJETOS */}
        <section id="projetos" className="scroll-mt-40">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black mb-4 flex items-center gap-4">
                <Code2 className="text-emerald-400" size={32} /> 03. Projetos
              </h2>
              <p className="text-slate-500">Uma seleção dos meus trabalhos recentes</p>
            </div>
            <a href="https://github.com/MAC-2006" target="_blank" className="text-emerald-400 text-sm font-bold hover:underline flex items-center gap-2">
              Ver todos no GitHub <ExternalLink size={16}/>
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-slate-800/20 rounded-[2rem] border border-white/5 flex flex-col relative overflow-hidden transition-all hover:bg-slate-800/40"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-all" />
                
                <h3 className="text-2xl font-black mb-4 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black tracking-widest uppercase px-2 py-1 bg-emerald-400/5 text-emerald-400 rounded-md border border-emerald-400/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-emerald-400 transition-colors">
                  Detalhes <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTATO */}
        <footer className="pt-40 text-center relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full -z-10" />
          
          <motion.div {...fadeInUp} className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Vamos <span className="text-slate-700">conversar?</span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto">
              Estou sempre em busca de novos desafios e parcerias em projetos inovadores.
            </p>
            
            <div className="flex justify-center gap-8 pb-20">
              {[
                { icon: <Mail size={24}/>, href: "mailto:miguelazecosta@gmail.com" },
                { icon: <Linkedin size={24}/>, href: "https://www.linkedin.com/in/miguel-costa-051253249/" },
                { icon: <Github size={24}/>, href: "https://github.com/MAC-2006" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.href}
                  target="_blank"
                  className="p-5 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
              © {new Date().getFullYear()} Miguel Azevedo Costa • Built with React & Tailwind
            </p>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};

export default App;