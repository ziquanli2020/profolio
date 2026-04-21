const experiences = [
  {
    company: "Unikie",
    role: "Software Developer",
    period: "Jul 2022 — Jul 2025",
    location: "Finland",
    bullets: [
      "Analyzed and improved existing C/C++ codebases to comply with AUTOSAR and MISRA C++ standards (~1 year project).",
      "Performed image labeling for machine learning datasets.",
      "Performed text labeling for ML model training.",
    ],
  },
  {
    company: "University of Helsinki",
    role: "Master's Thesis (Study Leave)",
    period: "Jan 2024 — Apr 2024",
    location: "Helsinki, Finland",
    bullets: ["Completed Master's thesis in Computer Science."],
  },
  {
    company: "Unikie",
    role: "Software Developer Trainee",
    period: "Jan 2022 — Jun 2022",
    location: "Finland",
    bullets: [
      "Worked with Scrum, Jira, and Git in a professional engineering workflow.",
      "Built programs in C and C++ on POSIX, QNX, and Linux using Bazel and GoogleTest.",
      "Wrote unit tests and reviewed implementations from other trainees.",
    ],
  },
  {
    company: "Konka Group Co.",
    role: "Software Tester",
    period: "Jul 2019 — Aug 2019",
    location: "Shenzhen, China",
    bullets: [
      "Manual testing of mobile phone software and hardware.",
      "Automated testing by executing existing test scripts.",
    ],
  },
];

const education = [
  {
    school: "University of Helsinki",
    degree: "Master's degree, Computer Science",
    period: "2020 — 2024",
  },
  {
    school: "Shenzhen University",
    degree: "Bachelor of Engineering, Automation",
    period: "2016 — 2020",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">// 02. experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I&apos;ve <span className="text-gradient">worked</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A timeline of roles, projects and learning along the way.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${i}`}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-primary shadow-glow" />

                <div
                  className={`pl-8 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <p className="font-mono text-xs text-primary mb-1">{exp.period}</p>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                </div>

                <div
                  className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <div className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-elegant transition-smooth">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8">
            <span className="font-mono text-sm text-primary block mb-2">// education</span>
            Academic <span className="text-gradient">background</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((e) => (
              <div
                key={e.school}
                className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-elegant transition-smooth"
              >
                <p className="font-mono text-xs text-primary mb-1">{e.period}</p>
                <h4 className="text-lg font-semibold">{e.school}</h4>
                <p className="text-sm text-muted-foreground">{e.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
