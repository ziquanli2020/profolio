const skillGroups = [
  { title: "Languages", items: ["Python", "C", "C++", "TypeScript"] },
  {
    title: "Systems & Tools",
    items: ["Linux", "POSIX", "QNX", "Git", "Bazel", "GoogleTest"],
  },
  {
    title: "Standards & Practices",
    items: [
      "AUTOSAR",
      "MISRA C++",
      "Scrum",
      "Jira",
      "Unit Testing",
      "Code Review",
    ],
  },
  {
    title: "Learning Now",
    items: ["AI Agents", "MCP", "AWS Cloud Practitioner", "Backend Dev"],
  },
];

const languages = [
  { name: "Cantonese / Mandarin", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Swedish", level: "Elementary" },
  { name: "Finnish", level: "Elementary" },
];

const certifications = [
  "AI Engineer Agentic Track — Complete Agent & MCP Course",
  "Ultimate AWS Certified Cloud Practitioner CLF-C02",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">// 03. skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            What I work with daily and what I&apos;m sharpening next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/40 hover:shadow-elegant transition-smooth"
            >
              <h3 className="font-mono text-sm text-primary mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card/50 p-6">
            <h3 className="font-mono text-sm text-primary mb-4">Languages</h3>
            <ul className="space-y-3">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground">{l.name}</span>
                  <span className="text-muted-foreground font-mono text-xs">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card/50 p-6">
            <h3 className="font-mono text-sm text-primary mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">◆</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
