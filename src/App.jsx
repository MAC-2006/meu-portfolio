import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "Custom Frappe App",
      description: "Desenvolvimento de módulos e automações para ERPNext utilizando Python e JavaScript.",
      tags: ["Frappe", "Python", "MariaDB"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    },
    {
      title: "API Integration Hub",
      description: "Integração de sistemas via APIs REST e Webhooks.",
      tags: ["Node.js", "APIs", "Webhooks"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    },
    {
      title: "Sistemas Embarcados",
      description: "Projetos acadêmicos (Fatec) focados em hardware e IoT.",
      tags: ["C++", "Arduino", "IoT"],
      link: "https://github.com/MAC-2006/portfolio-dev"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <header className="max-w-5xl mx-auto pt-20 px-6 pb-10 text-left">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
          Miguel Azevedo Costa
        </h1>
        <p className="text-xl text-slate-400 mb-6 max-w-2xl">
          Desenvolvedor Júnior focado em Python, JavaScript e Frappe. 
          Estudante de Sistemas Embarcados na Fatec.
        </p>
        
        <div className="flex gap-6">
          <a href="https://github.com/MAC-2006/portfolio-dev" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Github size={20}/> <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/miguel-costa-051253249/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Linkedin size={20}/> <span>LinkedIn</span>
          </a>
          <a href="mailto:miguelazecosta@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Mail size={20}/> <span>Contato</span>
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
            <Terminal className="text-emerald-400" size={24} /> Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "JavaScript", "Frappe", "React", "Node.js", "SQL", "C++"].map(tech => (
              <span key={tech} className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 text-sm font-medium hover:border-emerald-400 transition">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 border-b border-slate-800 pb-2">
            <Code2 className="text-blue-400" size={24} /> Projetos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-slate-800/40 rounded-xl border border-slate-700 hover:border-blue-400 transition-all group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider bg-slate-900 px-2 py-1 rounded text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:underline">
                  Ver código <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-10 text-slate-500 text-sm border-t border-slate-800 mt-10">
        © {new Date().getFullYear()} - Miguel Azevedo Costa
      </footer>
    </div>
  );
}

export default App;