
import { Campaign, CampaignCategory, CampaignFilters } from '@/types/campaign';
import { sampleCampaigns } from '@/data/sampleCampaigns';

// In a real app, these would be API calls to a backend
export const campaignService = {
  // Get all campaigns with optional filtering
  getCampaigns: async (filters?: CampaignFilters): Promise<Campaign[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredCampaigns = [...sampleCampaigns];
    
    if (filters) {
      // Apply category filter
      if (filters.category) {
        filteredCampaigns = filteredCampaigns.filter(
          campaign => campaign.category === filters.category
        );
      }
      
      // Apply status filter
      if (filters.status) {
        filteredCampaigns = filteredCampaigns.filter(
          campaign => campaign.status === filters.status
        );
      }
      
      // Apply search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredCampaigns = filteredCampaigns.filter(
          campaign => 
            campaign.title.toLowerCase().includes(searchLower) ||
            campaign.description.toLowerCase().includes(searchLower) ||
            campaign.creatorName.toLowerCase().includes(searchLower)
        );
      }
      
      // Apply sorting
      if (filters.sort) {
        switch (filters.sort) {
          case 'newest':
            filteredCampaigns.sort((a, b) => 
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            break;
          case 'endingSoon':
            filteredCampaigns.sort((a, b) => 
              new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
            );
            break;
          case 'mostFunded':
            filteredCampaigns.sort((a, b) => b.currentAmount - a.currentAmount);
            break;
          case 'trending':
            // For demo purposes, we'll define trending as a combination of recency and funding
            filteredCampaigns.sort((a, b) => {
              const aScore = (b.currentAmount / b.fundingGoal) + 
                             (new Date(b.createdAt).getTime() / 86400000);
              const bScore = (a.currentAmount / a.fundingGoal) + 
                             (new Date(a.createdAt).getTime() / 86400000);
              return aScore - bScore;
            });
            break;
        }
      }
    }
    
    return filteredCampaigns;
  },
  
  // Get a single campaign by ID
  getCampaign: async (id: string): Promise<Campaign | null> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return sampleCampaigns.find(campaign => campaign.id === id) || null;
  },
  
  // Get a single campaign by slug
  getCampaignBySlug: async (slug: string): Promise<Campaign | null> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return sampleCampaigns.find(campaign => campaign.slug === slug) || null;
  },
  
  // Get featured campaigns
  getFeaturedCampaigns: async (): Promise<Campaign[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return sampleCampaigns.filter(campaign => campaign.featured);
  },
  
  // Get campaigns by category
  getCampaignsByCategory: async (category: CampaignCategory): Promise<Campaign[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return sampleCampaigns.filter(campaign => campaign.category === category);
  },
  
  // Get campaigns created by a specific user
  getUserCampaigns: async (userId: string): Promise<Campaign[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return sampleCampaigns.filter(campaign => campaign.creatorId === userId);
  },
  
  // Create a new campaign
  createCampaign: async (campaignData: Partial<Campaign>): Promise<Campaign> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate a new campaign with default values and provided data
    const newCampaign: Campaign = {
      id: `campaign_${Math.random().toString(36).substring(2, 9)}`,
      title: campaignData.title || 'Untitled Campaign',
      subtitle: campaignData.subtitle || '',
      slug: campaignData.slug || `campaign-${Math.random().toString(36).substring(2, 9)}`,
      description: campaignData.description || '',
      story: campaignData.story || '',
      creatorId: campaignData.creatorId || 'unknown',
      creatorName: campaignData.creatorName || 'Anonymous',
      creatorAvatar: campaignData.creatorAvatar,
      category: campaignData.category || 'other',
      status: 'pending',
      fundingType: campaignData.fundingType || 'fixed',
      fundingGoal: campaignData.fundingGoal || 1000,
      currentAmount: 0,
      backersCount: 0,
      images: campaignData.images || [],
      startDate: campaignData.startDate || new Date().toISOString(),
      endDate: campaignData.endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      rewards: campaignData.rewards || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: campaignData.tags || [],
      location: campaignData.location,
      risks: campaignData.risks,
    };
    
    // In a real app, this would make an API call to create the campaign
    // For demo purposes, we'll just return the new campaign
    
    return newCampaign;
  },
  
  // Update an existing campaign
  updateCampaign: async (id: string, campaignData: Partial<Campaign>): Promise<Campaign> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find the campaign to update
    const campaignIndex = sampleCampaigns.findIndex(campaign => campaign.id === id);
    
    if (campaignIndex === -1) {
      throw new Error('Campaign not found');
    }
    
    // Create updated campaign
    const updatedCampaign = {
      ...sampleCampaigns[campaignIndex],
      ...campaignData,
      updatedAt: new Date().toISOString(),
    };
    
    // In a real app, this would make an API call to update the campaign
    // For demo purposes, we'll just return the updated campaign
    
    return updatedCampaign;
  },
};
