import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                size="icon"
                variant="ghost"
                className="rounded-full hover-elevate"
                asChild
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-testid={`link-social-${label.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Modern Graphic Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
