import ProjectCard from "./ProjectCard";
import projectInfo from "../../projectInfo";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center text-left items-center space-y-6">
      <div>
        {projectInfo.map((proj) => (
          <ProjectCard
            key={proj.id}
            projectTitle={proj.projectTitle}
            projectLink={proj.projectLink}
            shortDescription={proj.shortDescription}
            fullDescription={proj.fullDescription}
            note={proj.note}
            techStack={proj.techStack}
          />
        ))}
      </div>
    </div>
  );
}
