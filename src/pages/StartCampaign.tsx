
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { 
  ArrowLeft,
  ImagePlus,
  Calendar,
  DollarSign
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CAMPAIGN_CATEGORIES } from "@/types/campaign";

const StartCampaign = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Campaign created",
        description: "Your campaign has been submitted for review.",
      });
      // Redirect to dashboard
      // window.location.href = "/dashboard";
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to home</span>
      </Link>
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Start Your Campaign</h1>
          <p className="text-muted-foreground">
            Share your project with the world and get the funding you need
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
              1
            </div>
            <div className={`h-1 w-12 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
              2
            </div>
            <div className={`h-1 w-12 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`}></div>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
              3
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Step {step} of 3
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Let's start with the basics of your campaign
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Campaign Title</Label>
                  <Input id="title" placeholder="Enter a clear, specific title for your campaign" required />
                  <p className="text-xs text-muted-foreground">
                    Choose a title that's specific, memorable, and conveys what your project is about.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subtitle">Subtitle / Tagline</Label>
                  <Input id="subtitle" placeholder="A brief, catchy description of your project" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(CAMPAIGN_CATEGORIES).map((category) => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Where is your project based?" required />
                </div>
              </CardContent>
            </Card>
          )}
          
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
                <CardDescription>
                  Tell people about your campaign and what you're trying to achieve
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="description">Short Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Provide a short summary of your campaign (max 200 characters)"
                    className="h-20"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="story">Campaign Story</Label>
                  <Textarea 
                    id="story" 
                    placeholder="Share the full story of your campaign, why it matters, and how the funds will be used"
                    className="h-48"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Be clear, compelling, and detailed. Include images, risks, and your timeline.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Label>Campaign Images</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center h-40 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                      <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Upload main campaign image
                      </p>
                      <span className="text-xs text-muted-foreground mt-1">
                        1200×675px recommended
                      </span>
                    </div>
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center h-40 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                      <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Add more images
                      </p>
                      <span className="text-xs text-muted-foreground mt-1">
                        Up to 5 additional images
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Funding Details</CardTitle>
                <CardDescription>
                  Set your funding goal and campaign duration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="goal">Funding Goal</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="goal"
                      type="number"
                      min="1"
                      placeholder="How much do you need to raise?"
                      className="pl-9"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Set a realistic goal that covers your project costs.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="startDate"
                        type="date"
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="endDate"
                        type="date"
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fundingType">Funding Type</Label>
                  <Select required>
                    <SelectTrigger id="fundingType">
                      <SelectValue placeholder="Select funding type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fixed">All-or-nothing (Fixed)</SelectItem>
                      <SelectItem value="flexible">Keep-what-you-raise (Flexible)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Fixed: You only receive funds if you meet your goal.<br />
                    Flexible: You keep all funds raised, even if you don't meet your goal.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="risks">Risks & Challenges</Label>
                  <Textarea 
                    id="risks" 
                    placeholder="Describe any potential risks or challenges you might face in completing this project"
                    className="h-20"
                    required
                  />
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            ) : (
              <span></span>
            )}
            
            <Button type="submit" disabled={isLoading}>
              {step < 3 ? 'Continue' : isLoading ? 'Creating Campaign...' : 'Submit Campaign'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartCampaign;
