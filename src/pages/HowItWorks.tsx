
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Rocket, TrendingUp, CheckCircle, IndianRupee, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">How CrowdFund Works</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          CrowdFund is India's premier platform for creators and entrepreneurs to bring their projects to life with the support of the community.
        </p>
      </section>

      {/* Process section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">1. Create Your Campaign</h3>
            <p className="text-muted-foreground">
              Build a compelling campaign page showcasing your project, set your funding goal, and define backer rewards.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">2. Share & Promote</h3>
            <p className="text-muted-foreground">
              Launch your campaign and share it with your network. Use social media, email, and other channels to reach potential backers.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">3. Get Funded & Deliver</h3>
            <p className="text-muted-foreground">
              Once your funding goal is met, receive your funds and bring your project to life. Fulfill rewards to your backers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20 bg-muted/30 py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose CrowdFund?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <IndianRupee className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Built for India</h3>
                  <p className="text-muted-foreground">
                    CrowdFund is designed specifically for Indian creators, with payments in INR and support for all major Indian payment methods.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lower Fees</h3>
                  <p className="text-muted-foreground">
                    We charge among the lowest platform fees in the industry, ensuring creators keep more of their funding.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Our team provides personalized support to help you create, launch, and manage your campaign successfully.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Campaign Promotion</h3>
                  <p className="text-muted-foreground">
                    We highlight promising projects across our platform and marketing channels to help you reach more potential backers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">How much does it cost to use CrowdFund?</h3>
            <p className="text-muted-foreground">
              CrowdFund charges a 5% platform fee on successfully funded projects, plus payment processing fees. You only pay if your project is fully funded.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">What happens if I don't reach my funding goal?</h3>
            <p className="text-muted-foreground">
              CrowdFund uses an all-or-nothing funding model. If you don't reach your goal, all backers receive a full refund and you don't pay any fees.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">How long can my campaign run for?</h3>
            <p className="text-muted-foreground">
              Campaigns can run from 1 to 60 days. Our data shows that 30 days is the optimal campaign length for most projects.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Can I edit my campaign after launching?</h3>
            <p className="text-muted-foreground">
              You can edit campaign descriptions, add updates, and modify rewards. However, your funding goal and campaign duration cannot be changed after launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="text-center bg-primary/10 py-16 px-4 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Idea to Life?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of innovative creators who have successfully funded their projects on CrowdFund.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/start-campaign">
            <Button size="lg" className="hover-scale">
              Start Your Campaign
            </Button>
          </Link>
          <Link to="/explore">
            <Button size="lg" variant="outline" className="hover-scale">
              Explore Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
