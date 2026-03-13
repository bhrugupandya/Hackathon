import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge"; // Assuming a Badge component exists for tags

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} className="block group"> {/* Wrap in Link for navigation */}
      <div className="border-2 border-border p-4 shadow-neo bg-background text-foreground flex flex-col h-full
                    group-hover:shadow-none group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-200">
        <div className="relative w-full h-48 mb-4 border-2 border-border overflow-hidden bg-gray-200"> {/* Image container */}
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="border-2 border-border shadow-neo-sm px-3 py-1 bg-accent/20"> {/* Apply neo-brutalist badge styling */}
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}