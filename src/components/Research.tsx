
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar } from 'lucide-react';

const researchData = [
  {
    id: 1,
    title: "LoRA Dialect Bias Mitigation in Large Language Models",
    abstract: "This research reduces hidden dialect bias in Large Language Models (Meta-LLaMA-3) using Low-Rank Adaptation (LoRA) techniques, improving fairness in AI decision-making processes like resume screening and hiring scenarios.",
    date: "January 2025",
    field: "Natural Language Processing",
    keywords: ["LLMs", "Bias Mitigation", "LoRA Fine-tuning", "Fairness in AI", "Dialect Debiasing"],
    link: "/papers/lora-bias-mitigation.pdf"
  },
  {
    id: 2,
    title: "CNN & Time Series Hybrid Models for Fashion Trend Forecasting",
    abstract: "A novel approach combining Convolutional Neural Networks with LSTM time-series analysis to predict fashion trends by analyzing runway images alongside temporal data from Google Trends, providing actionable insights for inventory optimization.",
    date: "November 2024",
    field: "Computer Vision & Time Series Analysis",
    keywords: ["CNN", "LSTM", "Fashion Forecasting", "Computer Vision", "Time Series Analysis"],
    link: "/papers/fashion-forecasting.pdf"
  },
  {
    id: 3,
    title: "ESG Portfolio Optimization & Momentum-Based Prediction",
    abstract: "This study analyzes ESG score momentum using advanced machine learning techniques including LSTM and Random Forest for predictive financial modeling, demonstrating significant portfolio outperformance compared to traditional S&P 500 portfolios.",
    date: "August 2024",
    field: "Financial Machine Learning",
    keywords: ["ESG Investing", "Portfolio Optimization", "LSTM", "Random Forest", "Financial Modeling"],
    link: "/papers/esg-portfolio-optimization.pdf"
  },
  {
    id: 4,
    title: "AI-Driven Team Formation: Canvas-LinkedIn Profile Integration",
    abstract: "An exploration of AI-driven team formation technologies integrating Canvas LMS and LinkedIn data to improve student compatibility through automated profile scraping and analysis, incorporating organizational psychology frameworks from Google Aristotle and MIT Human Dynamics.",
    date: "May 2024",
    field: "Human-Computer Interaction",
    keywords: ["Team Formation", "Profile Analysis", "Organizational Psychology", "Educational Technology", "AI Integration"],
    link: "/papers/team-formation.pdf"
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
