
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { 
      category: "Programming & Frameworks", 
      items: ["Python", "Java", "JavaScript", "TypeScript", "React", "Vue.js", "MERN Stack"] 
    },
    { 
      category: "Machine Learning & NLP", 
      items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "NLP", "CNNs", "LSTMs", "RAG Models"] 
    },
    { 
      category: "Cloud & Data Infrastructure", 
      items: ["AWS", "Snowflake", "Netlify", "Heroku", "Streamlit", "Docker", "Kubernetes"] 
    },
    { 
      category: "Data Visualization", 
      items: ["Tableau", "PowerBI", "Alteryx", "Pandas", "Matplotlib", "Plotly"] 
    },
    { 
      category: "Financial Modeling", 
      items: ["ESG Analysis", "Stock Prediction", "LSTM Modeling", "Portfolio Optimization"] 
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header text-3xl font-bold mb-8">About Me</h2>
        <div className="mb-12">
          <p className="text-lg mb-4">
            Hi, I'm Ananya Shah, a passionate Data Scientist & Software Engineer graduating from Northeastern University with a 
            combined degree in Data Science and Business Administration (Finance concentration) and a minor in Economics (May 2025).
          </p>
          <p className="text-lg mb-4">
            I love creating impactful solutions by bridging machine learning, data analytics, finance, and human-centered design. 
            I thrive in environments where I can leverage AI to solve complex, real-world problems and build innovative tools 
            that enhance lives and businesses alike.
          </p>
        
          <p className="text-lg mb-8">
            Outside work, you'll find me exploring trendy speakeasies, training for a marathon, or trekking my way through nature trails. Or lowkey bingeing on netflix.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h4 className="font-medium text-primary mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-secondary text-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
