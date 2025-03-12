
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { campaignService } from "@/services/campaignService";
import { Campaign, CampaignCategory, CAMPAIGN_CATEGORIES } from "@/types/campaign";
import { 
  Search,
  SlidersHorizontal,
  Clock,
  TrendingUp,
  Calendar,
  DollarSign,
  Filter,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { differenceInDays } from "date-fns";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CampaignCategory | "">("");
  const [sortBy, setSortBy] = useState<"trending" | "newest" | "endingSoon" | "mostFunded">("trending");
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const { data: campaigns, isLoading } = useQuery({
    queryKey: ['exploreCampaigns', searchTerm, selectedCategory, sortBy],
    queryFn: () => campaignService.getCampaigns({
      search: searchTerm,
      category: selectedCategory || undefined,
      sort: sortBy,
    }),
  });

  // Helper function to calculate days left
  const calculateDaysLeft = (endDate: string) => {
    const end = new Date(endDate);
    const today = new Date();
    return Math.max(0, differenceInDays(end, today));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The query will automatically re-run because we included searchTerm in the queryKey
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSortBy("trending");
    setFiltersApplied(false);
  };

  const applyFilters = () => {
    setFiltersApplied(true);
    setFiltersVisible(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Explore Projects</h1>
        <p className="text-muted-foreground">
          Discover innovative campaigns from creators around the world
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <form onSubmit={handleSearch} className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for projects..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trending">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Trending</span>
                  </div>
                </SelectItem>
                <SelectItem value="newest">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Newest</span>
                  </div>
                </SelectItem>
                <SelectItem value="endingSoon">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Ending Soon</span>
                  </div>
                </SelectItem>
                <SelectItem value="mostFunded">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>Most Funded</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Sheet open={filtersVisible} onOpenChange={setFiltersVisible}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden md:inline">Filters</span>
                {filtersApplied && <Badge className="h-5 w-5 p-0 flex items-center justify-center">!</Badge>}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-4">Sort by</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { label: "Trending", value: "trending", icon: TrendingUp },
                      { label: "Newest", value: "newest", icon: Calendar },
                      { label: "Ending Soon", value: "endingSoon", icon: Clock },
                      { label: "Most Funded", value: "mostFunded", icon: DollarSign },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                          sortBy === option.value ? "bg-primary/10 text-primary" : ""
                        }`}
                        onClick={() => setSortBy(option.value as any)}
                      >
                        <option.icon className="h-4 w-4" />
                        <span>{option.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-4">Categories</h3>
                  <div className="space-y-2">
                    <div
                      className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                        selectedCategory === "" ? "bg-primary/10 text-primary" : ""
                      }`}
                      onClick={() => setSelectedCategory("")}
                    >
                      <span>All Categories</span>
                    </div>
                    {Object.values(CAMPAIGN_CATEGORIES).map((category) => (
                      <div
                        key={category}
                        className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                          selectedCategory === category ? "bg-primary/10 text-primary" : ""
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  <Button onClick={applyFilters}>Apply Filters</Button>
                  <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {filtersApplied && (
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Active filters:</span>
          {selectedCategory && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
              <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setSelectedCategory("")} />
            </Badge>
          )}
          <Button variant="link" size="sm" className="ml-auto" onClick={clearFilters}>
            Clear all
          </Button>
        </div>
      )}

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
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
                        <span className="font-semibold">${campaign.currentAmount.toLocaleString()}</span>
                        <span className="text-muted-foreground">{Math.round((campaign.currentAmount / campaign.fundingGoal) * 100)}% of ${campaign.fundingGoal.toLocaleString()}</span>
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
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-6">
            Try changing your search criteria or check back later.
          </p>
          <Button onClick={clearFilters}>Clear Filters</Button>
        </div>
      )}
    </div>
  );
};

export default Explore;
