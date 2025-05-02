
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, FileText, Mail, Instagram, GraduationCap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-primary">
              Ananya Shah
            </Link>
            <p className="mt-2 text-muted-foreground max-w-md">
              Data Scientist & Software Engineer | Northeastern University, Class of 2025
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialLink href="https://github.com/Anyueow" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="https://linkedin.com/in/ananya-shah-85372918a" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="https://instagram.com/bindu_org" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="/resume.pdf" icon={<FileText className="h-5 w-5" />} label="Resume" />
              <SocialLink href="mailto:shah.anan@northeastern.edu" icon={<Mail className="h-5 w-5" />} label="Email" />
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ananya Shah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground/70 hover:text-primary transition-colors p-2"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
