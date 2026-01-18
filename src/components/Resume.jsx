import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Download className="h-5 w-5" />
        <a href="/resume.pdf" download="Josh_Liford_Resume.pdf">
          Download My Resume
        </a>
      </div>
      <div className="h-100px border-b-2 border-black">
        <iframe
            src="/resume.pdf"
            title="Preview Resume"
            className=""
        />
      </div>
    </div>
  );
}
