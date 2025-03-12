
export type CampaignStatus = 'draft' | 'pending' | 'active' | 'funded' | 'failed' | 'cancelled';
export type CampaignCategory = 'technology' | 'creative' | 'community' | 'business' | 'health' | 'education' | 'environment' | 'other';
export type FundingType = 'fixed' | 'flexible';

export interface CampaignImage {
  id: string;
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

export interface CampaignReward {
  id: string;
  title: string;
  description: string;
  amount: number;
  estimatedDelivery: string;
  limitedQuantity?: number;
  claimedCount?: number;
  includes?: string[];
}

export interface Campaign {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  description: string;
  story: string;
  creatorId: string;
  creatorName: string;
  creatorAvatar?: string;
  category: CampaignCategory;
  status: CampaignStatus;
  fundingType: FundingType;
  fundingGoal: number;
  currentAmount: number;
  backersCount: number;
  images: CampaignImage[];
  startDate: string;
  endDate: string;
  location?: string;
  rewards: CampaignReward[];
  risks?: string;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  tags?: string[];
}

export interface CampaignFilters {
  category?: CampaignCategory;
  status?: CampaignStatus;
  sort?: 'trending' | 'newest' | 'endingSoon' | 'mostFunded';
  search?: string;
}
