import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-sm text-primary mb-3">// 04. contact</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s <span className="text-gradient">build</span> something.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I&apos;m open to backend and AI engineering opportunities, collaborations, or
            just a chat about systems, code, or career. My inbox is always open.
          </p>

          <a
            href="mailto:ziquanli2020@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth"
          >
            <Mail className="h-5 w-5" /> ziquanli2020@gmail.com
          </a>

          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://github.com/ziquanli2020"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border bg-card/50 p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ziquan-l-a8b8551bb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border bg-card/50 p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <footer className="container relative mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">© {new Date().getFullYear()} Ziquan Li</p>
          <p className="font-mono">
            Built with React + Tailwind · Deployed on GitHub Pages
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
