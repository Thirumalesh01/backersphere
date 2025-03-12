
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { CAMPAIGN_CATEGORIES, CampaignCategory } from "@/types/campaign";
import { useQuery } from "@tanstack/react-query";
import { campaignService } from "@/services/campaignService";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Clock, ArrowRight } from "lucide-react";
import { differenceInDays } from "date-fns";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<CampaignCategory | null>(null);

  const { data: campaigns, isLoading } = useQuery({
    queryKey: ['categoryCampaigns', selectedCategory],
    queryFn: () => campaignService.getCampaigns({ 
      category: selectedCategory || undefined,
      sort: 'trending'
    }),
    enabled: !!selectedCategory,
  });

  const calculateDaysLeft = (endDate: string) => {
    const end = new Date(endDate);
    const today = new Date();
    return Math.max(0, differenceInDays(end, today));
  };

  const CategoryCard = ({ category }: { category: CampaignCategory }) => {
    const getCategoryImage = (cat: CampaignCategory) => {
      const images: Record<CampaignCategory, string> = {
        'technology': 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
        'creative': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
        'community': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca',
        'business': 'https://images.unsplash.com/photo-1539788816080-8bdd722d8c22',
        'health': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        'education': 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
        'environment': 'https://images.unsplash.com/photo-1623347581726-1c7ed97fc172',
        'other': 'https://images.unsplash.com/photo-1545987796-200677ee1011',
      };
      return images[cat] || 'https://images.unsplash.com/photo-1531297484001-80022131f5a1';
    };

    const isSelected = selectedCategory === category;
    
    return (
      <div 
        className={`cursor-pointer transition-all duration-200 ${isSelected ? 'ring-2 ring-primary scale-[1.02]' : 'hover:scale-[1.02]'}`}
        onClick={() => setSelectedCategory(category)}
      >
        <Card className="overflow-hidden h-[180px] relative">
          <img 
            src={getCategoryImage(category)} 
            alt={category} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          <CardContent className="relative z-10 h-full flex flex-col justify-end p-5">
            <h3 className="text-xl font-semibold text-white">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Project Categories</h1>
      <p className="text-muted-foreground mb-8">
        Explore campaigns by category or browse all of our innovative projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {Object.values(CAMPAIGN_CATEGORIES).map((category) => (
          <CategoryCard key={category} category={category} />
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold capitalize">{selectedCategory} Projects</h2>
            <Link to={`/explore?category=${selectedCategory}`} className="text-primary hover:underline flex items-center">
              View all <ArrowRight className="ml-1 h-4 w-4" />
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
          ) : campaigns && campaigns.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
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
                            <span className="font-semibold flex items-center gap-1"><IndianRupee className="h-3 w-3" />{campaign.currentAmount.toLocaleString()}</span>
                            <span className="text-muted-foreground">{Math.round((campaign.currentAmount / campaign.fundingGoal) * 100)}% of <IndianRupee className="inline h-3 w-3" />{campaign.fundingGoal.toLocaleString()}</span>
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
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      )}

      {!selectedCategory && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground mb-4">Select a category to view projects</p>
        </div>
      )}
    </div>
  );
};

export default Categories;
