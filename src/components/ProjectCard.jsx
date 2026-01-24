import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Package } from "lucide-react";

export default function ProjectCard({
  projectTitle,
  projectLink,
  shortDescription,
  fullDescription,
  note,
  techStack,
}) {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center gap-2 group cursor-pointer hover:text-orange-400 transition-colors"
    >
      <Card className="w-full max-w-2xl bg-slate-700 hover:bg-slate-600">
        <CardHeader className="space-y-6">
          <div className="flex flex-row justify-between items-center text-slate-100">
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl group-hover:text-orange-400 transition-colors">
                {projectTitle}
              </CardTitle>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-400" />
            </div>
            <a
              href="/amplify-jamroom.png"
              download="amplify_jamroom_screenshot.png"
              className="hover:text-orange-400 transition-colors text-sm font-semibold"
              onClick={(e) => e.stopPropagation()} // prevents card link from firing
            >
              View Project Screenshot
            </a>
          </div>
        </CardHeader>
        <CardDescription className="text-slate-300 text-md p-6">
          {shortDescription}
        </CardDescription>
        <div className="flex flex-col gap-2">
          <CardContent>
            <div>
              {fullDescription && <p className="mb-4">{fullDescription}</p>}
              {note && (
                <p className="mb-12 text-sm text-slate-400">
                  <em>Note: {note}</em>
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer"
                  >
                    <Badge
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-orange-400 border-orange-400 transition-colors"
                    >
                      {tech.icon ? (
                        <i className={`${tech.icon}`}></i>
                      ) : (
                        <Package /> // empty spacer for no icons
                      )}
                      <span>{tech.techName}</span>
                    </Badge>
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </a>
  );
}
