
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-background pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            <span className="text-foreground">Ananya</span>
            <span className="text-primary"> Shah</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Data Scientist & Software Engineer | Northeastern University
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection('projects')}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('research')}>
              Read Research Papers
            </Button>
          </div>
          <button 
            onClick={() => scrollToSection('about')} 
            aria-label="Scroll to About section"
            className="animate-bounce mt-12 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
