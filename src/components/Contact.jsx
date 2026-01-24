import { Mail, Download } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
        {/* Left column - Contact info */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div>
            <p className="text-center md:text-left text-slate-100">
              Let's connect! Feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div>
            <a
              href="https://github.com/joshliford"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-orange-400 transition-colors"
            >
              <i className="devicon-github-original"></i>
            </a>
            </div>
            <div>
            <a
              href="https://www.linkedin.com/in/joshua-liford/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-orange-400 transition-colors"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
            </div>
            <div>
            <a href="mailto:josh.liford0412@gmail.com" className="text-3xl hover:text-orange-400 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
            </div>
            <div className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Download className="h-5 w-5" />
              <a
                href="/resume.pdf"
                download="Josh_Liford_Resume.pdf"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right column - Resume */}
        <div className="space-y-4 w-full max-w-2xl">
          <div className="w-full h-100 rounded">
            <iframe
              src="/resume.pdf"
              title="Preview Resume"
              className="w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
