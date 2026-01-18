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
    <Card className="w-full max-w-2xl hover:border-2">
      <CardHeader className="space-y-6">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <CardTitle className="text-2xl">{projectTitle}</CardTitle>
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <CardDescription className="text-black text-md">
          {shortDescription}
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col gap-2">
        <CardContent>
          <div>
            {fullDescription && <p className="mb-4">{fullDescription}</p>}
            {note && (
              <p className="mb-12">
                <em>Note:</em> {note}
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
                    className="flex items-center gap-2 px-3 py-2"
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
  );
}
