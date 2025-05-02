
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar } from 'lucide-react';

const researchData = [

  {
    "id": 1,
    "title": "CNN & Time Series Hybrid Models for Fashion Trend Forecasting",
    "abstract": "A novel approach combining Convolutional Neural Networks with LSTM time-series analysis to predict fashion trends by analyzing runway images alongside temporal data from Google Trends, providing actionable insights for inventory optimization.",
    "date": "April 2025",
    "field": "Computer Vision & Time Series Analysis",
    "keywords": ["CNN", "LSTM", "Fashion Forecasting", "Computer Vision", "Time Series Analysis"],
    "link": "/papers/fashion-forecasting.pdf"
  },
  {
    "id": 3,
    "title": "LoRA-based Dialect Bias Mitigation in Large Language Models",
    "abstract": "Implemented parameter-efficient fine-tuning using Low-Rank Adaptation (LoRA) to mitigate covert dialect bias in LLMs, specifically targeting African American English (AAE). Demonstrated significant fairness improvements in NLP-driven tasks.",
    "date": "April 2025",
    "field": "Natural Language Processing & AI Ethics",
    "keywords": ["LoRA", "Dialect Bias", "NLP", "Fairness in AI", "Large Language Models"],
    "link": "/papers/LoRA_Dialect_Bias_Mitigation.pdf"
  },
  {
    "id": 5,
    "title": "Index Builder: Optimizing Data Structures for Large-scale Search",
    "abstract": "Evaluated various indexing structures (BST, AVL Trees, Hash Maps, Tries) to optimize retrieval performance on large datasets of financial articles, providing comprehensive recommendations for efficient document indexing and query handling.",
    "date": "February 2025",
    "field": "Information Retrieval & Data Structures",
    "keywords": ["Data Structures", "Hash Maps", "AVL Trees", "Information Retrieval", "Search Optimization"],
    "link": "/papers/index-builder.pdf"
  },
  {
    "id": 6,
    "title": "Vera: AI-Driven Dual-Filter Fashion Recommendation Engine",
    "abstract": "Developed a recommendation system combining content-based (CNN-driven image classification) and collaborative filtering (user preference analysis) to deliver personalized fashion recommendations, promoting sustainable fashion practices and reducing wasteful consumption.",
    "date": "April 2024",
    "field": "Recommender Systems & Sustainability",
    "keywords": ["Fashion AI", "Recommender Systems", "Collaborative Filtering", "Content-based Filtering", "Sustainability"],
    "link": "/papers/vera.pdf"
  },
 
  {
    "id": 7,
    "title": "Flooding Remediation through Tree-Planting Initiatives",
    "abstract": "Conducted a detailed data-driven study of flooding along Mass Ave, Boston, utilizing 311 Service Requests, rainfall data, sewer infrastructure analysis, and urban forestry insights. Proposed optimal tree-planting sites to mitigate flood risks, enhance community resilience, and improve environmental quality, supported by interactive visualizations and comprehensive spatial analysis.",
    "date": "June 2023",
    "field": "Urban Data Science & Environmental Analytics",
    "keywords": ["Flood Mitigation", "Urban Forestry", "Spatial Analysis", "Interactive Visualization", "Environmental Resilience"],
    "link": "/papers/flooding-remediation.pdf"
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
