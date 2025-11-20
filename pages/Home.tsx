import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Hero_workspace_background_image_a0747820.png";
import brandingThumb from "@assets/generated_images/Branding_project_thumbnail_e0b15149.png";
import posterThumb from "@assets/generated_images/Poster_design_thumbnail_b13818dc.png";
import illustrationThumb from "@assets/generated_images/Illustration_project_thumbnail_1064f005.png";
import webThumb from "@assets/generated_images/Web_design_project_thumbnail_fc4c0642.png";
import packagingThumb from "@assets/generated_images/Packaging_project_thumbnail_a1ddbeff.png";
import socialThumb from "@assets/generated_images/Social_media_project_thumbnail_96ffaad1.png";

const featuredProjects = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Branding",
    image: brandingThumb,
    description: "Complete brand identity for a modern tech startup",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Abstract Art Poster",
    category: "Posters",
    image: posterThumb,
    description: "Contemporary poster design with bold typography",
    aspectRatio: "aspect-square",
  },
  {
    id: 3,
    title: "Digital Illustration",
    category: "Illustration",
    image: illustrationThumb,
    description: "Modern digital artwork with fluid shapes",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 4,
    title: "Web Interface Design",
    category: "Branding",
    image: webThumb,
    description: "Clean and minimal website UI/UX design",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "Product Packaging",
    category: "Branding",
    image: packagingThumb,
    description: "Premium packaging design for luxury products",
    aspectRatio: "aspect-square",
  },
  {
    id: 6,
    title: "Social Media Graphics",
    category: "Branding",
    image: socialThumb,
    description: "Engaging social media template designs",
    aspectRatio: "aspect-[4/3]",
  },
];

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("animate-fade-in-up")) {
            const cards = projectsRef.current?.querySelectorAll(".project-card") || [];
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

    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll(".project-card");
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-scale">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Creative Design Studio
              </span>
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              data-testid="text-hero-title"
            >
              OG Visuals
              <br />
              Making A Difference
            </h1>
            <p
              className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
              data-testid="text-hero-subtitle"
            >
              Creating impactful visual experiences through poster design, brand identity, 
              and creative excellence. Based in Lagos, Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 h-12 glass-effect bg-primary/20 hover:bg-primary/30 border-primary/40 text-white shadow-lg backdrop-blur-md no-default-hover-elevate no-default-active-elevate flex items-center gap-2"
                  data-testid="button-view-work"
                >
                  View Work
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 h-12 glass-effect border-white/30 bg-white/10 text-white hover:bg-white/20 shadow-lg backdrop-blur-md no-default-hover-elevate no-default-active-elevate"
                  data-testid="button-get-in-touch"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              data-testid="text-featured-title"
            >
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work showcasing creativity, innovation, and
              attention to detail.
            </p>
          </div>

          <div
            ref={projectsRef}
            className="columns-1 md:columns-2 lg:columns-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card
                  className="project-card group overflow-hidden border-card-border opacity-0 hover-elevate active-elevate-2 transition-all duration-300 break-inside-avoid mb-8 cursor-pointer"
                  data-testid={`card-featured-project-${project.id}`}
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
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/projects">
              <Button size="lg" variant="outline" className="px-8" data-testid="button-view-all-projects">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
