import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, BookOpen, User } from 'lucide-react';

const App = () => {
  // Configurações de animação padrão
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "Especialista Frappe & ERPNext",
      description: "Desenvolvimento de módulos customizados e automação de processos internos para sistemas ERP modernos.",
      tags: ["Python", "Frappe Framework", "MariaDB", "JS"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    },
    {
      title: "Hub de Integrações API",
      description: "Soluções conectando sistemas distintos via Webhooks e APIs REST para sincronização de dados em tempo real.",
      tags: ["Node.js", "Express", "PostgreSQL", "APIs"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    },
    {
      title: "IoT & Sistemas Embarcados",
      description: "Projetos de monitoramento e controle de hardware desenvolvidos durante a graduação na Fatec.",
      tags: ["C++", "Arduino", "ESP32", "MQTT"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-400">
      
      {/* Navegação Fixa */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            MAC.dev
          </span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#sobre" className="hover:text-emerald-400 transition">Sobre</a>
            <a href="#skills" className="hover:text-emerald-400 transition">Habilidades</a>
            <a href="#projetos" className="hover:text-emerald-400 transition">Projetos</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Luz de fundo decorativa */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-4 tracking-widest uppercase">
              Disponível para novos desafios
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
              Miguel <br /> 
              <span className="text-slate-500">Azevedo Costa</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8 leading-relaxed italic">
              Transformando lógica em soluções escaláveis, do hardware ao ERP.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/MAC-2006/portfolio-dev" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition">
                <Github size={20}/> GitHub
              </a>
              <a href="https://www.linkedin.com/in/miguel-costa-051253249/" target="_blank" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition font-bold">
                <Linkedin size={20}/> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-32 pb-20">
        
        {/* Sobre Mim */}
        <section id="sobre" className="scroll-mt-32">
          <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <User className="text-emerald-400" /> Sobre Mim
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                <p>
                  Minha jornada na tecnologia começou na <span className="text-slate-200">Etec</span>, onde descobri a paixão por criar sistemas para a web. Hoje, como graduando em <span className="text-slate-200">Sistemas Embarcados na Fatec</span>, busco unir o mundo do software de alto nível com o hardware.
                </p>
                <p>
                  Atualmente, atuo como Desenvolvedor Júnior na <span className="text-emerald-400">Trezzuri Tecnologia</span>, onde me especializei no ecossistema <span className="text-slate-200 underline decoration-blue-500">Frappe/ERPNext</span>, desenvolvendo soluções que impactam diretamente a eficiência de negócios.
                </p>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 italic">
                <BookOpen size={20} className="text-blue-400"/> Formação
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-200">Sistemas Embarcados</h4>
                  <p className="text-sm text-slate-400 italic text-emerald-400">Fatec (2024 - 2026)</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">Técnico em Informática para Internet</h4>
                  <p className="text-sm text-slate-400 italic text-emerald-400">Etec (2022 - 2023)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Categorizada */}
        <section id="skills" className="scroll-mt-32">
          <motion.h2 {...fadeIn} className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Terminal className="text-blue-400" /> Habilidades Técnicas
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
              <Cpu className="text-emerald-400 mb-4" size={32}/>
              <h3 className="font-bold text-xl mb-4">Backend & ERP</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Frappe Framework", "Node.js", "SQL", "APIs REST"].map(s => (
                  <span key={s} className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-600">{s}</span>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
              <Code2 className="text-blue-400 mb-4" size={32}/>
              <h3 className="font-bold text-xl mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS", "WordPress (Divi)"].map(s => (
                  <span key={s} className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-600">{s}</span>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
              <Terminal className="text-yellow-400 mb-4" size={32}/>
              <h3 className="font-bold text-xl mb-4">Ferramentas</h3>
              <div className="flex flex-wrap gap-2">
                {["Git & GitHub", "Docker", "Linux", "C++", "FlutterFlow"].map(s => (
                  <span key={s} className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-600">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projetos com Animação */}
        <section id="projetos" className="scroll-mt-32">
          <motion.h2 {...fadeIn} className="text-3xl font-bold mb-12 flex items-center gap-3 leading-none">
            <Code2 className="text-emerald-400" /> Projetos em Destaque
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group flex flex-col p-8 bg-slate-800/40 rounded-3xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Detalhe de luz no card */}
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all" />
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-black tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition">
                  Explorar Projeto <ExternalLink size={16}/>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Rodapé / CTA */}
        <footer className="pt-20 border-t border-slate-800 text-center space-y-8">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold mb-4">Vamos criar algo novo?</h2>
            <p className="text-slate-400 mb-8">Estou sempre aberto a conversar sobre parcerias e novas tecnologias.</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:miguelazecosta@gmail.com" className="p-4 bg-slate-800 rounded-full hover:text-emerald-400 transition"><Mail size={24}/></a>
              <a href="https://github.com/MAC-2006/portfolio-dev" target="_blank" className="p-4 bg-slate-800 rounded-full hover:text-emerald-400 transition"><Github size={24}/></a>
              <a href="https://www.linkedin.com/in/miguel-costa-051253249/" target="_blank" className="p-4 bg-slate-800 rounded-full hover:text-emerald-400 transition"><Linkedin size={24}/></a>
            </div>
            <p className="text-xs text-slate-600 mt-12">© {new Date().getFullYear()} - Desenvolvido por Miguel Azevedo Costa</p>
          </motion.div>
        </footer>
      </main>
    </div>
  );
};

export default App;