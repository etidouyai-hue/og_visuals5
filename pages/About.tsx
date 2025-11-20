import { Download, Award, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import portraitImage from "@assets/og ceo_1763517060420.png";

const skills = [
  { name: "Poster Design", level: 95 },
  { name: "Brand Identity", level: 90 },
  { name: "Typography", level: 92 },
  { name: "Print Design", level: 88 },
  { name: "Illustration", level: 85 },
  { name: "Visual Communication", level: 90 },
];

const highlights = [
  {
    icon: Award,
    title: "5+ Years",
    description: "Industry Experience",
  },
  {
    icon: Palette,
    title: "100+ Projects",
    description: "Successfully Delivered",
  },
  {
    icon: Zap,
    title: "50+ Clients",
    description: "Across Nigeria",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <div className="animate-fade-in-scale">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={portraitImage}
                alt="Designer Portrait"
                className="w-full h-full object-cover"
                data-testid="img-portrait"
              />
            </div>
          </div>

          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                About Me
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              data-testid="text-about-title"
            >
              Owoyele Godswill Patrick
              <br />
              <span className="text-primary">OG Visuals</span>
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I'm a passionate graphic designer based in Lagos, Nigeria, dedicated to creating 
                compelling visual identities and impactful designs. My work combines strategic 
                thinking with creative excellence to help brands stand out and make a difference.
              </p>
              <p>
                Specializing in poster design, brand identity, and visual communication, 
                I've had the privilege of working with diverse clients across various industries, 
                from churches and educational institutions to restaurants and beverage brands.
              </p>
              <p>
                My approach is rooted in understanding the unique story of each brand and 
                translating that into memorable visual experiences that resonate with audiences. 
                Every project is an opportunity to make a difference through design.
              </p>
            </div>
            <Button
              size="lg"
              className="px-8"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Résumé
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <Card
              key={title}
              className="p-8 text-center hover-elevate transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-highlight-${index}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            data-testid="text-skills-title"
          >
            Skills & Expertise
          </h2>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                data-testid={`container-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex justify-between mb-3">
                  <span
                    className="font-medium text-foreground"
                    data-testid={`text-skill-name-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground" data-testid={`text-skill-level-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-2"
                  data-testid={`progress-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
