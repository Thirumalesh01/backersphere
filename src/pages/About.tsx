
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, IndianRupee, Award, Users, Building, Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">About CrowdFund</h1>
            <p className="text-xl text-muted-foreground mb-6">
              India's premier crowdfunding platform connecting creators with supporters to bring innovative ideas to life.
            </p>
            <p className="text-muted-foreground mb-4">
              At CrowdFund, we believe that great ideas can come from anywhere. We're committed to empowering Indian creators, entrepreneurs, and innovators by providing them with the tools and platform they need to turn their visions into reality.
            </p>
            <p className="text-muted-foreground">
              Founded in 2023, we've helped thousands of projects raise over ₹150 million, creating a vibrant ecosystem of creativity and innovation across the country.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="CrowdFund Team" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-primary/5">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To democratize funding for creative and innovative ideas across India, enabling creators from all backgrounds to bring their projects to life with the support of their communities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary/5">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To build India's most trusted and accessible crowdfunding ecosystem, fueling a new generation of entrepreneurs, artists, and innovators who will shape the future of our country.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats section */}
      <section className="mb-16 bg-muted/30 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Impact</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <IndianRupee className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">₹150M+</h3>
            <p className="text-muted-foreground">Total Funds Raised</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">10,000+</h3>
            <p className="text-muted-foreground">Successful Projects</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">1M+</h3>
            <p className="text-muted-foreground">Creators & Backers</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">28</h3>
            <p className="text-muted-foreground">States Represented</p>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Priya Sharma" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Priya Sharma</h3>
            <p className="text-primary mb-2">Founder & CEO</p>
            <p className="text-muted-foreground text-sm">
              Former venture capitalist with a passion for enabling creative entrepreneurship across India.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Rahul Patel" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Rahul Patel</h3>
            <p className="text-primary mb-2">CTO</p>
            <p className="text-muted-foreground text-sm">
              Tech leader with extensive experience building scalable platforms for India's digital economy.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Aisha Kapoor" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Aisha Kapoor</h3>
            <p className="text-primary mb-2">Chief Marketing Officer</p>
            <p className="text-muted-foreground text-sm">
              Marketing expert with deep experience in digital and community-driven campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="mb-16 bg-muted/30 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Building className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Office</h3>
              <p className="text-muted-foreground">
                CrowdFund Headquarters<br />
                91 Koramangala<br />
                Bengaluru, Karnataka 560034<br />
                India
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-2">
                General Inquiries:<br />
                <a href="mailto:info@crowdfund.in" className="text-primary hover:underline">info@crowdfund.in</a>
              </p>
              <p className="text-muted-foreground">
                Creator Support:<br />
                <a href="mailto:support@crowdfund.in" className="text-primary hover:underline">support@crowdfund.in</a>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-2">
                Customer Support:<br />
                <a href="tel:+918041234567" className="text-primary hover:underline">+91 804 123 4567</a>
              </p>
              <p className="text-muted-foreground">
                Business Hours:<br />
                Monday-Friday, 9:30 AM - 6:30 PM IST
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join the CrowdFund Community</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Whether you're a creator with a bold idea or a backer looking to support innovation, CrowdFund is the place for you.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/start-campaign">
            <Button size="lg" className="hover-scale">
              Start a Project
            </Button>
          </Link>
          <Link to="/explore">
            <Button size="lg" variant="outline" className="hover-scale">
              Discover Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
