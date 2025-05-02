
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectsData = [
  {
    id: 1,
    title: "Canvas-LinkedIn Profile Analyzer",
    description: "AI-driven team formation tool linking Canvas LMS & LinkedIn, improving student compatibility using automated profile scraping & analysis. Integrates frameworks from Google Aristotle and MIT Human Dynamics.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop",
    technologies: ["Python", "Machine Learning", "NLP", "Canvas API", "LinkedIn API"],
    category: "data-science",
    github: "https://github.com/Anyueow/group-optimizer",

  },
  {
    id: 2,
    title: "LoRA Dialect Bias Mitigation",
    description: "Proved hidden dialect bias in Large Language Models (Meta-LLaMA-3) using LoRA adapters, improving fairness in AI decision-making for resume screening and hiring scenarios.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop",
    technologies: ["PyTorch", "LLMs", "NLP", "LoRA", "Fairness Metrics"],
    category: "data-science",
    github: "https://github.com/mihirathale98/aae-dialect-bias-mitigation",
 
  },
  {
    id: 3,
    title: "CNN & Time Series Fashion Forecasting",
    description: "Built CNN-LSTM hybrid model predicting fashion trends using runway images and Google Trends data, providing actionable insights for inventory optimization and consumer behavior analysis.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop",
    technologies: ["TensorFlow", "CNN", "LSTM", "Computer Vision", "Time Series"],
    category: "data-science",
    github: "https://github.com/Anyueow/FashionTrendAnalyzer2.0",

  },
  {
    id: 4,
    title: "Spend Analyzer (AWS/Streamlit)",
    description: "Automated finance analysis tool processing user bank statements via AWS Lambda and S3, visualizing spending trends and personalized financial insights through Streamlit.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
    technologies: ["Python", "AWS Lambda", "S3", "Streamlit", "Data Visualization"],
    category: "software",
    github: "https://github.com/Anyueow/personal-finance-tracker",

  },
  {
    id: 5,
    title: "FindHer Web Application",
    description: "Developed scalable MVP on MERN stack for FindHer, a platform connecting users with resources. Led a 4-person developer team achieving 99.9% uptime and reduced sprint cycles by 25%.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&auto=format&fit=crop",
    technologies: ["MongoDB", "Express", "React", "Node.js", "AWS"],
    category: "software",
    github: "https://github.com/Anyueow/findher-frontend",

  },
  {
    id: 6,
    title: "ESG Portfolio Optimization",
    description: "Analyzed ESG score momentum using ML (LSTM, Random Forest) for predictive financial modeling, demonstrating significant portfolio outperformance compared to traditional S&P 500 portfolios.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop",
    technologies: ["Python", "LSTM", "Random Forest", "Financial Analysis", "Pandas"],
    category: "finance",
    github: "https://github.com/Anyueow/ESG-Impact-on-Portfolios",
  }, 
  {
    id: 7,
    title: "Analyzing and Predicting the Spread and Emergence of Covid-19 Variants",
    description: "Utilized global datasets to identify Covid-19 epicenters, predict locations likely to produce new variants, and developed a comprehensive safety rating system for international travel, integrating healthcare, vaccination data, and government response metrics.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&auto=format&fit=crop",
    technologies: ["Python", "Plotly", "geopandas", "pandas", "numpy"],
    category: "data-science",
    link: "/papers/covid-variant-analysis.pdf"
  }, 
  {
    id: 8,
    title: "AWS-Powered Personal Finance Analyzer (Spend Analyzer)",
    description: "Built an automated financial analytics tool leveraging AWS infrastructure (Lambda, RDS, EC2) and Streamlit. The platform processes user bank statements to provide personalized spending insights, benchmarking, and visualization dashboards.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
    technologies: ["AWS", "Streamlit", "Financial Analytics", "Cloud Infrastructure", "Data Visualization"],
    category: "software",
    link: "/papers/aws-finance-analyzer.pdf"
  },
  {
    id: 9,
    title: "Simple RAG & Ingestion Pipeline",
    description: "Local Retrieval‑Augmented Generation system that ingests DS4300 course notes, chunks and embeds text (MiniLM, MPNet, Nomic), stores vectors in Redis / Qdrant / Chroma, and serves context‑aware answers via Ollama‑hosted Mistral & Qwen models. Includes a benchmarking suite to compare chunk sizes, embedding models, vector DBs, and LLM prompts with interactive Plotly dashboards.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600",
    technologies: [
      "Python",
      "LangChain",
      "Ollama",
      "Mistral",
      "Qwen‑7B",
      "Redis",
      "Qdrant",
      "Chroma",
      "SentenceTransformers",
      "Plotly",
      "Pandas"
    ],
    category: "software",
    link: "https://github.com/Anyueow/SimpleRAGandIngest"
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
        <h2 className="section-header text-3xl font-bold mb-8">Portfolio Projects</h2>
        
        <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="software">Software Development</TabsTrigger>
              <TabsTrigger value="data-science">Data Science & ML</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
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
          <TabsContent value="finance" className="mt-0">
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

      </CardFooter>
    </Card>
  );
};

export default Projects;
