import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, FileText, Mail, Phone, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-header text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <ContactItem 
                    icon={<Mail className="h-5 w-5 text-primary" />}
                    title="Email"
                    contact="shah.anan@northeastern.edu"
                    href="mailto:shah.anan@northeastern.edu"
                  />
                  <ContactItem 
                    icon={<Phone className="h-5 w-5 text-primary" />}
                    title="Phone"
                    contact="Upon Request"
                    href="#"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Profiles</h3>
                <div className="space-y-4">
                  <ContactItem 
                    icon={<Github className="h-5 w-5 text-primary" />}
                    title="GitHub"
                    contact="github.com/Anyueow"
                    href="https://github.com/Anyueow"
                  />
                  <ContactItem 
                    icon={<Linkedin className="h-5 w-5 text-primary" />}
                    title="LinkedIn"
                    contact="linkedin.com/in/ananya-shah"
                    href="https://linkedin.com/in/ananya-shah-85372918a"
                  />
                  <ContactItem 
                    icon={<Instagram className="h-5 w-5 text-primary" />}
                    title="Instagram"
                    contact="instagram.com/bindu_org"
                    href="https://instagram.com/bindu_org"
                  />
                  <ContactItem 
                    icon={<FileText className="h-5 w-5 text-primary" />}
                    title="Resume"
                    contact="Download PDF"
                    href="/resume/Ananya Shah May 2025.pdf"
                    isDownload
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  contact: string;
  href: string;
  isDownload?: boolean;
}

const ContactItem = ({ icon, title, contact, href, isDownload = false }: ContactItemProps) => (
  <a 
    href={href} 
    target={isDownload ? "_self" : "_blank"} 
    rel={!isDownload ? "noopener noreferrer" : undefined}
    download={isDownload}
    className="flex items-center space-x-3 p-2 -mx-2 rounded-md hover:bg-secondary transition-colors"
  >
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{contact}</p>
    </div>
  </a>
);

export default Contact;
