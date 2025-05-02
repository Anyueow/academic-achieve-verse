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
            Helooo! Thanks for visiting my site. As a data science enthusiast and UX design geek, I'm on a mission to create tech that actually makes sense to humans.

            My world revolves around bridging that awkward gap between complex technology and intuitive design. 
          </p>
          <p className="text-lg mb-4">
            I've got this knack for diving headfirst into challenging projects—like FindHer, my biggest undertaking yet. As Co-Founder and CTO, I built a job-matching platform for women in India from the ground up. From spearheading MVP development to leading a team of developers, I've worn all the tech hats you can imagine!
          </p>
     
          <p className="text-lg mb-4">
            Beyond the screen, I've raised over $30,000 through Bindu, a non-profit I co-founded to combat period poverty in India. There's something incredibly fulfilling about using my organizational skills to create positive change.
          </p>
          <p className="text-lg mb-4">
            I believe in building things together—hence my "sandcastles" philosophy: never work alone as a builder! Got a wild idea or just want to geek out over the latest design trends? Let's connect and create something amazing that actually helps people live better lives!
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
