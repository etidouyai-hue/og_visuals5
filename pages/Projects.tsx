import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import brandingThumb from "@assets/generated_images/Branding_project_thumbnail_e0b15149.png";
import illustrationThumb from "@assets/generated_images/Illustration_project_thumbnail_1064f005.png";
import webThumb from "@assets/generated_images/Web_design_project_thumbnail_fc4c0642.png";
import packagingThumb from "@assets/generated_images/Packaging_project_thumbnail_a1ddbeff.png";
import socialThumb from "@assets/generated_images/Social_media_project_thumbnail_96ffaad1.png";
import bellaPoster from "@assets/BELLA'S WORK_1763514915622.png";
import chiGalleryPoster from "@assets/CHI'S GALLERY_1763514915623.png";
import churchPoster from "@assets/CHURCH FLIER FOR AYFCM_1763514915624.png";
import dennisNotebook from "@assets/DENNIS OSADABAY 3_1763514915624.png";
import mandyRestaurant from "@assets/mandy-restaurant_1763514915625.png";
import ogPromo from "@assets/og graphic promotion_1763514915626.png";
import pitchPoster from "@assets/pitch_1763514915629.png";
import pitchProduct from "@assets/STAGE ONE_1763514915630.png";

type Category = "All" | "Branding" | "Posters" | "Illustration";

const projects = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Branding" as Category,
    image: brandingThumb,
    description: "Complete brand identity for a modern tech startup",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Be Like Bella - Motivational Poster",
    category: "Posters" as Category,
    image: bellaPoster,
    description: "Bold empowerment poster for aspiring models with striking typography",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 3,
    title: "Digital Illustration",
    category: "Illustration" as Category,
    image: illustrationThumb,
    description: "Modern digital artwork with fluid shapes",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 4,
    title: "Chi's Gallery Event Services",
    category: "Posters" as Category,
    image: chiGalleryPoster,
    description: "Vibrant promotional poster for event planning services",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "Product Packaging",
    category: "Branding" as Category,
    image: packagingThumb,
    description: "Premium packaging design for luxury products",
    aspectRatio: "aspect-square",
  },
  {
    id: 6,
    title: "Revival Service Church Flyer",
    category: "Posters" as Category,
    image: churchPoster,
    description: "Professional church event poster with elegant typography",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 7,
    title: "Dennis Osadebay University Notebook",
    category: "Posters" as Category,
    image: dennisNotebook,
    description: "Educational notebook cover design for university students",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 8,
    title: "Character Illustration",
    category: "Illustration" as Category,
    image: illustrationThumb,
    description: "Whimsical character designs for children's book",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 9,
    title: "Mandy's Kitchen Restaurant Menu",
    category: "Posters" as Category,
    image: mandyRestaurant,
    description: "Appetizing restaurant promotional poster with menu highlights",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 10,
    title: "OG Visuals Brand Promotion",
    category: "Posters" as Category,
    image: ogPromo,
    description: "Creative agency promotional poster showcasing services",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 11,
    title: "Pitch Drinks Brand Launch",
    category: "Posters" as Category,
    image: pitchPoster,
    description: "Dynamic beverage brand launch poster with vibrant colors",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 12,
    title: "Pitch Drinks Product Showcase",
    category: "Posters" as Category,
    image: pitchProduct,
    description: "Refreshing product photography poster for beverage brand",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 13,
    title: "Web Interface Design",
    category: "Branding" as Category,
    image: webThumb,
    description: "Clean and minimal website UI/UX design",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 14,
    title: "Social Media Graphics",
    category: "Branding" as Category,
    image: socialThumb,
    description: "Engaging social media template designs",
    aspectRatio: "aspect-[4/3]",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = ["All", "Branding", "Posters", "Illustration"];

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".project-card");
      cards.forEach((card) => {
        card.classList.add("opacity-0");
        card.classList.remove("animate-fade-in-up");
      });
    }
    
    setTimeout(() => {
      const filtered =
        activeCategory === "All"
          ? projects
          : projects.filter((p) => p.category === activeCategory);
      setFilteredProjects(filtered);
    }, 150);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("animate-fade-in-up")) {
            const cards = gridRef.current?.querySelectorAll(".project-card") || [];
            const index = Array.from(cards).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add("animate-fade-in-up");
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".project-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            data-testid="text-projects-title"
          >
            Creative Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a curated collection of design projects spanning branding,
            illustration, and visual communication.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="px-6"
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div
          ref={gridRef}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {filteredProjects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <a>
                <Card
                  className="project-card group overflow-hidden border-card-border opacity-0 hover-elevate active-elevate-2 transition-all duration-300 break-inside-avoid mb-8"
                  data-testid={`card-project-${project.id}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative overflow-hidden ${project.aspectRatio}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </a>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
