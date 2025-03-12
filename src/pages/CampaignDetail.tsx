
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { campaignService } from "@/services/campaignService";
import { 
  ArrowLeft, 
  CalendarDays, 
  Clock, 
  DollarSign, 
  Heart, 
  MapPin, 
  Share2, 
  User, 
  Users,
  Award,
  AlertCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { differenceInDays } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const CampaignDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [activeReward, setActiveReward] = useState<string | null>(null);

  const { data: campaign, isLoading, error } = useQuery({
    queryKey: ['campaign', id],
    queryFn: () => campaignService.getCampaign(id as string),
  });

  const calculateDaysLeft = (endDate: string) => {
    const end = new Date(endDate);
    const today = new Date();
    return Math.max(0, differenceInDays(end, today));
  };

  const handleDonate = () => {
    const donationAmount = selectedAmount || parseInt(customAmount);
    
    if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
      });
      return;
    }

    toast({
      title: "Thank you for your donation!",
      description: `You've successfully pledged $${donationAmount.toLocaleString()} to this campaign.`,
    });
    
    // In a real app, this would process the payment
    console.log("Processing donation of", donationAmount);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-64 w-full rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
            <div>
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !campaign) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Campaign Not Found</h2>
        <p className="text-muted-foreground mb-6">
          The campaign you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/">
          <Button>Return to Homepage</Button>
        </Link>
      </div>
    );
  }

  const progressPercentage = Math.min(100, Math.round((campaign.currentAmount / campaign.fundingGoal) * 100));
  const daysLeft = calculateDaysLeft(campaign.endDate);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all campaigns</span>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{campaign.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{campaign.subtitle}</p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {campaign.location || "Global"}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {campaign.creatorName}
              </Badge>
              <Badge variant="secondary">{campaign.category}</Badge>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[400px] mb-6">
              <img 
                src={campaign.images && campaign.images.length > 0 ? 
                  campaign.images.find(img => img.isPrimary)?.url || campaign.images[0].url 
                  : "/placeholder.svg"} 
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-6">
                <Button variant="outline" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Save</span>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
              
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{campaign.backersCount} backers</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="story" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="story">Story</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>
            <TabsContent value="story" className="pt-6">
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: campaign.story }} />
              </div>
              
              {campaign.risks && (
                <div className="mt-8 bg-muted p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Risks and Challenges
                  </h3>
                  <p>{campaign.risks}</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="updates">
              <div className="py-6 text-center">
                <p className="text-muted-foreground">No updates yet.</p>
              </div>
            </TabsContent>
            <TabsContent value="comments">
              <div className="py-6 text-center">
                <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
                <Button variant="outline" className="mt-4">Add Comment</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-2xl">${campaign.currentAmount.toLocaleString()}</span>
                    <span className="text-muted-foreground">of ${campaign.fundingGoal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full mb-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{progressPercentage}% Funded</span>
                    <span>{campaign.backersCount} Backers</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{daysLeft} days left</p>
                    <p className="text-sm text-muted-foreground">
                      Campaign ends on {new Date(campaign.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="pt-2 space-y-4">
                  <h3 className="font-semibold text-lg">Make a donation</h3>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {[10, 25, 50, 100].map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={amount === 100 ? "col-span-3" : ""}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Custom amount"
                      className="w-full pl-9 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                    />
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={handleDonate}
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>About the Creator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  {campaign.creatorAvatar ? (
                    <img 
                      src={campaign.creatorAvatar} 
                      alt={campaign.creatorName}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{campaign.creatorName}</h3>
                  <p className="text-sm text-muted-foreground">Campaign Creator</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Creator of this innovative project with a passion for making a difference.
              </p>
              <Button variant="outline" className="w-full">Contact Creator</Button>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Rewards</h3>
            
            {campaign.rewards.length > 0 ? (
              <div className="space-y-4">
                {campaign.rewards.map((reward) => (
                  <Card 
                    key={reward.id}
                    className={`overflow-hidden cursor-pointer ${activeReward === reward.id ? 'border-primary' : ''}`}
                    onClick={() => setActiveReward(activeReward === reward.id ? null : reward.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{reward.title}</h4>
                          <p className="text-primary font-bold">${reward.amount}</p>
                        </div>
                        {activeReward === reward.id ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      
                      {activeReward === reward.id && (
                        <div className="mt-4 space-y-4">
                          <p className="text-muted-foreground text-sm">{reward.description}</p>
                          
                          {reward.includes && reward.includes.length > 0 && (
                            <div className="space-y-2">
                              <h5 className="text-sm font-medium">Includes:</h5>
                              <ul className="text-sm space-y-1">
                                {reward.includes.map((item, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <Award className="h-3 w-3 text-primary" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center gap-1">
                              <CalendarDays className="h-3 w-3" />
                              Est. Delivery: {new Date(reward.estimatedDelivery).toLocaleDateString()}
                            </span>
                            
                            {reward.limitedQuantity && (
                              <span className="text-muted-foreground">
                                {reward.limitedQuantity - (reward.claimedCount || 0)} of {reward.limitedQuantity} left
                              </span>
                            )}
                          </div>
                          
                          <Button className="w-full">
                            Select this reward
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">No rewards available for this campaign.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
