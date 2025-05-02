
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, Briefcase, Users, Star } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: "Strategy & Analytics Analyst",
    organization: "Cartesian Consulting Inc.",
    location: "Boston, MA",
    startDate: "Sep 2024",
    endDate: "Jan 2025",
    type: "professional",
    category: ["data-science", "analytics"],
    description: [
      "Delivered strategic insights by analyzing large-scale datasets using Python and Alteryx for Fortune 500 clients.",
      "Automated workflows resulting in a 30% improvement in efficiency.",
      "Developed advanced SEO tools through web scraping and interactive dashboards (Tableau, PowerBI), directly enhancing client content visibility and strategic decision-making."
    ],
    skills: ["Python", "Alteryx", "Tableau", "PowerBI", "Data Analytics", "SEO", "Web Scraping"]
  },
  {
    id: 2,
    title: "Managing Director",
    organization: "Huntington Angels Network",
    location: "Boston, MA",
    startDate: "Jan 2024",
    endDate: "Present",
    type: "professional",
    category: ["finance", "analytics"],
    description: [
      "Developed a Python-driven algorithmic matching tool connecting investors and entrepreneurs, significantly optimizing due diligence workflows.",
      "Directed strategic evaluations of startups, providing data-driven insights for investment decisions and strategic partnerships.",
      "Strengthened stakeholder engagement through clear, concise communication of complex financial and strategic information."
    ],
    skills: ["Python", "Algorithmic Matching", "Due Diligence", "Investment Analysis", "Strategic Communication"]
  },
  {
    id: 3,
    title: "Event Organizer & Community Lead",
    organization: "GenAI Collective",
    location: "Boston, MA",
    startDate: "Oct 2024",
    endDate: "Present",
    type: "leadership",
    category: ["ai", "community"],
    description: [
      "Led the organization of high-impact community events such as \"Let's Ship Using AI,\" emphasizing practical, hands-on experiences with Generative AI.",
      "Collaborated with industry startups (e.g., Sundai Club) and facilitated interactive workshops attended by over 100 participants.",
      "Curated educational content around Generative AI deployment, enabling participants to rapidly prototype AI solutions."
    ],
    skills: ["Event Management", "Generative AI", "Community Building", "Workshop Facilitation", "Content Creation"]
  },
  {
    id: 4,
    title: "Co-Founder & CTO",
    organization: "FindHer",
    location: "Boston, MA",
    startDate: "Jan 2023",
    endDate: "Nov 2023",
    type: "professional",
    category: ["software-engineering", "leadership"],
    description: [
      "Developed a robust MVP leveraging the MERN stack, ensuring scalable infrastructure with AWS, Netlify, and Render, maintaining 99.9% uptime.",
      "Managed agile product cycles, achieving a 25% reduction in sprint time through enhanced team productivity and process optimization.",
      "Prioritized cybersecurity with proactive integration of tools like Snyk to secure customer data and improve reliability."
    ],
    skills: ["MERN Stack", "AWS", "Netlify", "Render", "Agile", "Cybersecurity", "Snyk", "Product Management"]
  },
  {
    id: 5,
    title: "Business Development Analyst Co-op",
    organization: "Hercules Capital BDC",
    location: "Boston, MA",
    startDate: "Jul 2022",
    endDate: "Dec 2022",
    type: "professional",
    category: ["finance", "analytics"],
    description: [
      "Engineered Excel-based automation, dramatically streamlining business development intake processes with an 80% efficiency gain.",
      "Conducted extensive market analysis using internal proprietary systems, informing strategic investment opportunities and client portfolio management."
    ],
    skills: ["Excel Automation", "Market Analysis", "Business Development", "Portfolio Management"]
  },
  {
    id: 6,
    title: "Founder & President",
    organization: "Bindu (Non-profit)",
    location: "Hyderabad, India",
    startDate: "2020",
    endDate: "2022",
    type: "leadership",
    category: ["social-impact", "leadership"],
    description: [
      "Founded and led an NGO dedicated to combating period poverty, successfully raising over $30,000 and impacting more than 7,000 women across multiple communities.",
      "Designed and maintained an impactful WordPress website to support online fundraising and educational outreach campaigns.",
      "Conducted extensive community engagement initiatives, significantly increasing awareness and generating sustainable impact."
    ],
    skills: ["Non-profit Leadership", "Fundraising", "WordPress", "Community Engagement", "Social Impact"]
  },
  {
    id: 7,
    title: "Undergraduate Teaching Assistant",
    organization: "Northeastern University",
    location: "Boston, MA",
    startDate: "2021",
    endDate: "2023",
    type: "professional",
    category: ["education", "data-science"],
    description: [
      "Delivered comprehensive support and guidance to students in Data Science and Business Calculus courses.",
      "Facilitated interactive workshops, office hours, and exam preparation, improving student understanding and performance in quantitative courses."
    ],
    skills: ["Teaching", "Data Science", "Business Calculus", "Workshop Facilitation"]
  },
  {
    id: 8,
    title: "Flooding Remediation through Tree-Planting Initiatives",
    organization: "Research Paper",
    startDate: "June 2023",
    type: "research",
    category: ["environmental-analytics"],
    description: [
      "Conducted a detailed data-driven study of flooding along Mass Ave, Boston, utilizing 311 Service Requests, rainfall data, sewer infrastructure analysis, and urban forestry insights.",
      "Proposed optimal tree-planting sites to mitigate flood risks, enhance community resilience, and improve environmental quality, supported by interactive visualizations and comprehensive spatial analysis."
    ],
    skills: ["Urban Data Science", "Environmental Analytics", "Flood Mitigation", "Spatial Analysis"],
    link: "/papers/flooding-remediation.pdf"
  },
  {
    id: 9,
    title: "Canvas-LinkedIn Profile Analyzer",
    organization: "Project",
    startDate: "April 2025",
    type: "project",
    category: ["ai", "software-engineering"],
    description: [
      "AI-driven team formation tool linking Canvas LMS & LinkedIn",
      "Improved student compatibility using automated profile scraping & analysis",
      "Integrated advanced algorithms based on organizational psychology insights (Google Aristotle, MIT Human Dynamics)"
    ],
    skills: ["AI", "Web Scraping", "Team Analytics", "LinkedIn API", "Canvas API"],
    link: "https://github.com/Anyueow/canvas-linkedin-analyzer"
  },
  {
    id: 10,
    title: "LoRA Dialect Bias Mitigation",
    organization: "Research Paper",
    startDate: "April 2025",
    type: "research",
    category: ["ai", "nlp", "ethics"],
    description: [
      "Implemented parameter-efficient fine-tuning using Low-Rank Adaptation (LoRA) to mitigate covert dialect bias in LLMs, specifically targeting African American English (AAE).",
      "Demonstrated significant fairness improvements in NLP-driven tasks."
    ],
    skills: ["LoRA", "LLMs", "Bias Mitigation", "Fine-tuning", "NLP Ethics"],
    link: "/papers/LoRA_Dialect_Bias_Mitigation.pdf"
  }
];

const TimelineItem = ({ item }: { item: typeof experienceData[0] }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getIcon = () => {
    switch(item.type) {
      case 'professional': return <Briefcase className="h-4 w-4" />;
      case 'research': return <FileText className="h-4 w-4" />;
      case 'project': return <Star className="h-4 w-4" />;
      case 'leadership': return <Users className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };
  
  return (
    <Card className="mb-6 hover:shadow-md transition-shadow">
      <CardHeader className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              {getIcon()}
              <span className="text-sm font-medium capitalize">{item.type}</span>
              <span>•</span>
              <span className="text-sm">
                {item.startDate}{item.endDate ? ` - ${item.endDate}` : ''}
              </span>
            </div>
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <CardDescription className="mt-1">
              {item.organization}{item.location ? `, ${item.location}` : ''}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      {expanded && (
        <>
          <CardContent className="pt-0">
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {item.description.map((desc, index) => (
                <li key={index} className="text-muted-foreground">{desc}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {item.skills && item.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
          
          {item.link && (
            <CardFooter className="pt-0">
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
              >
                <FileText className="h-3 w-3" /> View {item.type === 'research' ? 'Paper' : 'Project'}
              </a>
            </CardFooter>
          )}
        </>
      )}
    </Card>
  );
};

const Timeline = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const filterItems = () => {
    return experienceData
      .filter(item => selectedTab === "all" || item.category.includes(selectedTab))
      .filter(item => selectedTypes.length === 0 || selectedTypes.includes(item.type))
      .sort((a, b) => {
        // Sort by date (assuming date format is consistent)
        // Extract year for simplified comparison
        const getYear = (date: string) => {
          const match = date.match(/\d{4}$/);
          return match ? parseInt(match[0]) : 0;
        };
        
        const aYear = getYear(a.startDate);
        const bYear = getYear(b.startDate);
        
        // Sort in descending order (most recent first)
        return bYear - aYear;
      });
  };
  
  return (
    <section id="timeline" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header text-3xl font-bold mb-8">Career Experience</h2>
        
        <div className="mb-8 space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Filter by Type:</h3>
            <ToggleGroup type="multiple" className="flex flex-wrap gap-2" onValueChange={(value) => setSelectedTypes(value)}>
              <ToggleGroupItem value="professional" aria-label="Filter by professional experiences">
                <Briefcase className="h-4 w-4 mr-2" />
                Professional
              </ToggleGroupItem>
              <ToggleGroupItem value="research" aria-label="Filter by research papers">
                <FileText className="h-4 w-4 mr-2" />
                Research
              </ToggleGroupItem>
              <ToggleGroupItem value="project" aria-label="Filter by projects">
                <Star className="h-4 w-4 mr-2" />
                Projects
              </ToggleGroupItem>
              <ToggleGroupItem value="leadership" aria-label="Filter by leadership roles">
                <Users className="h-4 w-4 mr-2" />
                Leadership
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Filter by Field:</h3>
            <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedTab}>
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="data-science">Data Science</TabsTrigger>
                <TabsTrigger value="ai">AI & ML</TabsTrigger>
                <TabsTrigger value="nlp">NLP</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="software-engineering">Software Engineering</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="social-impact">Social Impact</TabsTrigger>
                <TabsTrigger value="environmental-analytics">Environmental</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-10">
          {filterItems().length > 0 ? (
            filterItems().map(item => (
              <TimelineItem key={item.id} item={item} />
            ))
          ) : (
            <div className="text-center p-8 bg-secondary/20 rounded-md">
              <p>No experiences match your selected filters. Try adjusting your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
