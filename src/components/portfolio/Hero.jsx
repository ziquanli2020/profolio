import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p
            className="font-mono text-sm text-primary mb-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-muted-foreground">$</span> whoami
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Ziquan <span className="text-gradient">Li</span>
          </h1>
          <h2
            className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            Software Engineer building{" "}
            <span className="text-foreground font-medium">backend systems</span> and
            exploring{" "}
            <span className="text-foreground font-medium">AI engineering</span>.
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            Based in Helsinki, Finland. University of Helsinki MSc graduate with 3+ years
            of embedded & systems development experience. Currently leveling up in AI
            agents and cloud architecture.
          </p>
          <div
            className="flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth"
            >
              <Mail className="h-4 w-4" /> Contact me
            </a>
            <a
              href="https://github.com/ziquanli2020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-smooth"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ziquan-l-a8b8551bb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-smooth"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-smooth animate-float"
          aria-label="Scroll to about"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
