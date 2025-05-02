import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  FileText, 
  Briefcase, 
  Users, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  CircleDot
} from 'lucide-react';

// Define a unified timeline item type
interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  type: 'professional' | 'research' | 'project' | 'leadership';
  category: string[];
  description: string[];
  skills?: string[];
  link?: string;
  image?: string;
  abstract?: string; // For research papers
  field?: string; // For research papers
  keywords?: string[]; // For research papers
  timePeriod?: string; // Will be computed
  year?: number; // Will be computed for sorting
}

// Combine experience, research and project data
const experienceData: TimelineItem[] = [
  {
    id: 1,
    title: "Strategy & Analytics Analyst",
    organization: "Cartesian Consulting Inc.",
    location: "Boston, MA",
    startDate: "Sep 2024",
    endDate: "Jan 2025",
    type: "professional" as const,
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
    endDate: "Apr 2024",
    type: "professional" as const,
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
    type: "leadership" as const,
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
    title: "TechGirl",
    organization: "Growth",
    location: "Remote",
    startDate: "2022",
    endDate: "2022",
    type: "leadership" as const,
    category: ["entrepreneurship", "marketing"],
    description: [
      "Worked with CEO and CMO to create brand strategy that addresses their target audience more efficiently.",
      "Ideated and executed launch of their ambassador program (extension of their Go-to-market strategy)."
    ],
    skills: ["Brand Strategy", "Marketing", "Go-to-Market Strategy", "Leadership"]
  },
  {
    id: 6,
    title: "Entrepreneur & Fellow",
    organization: "DMZ Sandbox, Ryerson University",
    location: "Toronto, Canada",
    startDate: "Jul 2019",
    endDate: "Aug 2019",
    type: "leadership" as const,
    category: ["entrepreneurship", "sustainability"],
    description: [
      "Selected for a 4-week student start-up incubator programme.",
      "Pitched an innovative & ecofriendly 'E-cup' which replaces the plastic element of paper cups.",
      "Mentored under industry experts and learned about the startup funnel through extensive workshops."
    ],
    skills: ["Entrepreneurship", "Sustainability", "Pitching", "Product Development"]
  },
  {
    id: 7,
    title: "Entrepreneur & Fellow",
    organization: "The Indus Entrepreneurs",
    location: "Hyderabad, IN",
    startDate: "2019",
    endDate: "2019",
    type: "leadership" as const,
    category: ["entrepreneurship", "sustainability"],
    description: [
      "Selected for a 8-week student start-up incubator programme.",
      "Ideated and pitched the 'E-cup' which replaces the plastic element of paper cups.",
      "Placed second in the pitch competition."
    ],
    skills: ["Entrepreneurship", "Sustainability", "Pitching", "Product Development"]
  },
  {
    id: 8,
    title: "Undergraduate Teaching Assistant",
    organization: "Northeastern University",
    location: "Boston, MA",
    startDate: "Jan 2023",
    endDate: "May 2023",
    type: "leadership" as const,
    category: ["education", "data-science"],
    description: [
      "Helped lead two practicums and held office hours.",
      "Helped grade homework and projects."
    ],
    skills: ["Teaching", "Data Science", "Leadership", "Education"]
  },
  {
    id: 9,
    title: "Undergraduate Teaching Assistant - Business Calculus",
    organization: "Northeastern University",
    location: "Boston, MA",
    startDate: "Sept 2021",
    endDate: "May 2022",
    type: "leadership" as const,
    category: ["education", "business"],
    description: [
      "Created a systematic scheduling and organization website for class support.",
      "Coordinated in-class logistics, and liaised with Professor Rajini Jesudason."
    ],
    skills: ["Teaching", "Business Calculus", "Leadership", "Education"]
  },
  {
    id: 10,
    title: "Honor's Living Learning Assistant",
    organization: "Northeastern University",
    location: "Boston, MA",
    startDate: "Sept 2021",
    endDate: "May 2022",
    type: "leadership" as const,
    category: ["education", "entrepreneurship"],
    description: [
      "Lead the Living Learning Community 'Venture Capitalism and Entrepreneurship' and assisted the Living Learning Community 'Travel and Adventure'.",
      "Collaborated with Industry experts to introduce Honor's freshmen to the myriad ways of VC and Entrepreneurship, the Boston Start-up atmosphere, mentors and role models."
    ],
    skills: ["Leadership", "Mentoring", "Venture Capital", "Entrepreneurship"]
  },
  {
    id: 11,
    title: "Bridge to Calculus Peer Mentor",
    organization: "Northeastern University",
    location: "Boston, MA",
    startDate: "Jul 2021",
    endDate: "Aug 2021",
    type: "leadership" as const,
    category: ["education", "mentoring"],
    description: [
      "Tutored students in pre-calculus and AP Calculus in preparation for AP exams.",
      "Developed organization systems and assisted the main teacher during the virtual program."
    ],
    skills: ["Teaching", "Mentoring", "Mathematics", "Education"]
  },
  {
    id: 12,
    title: "Podcast Associate",
    organization: "Idea: Northeastern's Venture Accelerator",
    location: "Boston, MA",
    startDate: "Sept 2021",
    endDate: "May 2022",
    type: "leadership" as const,
    category: ["entrepreneurship", "media"],
    description: [
      "Networking with rising startup founders within Northeastern's Entrepreneurial Ecosystem.",
      "Researching and interviewing Founders about their journey."
    ],
    skills: ["Podcasting", "Entrepreneurship", "Networking", "Content Creation"]
  },
  {
    id: 13,
    title: "Business Consultant & Community Manager",
    organization: "Dogspotted.com",
    location: "New York, NY",
    startDate: "March 2021",
    endDate: "Aug 2021",
    type: "leadership" as const,
    category: ["marketing", "business"],
    description: [
      "Developed and implemented a strategic social media marketing plan.",
      "Defined and established goals to overcome business challenges related to customer retention, brand awareness, and online traffic."
    ],
    skills: ["Marketing", "Social Media", "Business Strategy", "Community Management"]
  },
  {
    id: 14,
    title: "Co-Founder & CTO",
    organization: "FindHer",
    location: "Boston, MA",
    startDate: "Jan 2023",
    endDate: "Nov 2023",
    type: "professional" as const,
    category: ["software-engineering", "leadership"],
    description: [
      "Developed a robust MVP leveraging the MERN stack, ensuring scalable infrastructure with AWS, Netlify, and Render, maintaining 99.9% uptime.",
      "Managed agile product cycles, achieving a 25% reduction in sprint time through enhanced team productivity and process optimization.",
      "Prioritized cybersecurity with proactive integration of tools like Snyk to secure customer data and improve reliability."
    ],
    skills: ["MERN Stack", "AWS", "Netlify", "Render", "Agile", "Cybersecurity", "Snyk", "Product Management"]
  },
  {
    id: 15,
    title: "Business Development Analyst Co-op",
    organization: "Hercules Capital BDC",
    location: "Boston, MA",
    startDate: "Jul 2022",
    endDate: "Dec 2022",
    type: "professional" as const,
    category: ["finance", "analytics"],
    description: [
      "Engineered Excel-based automation, dramatically streamlining business development intake processes with an 80% efficiency gain.",
      "Conducted extensive market analysis using internal proprietary systems, informing strategic investment opportunities and client portfolio management."
    ],
    skills: ["Excel Automation", "Market Analysis", "Business Development", "Portfolio Management"]
  },
  {
    id: 16,
    title: "Founder & President",
    organization: "Bindu (Non-profit)",
    location: "Hyderabad, India",
    startDate: "2020",
    endDate: "2022",
    type: "leadership" as const,
    category: ["social-impact", "leadership"],
    description: [
      "Founded and led an NGO dedicated to combating period poverty, successfully raising over $30,000 and impacting more than 7,000 women across multiple communities.",
      "Designed and maintained an impactful WordPress website to support online fundraising and educational outreach campaigns.",
      "Conducted extensive community engagement initiatives, significantly increasing awareness and generating sustainable impact."
    ],
    skills: ["Non-profit Leadership", "Fundraising", "WordPress", "Community Engagement", "Social Impact"]
  },
  {
    id: 17,
    title: "Undergraduate Teaching Assistant - Data Science",
    organization: "Northeastern University",
    location: "Boston, MA",
    startDate: "2023",
    endDate: "2023",
    type: "professional" as const,
    category: ["education", "data-science"],
    description: [
      "Delivered comprehensive support and guidance to students in Data Science and Business Calculus courses.",
      "Facilitated interactive workshops, office hours, and exam preparation, improving student understanding and performance in quantitative courses."
    ],
    skills: ["Teaching", "Data Science", "Business Calculus", "Workshop Facilitation"]
  },
  {
    id: 18,
    title: "Flooding Remediation through Tree-Planting Initiatives",
    organization: "Research Paper",
    startDate: "June 2023",
    type: "research" as const,
    category: ["environmental-analytics"],
    description: [
      "Conducted a detailed data-driven study of flooding along Mass Ave, Boston, utilizing 311 Service Requests, rainfall data, sewer infrastructure analysis, and urban forestry insights.",
      "Proposed optimal tree-planting sites to mitigate flood risks, enhance community resilience, and improve environmental quality, supported by interactive visualizations and comprehensive spatial analysis."
    ],
    skills: ["Urban Data Science", "Environmental Analytics", "Flood Mitigation", "Spatial Analysis"],
    link: "/papers/flooding-remediation.pdf"
  },
  {
    id: 19,
    title: "Canvas-LinkedIn Profile Analyzer",
    organization: "Project",
    startDate: "April 2025",
    type: "project" as const,
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
    id: 20,
    title: "LoRA Dialect Bias Mitigation",
    organization: "Research Paper",
    startDate: "April 2025",
    type: "research" as const,
    category: ["ai", "nlp", "ethics"],
    description: [
      "Implemented parameter-efficient fine-tuning using Low-Rank Adaptation (LoRA) to mitigate covert dialect bias in LLMs, specifically targeting African American English (AAE).",
      "Demonstrated significant fairness improvements in NLP-driven tasks."
    ],
    skills: ["LoRA", "LLMs", "Bias Mitigation", "Fine-tuning", "NLP Ethics"],
    link: "/papers/LoRA_Dialect_Bias_Mitigation.pdf"
  },
  {
    id: 21,
    title: "CNN & Time Series Hybrid Models for Fashion Trend Forecasting",
    organization: "Research Paper",
    startDate: "April 2025",
    type: "research" as const,
    category: ["computer-vision", "time-series"],
    description: [
      "A novel approach combining Convolutional Neural Networks with LSTM time-series analysis to predict fashion trends by analyzing runway images alongside temporal data from Google Trends, providing actionable insights for inventory optimization."
    ],
    skills: ["CNN", "LSTM", "Fashion Forecasting", "Computer Vision", "Time Series Analysis"],
    link: "/papers/fashion-forecasting.pdf"
  },
  {
    id: 22,
    title: "AWS-Powered Personal Finance Analyzer (Spend Analyzer)",
    organization: "Project",
    startDate: "April 2025",
    type: "project" as const,
    category: ["finance", "cloud-computing"],
    description: [
      "Built an automated financial analytics tool leveraging AWS infrastructure (Lambda, RDS, EC2) and Streamlit. The platform processes user bank statements to provide personalized spending insights, benchmarking, and visualization dashboards."
    ],
    skills: ["AWS", "Streamlit", "Financial Analytics", "Cloud Infrastructure", "Data Visualization"],
    link: "/papers/aws-finance-analyzer.pdf"
  },
  {
    id: 23,
    title: "ESG Portfolio Optimization",
    organization: "Project",
    startDate: "April 2025",
    type: "project" as const,
    category: ["finance", "analytics"],
    description: [
      "Analyzed ESG score momentum using ML (LSTM, Random Forest) for predictive financial modeling, demonstrating significant portfolio outperformance compared to traditional S&P 500 portfolios."
    ],
    skills: ["Python", "LSTM", "Random Forest", "Financial Analysis", "Pandas"],
    link: "https://github.com/Anyueow/ESG-Impact-on-Portfolios"
  },
  {
    id: 24,
    title: "Index Builder: Optimizing Data Structures for Large-scale Search",
    organization: "Research Paper",
    startDate: "February 2025",
    type: "research" as const,
    category: ["information-retrieval", "data-structures"],
    description: [
      "Evaluated various indexing structures (BST, AVL Trees, Hash Maps, Tries) to optimize retrieval performance on large datasets of financial articles, providing comprehensive recommendations for efficient document indexing and query handling."
    ],
    skills: ["Data Structures", "Hash Maps", "AVL Trees", "Information Retrieval", "Search Optimization"],
    link: "/papers/index-builder.pdf"
  },
  {
    id: 25,
    title: "Vera: AI-Driven Dual-Filter Fashion Recommendation Engine",
    organization: "Research Paper",
    startDate: "April 2024",
    type: "research" as const,
    category: ["recommender-systems", "sustainability"],
    description: [
      "Developed a recommendation system combining content-based (CNN-driven image classification) and collaborative filtering (user preference analysis) to deliver personalized fashion recommendations, promoting sustainable fashion practices and reducing wasteful consumption."
    ],
    skills: ["Fashion AI", "Recommender Systems", "Collaborative Filtering", "Content-based Filtering", "Sustainability"],
    link: "/papers/vera.pdf"
  },
  {
    id: 26,
    title: "Analyzing and Predicting the Spread and Emergence of Covid-19 Variants",
    organization: "Research Paper",
    startDate: "April 2022",
    type: "research" as const,
    category: ["epidemiology", "predictive-analytics"],
    description: [
      "Utilized global datasets to identify Covid-19 epicenters, predict locations likely to produce new variants, and developed a comprehensive safety rating system for international travel, integrating healthcare, vaccination data, and government response metrics."
    ],
    skills: ["Covid-19", "Predictive Modeling", "Epidemiology", "Public Health", "Travel Safety"],
    link: "/papers/covid-variant-analysis.pdf"
  },
];

const Timeline = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [expandedPeriods, setExpandedPeriods] = useState<string[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  
  // Process timeline data and group by time periods
  const timelineData = useMemo(() => {
    // Function to extract year from date string
    const extractYear = (dateStr: string): number => {
      const match = dateStr.match(/\d{4}$/);
      return match ? parseInt(match[0]) : new Date().getFullYear();
    };

    // Add year and time period to each item
    const itemsWithPeriods: TimelineItem[] = experienceData.map(item => {
      const startYear = extractYear(item.startDate);
      const endYear = item.endDate && item.endDate !== 'Present' 
        ? extractYear(item.endDate) 
        : new Date().getFullYear();
      
      return {
        ...item,
        year: startYear,
        timePeriod: `${startYear}${endYear !== startYear ? ` - ${endYear}` : ''}`
      };
    });

    // Apply filters
    const filteredItems = itemsWithPeriods
      .filter(item => selectedTypes.length === 0 || selectedTypes.includes(item.type));

    // Group items by time periods
    const groupedByPeriod: { [key: string]: TimelineItem[] } = {};
    filteredItems.forEach(item => {
      if (!item.timePeriod) return;
      
      if (!groupedByPeriod[item.timePeriod]) {
        groupedByPeriod[item.timePeriod] = [];
      }
      groupedByPeriod[item.timePeriod].push(item);
    });

    // Sort periods chronologically (newest first)
    const sortedPeriods = Object.keys(groupedByPeriod).sort((a, b) => {
      const yearA = parseInt(a.split(' ')[0]);
      const yearB = parseInt(b.split(' ')[0]);
      return yearB - yearA;
    });

    return { groupedByPeriod, sortedPeriods };
  }, [experienceData, selectedTypes]);

  // Toggle period selection
  const togglePeriod = (period: string) => {
    setSelectedPeriod(selectedPeriod === period ? null : period);
  };

  // Get icon based on item type
  const getIcon = (type: 'professional' | 'research' | 'project' | 'leadership') => {
    switch (type) {
      case 'professional':
        return <Briefcase className="h-5 w-5" />;
      case 'research':
        return <FileText className="h-5 w-5" />;
      case 'project':
        return <Star className="h-5 w-5" />;
      case 'leadership':
        return <Users className="h-5 w-5" />;
      default:
        return <CircleDot className="h-5 w-5" />;
    }
  };
  
  return (
    <section id="timeline" className="py-16 md:py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12">Career Experience Timeline</h2>
        
        {/* Filters */}
        <div className="mb-12 space-y-6 bg-secondary/10 p-6 rounded-lg">
          <div>
            <h3 className="text-xl font-medium mb-4">Filter by Type</h3>
            <ToggleGroup type="multiple" className="flex flex-wrap gap-3" onValueChange={setSelectedTypes}>
              <ToggleGroupItem value="professional" className="px-6 py-3">
                <Briefcase className="h-5 w-5 mr-2" />
                Professional
              </ToggleGroupItem>
              <ToggleGroupItem value="research" className="px-6 py-3">
                <FileText className="h-5 w-5 mr-2" />
                Research
              </ToggleGroupItem>
              <ToggleGroupItem value="project" className="px-6 py-3">
                <Star className="h-5 w-5 mr-2" />
                Projects
              </ToggleGroupItem>
              <ToggleGroupItem value="leadership" className="px-6 py-3">
                <Users className="h-5 w-5 mr-2" />
                Leadership
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline periods */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-muted -translate-y-1/2" />
            <div className="flex justify-between w-full relative z-10">
              {timelineData.sortedPeriods.map((period) => (
                <button
                  key={period}
                  onClick={() => togglePeriod(period)}
                  className={`
                    flex flex-col items-center gap-2 transition-all duration-300
                    ${selectedPeriod === period ? 'scale-110' : 'hover:scale-105'}
                  `}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center shadow-lg
                    ${selectedPeriod === period ? 'bg-primary text-white' : 'bg-secondary hover:bg-primary/80 hover:text-white'}
                  `}>
                    <CircleDot className="h-5 w-5" />
                  </div>
                  <span className={`
                    text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap
                    ${selectedPeriod === period ? 'bg-primary text-white' : 'bg-secondary/20'}
                  `}>
                    {period}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected period content */}
          {selectedPeriod && (
            <div className="mt-12 space-y-8">
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 min-w-max">
                  {timelineData.groupedByPeriod[selectedPeriod].map((item) => (
                    <Card key={item.id} className="w-[400px] flex flex-col">
                      <CardHeader>
                        <div className="flex items-center gap-3 text-muted-foreground mb-2">
                          {getIcon(item.type)}
                          <span className="text-base font-medium capitalize">{item.type}</span>
                          <span>•</span>
                          <span className="text-base">
                            {item.startDate}{item.endDate ? ` - ${item.endDate}` : ''}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {item.organization}{item.location ? `, ${item.location}` : ''}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="flex-grow">
                        <ul className="list-disc pl-5 space-y-3 mb-4">
                          {item.description.map((desc, index) => (
                            <li key={index} className="text-muted-foreground text-base">{desc}</li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.skills && item.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      
                      {item.link && (
                        <CardFooter className="mt-auto pt-4">
                          <Button 
                            asChild 
                            variant="outline" 
                            size="lg" 
                            className="w-full"
                          >
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-primary flex items-center justify-center gap-2"
                            >
                              <FileText className="h-5 w-5" />
                              View {item.type === 'research' ? 'Paper' : item.type === 'project' ? 'Project' : 'Details'}
                            </a>
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {timelineData.sortedPeriods.length === 0 && (
            <div className="text-center p-12 bg-secondary/20 rounded-lg">
              <p className="text-xl">No experiences match your selected filters. Try adjusting your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
