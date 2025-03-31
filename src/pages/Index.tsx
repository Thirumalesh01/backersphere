
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { campaignService } from "@/services/campaignService";
import { ArrowRight, Award, Clock, IndianRupee, Heart, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { differenceInDays } from "date-fns";

const Index = () => {
  const { data: campaigns, isLoading } = useQuery({
    queryKey: ['featuredCampaigns'],
    queryFn: () => campaignService.getCampaigns({ sort: 'trending' }),
  });

  // Helper function to calculate days left
  const calculateDaysLeft = (endDate: string) => {
    const end = new Date(endDate);
    const today = new Date();
    return Math.max(0, differenceInDays(end, today));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Fund Your Dreams <span className="text-accent">Together</span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                CrowdFund connects Indian innovators with supporters to bring creative 
                projects to life through community funding.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/start-campaign">
                  <Button size="lg" className="hover-scale bg-white text-primary hover:bg-white/90">
                    Start Your Campaign
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button size="lg" variant="outline" className="hover-scale border-white text-white hover:bg-white/10">
                    Explore Projects
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/80 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-white" />
                  <span>10,000+ Successful Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-white" />
                  <span>1M+ Backers</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-white" />
                  <span>₹150M+ Funded</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-white/10 rounded-lg blur-3xl opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating on project" 
                className="rounded-lg object-cover shadow-2xl relative w-full h-[400px] border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold relative">
                <span className="gradient-text">Featured Campaigns</span>
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-muted-foreground mt-4">Discover innovative projects that need your support</p>
            </div>
            <Link to="/explore">
              <Button variant="ghost" className="gap-2 hidden sm:flex text-primary">
                View all campaigns <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-[400px] animate-pulse-soft">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="h-48 bg-muted rounded-t-lg" />
                    <div className="p-4 flex-1 flex flex-col gap-2">
                      <div className="h-4 w-24 bg-muted rounded" />
                      <div className="h-6 w-3/4 bg-muted rounded mt-2" />
                      <div className="h-4 w-full bg-muted rounded mt-1" />
                      <div className="h-4 w-2/3 bg-muted rounded" />
                      <div className="mt-auto">
                        <div className="h-6 w-full bg-muted rounded mt-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns?.map((campaign) => (
                <Link to={`/campaign/${campaign.id}`} key={campaign.id}>
                  <Card className="overflow-hidden hover-scale h-full card-highlight">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img 
                          src={campaign.images && campaign.images.length > 0 ? 
                            campaign.images.find(img => img.isPrimary)?.url || campaign.images[0].url 
                            : "/placeholder.svg"} 
                          alt={campaign.title} 
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary/90 text-white">{campaign.category}</Badge>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold line-clamp-2 hover:text-primary transition-colors">{campaign.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{campaign.description}</p>
                        
                        <div className="mt-5 pt-4 border-t flex-1 flex flex-col justify-end">
                          <div className="w-full bg-secondary h-2.5 rounded-full mb-2 overflow-hidden">
                            <div 
                              className="bg-gradient-primary h-2.5 rounded-full" 
                              style={{ width: `${Math.min(100, (campaign.currentAmount / campaign.fundingGoal) * 100)}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="font-bold text-primary">₹{campaign.currentAmount.toLocaleString()}</span>
                            <span className="text-muted-foreground">{Math.round((campaign.currentAmount / campaign.fundingGoal) * 100)}% of ₹{campaign.fundingGoal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm mt-3">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <Clock className="h-4 w-4 text-primary/80" /> {calculateDaysLeft(campaign.endDate)} days left
                            </span>
                            <span className="text-muted-foreground flex items-center gap-1">
                              <Heart className="h-4 w-4 text-primary/80" /> {campaign.backersCount} backers
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
          
          <div className="flex justify-center mt-12 sm:hidden">
            <Link to="/explore">
              <Button variant="outline" className="gap-2 text-primary border-primary/20 hover:bg-primary/5">
                View all campaigns <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold inline-block relative">
              <span className="gradient-text">How CrowdFund Works</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our platform makes it easy to bring your ideas to life through community support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Share Your Idea</h3>
              <p className="text-muted-foreground">
                Create a campaign page that showcases your vision, goals, and the rewards backers will receive.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gather Support</h3>
              <p className="text-muted-foreground">
                Connect with backers who believe in your project and want to help make it a reality.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-5">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch Your Project</h3>
              <p className="text-muted-foreground">
                Once funded, bring your project to life and reward your backers for their support.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/start-campaign">
              <Button size="lg" className="hover-scale shadow-lg">
                Start Your Campaign
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-primary rounded-2xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] mix-blend-overlay opacity-10"></div>
            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">Ready to bring your creative project to life?</h2>
              <p className="text-white/90 max-w-xl mb-10 text-lg">
                Join thousands of creators who have successfully funded their projects on CrowdFund. 
                Our community is ready to support your next big idea.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/start-campaign">
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white shadow-lg">
                    Create a Campaign
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="link" className="text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
