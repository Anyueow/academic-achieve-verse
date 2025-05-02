
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectsData = [
  {
    id: 1,
    title: "Machine Learning Classifier",
    description: "A classification model that identifies and categorizes textual data using natural language processing techniques.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop",
    technologies: ["Python", "Scikit-learn", "NLTK", "Pandas"],
    category: "data-science",
    github: "https://github.com/yourusername/ml-classifier",
    demo: "https://example.com/demo"
  },
  {
    id: 2,
    title: "Student Information System",
    description: "A comprehensive system for managing student records, course enrollments, and academic performance tracking.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
    category: "software",
    github: "https://github.com/yourusername/student-system",
    demo: "https://example.com/demo"
  },
  {
    id: 3,
    title: "E-commerce Data Analysis",
    description: "Statistical analysis of e-commerce transaction data to identify customer behavior patterns and optimize marketing strategies.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop",
    technologies: ["R", "ggplot2", "dplyr", "Tableau"],
    category: "data-science",
    github: "https://github.com/yourusername/ecommerce-analysis",
    demo: "https://example.com/demo"
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "A web-based application for real-time inventory tracking, order management, and sales reporting.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
    technologies: ["JavaScript", "Node.js", "MongoDB", "Express"],
    category: "software",
    github: "https://github.com/yourusername/inventory-system",
    demo: "https://example.com/demo"
  },
  {
    id: 5,
    title: "Smart Home IoT Network",
    description: "A system of interconnected IoT devices for home automation, featuring centralized control and monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&auto=format&fit=crop",
    technologies: ["Python", "Raspberry Pi", "MQTT", "Node.js"],
    category: "iot",
    github: "https://github.com/yourusername/smart-home",
    demo: "https://example.com/demo"
  },
  {
    id: 6,
    title: "Financial Market Predictor",
    description: "An algorithm that analyzes historical market data to predict future trends using time series forecasting methods.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    category: "data-science",
    github: "https://github.com/yourusername/market-predictor",
    demo: "https://example.com/demo"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProjects = activeTab === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header text-3xl font-bold mb-8">Class Projects</h2>
        
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="software">Software Development</TabsTrigger>
              <TabsTrigger value="data-science">Data Science</TabsTrigger>
              <TabsTrigger value="iot">IoT</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="software" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="data-science" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
          <TabsContent value="iot" className="mt-0">
            <ProjectGrid projects={filteredProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectGrid = ({ projects }: { projects: typeof projectsData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
  return (
    <Card className="overflow-hidden h-full project-card flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover project-image"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 gap-3">
        <Button variant="outline" size="sm" asChild className="flex-1">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild className="flex-1">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
