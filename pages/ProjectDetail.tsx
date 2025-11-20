import { useRoute, Link } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, User, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
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

const projectData: Record<string, any> = {
  "1": {
    title: "Brand Identity System",
    category: "Branding",
    image: brandingThumb,
    client: "TechStart Inc.",
    role: "Lead Designer",
    tools: "Adobe Illustrator, Photoshop",
    year: "2024",
    description:
      "A comprehensive brand identity system for a modern tech startup, including logo design, color palette, typography, and brand guidelines. The project focused on creating a clean, contemporary visual language that reflects innovation and trustworthiness.",
    challenge:
      "The client needed a fresh, modern identity that would differentiate them in a crowded tech market while maintaining professional credibility.",
    solution:
      "We developed a minimal yet distinctive visual system centered around geometric shapes and a vibrant purple accent color, creating a memorable brand that stands out while remaining professional.",
  },
  "2": {
    title: "Be Like Bella - Motivational Poster",
    category: "Posters",
    image: bellaPoster,
    client: "Personal Brand",
    role: "Graphic Designer",
    tools: "Adobe Photoshop, Illustrator",
    year: "2024",
    description:
      "An empowering motivational poster designed for aspiring models with bold typography and striking visual elements. The design features strong messaging about confidence, happiness, and working hard.",
    challenge:
      "Create a powerful visual statement that inspires and motivates while maintaining a modern, edgy aesthetic.",
    solution:
      "Bold vertical typography paired with dramatic black and white photography creates an impactful design. Red accent colors emphasize key messages about confidence and determination.",
  },
  "3": {
    title: "Digital Illustration",
    category: "Illustration",
    image: illustrationThumb,
    client: "Creative Agency",
    role: "Illustrator",
    tools: "Procreate, Adobe Illustrator",
    year: "2023",
    description:
      "Modern digital artwork featuring fluid organic shapes and gradient colors. This illustration was created for a digital marketing campaign focusing on creativity and innovation.",
    challenge:
      "Create an eye-catching illustration that represents creativity and forward-thinking.",
    solution:
      "Fluid, organic shapes combined with vibrant gradient colors create a sense of movement and innovation.",
  },
  "4": {
    title: "Chi's Gallery Event Services",
    category: "Posters",
    image: chiGalleryPoster,
    client: "Chi's Gallery",
    role: "Graphic Designer",
    tools: "Adobe Photoshop, Canva",
    year: "2024",
    description:
      "Vibrant promotional poster for a full-service event planning company showcasing their diverse offerings from surprise packages to party decorations. Features a dynamic grid layout displaying their products and services.",
    challenge:
      "Create an engaging promotional poster that showcases multiple services while maintaining visual coherence and brand identity.",
    solution:
      "A purple gradient background with rounded photo frames creates a cohesive look. Clear service listing and contact information make it easy for potential clients to understand offerings.",
  },
  "5": {
    title: "Product Packaging",
    category: "Branding",
    image: packagingThumb,
    client: "Luxury Brand",
    role: "Package Designer",
    tools: "Adobe Illustrator, Dimension",
    year: "2023",
    description:
      "Premium packaging design for luxury products emphasizing elegance and sophistication. The design balances minimalism with premium materials and finishes.",
    challenge:
      "Create packaging that conveys luxury and quality while remaining functional and sustainable.",
    solution:
      "Minimalist design with premium materials, subtle embossing, and eco-friendly construction that enhances the unboxing experience.",
  },
  "6": {
    title: "Revival Service Church Flyer",
    category: "Posters",
    image: churchPoster,
    client: "All Youths for Christ Ministry",
    role: "Graphic Designer",
    tools: "Adobe Photoshop, Illustrator",
    year: "2025",
    description:
      "Professional church event poster for a special revival service featuring guest ministers. The design balances elegance with impact through sophisticated typography and a radiant purple gradient background.",
    challenge:
      "Design a poster that conveys spiritual significance while clearly communicating event details and honored guests.",
    solution:
      "Elegant typography hierarchy with gold accents on a glowing purple background creates a sense of reverence. Professional portraits of ministers establish credibility and importance.",
  },
  "7": {
    title: "Dennis Osadebay University Notebook",
    category: "Posters",
    image: dennisNotebook,
    client: "Dennis Osadebay University",
    role: "Graphic Designer",
    tools: "Adobe Photoshop, InDesign",
    year: "2024",
    description:
      "Educational notebook cover design for university students featuring campus imagery and an organized student information layout. The 10-in-1 design provides comprehensive academic planning tools.",
    challenge:
      "Create a functional yet attractive notebook cover that represents the university brand while providing practical student information fields.",
    solution:
      "Split layout featuring prominent campus photos and a structured information grid. Professional design elements reinforce academic excellence while maintaining usability.",
  },
  "8": {
    title: "Character Illustration",
    category: "Illustration",
    image: illustrationThumb,
    client: "Publishing House",
    role: "Illustrator",
    tools: "Procreate, Adobe Illustrator",
    year: "2023",
    description:
      "Whimsical character designs for a children's book series. The illustrations combine charm and personality with age-appropriate visual storytelling.",
    challenge:
      "Create engaging characters that appeal to young readers while supporting the narrative effectively.",
    solution:
      "Expressive character designs with distinctive personalities, using warm colors and friendly shapes to create approachable, memorable characters.",
  },
  "9": {
    title: "Mandy's Kitchen Restaurant Menu",
    category: "Posters",
    image: mandyRestaurant,
    client: "Mandy's Kitchen",
    role: "Graphic Designer",
    tools: "Adobe Photoshop",
    year: "2024",
    description:
      "Appetizing restaurant promotional poster featuring menu highlights and mouthwatering food photography. The design emphasizes the restaurant's diverse menu offerings from grilled chicken to seafood.",
    challenge:
      "Create a poster that makes food look irresistible while clearly presenting menu options and contact information.",
    solution:
      "Dark textured background makes food photos pop. Chalk-style typography creates a casual, inviting atmosphere. Strategic placement of chef portrait adds personal touch and credibility.",
  },
  "10": {
    title: "OG Visuals Brand Promotion",
    category: "Posters",
    image: ogPromo,
    client: "OG Visuals",
    role: "Graphic Designer",
    tools: "Adobe Photoshop, Illustrator",
    year: "2024",
    description:
      "Dynamic promotional poster for a creative graphics agency highlighting their 24/7 service, fast delivery, and professional expertise. Features playful 3D elements and modern design software icons.",
    challenge:
      "Showcase the agency's capabilities and service quality while maintaining a fun, approachable brand personality.",
    solution:
      "Playful composition with 3D emoji characters and throne imagery conveys creativity and authority. Clear service highlights and location information ensure practical utility.",
  },
  "11": {
    title: "Pitch Drinks Brand Launch",
    category: "Posters",
    image: pitchPoster,
    client: "Pitch Drinks",
    role: "Graphic Designer",
    tools: "Adobe Photoshop, Illustrator",
    year: "2024",
    description:
      "Dynamic beverage brand launch poster featuring vibrant product imagery with splashing peaches and bold typography. The design captures the energy and refreshment of the new drink line.",
    challenge:
      "Create excitement around a new beverage brand launch while communicating the product's fresh, fruity flavor profile.",
    solution:
      "Energetic composition with splashing fruit and liquid creates movement and freshness. Bold retro-style typography in green and red reinforces the brand's playful personality.",
  },
  "12": {
    title: "Pitch Drinks Product Showcase",
    category: "Posters",
    image: pitchProduct,
    client: "Pitch Drinks",
    role: "Graphic Designer & Photographer",
    tools: "Adobe Photoshop, Photography",
    year: "2024",
    description:
      "Refreshing product photography poster showcasing the beverage in an eye-catching setting with ice, water splashes, and mint leaves. Professional studio photography highlights the product's premium quality.",
    challenge:
      "Create a product shot that stands out in the crowded beverage market while clearly displaying the product and brand.",
    solution:
      "Cool blue background with dynamic water and ice elements creates freshness. Large product can with condensation and garnish emphasizes refreshment. Repeated brand name ensures recognition.",
  },
  "13": {
    title: "Web Interface Design",
    category: "Branding",
    image: webThumb,
    client: "Digital Startup",
    role: "UI/UX Designer",
    tools: "Figma, Adobe XD",
    year: "2024",
    description:
      "Clean and minimal website interface design focusing on user experience and modern aesthetics. The design system emphasizes clarity and usability while maintaining visual appeal.",
    challenge:
      "Create an intuitive interface that serves both novice and expert users while maintaining brand consistency.",
    solution:
      "A flexible design system with clear information hierarchy, intuitive navigation patterns, and consistent visual language across all pages.",
  },
  "14": {
    title: "Social Media Graphics",
    category: "Branding",
    image: socialThumb,
    client: "Marketing Agency",
    role: "Graphic Designer",
    tools: "Adobe Photoshop, Illustrator",
    year: "2024",
    description:
      "Engaging social media template designs for consistent brand presence across platforms. The templates balance visual impact with versatility for various content types.",
    challenge:
      "Design flexible templates that maintain brand consistency while adapting to different content needs.",
    solution:
      "Modular template system with strong visual identity that allows for content variation while maintaining recognizable brand elements.",
  },
};

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const rawId = params?.id?.trim();

  if (!rawId || !/^\d+$/.test(rawId) || !projectData[rawId]) {
    return <NotFound />;
  }

  const projectId = rawId;
  const project = projectData[projectId];

  const maxId = Object.keys(projectData).length;
  const currentId = parseInt(projectId);
  const prevId = Math.max(1, currentId - 1).toString();
  const nextId = Math.min(maxId, currentId + 1).toString();
  const hasPrev = currentId > 1;
  const hasNext = currentId < maxId;

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/projects">
          <Button variant="ghost" data-testid="button-back" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      <div className="relative mb-12 overflow-hidden" style={{ height: "70vh" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover animate-fade-in"
          data-testid="img-project-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <div className="text-sm text-primary font-medium mb-4">
            {project.category}
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
            data-testid="text-project-title"
          >
            {project.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-lg bg-card border border-card-border mb-12">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <User className="h-4 w-4" />
                <span>Client</span>
              </div>
              <div className="font-medium" data-testid="text-project-client">
                {project.client}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <User className="h-4 w-4" />
                <span>Role</span>
              </div>
              <div className="font-medium" data-testid="text-project-role">
                {project.role}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Wrench className="h-4 w-4" />
                <span>Tools</span>
              </div>
              <div className="font-medium" data-testid="text-project-tools">
                {project.tools}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span>Year</span>
              </div>
              <div className="font-medium" data-testid="text-project-year">
                {project.year}
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16 animate-fade-in-up">
          <h2 data-testid="heading-project-overview">Project Overview</h2>
          <p>{project.description}</p>

          <h2 data-testid="heading-challenge">The Challenge</h2>
          <p>{project.challenge}</p>

          <h2 data-testid="heading-solution">The Solution</h2>
          <p>{project.solution}</p>
        </div>

        <div className="mb-16">
          <div className="rounded-2xl overflow-hidden mb-8" data-testid="img-detail-contained-1">
            <img
              src={project.image}
              alt="Project detail 1"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full mb-16" data-testid="img-detail-fullbleed-1">
        <img
          src={project.image}
          alt="Project detail full width"
          className="w-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 data-testid="heading-process">Design Process</h2>
          <p>
            The design process involved extensive research, iterative prototyping,
            and close collaboration with stakeholders to ensure the final product
            exceeded expectations and aligned perfectly with brand values.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden" data-testid="img-detail-grid-1">
            <img
              src={project.image}
              alt="Project detail 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden" data-testid="img-detail-grid-2">
            <img
              src={project.image}
              alt="Project detail 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full mb-16" data-testid="img-detail-fullbleed-2">
        <img
          src={project.image}
          alt="Project detail showcase"
          className="w-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 data-testid="heading-outcome">Outcome</h2>
          <p>
            The final result successfully captured the client's vision while pushing
            creative boundaries. The project received positive feedback and achieved
            measurable improvements in user engagement and brand recognition.
          </p>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-4 z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            {hasPrev ? (
              <Link href={`/projects/${prevId}`}>
                <Button variant="outline" data-testid="button-prev-project" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {hasNext && (
              <Link href={`/projects/${nextId}`}>
                <Button variant="outline" data-testid="button-next-project" className="flex items-center gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
