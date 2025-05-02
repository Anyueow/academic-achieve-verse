
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar } from 'lucide-react';

const researchData = [
  {
    id: 1,
    title: "Optimization Algorithms for Resource Allocation in Cloud Computing Environments",
    abstract: "This paper examines novel optimization techniques for allocating computational resources in multi-tenant cloud environments, focusing on efficiency and cost-effectiveness.",
    date: "April 2025",
    field: "Cloud Computing",
    keywords: ["Resource Allocation", "Cloud Computing", "Optimization Algorithms", "Multi-tenant Systems"],
    link: "/papers/cloud-resource-allocation.pdf"
  },
  {
    id: 2,
    title: "Natural Language Processing Techniques for Sentiment Analysis in Social Media",
    abstract: "An investigation into the application of machine learning and neural networks for analyzing sentiment patterns across various social media platforms.",
    date: "January 2025",
    field: "Natural Language Processing",
    keywords: ["NLP", "Sentiment Analysis", "Social Media", "Machine Learning"],
    link: "/papers/nlp-sentiment-analysis.pdf"
  },
  {
    id: 3,
    title: "Security Vulnerabilities in Internet of Things Networks: A Comparative Study",
    abstract: "This research identifies and analyzes common security vulnerabilities in IoT networks, evaluating different mitigation strategies and their effectiveness.",
    date: "October 2024",
    field: "Cybersecurity",
    keywords: ["IoT Security", "Network Vulnerabilities", "Cybersecurity", "Risk Assessment"],
    link: "/papers/iot-security.pdf"
  },
  {
    id: 4,
    title: "Designing Accessible User Interfaces for Educational Applications",
    abstract: "A study on implementing accessibility standards in educational software to enhance usability for users with diverse needs and abilities.",
    date: "July 2024",
    field: "Human-Computer Interaction",
    keywords: ["Accessibility", "UI Design", "Educational Technology", "Inclusive Design"],
    link: "/papers/accessible-ui.pdf"
  }
];

const Research = () => {
  return (
    <section id="research" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header text-3xl font-bold mb-8">Research Papers</h2>
        <div className="grid grid-cols-1 gap-6">
          {researchData.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchCard = ({ paper }: { paper: typeof researchData[0] }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{paper.date}</span>
        </div>
        <CardTitle className="text-xl font-semibold">{paper.title}</CardTitle>
        <Badge variant="outline" className="mt-2 w-fit">
          {paper.field}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{paper.abstract}</p>
        <div className="flex flex-wrap gap-2">
          {paper.keywords.map((keyword, index) => (
            <Badge key={index} variant="secondary">{keyword}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full sm:w-auto">
          <a href={paper.link} target="_blank" rel="noopener noreferrer">
            <FileText className="h-4 w-4 mr-2" />
            Read Paper
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Research;
