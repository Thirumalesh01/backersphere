
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
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Fund Your Dreams <span className="text-primary">Together</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                CrowdFund connects Indian innovators with supporters to bring creative 
                projects to life through community funding.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="hover-scale">
                  Start Your Campaign
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  Explore Projects
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>10,000+ Successful Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>1M+ Backers</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-primary" />
                  <span>₹150M+ Funded</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg blur-3xl opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating on project" 
                className="rounded-lg object-cover shadow-2xl relative w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Campaigns</h2>
              <p className="text-muted-foreground mt-2">Discover innovative projects that need your support</p>
            </div>
            <Button variant="ghost" className="gap-2 hidden sm:flex">
              View all campaigns <ArrowRight className="h-4 w-4" />
            </Button>
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
                  <Card className="overflow-hidden hover-scale h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <img 
                        src={campaign.images && campaign.images.length > 0 ? 
                          campaign.images.find(img => img.isPrimary)?.url || campaign.images[0].url 
                          : "/placeholder.svg"} 
                        alt={campaign.title} 
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-4 flex-1 flex flex-col">
                        <Badge variant="outline" className="w-fit mb-2">{campaign.category}</Badge>
                        <h3 className="text-xl font-semibold line-clamp-2">{campaign.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{campaign.description}</p>
                        
                        <div className="mt-4 pt-4 border-t flex-1 flex flex-col justify-end">
                          <div className="w-full bg-secondary h-2 rounded-full mb-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${Math.min(100, (campaign.currentAmount / campaign.fundingGoal) * 100)}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="font-semibold">₹{campaign.currentAmount.toLocaleString()}</span>
                            <span className="text-muted-foreground">{Math.round((campaign.currentAmount / campaign.fundingGoal) * 100)}% of ₹{campaign.fundingGoal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm mt-2">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <Clock className="h-4 w-4" /> {calculateDaysLeft(campaign.endDate)} days left
                            </span>
                            <span className="text-muted-foreground">{campaign.backersCount} backers</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
          
          <div className="flex justify-center mt-8 sm:hidden">
            <Button variant="outline" className="gap-2">
              View all campaigns <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How CrowdFund Works</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our platform makes it easy to bring your ideas to life through community support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/50 border">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Your Idea</h3>
                <p className="text-muted-foreground">
                  Create a campaign page that showcases your vision, goals, and the rewards backers will receive.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 border">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gather Support</h3>
                <p className="text-muted-foreground">
                  Connect with backers who believe in your project and want to help make it a reality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 border">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch Your Project</h3>
                <p className="text-muted-foreground">
                  Once funded, bring your project to life and reward your backers for their support.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="hover-scale">
              Start Your Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-primary rounded-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 mix-blend-multiply" />
            <div className="relative z-10 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">Ready to bring your creative project to life?</h2>
              <p className="text-white/90 max-w-xl mb-8">
                Join thousands of creators who have successfully funded their projects on CrowdFund. 
                Our community is ready to support your next big idea.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                  Create a Campaign
                </Button>
                <Button size="lg" variant="link" className="text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
