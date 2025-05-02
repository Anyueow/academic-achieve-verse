
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "Java", "C++", "R"] },
    { category: "Web Development", items: ["React", "Node.js", "HTML/CSS", "Vue.js"] },
    { category: "Data Science", items: ["Machine Learning", "Data Analysis", "Statistical Modeling", "MATLAB"] },
    { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter"] }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-4">
              I am a passionate computer science student with interests spanning software development, 
              data analysis, and machine learning. My academic journey has allowed me to explore various domains 
              and develop projects that solve real-world problems.
            </p>
            <p className="text-lg mb-4">
              Throughout my academic career, I've taken on challenging projects that have strengthened my technical skills 
              and expanded my knowledge base. I enjoy collaborating with peers and professors on research initiatives 
              that push the boundaries of what's possible with technology.
            </p>
            <p className="text-lg">
              This portfolio showcases selected class projects and research papers that represent my academic achievements 
              and technical abilities. Feel free to explore my work and get in touch if you'd like to discuss potential 
              collaborations or opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-4">
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
      </div>
    </section>
  );
};

export default About;
