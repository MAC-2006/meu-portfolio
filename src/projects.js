// projects.js — dados reais dos projetos de Miguel Azevedo Costa
// Campos com sufixo _pt são exibidos em português; sem sufixo = inglês

export const projects = [
  {
    slug: 'ia-contextualizada',

    // ── EN ──────────────────────────────────────────────────────────
    name: 'ProMind — Contextual AI Platform',
    shortDescription:
      'RAG-powered professional assistant with Google Auth, 2FA and per-user document indexing — FastAPI + React + Qdrant.',

    origin: `The idea was born from frustration. I spent several months working as a legal assistant at a law firm, and every single day I was doing the same thing: reading a new case, finding the relevant clause in the Civil or Labor Code, and writing the same boilerplate paragraphs — only swapping out names, dates, and numbers.\n\nI started wondering: what if there was a system that already knew all that legislation, and I could just ask it questions about a specific case? From that question, ProMind was born — initially as a tool for lawyers, then I realized the same logic applied to doctors with clinical protocols, teachers with BNCC curricula, and any professional drowning in repetitive document work.\n\nThe project also became a technical laboratory: I wanted to learn how to build a production-grade auth system (cookies, 2FA, Google OAuth), how to do real RAG at scale, and how to ship a product that other developers could actually integrate as an API.`,

    role: 'Full-Stack Developer & Architect',
    overview: `ProMind is a multi-profession RAG (Retrieval-Augmented Generation) platform that lets professionals upload their own documents and ask questions grounded exclusively in those documents — with no hallucination from general knowledge.\n\nThe onboarding flow profiles the user (Lawyer, Doctor, Teacher, Other), then automatically indexes relevant public sources (legislation, clinical guidelines, BNCC) into an isolated Qdrant vector collection per user. Uploaded files (PDF, DOCX, XLSX, ZIP) are chunked, embedded via Groq's nomic-embed-text, and stored alongside the public base. Every chat query runs a similarity search and feeds the top-k chunks to the LLM, ensuring answers are always traceable to a source.`,

    highlights: [
      'Full auth stack: bcrypt passwords, short-lived JWT in httpOnly cookies, rotating refresh tokens, Google OAuth (Authorization Code Flow), TOTP 2FA with recovery codes',
      'Per-user isolated Qdrant collections — one user\'s documents are never mixed with another\'s',
      'Auto-indexer hits public sources (Planalto, SUS protocols, MEC/BNCC) at onboarding completion via async background task',
      'Chunked file upload for large ZIPs (5MB parts), reassembled server-side to bypass Vercel\'s 4.5MB limit',
      'Profession-aware system prompts: the LLM answers as a legal assistant, medical assistant, or pedagogical assistant depending on the user profile',
      'Designed as a platform: the /upload and /chat endpoints are open to third-party integrations so other apps can use ProMind as a RAG backend',
    ],

    lessons: `Building ProMind taught me that the hardest part of an AI product isn't the AI — it's the plumbing around it. Getting auth right (refresh token rotation, reuse detection, Google callback edge cases with 2FA) took longer than building the entire RAG pipeline. I also learned that "no hallucination" is a product promise that requires architectural enforcement, not just a prompt instruction — isolating collections by user and grounding the system prompt to only the retrieved context is what actually delivers it.`,

    team: 'Solo project',
    duration: '4 months (ongoing)',
    stack: [
      { label: 'Backend', value: 'FastAPI (Python 3.11)' },
      { label: 'Frontend', value: 'React 19 + TypeScript + Tailwind 4' },
      { label: 'Vector DB', value: 'Qdrant (cosine similarity)' },
      { label: 'Embeddings', value: 'Groq — nomic-embed-text' },
      { label: 'LLM', value: 'Groq — llama3.2 / configurable' },
      { label: 'Auth', value: 'JWT cookies · TOTP (pyotp) · Google OAuth (Authlib)' },
      { label: 'Database', value: 'PostgreSQL + SQLAlchemy' },
      { label: 'Infra', value: 'Docker · Vercel (frontend) · Qdrant Cloud' },
    ],

    tags: ['Python', 'FastAPI', 'RAG', 'React', 'Qdrant'],
    github: 'https://github.com/MAC-2006/IA_contextualizada',
    demo: 'https://ia-contextualizada.vercel.app/',

    // ── PT ──────────────────────────────────────────────────────────
    name_pt: 'ProMind — Plataforma de IA Contextual',
    shortDescription_pt:
      'Assistente profissional com RAG, Google Auth, 2FA e indexação de documentos por usuário — FastAPI + React + Qdrant.',

    origin_pt: `A ideia nasceu da frustração. Passei vários meses trabalhando como assistente jurídico em um escritório de advocacia, e todo dia fazia a mesma coisa: ler um processo novo, localizar a cláusula certa no Código Civil ou Trabalhista, e escrever os mesmos parágrafos de petição — só trocando nomes, datas e valores.\n\nComecei a pensar: e se existisse um sistema que já soubesse toda aquela legislação, e eu pudesse só fazer perguntas sobre um caso específico? Dessa pergunta nasceu o ProMind — inicialmente como ferramenta para advogados, mas logo percebi que a mesma lógica se aplicava a médicos com protocolos clínicos, professores com a BNCC, e qualquer profissional afogado em trabalho repetitivo com documentos.\n\nO projeto também virou um laboratório técnico: queria aprender a construir um sistema de autenticação de produção (cookies, 2FA, OAuth), como fazer RAG de verdade em escala, e como entregar um produto que outros desenvolvedores pudessem integrar como API.`,

    role_pt: 'Desenvolvedor Full-Stack e Arquiteto',
    overview_pt: `O ProMind é uma plataforma RAG (Retrieval-Augmented Generation) multi-profissão que permite que profissionais façam upload de seus próprios documentos e façam perguntas baseadas exclusivamente nesses documentos — sem alucinação de conhecimento geral.\n\nO onboarding perfila o usuário (Advogado, Médico, Professor, Outro), depois indexa automaticamente fontes públicas relevantes (legislação, protocolos clínicos, BNCC) em uma coleção Qdrant isolada por usuário. Arquivos enviados (PDF, DOCX, XLSX, ZIP) são divididos em chunks, gerados embeddings via nomic-embed-text do Groq, e armazenados junto com a base pública. Cada consulta no chat busca por similaridade e alimenta os top-k chunks para o LLM, garantindo que as respostas sempre sejam rastreáveis a uma fonte.`,

    highlights_pt: [
      'Stack de auth completa: senhas bcrypt, JWT de curta duração em cookies httpOnly, refresh tokens com rotação, Google OAuth (Authorization Code Flow), 2FA TOTP com códigos de recuperação',
      'Coleções Qdrant isoladas por usuário — os documentos de um usuário nunca se misturam com os de outro',
      'Auto-indexer busca fontes públicas (Planalto, protocolos SUS, MEC/BNCC) ao final do onboarding via task assíncrona em background',
      'Upload em chunks para arquivos ZIP grandes (partes de 5MB), remontados no servidor para contornar o limite de 4,5MB da Vercel',
      'System prompts adaptados à profissão: o LLM responde como assistente jurídico, médico ou pedagógico conforme o perfil do usuário',
      'Projetado como plataforma: os endpoints /upload e /chat estão abertos para integrações de terceiros, permitindo que outros projetos usem o ProMind como backend RAG',
    ],

    lessons_pt: `Construir o ProMind me ensinou que a parte mais difícil de um produto de IA não é a IA — é o encanamento ao redor. Deixar o auth correto (rotação de refresh token, detecção de reuso, edge cases do callback Google com 2FA) levou mais tempo do que construir todo o pipeline RAG. Aprendi também que "sem alucinação" é uma promessa de produto que exige garantia arquitetural, não apenas uma instrução no prompt — isolar coleções por usuário e ancorar o system prompt ao contexto recuperado é o que realmente entrega isso.`,

    team_pt: 'Projeto solo',
  },

  {
    slug: 'metrotecnica',

    // ── EN ──────────────────────────────────────────────────────────
    name: 'Metrotécnica — Calibration Management SaaS',
    shortDescription:
      'Multi-tenant SaaS for calibration laboratories: instrument tracking, digital certificates with QR code, FoxPro DBF migration and role-based access.',

    origin: `My father runs Metrotécnica, a metrology and instrument calibration company in Várzea Paulista. For years, the entire operation ran on a legacy FoxPro system from the early 2000s — a pile of DBF files that only one person knew how to operate, with no backups, no web access, and certificates that were printed and manually signed.\n\nHe asked me if I could "modernize" it. What started as a weekend project quickly became one of the most technically complex things I've ever built. Migrating two decades of calibration history, modeling multi-tenant isolation so that each client company could only see their own instruments, building a document generation pipeline that matched the exact layout of the original certificates, and adding an electronic signature system with SHA-256 hash and QR code validation — all while keeping the existing workflow intact so my father didn't have to change how he worked.`,

    role: 'Full-Stack Developer (solo)',
    overview: `Metrotécnica is a multi-tenant SaaS built on Java (Spring Boot) with Hibernate/JPA and MySQL, paired with an Angular frontend, that manages the complete lifecycle of measurement instruments: registration, calibration history, certificate generation, scheduling, and client portal access.\n\nThe system supports multiple client companies (tenants) under a single installation, with full data isolation enforced at the persistence layer. An admin dashboard, built in Angular, lets the lab operator impersonate any client, upload legacy DBF ZIP exports for one-click migration, and bulk-upload physical PDF certificates that get matched to calibration records via regex.\n\nCertificates are generated server-side with OpenPDF/iText, include SHA-256 document hashes, QR codes linking to a public validation URL, and dual electronic signatures (metrologista + responsável). Clients access their instrument list through an Angular dashboard with real-time status badges (APROVADO / REPROVADO / VENCIDO), including interactive deviation charts rendered with Chart.js/ngx-charts alongside the JFreeChart-generated graphs embedded in the certificates.`,

    highlights: [
      'Full FoxPro DBF → MySQL migration: reads .DBF files with latin-1 encoding via Java routines (JDBC), maps accented field names, converts day-count frequency to months, and creates tenants atomically',
      'Multi-tenant architecture: every query is scoped by tenant_id resolved from the JWT claim, enforced via Spring Security and Hibernate filters — no raw SQL bypasses the isolation',
      'Metrological calculation engine: expanded uncertainty, hysteresis (inversion error), and automatic deviation charts via JFreeChart, integrated into the generated certificate',
      'PDF generation pipeline with OpenPDF/iText, embedded signature images, QR code and SHA-256 integrity hash, with an Angular interface for configuring and monitoring document generation',
      'Chunked ZIP upload (5MB parts) for bulk certificate binding — backend reassembles, extracts, and regex-matches filenames to calibration records',
      'Admin impersonation with guard: a tenant missing razao_social or CNPJ blocks the impersonate endpoint and forces the admin to complete the legal data form first',
      'Auto-calculated calibration status using LP/LNP tolerance bands and "Paridade Mafra" error+uncertainty formula',
      'Automatic selection of metrological standards based on business rules and descriptive AI',
      'CNPJ and CEP auto-fill via BrasilAPI proxy (avoids CORS on the Angular frontend)',
    ],

    lessons: `This project taught me that legacy migration is a product problem before it's a technical one. The FoxPro data was full of inconsistencies — fields with accents that varied by record, dates stored as strings in three different formats, frequency values in days that had to be reverse-engineered into months. Solving that gracefully in Java, without losing any historical record, required treating every row as a negotiation between what the old system intended and what the new system needed. I also learned that "multi-tenant" is not a feature you add — it's an architectural constraint that has to be present from the first migration, enforced consistently across Hibernate entities and Spring Security, or you'll be refactoring forever.`,

    team: 'Solo project (client: Metrotécnica)',
    duration: '5 months (ongoing)',
    stack: [
      { label: 'Backend', value: 'Java (Spring Boot) + Hibernate/JPA + MySQL' },
      { label: 'Frontend', value: 'Angular + TypeScript' },
      { label: 'Charts', value: 'JFreeChart (backend) + Chart.js / ngx-charts (frontend)' },
      { label: 'PDF Engine', value: 'OpenPDF / iText' },
      { label: 'Auth', value: 'Spring Security + JWT' },
      { label: 'Legacy Migration', value: 'JDBC (latin-1 DBF → MySQL)' },
      { label: 'Storage', value: 'ZIP-based PDF vault (chunked upload)' },
    ],

    tags: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Multi-tenant'],
    github: 'https://github.com/MAC-2006/metrotecnica',
    demo: 'https://metrotecnica.vercel.app/',

    // ── PT ──────────────────────────────────────────────────────────
    name_pt: 'Metrotécnica — SaaS de Gestão de Calibração',
    shortDescription_pt:
      'SaaS multi-tenant para laboratórios de calibração: rastreamento de instrumentos, certificados digitais com QR code, migração DBF do FoxPro e controle de acesso por papel.',

    origin_pt: `Meu pai é dono da Metrotécnica, empresa de metrologia e calibração de instrumentos em Várzea Paulista. Por anos, toda a operação rodava num sistema legado em FoxPro dos anos 2000 — uma pilha de arquivos DBF que só uma pessoa sabia operar, sem backup, sem acesso web, e com certificados impressos e assinados à mão.\n\nEle me pediu se eu conseguia "modernizar" aquilo. O que começou como um projeto de fim de semana rapidamente se tornou uma das coisas tecnicamente mais complexas que já construí. Migrar duas décadas de histórico de calibração, modelar o isolamento multi-tenant para que cada empresa cliente visse só seus instrumentos, construir um pipeline de geração de documentos que respeitasse exatamente o layout dos certificados originais, e adicionar um sistema de assinatura eletrônica com hash SHA-256 e validação por QR code — tudo isso mantendo o fluxo de trabalho existente para que meu pai não precisasse mudar como trabalhava.`,

    role_pt: 'Desenvolvedor Full-Stack (solo)',
    overview_pt: `A Metrotécnica é um SaaS multi-tenant construído em Java (Spring Boot) com Hibernate/JPA e MySQL, com frontend em Angular, que gerencia o ciclo de vida completo de instrumentos de medição: cadastro, histórico de calibrações, geração de certificados, agendamento e acesso do portal do cliente.\n\nO sistema suporta múltiplas empresas clientes (tenants) numa única instalação, com isolamento total de dados aplicado na camada de persistência. Um painel administrativo, construído em Angular, permite que o operador do laboratório acesse qualquer cliente, faça upload de exports ZIP com arquivos DBF legados para migração em um clique, e vincule PDFs de certificados físicos aos registros de calibração via regex.\n\nOs certificados são gerados server-side com OpenPDF/iText, incluem hash SHA-256 do documento, QR codes que apontam para uma URL pública de validação, e duas assinaturas eletrônicas (metrologista + responsável). Os clientes acessam a lista de instrumentos por um dashboard Angular com status em tempo real (APROVADO / REPROVADO / VENCIDO), incluindo gráficos de desvio interativos renderizados com Chart.js/ngx-charts, além dos gráficos gerados via JFreeChart embutidos nos certificados.`,

    highlights_pt: [
      'Migração completa FoxPro DBF → MySQL: lê arquivos .DBF com codificação latin-1 via rotinas Java (JDBC), mapeia nomes de campos acentuados, converte frequência em dias para meses, e cria tenants atomicamente',
      'Arquitetura multi-tenant: toda query é filtrada pelo tenant_id resolvido a partir do JWT, reforçado via Spring Security e filtros do Hibernate — nenhum SQL bruto burla o isolamento',
      'Engine de cálculo metrológico: incerteza expandida, erro de inversão (histerese) e geração automática de gráficos de desvio via JFreeChart, integrados ao certificado gerado',
      'Pipeline de geração de PDF com OpenPDF/iText, imagens de assinatura embutidas, QR code e hash de integridade SHA-256, com interface Angular para configuração e acompanhamento da geração de documentos',
      'Upload ZIP em chunks (partes de 5MB) para vínculo em lote de certificados — o backend remonta, extrai e faz match por regex nos nomes de arquivo com os registros de calibração',
      'Impersonação de admin com guarda: tenant sem razao_social ou CNPJ bloqueia o endpoint de impersonar e força o admin a completar o formulário de dados jurídicos primeiro',
      'Status de calibração calculado automaticamente usando bandas de tolerância LP/LNP e a fórmula de erro+incerteza "Paridade Mafra"',
      'Seleção automática de padrões metrológicos baseada em regras de negócio e IA descritiva',
      'Auto-preenchimento de CNPJ e CEP via proxy BrasilAPI (evita CORS no frontend Angular)',
    ],

    lessons_pt: `Este projeto me ensinou que migração de legado é um problema de produto antes de ser técnico. Os dados do FoxPro estavam cheios de inconsistências — campos com acentos que variavam por registro, datas armazenadas como string em três formatos diferentes, valores de frequência em dias que precisavam ser revertidos para meses. Resolver isso de forma limpa em Java, sem perder nenhum registro histórico, exigiu tratar cada linha como uma negociação entre o que o sistema antigo pretendia e o que o novo precisava. Aprendi também que "multi-tenant" não é uma feature que se adiciona — é uma restrição arquitetural que precisa estar presente desde a primeira migração, reforçada de forma consistente entre as entidades Hibernate e o Spring Security, ou você vai refatorar para sempre.`,

    team_pt: 'Projeto solo (cliente: Metrotécnica)',
  },

  {
    slug: 'portfolio',

    // ── EN ──────────────────────────────────────────────────────────
    name: 'This Portfolio',
    shortDescription:
      'Personal portfolio with GitHub API integration, bilingual support, Framer Motion animations and dynamic case study pages.',

    origin: `I built this portfolio for the same reason I build everything: I needed it and the alternatives didn't quite fit. After finishing the ProMind and Metrotécnica projects, I wanted a single place that could show not just "what I built" but "how I think about building things" — the origin stories, the architectural decisions, the tradeoffs.\n\nMost developer portfolios are a list of links. I wanted mine to be closer to a case study collection, where each project had its own page explaining the problem, what was interesting about the solution, and what I learned. The fact that it's also a live technical demo of what I can do with React, animations, and API integration is a bonus.`,

    role: 'Designer & Developer',
    overview: `A single-page React application with client-side routing (React Router v7), Framer Motion animations, and a custom bilingual (EN/PT) context system. The project section fetches live data from the GitHub API and merges it with static project metadata, so repository names, descriptions, and topics stay in sync automatically.\n\nEach project has a dedicated case study page generated from a single data source (projects.js), with a structured layout: origin story, technical overview, key highlights, lessons learned, and tech stack sidebar.`,

    highlights: [
      'GitHub API v3 integration: real-time repo names, descriptions and topics merged with static data',
      'Bilingual context (LangContext) — every string defined in a single translation object, no external i18n library',
      'Framer Motion page transitions and scroll-triggered reveals with IntersectionObserver',
      'Lightbox modal for workflow screenshot with keyboard Escape support',
      'Hash-based routing (HashRouter) for static hosting compatibility with Vercel',
      'Case study pages dynamically generated from a single projects.js data file',
    ],

    lessons: `The most interesting technical constraint was bilingual support without an i18n library. Using a React context with a plain JS object for translations keeps the bundle tiny and makes it trivial to add a new language — just add another key to the t object. The tradeoff is that the project data file becomes more verbose (each field needs a _pt variant), but for a portfolio with a fixed set of projects, that's acceptable. This also taught me that "the simplest solution" often wins in personal projects where maintenance burden falls entirely on one person.`,

    team: 'Solo project',
    duration: '3 weeks',
    stack: [
      { label: 'Framework', value: 'React 18 + Vite 5' },
      { label: 'Styling', value: 'Tailwind CSS 4' },
      { label: 'Animation', value: 'Framer Motion 12' },
      { label: 'Routing', value: 'React Router DOM v7' },
      { label: 'Icons', value: 'Lucide React' },
      { label: 'Data', value: 'GitHub REST API v3' },
      { label: 'Deploy', value: 'Vercel' },
    ],

    tags: ['React', 'Vite', 'Framer Motion'],
    github: 'https://github.com/MAC-2006/meu-portfolio',
    demo: 'https://meu-portfolio-tawny-iota.vercel.app/',

    // ── PT ──────────────────────────────────────────────────────────
    name_pt: 'Este Portfólio',
    shortDescription_pt:
      'Portfólio pessoal com integração à API do GitHub, suporte bilíngue, animações Framer Motion e páginas de case study dinâmicas.',

    origin_pt: `Construí este portfólio pelo mesmo motivo que construo tudo: precisei e as alternativas não encaixavam direito. Depois de finalizar os projetos ProMind e Metrotécnica, queria um lugar único que mostrasse não só "o que construí" mas "como penso ao construir" — as histórias de origem, as decisões de arquitetura, os tradeoffs.\n\nA maioria dos portfólios de desenvolvedores é uma lista de links. Queria que o meu fosse mais próximo de uma coleção de cases, onde cada projeto tivesse sua própria página explicando o problema, o que foi interessante na solução, e o que aprendi. O fato de ser também uma demonstração técnica ao vivo do que consigo fazer com React, animações e integração de API é um bônus.`,

    role_pt: 'Designer e Desenvolvedor',
    overview_pt: `Aplicação React de página única com roteamento client-side (React Router v7), animações Framer Motion e um sistema de contexto bilíngue (EN/PT) customizado. A seção de projetos busca dados em tempo real da API do GitHub e os mescla com metadados estáticos dos projetos, mantendo nomes de repositório, descrições e tópicos sempre sincronizados.\n\nCada projeto tem uma página de case study dedicada, gerada a partir de uma única fonte de dados (projects.js), com layout estruturado: história de origem, visão técnica, destaques, lições aprendidas e sidebar de stack.`,

    highlights_pt: [
      'Integração com GitHub API v3: nomes de repo, descrições e tópicos em tempo real mesclados com dados estáticos',
      'Contexto bilíngue (LangContext) — todas as strings definidas em um único objeto de traduções, sem biblioteca i18n externa',
      'Transições de página e reveals no scroll com Framer Motion e IntersectionObserver',
      'Modal lightbox para screenshot do workflow com suporte à tecla Escape',
      'Roteamento baseado em hash (HashRouter) para compatibilidade com hospedagem estática na Vercel',
      'Páginas de case study geradas dinamicamente a partir de um único arquivo projects.js',
    ],

    lessons_pt: `A restrição técnica mais interessante foi o suporte bilíngue sem biblioteca i18n. Usar um contexto React com um objeto JS simples para as traduções mantém o bundle pequeno e torna trivial adicionar um novo idioma — basta adicionar outra chave no objeto t. O tradeoff é que o arquivo de dados dos projetos fica mais verboso (cada campo precisa de uma variante _pt), mas para um portfólio com um conjunto fixo de projetos, isso é aceitável. Isso também me ensinou que "a solução mais simples" geralmente vence em projetos pessoais, onde o peso de manutenção recai inteiramente sobre uma pessoa.`,

    team_pt: 'Projeto solo',
  },
];