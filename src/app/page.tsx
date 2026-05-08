import Image from "next/image";

export default function Home() {
  const featuredProjects = [
    {
      title: "COBAEM Academic Portal",
      description:
        "Institutional portal built for educational services and information delivery with a clear, accessible user experience.",
      tech: ["WordPress", "PHP", "MySQL", "UX"],
      link: "https://academica.cobamich.edu.mx/home/",
      category: "Web Portal",
    },
    {
      title: "SICOBAEM",
      description:
        "Administrative system for academic and operational workflows, designed to improve maintainability and process reliability.",
      tech: ["PHP", "CodeIgniter", "JavaScript", "jQuery", "MySQL"],
      link: "https://academica.cobamich.edu.mx/sicobaem/",
      category: "Management System",
    },
    {
      title: "Prados de la Huerta (Web Platform)",
      description:
        "Residential community platform with notices, incident workflows, and direct communication with administration.",
      tech: ["Laravel", "React", "REST APIs", "MySQL"],
      link: "https://huerta.mendodevelopments.com/",
      category: "Community Platform",
    },
    {
      title: "Prados de la Huerta (Mobile App)",
      description:
        "Cross-platform mobile app for residents with notifications, contribution history, and support messaging.",
      tech: ["React Native", "Expo", "Mobile UI/UX"],
      link: "https://play.google.com/store/apps/details?id=com.mendozadev.pradoslahuerta&pcampaignid=web_share",
      category: "Mobile Application",
    },
  ];

  const skills = {
    programming: [
      "PHP (Laravel)",
      "JavaScript (React.js, React Native, jQuery)",
      "TypeScript",
    ],
    mobile: [
      "React Native (CLI & Expo)",
      "Expo Router v3",
      "Native Modules Integration",
      "Mobile UI/UX Patterns",
    ],
    apis: [
      "RESTful API Design",
      "Laravel Sanctum",
      "Laravel Echo (WebSockets)",
      "Pusher",
    ],
    databases: [
      "MySQL (advanced indexing, migration logic)",
      "PostgreSQL",
      "Eloquent ORM",
    ],
    tools: [
      "Git",
      "GitHub",
      "npm",
      "Composer",
      "VS Code",
      "Cursor",
      "Vite",
      "Laragon",
      "Android Studio",
      "Xcode",
    ],
    frontend: [
      "HTML5",
      "CSS3",
      "Next.js",
      "SPA Architecture",
      "React Hooks",
      "Context API",
      "Tailwind CSS",
      "Bootstrap",
    ],
  };

  const experience = [
    {
      role: "Senior Full Stack Developer | Web & Mobile Platforms",
      company: "COBAEM",
      period: "Jan 2021 - Present",
      highlights: [
        "Modernized legacy monoliths into a scalable Laravel backend powering both React SPA and React Native apps.",
        "Architected secure REST APIs with Laravel Sanctum, standardized JSON responses, and enterprise validation workflows.",
        "Delivered real-time features with Laravel Echo and WebSockets, including chat, typing indicators, and instant notifications.",
        "Led database refactoring from resident-centric models to address-centric payment architecture for better reporting and maintainability.",
      ],
    },
    {
      role: "Mid-Level Full Stack Developer",
      company: "COBAEM",
      period: "Jan 2018 - Dec 2020",
      highlights: [
        "Upgraded legacy student modules from PHP/MySQL to a modular CodeIgniter foundation.",
        "Integrated automation APIs for student data validation, reducing manual verification time by 30%.",
        "Improved accessibility and responsiveness with Bootstrap and early React functional components.",
      ],
    },
    {
      role: "Junior Full Stack Developer",
      company: "COBAEM",
      period: "Jul 2014 - Dec 2017",
      highlights: [
        "Built and maintained enrollment and administrative applications using PHP, MySQL, JavaScript, jQuery, HTML, and CSS.",
        "Developed modules for student records, course registration, attendance, and internal operations.",
        "Optimized SQL queries and supported reliability with routine maintenance, backups, and access controls.",
      ],
    },
  ];

  const contributions = [
    "ComPay Mobile App: high-performance residential management app with real-time chat, automated fee tracking, and permission-based UI.",
    "Educational Management System: full-stack platform handling 40,000+ records, migrated from legacy CodeIgniter/jQuery to decoupled Laravel + React architecture.",
    "Automated Digital Certificates: API-driven secure PDF generation system that reduced processing time by 50%.",
    "Residential & Scholarship System: Laravel + React platform with refactored database models and granular permissions (Spatie).",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-wide text-slate-900">
            Erasto Mendoza
          </p>
          <div className="flex items-center gap-5 text-sm text-slate-600">
            <a href="#about" className="transition hover:text-indigo-600">
              About
            </a>
            <a href="#projects" className="transition hover:text-indigo-600">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-indigo-600">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-indigo-600">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-14">
        <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[1.4fr_1fr] md:items-center md:p-12">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              Senior Full Stack Developer | Web & Mobile Platforms
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Building scalable web and mobile products with clean architecture.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Software Engineer with 10+ years of experience in full-stack
              development, software architecture, and mobile solutions. Expert
              in Laravel, React.js, and React Native, with a strong record of
              modernizing legacy systems into high-impact, maintainable
              platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-5 flex justify-center">
              <Image
                src="/erasto-mendoza-v2.png"
                alt="Erasto Mendoza profile photo"
                width={180}
                height={180}
                className="rounded-2xl object-cover shadow-sm"
                priority
              />
            </div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-800">Email:</span>{" "}
                erasto.mendoza.perez@gmail.com
              </p>
              <p>
                <span className="font-medium text-slate-800">LinkedIn:</span>{" "}
                erasto-mendoza-8181b323b
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-5">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Professional Summary
          </h2>
          <p className="max-w-5xl leading-8 text-slate-600">
            I specialize in designing robust APIs, real-time communication
            flows, and cross-platform applications that align with
            organizational goals. My approach combines clean code practices,
            scalable architecture, and user-centered design to deliver
            measurable business impact.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Technical Skills
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <article
                key={group}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                  {group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Featured Projects
            </h2>
            <p className="text-slate-600">
              Production systems delivered for education and residential
              community management.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-wider text-indigo-600">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-indigo-700 transition group-hover:text-indigo-500"
                >
                  Open Project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((job) => (
              <article
                key={job.role}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {job.company} | {job.period}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Projects & Contributions
          </h2>
          <ul className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm">
            {contributions.map((item) => (
              <li key={item} className="ml-5 list-disc">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="rounded-2xl border border-indigo-200 bg-indigo-50 p-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            If you are looking for a senior engineer to modernize legacy
            software or build new web and mobile platforms, I would be glad to
            collaborate.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:erasto.mendoza.perez@gmail.com"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/erasto-mendoza-8181b323b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-indigo-300 px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-400 hover:text-indigo-800"
            >
              View LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl justify-between px-6 py-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Erasto Mendoza</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
