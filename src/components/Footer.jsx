export default function Footer() {
  return (
    <div className="flex justify-center items-center">
      <footer className="py-6">
        <p className="text-slate-400">
          <a
            href="https://github.com/joshliford"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-orange-400 transition-colors"
          >
            Designed & Built by Josh Liford
          </a>
          . Built using
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-white italic hover:text-orange-400 transition-colors"
          >
            VS Code
          </a>
          ,
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hover:text-orange-400 text-white italic transition-colors"
          >
            React
          </a>
          ,
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hover:text-orange-400 text-white italic transition-colors"
          >
            Tailwind CSS
          </a>
          , and
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hover:text-orange-400 text-white italic transition-colors"
          >
            Shadcn UI
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
