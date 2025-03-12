import { Campaign, CAMPAIGN_CATEGORIES, FUNDING_TYPES, CAMPAIGN_STATUSES } from "@/types/campaign";
import { addDays, subDays, format } from "date-fns";

// Utility to generate dates relative to current date
const today = new Date();
const formatDate = (date: Date) => format(date, "yyyy-MM-dd'T'HH:mm:ss");

// Sample campaigns data
export const sampleCampaigns: Campaign[] = [
  {
    id: "1",
    title: "EcoFlow: Solar Powered Water Purifier",
    subtitle: "Clean water anywhere with the power of the sun",
    slug: "ecoflow-solar-powered-water-purifier",
    description: "A portable water purification system that uses solar energy to provide clean drinking water in any location.",
    story: `<p>Access to clean water is a fundamental human right, yet millions around the world lack this basic necessity. EcoFlow aims to change that with our revolutionary solar-powered water purifier.</p>
            <p>Our compact device uses advanced filtration technology and the power of the sun to transform contaminated water into safe drinking water. No batteries, no chemicals, just pure science and solar energy.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>Purifies up to 3 liters of water per hour</li>
              <li>Removes 99.9999% of bacteria, viruses, and protozoa</li>
              <li>Eliminates heavy metals, chemicals, and microplastics</li>
              <li>Weighs just 1.2 kg and fits in a backpack</li>
              <li>5-year warranty and replaceable filter cartridges</li>
            </ul>
            <p>Whether you're an outdoor enthusiast, a global traveler, or living in an area with unreliable water sources, EcoFlow gives you peace of mind and access to clean water whenever and wherever you need it.</p>`,
    creatorId: "user123",
    creatorName: "Green Tech Innovations",
    creatorAvatar: "/placeholder.svg",
    category: CAMPAIGN_CATEGORIES.TECHNOLOGY,
    fundingGoal: 50000,
    currentAmount: 37500,
    backersCount: 412,
    startDate: formatDate(subDays(today, 15)),
    endDate: formatDate(addDays(today, 15)),
    location: "California, USA",
    status: CAMPAIGN_STATUSES.ACTIVE,
    fundingType: FUNDING_TYPES.FIXED,
    images: [
      {
        id: "img1",
        url: "/placeholder.svg",
        alt: "EcoFlow device filtering water",
        isPrimary: true,
      },
      {
        id: "img2",
        url: "/placeholder.svg",
        alt: "EcoFlow being used in outdoor setting",
      },
      {
        id: "img3",
        url: "/placeholder.svg",
        alt: "EcoFlow internal technology diagram",
      },
    ],
    rewards: [
      {
        id: "reward1",
        title: "Early Bird Special",
        description: "Be among the first to receive the EcoFlow Solar Purifier at a special price.",
        amount: 150,
        estimatedDelivery: "December 2023",
        limitedQuantity: 100,
        claimedCount: 98,
        includes: ["1 EcoFlow Purifier", "1 Carrying Case", "2 Extra Filters"],
      },
      {
        id: "reward2",
        title: "Family Pack",
        description: "Two EcoFlow purifiers for your home and travel needs.",
        amount: 280,
        estimatedDelivery: "December 2023",
        includes: ["2 EcoFlow Purifiers", "2 Carrying Cases", "4 Extra Filters"],
      },
      {
        id: "reward3",
        title: "Community Hero",
        description: "Five units to share with your community or donate to a cause of your choice.",
        amount: 650,
        estimatedDelivery: "January 2024",
        includes: ["5 EcoFlow Purifiers", "5 Carrying Cases", "10 Extra Filters", "Donor Recognition Certificate"],
      },
    ],
    risks: "While we have working prototypes and manufacturing partners lined up, there's always a risk of delays in production and shipping. We're committed to transparency throughout the process.",
    createdAt: formatDate(subDays(today, 20)),
    updatedAt: formatDate(subDays(today, 2)),
    featured: true,
    tags: ["clean water", "solar power", "sustainable", "outdoor", "emergency preparedness"],
  },
  {
    id: "2",
    title: "SmartPlant: AI-Powered Gardening",
    subtitle: "Effortlessly grow healthy plants with intelligent automation",
    slug: "smartplant-ai-powered-gardening",
    description: "An AI-driven gardening system that monitors and adjusts environmental conditions to optimize plant growth.",
    story: `<p>Gardening can be a rewarding experience, but it also requires time, knowledge, and constant attention. SmartPlant takes the guesswork out of gardening with our AI-powered system.</p>
            <p>Our sensors monitor soil moisture, light levels, temperature, and humidity, while our AI algorithms analyze the data and automatically adjust watering, lighting, and nutrient delivery.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>AI-powered environmental monitoring and automation</li>
              <li>Customizable plant profiles for optimal growth</li>
              <li>Automated watering, lighting, and nutrient delivery</li>
              <li>Mobile app for remote monitoring and control</li>
              <li>Suitable for indoor and outdoor use</li>
            </ul>
            <p>Whether you're a seasoned gardener or just starting out, SmartPlant makes it easy to grow healthy, thriving plants with minimal effort.</p>`,
    creatorId: "user456",
    creatorName: "AgriTech Solutions",
    creatorAvatar: "/placeholder.svg",
    category: CAMPAIGN_CATEGORIES.TECHNOLOGY,
    fundingGoal: 75000,
    currentAmount: 62000,
    backersCount: 689,
    startDate: formatDate(subDays(today, 25)),
    endDate: formatDate(addDays(today, 5)),
    location: "Tel Aviv, Israel",
    status: CAMPAIGN_STATUSES.ACTIVE,
    fundingType: FUNDING_TYPES.FIXED,
    images: [
      {
        id: "img4",
        url: "/placeholder.svg",
        alt: "SmartPlant system in operation",
        isPrimary: true,
      },
      {
        id: "img5",
        url: "/placeholder.svg",
        alt: "SmartPlant mobile app interface",
      },
      {
        id: "img6",
        url: "/placeholder.svg",
        alt: "SmartPlant sensor close-up",
      },
    ],
    rewards: [
      {
        id: "reward4",
        title: "SmartPlant Starter Kit",
        description: "Get started with AI-powered gardening with our complete starter kit.",
        amount: 200,
        estimatedDelivery: "January 2024",
        limitedQuantity: 50,
        claimedCount: 48,
        includes: ["1 SmartPlant Sensor", "1 SmartPlant Controller", "1-Year Subscription to SmartPlant AI"],
      },
      {
        id: "reward5",
        title: "SmartPlant Pro",
        description: "Expand your AI-powered garden with additional sensors and advanced features.",
        amount: 350,
        estimatedDelivery: "February 2024",
        includes: ["3 SmartPlant Sensors", "1 SmartPlant Controller", "2-Year Subscription to SmartPlant AI", "Access to Beta Features"],
      },
      {
        id: "reward6",
        title: "SmartPlant Greenhouse",
        description: "Transform your entire greenhouse into an AI-powered paradise.",
        amount: 1000,
        estimatedDelivery: "March 2024",
        includes: ["10 SmartPlant Sensors", "2 SmartPlant Controllers", "Lifetime Subscription to SmartPlant AI", "Priority Support"],
      },
    ],
    risks: "Our AI algorithms are constantly evolving, and there may be occasional glitches or inaccuracies. We're committed to providing regular updates and improvements to ensure optimal performance.",
    createdAt: formatDate(subDays(today, 30)),
    updatedAt: formatDate(subDays(today, 5)),
    featured: false,
    tags: ["AI", "gardening", "automation", "smart home", "environment"],
  },
  {
    id: "3",
    title: "MediTrack: Wearable Health Monitor",
    subtitle: "Track your vital signs and get personalized health insights",
    slug: "meditrack-wearable-health-monitor",
    description: "A wearable device that continuously monitors vital signs and provides personalized health insights and recommendations.",
    story: `<p>Your health is your most valuable asset, and MediTrack is here to help you take control of it. Our wearable health monitor provides continuous, real-time data on your vital signs.</p>
            <p>Track your heart rate, blood pressure, sleep patterns, activity levels, and more. Our AI algorithms analyze the data and provide personalized insights and recommendations to help you optimize your health.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>Continuous monitoring of vital signs</li>
              <li>Personalized health insights and recommendations</li>
              <li>Integration with healthcare providers</li>
              <li>Emergency alerts and fall detection</li>
              <li>Long battery life and comfortable design</li>
            </ul>
            <p>Whether you're managing a chronic condition or simply want to stay on top of your health, MediTrack gives you the tools and knowledge you need to live a healthier, happier life.</p>`,
    creatorId: "user789",
    creatorName: "HealthTech Innovations",
    creatorAvatar: "/placeholder.svg",
    category: CAMPAIGN_CATEGORIES.HEALTH,
    fundingGoal: 100000,
    currentAmount: 85000,
    backersCount: 945,
    startDate: formatDate(subDays(today, 40)),
    endDate: formatDate(addDays(today, 20)),
    location: "Boston, USA",
    status: CAMPAIGN_STATUSES.ACTIVE,
    fundingType: FUNDING_TYPES.FIXED,
    images: [
      {
        id: "img7",
        url: "/placeholder.svg",
        alt: "MediTrack device on wrist",
        isPrimary: true,
      },
      {
        id: "img8",
        url: "/placeholder.svg",
        alt: "MediTrack mobile app interface",
      },
      {
        id: "img9",
        url: "/placeholder.svg",
        alt: "MediTrack data visualization",
      },
    ],
    rewards: [
      {
        id: "reward7",
        title: "MediTrack Early Adopter",
        description: "Be among the first to experience the future of health monitoring.",
        amount: 250,
        estimatedDelivery: "February 2024",
        limitedQuantity: 25,
        claimedCount: 25,
        includes: ["1 MediTrack Device", "1-Year Subscription to MediTrack Premium", "Exclusive Access to Beta Features"],
      },
      {
        id: "reward8",
        title: "MediTrack Family Pack",
        description: "Monitor the health of your entire family with our discounted family pack.",
        amount: 600,
        estimatedDelivery: "March 2024",
        includes: ["3 MediTrack Devices", "1-Year Subscription to MediTrack Premium", "Priority Support"],
      },
      {
        id: "reward9",
        title: "MediTrack Healthcare Professional",
        description: "Integrate MediTrack into your practice and provide your patients with cutting-edge health monitoring.",
        amount: 1500,
        estimatedDelivery: "April 2024",
        includes: ["10 MediTrack Devices", "1-Year Subscription to MediTrack Premium", "Dedicated Account Manager", "Custom Branding Options"],
      },
    ],
    risks: "Our device is not intended to diagnose or treat any medical conditions. Always consult with a healthcare professional for medical advice.",
    createdAt: formatDate(subDays(today, 45)),
    updatedAt: formatDate(subDays(today, 10)),
    featured: true,
    tags: ["wearable", "health", "monitoring", "AI", "wellness"],
  },
  {
    id: "4",
    title: "EduBot: Personalized AI Tutor",
    subtitle: "Unlock your full potential with a personalized AI tutor",
    slug: "edubot-personalized-ai-tutor",
    description: "An AI-powered tutoring system that adapts to your learning style and provides personalized instruction and feedback.",
    story: `<p>Education is the key to unlocking your full potential, and EduBot is here to help you every step of the way. Our AI-powered tutoring system adapts to your learning style and provides personalized instruction and feedback.</p>
            <p>Whether you're struggling with a specific subject or simply want to improve your overall academic performance, EduBot can help you achieve your goals.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>Personalized instruction and feedback</li>
              <li>Adaptive learning algorithms</li>
              <li>Comprehensive subject coverage</li>
              <li>Interactive exercises and quizzes</li>
              <li>Progress tracking and reporting</li>
            </ul>
            <p>From elementary school to college, EduBot is the perfect learning companion for students of all ages and abilities.</p>`,
    creatorId: "user101",
    creatorName: "EdTech Solutions",
    creatorAvatar: "/placeholder.svg",
    category: CAMPAIGN_CATEGORIES.EDUCATION,
    fundingGoal: 60000,
    currentAmount: 48000,
    backersCount: 532,
    startDate: formatDate(subDays(today, 22)),
    endDate: formatDate(addDays(today, 8)),
    location: "London, UK",
    status: CAMPAIGN_STATUSES.ACTIVE,
    fundingType: FUNDING_TYPES.FIXED,
    images: [
      {
        id: "img10",
        url: "/placeholder.svg",
        alt: "EduBot interface on tablet",
        isPrimary: true,
      },
      {
        id: "img11",
        url: "/placeholder.svg",
        alt: "EduBot interactive exercise",
      },
      {
        id: "img12",
        url: "/placeholder.svg",
        alt: "EduBot progress report",
      },
    ],
    rewards: [
      {
        id: "reward10",
        title: "EduBot Early Learner",
        description: "Get a head start on your education with our exclusive early learner package.",
        amount: 100,
        estimatedDelivery: "March 2024",
        limitedQuantity: 100,
        claimedCount: 99,
        includes: ["1-Year Subscription to EduBot Basic", "Access to All Subjects", "Personalized Learning Plan"],
      },
      {
        id: "reward11",
        title: "EduBot Premium",
        description: "Unlock the full potential of EduBot with our premium subscription.",
        amount: 200,
        estimatedDelivery: "April 2024",
        includes: ["2-Year Subscription to EduBot Premium", "Access to All Subjects", "Personalized Learning Plan", "Priority Support"],
      },
      {
        id: "reward12",
        title: "EduBot Educator",
        description: "Bring EduBot to your classroom and transform the way you teach.",
        amount: 500,
        estimatedDelivery: "May 2024",
        includes: ["10 EduBot Premium Subscriptions", "Dedicated Account Manager", "Custom Curriculum Options"],
      },
    ],
    risks: "Our AI algorithms are constantly evolving, and there may be occasional inaccuracies. We're committed to providing regular updates and improvements to ensure optimal performance.",
    createdAt: formatDate(subDays(today, 33)),
    updatedAt: formatDate(subDays(today, 7)),
    featured: false,
    tags: ["education", "AI", "tutoring", "personalized learning", "technology"],
  },
  {
    id: "5",
    title: "CleanAir: Personal Air Purifier",
    subtitle: "Breathe clean, fresh air wherever you go",
    slug: "cleanair-personal-air-purifier",
    description: "A portable air purifier that removes pollutants and allergens from the air around you.",
    story: `<p>In today's world, air pollution is a growing concern. CleanAir provides you with a personal bubble of clean, fresh air wherever you go.</p>
            <p>Our compact device uses advanced filtration technology to remove pollutants, allergens, and odors from the air around you.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>Removes 99.97% of airborne particles</li>
              <li>Compact and portable design</li>
              <li>Long battery life</li>
              <li>Quiet operation</li>
              <li>Replaceable filters</li>
            </ul>
            <p>Whether you're commuting to work, traveling, or simply relaxing at home, CleanAir ensures that you're breathing the cleanest air possible.</p>`,
    creatorId: "user202",
    creatorName: "EnviroTech Solutions",
    creatorAvatar: "/placeholder.svg",
    category: CAMPAIGN_CATEGORIES.TECHNOLOGY,
    fundingGoal: 40000,
    currentAmount: 32000,
    backersCount: 356,
    startDate: formatDate(subDays(today, 18)),
    endDate: formatDate(addDays(today, 12)),
    location: "Beijing, China",
    status: CAMPAIGN_STATUSES.ACTIVE,
    fundingType: FUNDING_TYPES.FIXED,
    images: [
      {
        id: "img13",
        url: "/placeholder.svg",
        alt: "CleanAir device in use",
        isPrimary: true,
      },
      {
        id: "img14",
        url: "/placeholder.svg",
        alt: "CleanAir filter close-up",
      },
      {
        id: "img15",
        url: "/placeholder.svg",
        alt: "CleanAir size comparison",
      },
    ],
    rewards: [
      {
        id: "reward13",
        title: "CleanAir Early Bird",
        description: "Be among the first to breathe clean air with our exclusive early bird offer.",
        amount: 80,
        estimatedDelivery: "April 2024",
        limitedQuantity: 50,
        claimedCount: 49,
        includes: ["1 CleanAir Device", "2 Extra Filters", "Carrying Case"],
      },
      {
        id: "reward14",
        title: "CleanAir Family Pack",
        description: "Protect your entire family with our discounted family pack.",
        amount: 200,
        estimatedDelivery: "May 2024",
        includes: ["3 CleanAir Devices", "6 Extra Filters", "3 Carrying Cases"],
      },
      {
        id: "reward15",
        title: "CleanAir Corporate",
        description: "Provide your employees with clean air and a healthier work environment.",
        amount: 500,
        estimatedDelivery: "June 2024",
        includes: ["10 CleanAir Devices", "20 Extra Filters", "Custom Branding Options"],
      },
    ],
    risks: "Filter replacement is required every 3-6 months, depending on usage. We're committed to providing affordable and readily available replacement filters.",
    createdAt: formatDate(subDays(today, 29)),
    updatedAt: formatDate(subDays(today, 3)),
    featured: true,
    tags: ["air purifier", "clean air", "health", "portable", "environment"],
  },
  {
    id: "6",
    title: "Artify: AI Art Generator",
    subtitle: "Create stunning art with the power of AI",
    slug: "artify-ai-art-generator",
    description: "An AI-powered art generator that creates unique and beautiful artwork from text prompts.",
    story: `<p>Unleash your inner artist with Artify, the AI-powered art generator that turns your words into stunning visuals.</p>
            <p>Simply enter a text prompt, and our AI algorithms will create a unique and beautiful artwork in a variety of styles.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>Generates unique artwork from text prompts</li>
              <li>Supports a variety of art styles</li>
              <li>High-resolution output</li>
              <li>Easy-to-use interface</li>
              <li>Commercial usage rights</li>
            </ul>
            <p>Whether you're a professional artist or simply looking for a creative outlet, Artify makes it easy to create stunning art with the power of AI.</p>`,
    creatorId: "user303",
    creatorName: "Creative AI",
    creatorAvatar: "/placeholder.svg",
    category: CAMPAIGN_CATEGORIES.CREATIVE,
    fundingGoal: 80000,
    currentAmount: 72000,
    backersCount: 798,
    startDate: formatDate(subDays(today, 35)),
    endDate: formatDate(addDays(today, 25)),
    location: "Paris, France",
    status: CAMPAIGN_STATUSES.ACTIVE,
    fundingType: FUNDING_TYPES.FIXED,
    images: [
      {
        id: "img16",
        url: "/placeholder.svg",
        alt: "Artify interface on laptop",
        isPrimary: true,
      },
      {
        id: "img17",
        url: "/placeholder.svg",
        alt: "Artify generated artwork",
      },
      {
        id: "img18",
        url: "/placeholder.svg",
        alt: "Artify style options",
      },
    ],
    rewards: [
      {
        id: "reward16",
        title: "Artify Early Adopter",
        description: "Be among the first to create AI-powered art with our exclusive early adopter package.",
        amount: 120,
        estimatedDelivery: "May 2024",
        limitedQuantity: 75,
        claimedCount: 74,
        includes: ["1-Year Subscription to Artify Basic", "Unlimited Art Generation", "Commercial Usage Rights"],
      },
      {
        id: "reward17",
        title: "Artify Premium",
        description: "Unlock the full potential of Artify with our premium subscription.",
        amount: 300,
        estimatedDelivery: "June 2024",
        includes: ["2-Year Subscription to Artify Premium", "Unlimited Art Generation", "Commercial Usage Rights", "Priority Support"],
      },
      {
        id: "reward18",
        title: "Artify Studio",
        description: "Bring Artify to your studio and transform the way you create art.",
        amount: 750,
        estimatedDelivery: "July 2024",
        includes: ["Lifetime Subscription to Artify Premium", "Dedicated Account Manager", "Custom Style Options"],
      },
    ],
    risks: "AI art generation is a rapidly evolving field, and the quality of generated artwork may vary. We're committed to continuously improving our algorithms and providing the best possible results.",
    createdAt: formatDate(subDays(today, 46)),
    updatedAt: formatDate(subDays(today, 11)),
    featured: false,
    tags: ["AI", "art", "generator", "creative", "technology"],
  },
];

// Export a function to get campaigns with optional filtering
export const getCampaigns = () => {
  return sampleCampaigns;
};

// Export a function to get a campaign by id
export const getCampaignById = (id: string) => {
  return sampleCampaigns.find(campaign => campaign.id === id);
};

// Export a function to get a campaign by slug
export const getCampaignBySlug = (slug: string) => {
  return sampleCampaigns.find(campaign => campaign.slug === slug);
};

// Export a function to get featured campaigns
export const getFeaturedCampaigns = () => {
  return sampleCampaigns.filter(campaign => campaign.featured);
};

// Export a function to get trending campaigns (most funded recently)
export const getTrendingCampaigns = () => {
  return [...sampleCampaigns]
    .filter(campaign => campaign.status === CAMPAIGN_STATUSES.ACTIVE)
    .sort((a, b) => (b.currentAmount / b.fundingGoal) - (a.currentAmount / a.fundingGoal));
};

// Export a function to get campaigns by category
export const getCampaignsByCategory = (category: string) => {
  return sampleCampaigns.filter(campaign => campaign.category === category);
};

// Export a function to get campaigns by status
export const getCampaignsByStatus = (status: string) => {
  return sampleCampaigns.filter(campaign => campaign.status === status);
};

// Export a function to search campaigns
export const searchCampaigns = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return sampleCampaigns.filter(campaign => 
    campaign.title.toLowerCase().includes(lowerCaseQuery) || 
    campaign.description.toLowerCase().includes(lowerCaseQuery) ||
    campaign.creatorName.toLowerCase().includes(lowerCaseQuery) ||
    (campaign.tags && campaign.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)))
  );
};
