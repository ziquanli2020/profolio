import { Code2, Globe, GraduationCap, MapPin } from "lucide-react";

const stats = [
  { icon: MapPin, label: "Based in", value: "Helsinki, Finland" },
  { icon: GraduationCap, label: "Education", value: "MSc, University of Helsinki" },
  { icon: Code2, label: "Experience", value: "3+ years in software" },
  { icon: Globe, label: "Languages", value: "EN · 中文 · SV · FI" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="font-mono text-sm text-primary mb-3">// 01. about</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">me</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I graduated from the{" "}
              <span className="text-foreground">University of Helsinki</span> with a
              Master&apos;s degree in Computer Science, after completing my Bachelor&apos;s
              in Automation Engineering at Shenzhen University.
            </p>
            <p>
              For nearly three years at <span className="text-foreground">Unikie</span>, I
              worked as a Software Developer on embedded systems — writing C/C++ code that
              complies with
              <span className="text-foreground"> AUTOSAR</span> and{" "}
              <span className="text-foreground">MISRA C++</span> standards, building unit
              tests, and reviewing teammates&apos; implementations.
            </p>
            <p>
              Now I&apos;m transitioning into{" "}
              <span className="text-foreground">AI engineering and backend development</span> —
              learning AI agents, MCP, and AWS. I value collaboration deeply and enjoy
              building systems that are correct, maintainable, and a pleasure to work on.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4 hover:border-primary/40 transition-smooth"
                >
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
