
import { Campaign } from '@/types/campaign';

export const sampleCampaigns: Campaign[] = [
  {
    id: 'campaign_001',
    title: 'EcoSmart: Sustainable Smart Home Hub',
    subtitle: 'The world\'s first carbon-negative smart home system',
    slug: 'ecosmart-sustainable-smart-home-hub',
    description: 'A revolutionary smart home system that reduces your carbon footprint while saving you money on utilities.',
    story: `<p>EcoSmart is born from a simple idea: what if your home could be both smarter <em>and</em> more environmentally friendly?</p>
      <p>Traditional smart home systems focus solely on convenience, often at the cost of increased energy consumption. EcoSmart is different. Our system actively works to reduce your home's environmental impact while providing all the convenience of modern smart home technology.</p>
      <p>The EcoSmart hub connects to your home's electrical system, HVAC, and water supply to monitor and optimize usage. It learns your habits and preferences, automatically adjusting settings to reduce waste without sacrificing comfort.</p>
      <p>For every EcoSmart system sold, we plant 10 trees through our partnership with global reforestation initiatives, making your smart home truly carbon-negative.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>AI-powered energy optimization</li>
        <li>Real-time resource usage monitoring</li>
        <li>Automated waste reduction</li>
        <li>Compatible with existing smart devices</li>
        <li>Intuitive mobile app control</li>
      </ul>`,
    creatorId: 'user_001',
    creatorName: 'GreenTech Innovations',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=GreenTech',
    category: 'technology',
    status: 'active',
    fundingType: 'fixed',
    fundingGoal: 100000,
    currentAmount: 78500,
    backersCount: 942,
    images: [
      {
        id: 'img_001',
        url: 'https://images.unsplash.com/photo-1558002038-1055909cb956',
        alt: 'EcoSmart Hub Device',
        isPrimary: true
      },
      {
        id: 'img_002',
        url: 'https://images.unsplash.com/photo-1581092921461-fd0339bd3b2a',
        alt: 'EcoSmart App Interface'
      },
      {
        id: 'img_003',
        url: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282',
        alt: 'EcoSmart in living room'
      }
    ],
    startDate: '2023-11-15T00:00:00Z',
    endDate: '2023-12-30T00:00:00Z',
    location: 'San Francisco, CA',
    rewards: [
      {
        id: 'reward_001',
        title: 'Early Bird EcoSmart',
        description: 'Be among the first to receive the EcoSmart Hub at a special early bird price.',
        amount: 199,
        estimatedDelivery: 'March 2024',
        limitedQuantity: 500,
        claimedCount: 487,
        includes: ['EcoSmart Hub', 'Power Cable', '1-year Premium Subscription']
      },
      {
        id: 'reward_002',
        title: 'EcoSmart Standard',
        description: 'The complete EcoSmart system with all standard features.',
        amount: 249,
        estimatedDelivery: 'March 2024',
        includes: ['EcoSmart Hub', 'Power Cable', '6-month Premium Subscription']
      },
      {
        id: 'reward_003',
        title: 'EcoSmart Family Pack',
        description: 'Perfect for larger homes. Includes the main hub and two satellite sensors.',
        amount: 399,
        estimatedDelivery: 'April 2024',
        includes: ['EcoSmart Hub', '2 Satellite Sensors', 'Power Cables', '1-year Premium Subscription']
      }
    ],
    risks: 'As with any hardware product, we may face manufacturing delays or supply chain issues. We have built in extra time to our delivery estimates to account for potential delays. We are committed to complete transparency and will communicate any changes to our timeline immediately.',
    createdAt: '2023-11-01T00:00:00Z',
    updatedAt: '2023-11-10T00:00:00Z',
    featured: true,
    tags: ['smart home', 'sustainability', 'eco-friendly', 'technology', 'energy saving']
  },
  {
    id: 'campaign_002',
    title: 'NomadDesk: The Ultimate Portable Workstation',
    subtitle: 'Work comfortably from anywhere with our lightweight, ergonomic desk solution',
    slug: 'nomaddesk-portable-workstation',
    description: 'A lightweight, collapsible desk that transforms any space into an ergonomic workstation in seconds.',
    story: `<p>As digital nomads and remote workers ourselves, we know the struggle of finding comfortable places to work. Coffee shops with tiny tables, hotel rooms with no desk space, or makeshift setups that wreak havoc on your posture.</p>
      <p>NomadDesk solves these problems with an innovative design that prioritizes both portability and ergonomics. It weighs just 2.8 pounds but can support up to 25 pounds of equipment. The patented folding mechanism allows it to collapse to the size of a laptop sleeve, easily fitting in any bag.</p>
      <p>Despite its compact size, NomadDesk provides proper ergonomic positioning for your laptop, with adjustable height settings and an integrated mousepad surface. The aerospace-grade aluminum construction ensures durability while keeping weight to an absolute minimum.</p>
      <h3>Perfect For:</h3>
      <ul>
        <li>Remote workers and digital nomads</li>
        <li>Business travelers</li>
        <li>Students with small living spaces</li>
        <li>Anyone who needs flexibility in their workspace</li>
      </ul>`,
    creatorId: 'user_002',
    creatorName: 'Nomad Gear Co.',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=NomadGear',
    category: 'technology',
    status: 'active',
    fundingType: 'flexible',
    fundingGoal: 50000,
    currentAmount: 42300,
    backersCount: 1105,
    images: [
      {
        id: 'img_004',
        url: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7',
        alt: 'NomadDesk in use',
        isPrimary: true
      },
      {
        id: 'img_005',
        url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd',
        alt: 'NomadDesk folded'
      },
      {
        id: 'img_006',
        url: 'https://images.unsplash.com/photo-1600494603989-9650cf6dad51',
        alt: 'NomadDesk in coffee shop'
      }
    ],
    startDate: '2023-10-20T00:00:00Z',
    endDate: '2023-12-05T00:00:00Z',
    location: 'Austin, TX',
    rewards: [
      {
        id: 'reward_004',
        title: 'Early Bird NomadDesk',
        description: 'Get the NomadDesk at our special early bird price - 30% off future retail!',
        amount: 79,
        estimatedDelivery: 'February 2024',
        limitedQuantity: 750,
        claimedCount: 750,
        includes: ['NomadDesk', 'Carrying Sleeve']
      },
      {
        id: 'reward_005',
        title: 'NomadDesk Standard',
        description: 'The NomadDesk with standard carrying sleeve.',
        amount: 99,
        estimatedDelivery: 'February 2024',
        includes: ['NomadDesk', 'Carrying Sleeve']
      },
      {
        id: 'reward_006',
        title: 'NomadDesk Pro Bundle',
        description: 'The complete package for serious remote workers.',
        amount: 149,
        estimatedDelivery: 'February 2024',
        includes: ['NomadDesk', 'Premium Carrying Case', 'USB-C Hub Attachment', 'Phone/Tablet Stand']
      }
    ],
    risks: 'We have completed our design phase and have working prototypes. Our manufacturing partners are secured, but global supply chain issues could potentially cause delays. We've built in buffer time to our estimates and will provide regular updates throughout production.',
    createdAt: '2023-10-10T00:00:00Z',
    updatedAt: '2023-10-15T00:00:00Z',
    featured: true,
    tags: ['remote work', 'portable', 'travel', 'ergonomic', 'desk']
  },
  {
    id: 'campaign_003',
    title: 'Culinary Roots: A Cookbook of Indigenous Recipes',
    subtitle: 'Preserving traditional cooking methods and ingredients from indigenous communities worldwide',
    slug: 'culinary-roots-indigenous-cookbook',
    description: 'A beautifully illustrated cookbook featuring authentic indigenous recipes and the stories behind them.',
    story: `<p>Food tells the story of a people—their history, values, and relationship with the land. Indigenous culinary traditions represent some of the world's most sustainable and locally-adapted food systems, yet many of these recipes and techniques are at risk of being lost.</p>
      <p>"Culinary Roots" is more than just a cookbook; it's a preservation project. We've spent three years traveling to indigenous communities across six continents, learning directly from elders and food keepers. Each recipe is presented with cultural context, personal stories, and stunning photography.</p>
      <p>This hardcover, coffee-table quality book features:</p>
      <ul>
        <li>120+ authentic recipes from 30+ indigenous cultures</li>
        <li>Sustainable harvesting and cooking techniques</li>
        <li>Stories from elders and knowledge keepers</li>
        <li>Over 200 full-color photographs</li>
        <li>Information on traditional ingredients and their uses</li>
      </ul>
      <p>A portion of all proceeds will be donated to indigenous food sovereignty initiatives selected by the contributing communities.</p>`,
    creatorId: 'user_003',
    creatorName: 'Heritage Harvest Publishing',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=Heritage',
    category: 'creative',
    status: 'active',
    fundingType: 'fixed',
    fundingGoal: 35000,
    currentAmount: 28750,
    backersCount: 782,
    images: [
      {
        id: 'img_007',
        url: 'https://images.unsplash.com/photo-1544927653-98addc2b1c4f',
        alt: 'Cookbook sample layout',
        isPrimary: true
      },
      {
        id: 'img_008',
        url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
        alt: 'Traditional cooking methods'
      },
      {
        id: 'img_009',
        url: 'https://images.unsplash.com/photo-1604152135912-04a022e23696',
        alt: 'Food photography sample'
      }
    ],
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-10-31T00:00:00Z',
    location: 'Santa Fe, NM',
    rewards: [
      {
        id: 'reward_007',
        title: 'Digital Cookbook',
        description: 'Digital version of Culinary Roots in PDF format.',
        amount: 25,
        estimatedDelivery: 'December 2023',
        includes: ['Digital PDF Cookbook', 'Bonus Digital Content']
      },
      {
        id: 'reward_008',
        title: 'Hardcover Cookbook',
        description: 'The full-color, hardcover edition of Culinary Roots.',
        amount: 55,
        estimatedDelivery: 'January 2024',
        includes: ['Hardcover Cookbook', 'Digital PDF Version']
      },
      {
        id: 'reward_009',
        title: 'Signed Collector\'s Edition',
        description: 'Limited edition with special cover, signed by the authors.',
        amount: 100,
        estimatedDelivery: 'January 2024',
        limitedQuantity: 250,
        claimedCount: 187,
        includes: ['Signed Collector\'s Edition Cookbook', 'Digital PDF Version', 'Set of 5 Recipe Cards']
      }
    ],
    risks: 'The content for the cookbook is complete. The main risk involves potential delays in printing and shipping due to the high-quality production standards we've set. We have already conducted test prints and have secured agreements with our printing partner.',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-28T00:00:00Z',
    featured: false,
    tags: ['cookbook', 'indigenous', 'food', 'culture', 'sustainability']
  },
  {
    id: 'campaign_004',
    title: 'Community Gardens Initiative',
    subtitle: 'Transforming vacant lots into productive community gardens in urban neighborhoods',
    slug: 'community-gardens-initiative',
    description: 'A grassroots project to create five new community gardens in food-insecure urban neighborhoods.',
    story: `<p>Access to fresh, healthy food should be a right, not a privilege. Yet many urban neighborhoods have become "food deserts," where residents lack easy access to affordable produce. The Community Gardens Initiative aims to address this problem directly by converting vacant lots into productive community gardens.</p>
      <p>With your support, we'll be able to develop five new community gardens in neighborhoods that need them most. Each garden will provide:</p>
      <ul>
        <li>Space for up to 40 family garden plots</li>
        <li>A children's garden area for educational programs</li>
        <li>A communal orchard with fruit trees</li>
        <li>Rainwater collection system for sustainable irrigation</li>
        <li>Composting facilities to reduce waste and create soil</li>
      </ul>
      <p>Beyond just growing food, these gardens will serve as community hubs, offering workshops on gardening, cooking, nutrition, and food preservation. We've already secured permission to use five vacant lots, and have partnerships with local schools and community organizations to ensure these spaces will be well-used and maintained.</p>
      <p>Our team has successfully developed three community gardens in the past five years, and we're ready to scale our impact with your help!</p>`,
    creatorId: 'user_004',
    creatorName: 'Urban Harvest Collective',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=UrbanHarvest',
    category: 'community',
    status: 'active',
    fundingType: 'flexible',
    fundingGoal: 75000,
    currentAmount: 52800,
    backersCount: 621,
    images: [
      {
        id: 'img_010',
        url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8',
        alt: 'Community garden concept',
        isPrimary: true
      },
      {
        id: 'img_011',
        url: 'https://images.unsplash.com/photo-1445052520430-32c8ebc92fe3',
        alt: 'Urban farming'
      },
      {
        id: 'img_012',
        url: 'https://images.unsplash.com/photo-1582324113434-6930e778d81f',
        alt: 'Children learning gardening'
      }
    ],
    startDate: '2023-10-01T00:00:00Z',
    endDate: '2023-12-15T00:00:00Z',
    location: 'Detroit, MI',
    rewards: [
      {
        id: 'reward_010',
        title: 'Garden Supporter',
        description: 'Support our mission and receive regular project updates.',
        amount: 25,
        estimatedDelivery: 'Immediate',
        includes: ['Project Updates', 'Name on Virtual Donor Wall']
      },
      {
        id: 'reward_011',
        title: 'Plot Sponsor',
        description: 'Sponsor a family garden plot for a food-insecure household.',
        amount: 100,
        estimatedDelivery: 'April 2024',
        includes: ['Project Updates', 'Name on Physical Donor Plaque', 'Thank You Letter from Family']
      },
      {
        id: 'reward_012',
        title: 'Garden Benefactor',
        description: 'Become a major supporter of a community garden.',
        amount: 1000,
        estimatedDelivery: 'April 2024',
        includes: ['Project Updates', 'Named Garden Feature', 'Invitation to Opening Celebration', 'Harvest Basket of Produce (Local Only)']
      }
    ],
    risks: 'Weather conditions may affect our construction timeline. We've planned to begin development in early spring, which allows flexibility if we experience delays. We have all necessary permits and have completed soil testing at each location.',
    createdAt: '2023-09-15T00:00:00Z',
    updatedAt: '2023-09-20T00:00:00Z',
    featured: true,
    tags: ['community', 'food security', 'urban farming', 'sustainability', 'education']
  },
  {
    id: 'campaign_005',
    title: 'Melody: AI Music Composition Assistant',
    subtitle: 'Collaborative AI that helps musicians overcome creative blocks and explore new ideas',
    slug: 'melody-ai-music-composition-assistant',
    description: 'An innovative AI tool that collaborates with musicians to inspire creativity and develop musical ideas.',
    story: `<p>Every musician knows the frustration of creative blocks—those moments when you have a musical idea but can't quite develop it, or when you're stuck in patterns and need fresh inspiration. Melody was designed by musicians, for musicians, to help overcome these challenges.</p>
      <p>Unlike other AI music tools that generate complete compositions (often with mixed results), Melody works collaboratively with you. It analyzes your musical input—whether that's a simple melody, chord progression, or rhythm pattern—and suggests complementary elements that maintain your unique style while introducing new possibilities.</p>
      <p>Melody features:</p>
      <ul>
        <li>Real-time suggestion system that responds to your playing</li>
        <li>Style analysis that learns your preferences over time</li>
        <li>Genre-specific modules trained on diverse musical traditions</li>
        <li>MIDI and audio input compatibility</li>
        <li>DAW plugin support for seamless workflow integration</li>
        <li>Collaborative mode that allows you to selectively accept or modify AI suggestions</li>
      </ul>
      <p>We've spent two years developing Melody, working with professional musicians across genres to ensure it enhances creativity rather than replacing it. We believe in augmented creativity—technology that amplifies human expression rather than substituting for it.</p>`,
    creatorId: 'user_005',
    creatorName: 'Harmonic Labs',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=HarmonicLabs',
    category: 'technology',
    status: 'active',
    fundingType: 'fixed',
    fundingGoal: 120000,
    currentAmount: 98600,
    backersCount: 1427,
    images: [
      {
        id: 'img_013',
        url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
        alt: 'Melody interface',
        isPrimary: true
      },
      {
        id: 'img_014',
        url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
        alt: 'Musician using Melody'
      },
      {
        id: 'img_015',
        url: 'https://images.unsplash.com/photo-1570355661861-16d7b6d3cc4b',
        alt: 'Music production setup'
      }
    ],
    startDate: '2023-09-15T00:00:00Z',
    endDate: '2023-11-30T00:00:00Z',
    location: 'Nashville, TN',
    rewards: [
      {
        id: 'reward_013',
        title: 'Early Access - Basic',
        description: 'One-year subscription to Melody Basic with early access.',
        amount: 89,
        estimatedDelivery: 'February 2024',
        includes: ['Melody Basic (1-year license)', 'Early Beta Access', 'Basic Support']
      },
      {
        id: 'reward_014',
        title: 'Early Access - Pro',
        description: 'One-year subscription to Melody Pro with priority access.',
        amount: 149,
        estimatedDelivery: 'January 2024',
        includes: ['Melody Pro (1-year license)', 'Priority Beta Access', 'Premium Support', 'Exclusive Sound Packs']
      },
      {
        id: 'reward_015',
        title: 'Lifetime License',
        description: 'Never pay for Melody again with this special backer-exclusive offer.',
        amount: 499,
        estimatedDelivery: 'January 2024',
        limitedQuantity: 200,
        claimedCount: 143,
        includes: ['Melody Pro (Lifetime License)', 'Priority Beta Access', 'Premium Support', 'All Future Sound Packs', 'Credited as Founding Member']
      }
    ],
    risks: 'Software development timelines can be unpredictable, especially with complex AI systems. We have a working prototype and have completed most of the core functionality, but fine-tuning the AI for optimal performance may take additional time. We're committed to quality and won't release until the product meets our high standards.',
    createdAt: '2023-09-01T00:00:00Z',
    updatedAt: '2023-09-10T00:00:00Z',
    featured: true,
    tags: ['music', 'AI', 'creative tools', 'composition', 'software']
  },
  {
    id: 'campaign_006',
    title: 'Ocean Cleanup Drone Fleet',
    subtitle: 'Autonomous solar-powered drones that collect plastic waste from coastal waters',
    slug: 'ocean-cleanup-drone-fleet',
    description: 'A fleet of autonomous drones designed to collect plastic waste from coastal waters before it reaches the open ocean.',
    story: `<p>Plastic pollution in our oceans has reached crisis levels, with millions of tons entering marine environments every year. While large-scale cleanup efforts focus on ocean gyres and garbage patches, we believe in addressing the problem closer to the source—coastal waters where much of the plastic first enters the ocean.</p>
      <p>Our team of marine engineers and robotics specialists has developed an autonomous drone specifically designed to collect floating plastic waste in harbors, river mouths, and coastal areas. These solar-powered drones can operate continuously during daylight hours, using computer vision to identify and collect plastic items while avoiding wildlife.</p>
      <p>Key features of our Ocean Cleanup Drones:</p>
      <ul>
        <li>Solar-powered with battery backup for consistent operation</li>
        <li>Advanced AI vision system to distinguish plastic from marine life</li>
        <li>Collection capacity of up to 20kg of waste before returning to base</li>
        <li>Automated sorting mechanism that separates different types of plastic</li>
        <li>Real-time data collection on pollution hotspots</li>
        <li>Weather-resistant design for operation in various conditions</li>
      </ul>
      <p>With your support, we'll build and deploy an initial fleet of 10 drones in high-impact coastal areas. Each drone can collect approximately 1.5 metric tons of plastic annually, preventing it from breaking down into microplastics and harming marine ecosystems.</p>`,
    creatorId: 'user_006',
    creatorName: 'Marine Robotics Initiative',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=MarineRobotics',
    category: 'environment',
    status: 'active',
    fundingType: 'flexible',
    fundingGoal: 200000,
    currentAmount: 167500,
    backersCount: 2134,
    images: [
      {
        id: 'img_016',
        url: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f',
        alt: 'Ocean drone prototype',
        isPrimary: true
      },
      {
        id: 'img_017',
        url: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5',
        alt: 'Plastic pollution in coastal waters'
      },
      {
        id: 'img_018',
        url: 'https://images.unsplash.com/photo-1621955964441-c173e01c135b',
        alt: 'Drone collection mechanism'
      }
    ],
    startDate: '2023-08-01T00:00:00Z',
    endDate: '2023-10-31T00:00:00Z',
    location: 'Seattle, WA',
    rewards: [
      {
        id: 'reward_016',
        title: 'Cleanup Supporter',
        description: 'Support our mission and receive project updates and recognition.',
        amount: 30,
        estimatedDelivery: 'Immediate',
        includes: ['Project Updates', 'Name on Supporters Website', 'Digital Certificate']
      },
      {
        id: 'reward_017',
        title: 'Drone Sponsor',
        description: 'Sponsor a specific drone and track its impact.',
        amount: 500,
        estimatedDelivery: 'March 2024',
        includes: ['Named Drone with Tracking', 'Quarterly Impact Reports', 'Sponsor Certificate', 'Recycled Plastic Bracelet']
      },
      {
        id: 'reward_018',
        title: 'Deployment Partner',
        description: 'Fund a complete drone deployment in a location of your choice (subject to feasibility).',
        amount: 5000,
        estimatedDelivery: 'June 2024',
        includes: ['Location Selection Input', 'Named Drone Fleet', 'VIP Launch Invitation', 'Detailed Impact Reporting', 'Recognition in Media']
      }
    ],
    risks: 'Maritime robotics presents challenges including harsh environmental conditions, regulatory approvals for autonomous vessels, and potential technical issues. We have completed successful prototypes and have team members with extensive experience in marine engineering. We've also initiated discussions with regulatory bodies in our target deployment regions.',
    createdAt: '2023-07-15T00:00:00Z',
    updatedAt: '2023-07-30T00:00:00Z',
    featured: false,
    tags: ['environment', 'ocean', 'plastic pollution', 'robotics', 'sustainability']
  },
  {
    id: 'campaign_007',
    title: 'MindfulMoments: Mental Health App',
    subtitle: 'Personalized mental wellness tools based on cognitive behavioral therapy techniques',
    slug: 'mindfulmoments-mental-health-app',
    description: 'An evidence-based mobile app that delivers personalized mental wellness tools and exercises based on cognitive behavioral therapy.',
    story: `<p>Mental health support should be accessible to everyone, not just those who can afford or access traditional therapy. MindfulMoments brings evidence-based techniques to your smartphone, providing personalized support for managing stress, anxiety, depression, and building resilience.</p>
      <p>Developed in collaboration with clinical psychologists and based on proven cognitive behavioral therapy (CBT) techniques, MindfulMoments offers:</p>
      <ul>
        <li>Personalized daily exercises based on your needs and goals</li>
        <li>Mood tracking with pattern recognition</li>
        <li>Guided meditation and mindfulness practices</li>
        <li>CBT thought journaling with cognitive distortion recognition</li>
        <li>Sleep improvement program</li>
        <li>Crisis resources and support network connections</li>
      </ul>
      <p>What makes MindfulMoments different is our adaptive algorithm that learns what works for you personally. As you use the app, it fine-tunes recommendations to match your preferences, challenges, and progress patterns.</p>
      <p>We're committed to privacy and ethical design. MindfulMoments doesn't sell user data, uses encryption for all personal information, and is designed to minimize screen time while maximizing benefit. Our goal is to support your mental health, not create another digital dependency.</p>`,
    creatorId: 'user_007',
    creatorName: 'Wellness Innovations Team',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=WellnessTeam',
    category: 'health',
    status: 'active',
    fundingType: 'fixed',
    fundingGoal: 85000,
    currentAmount: 63750,
    backersCount: 1872,
    images: [
      {
        id: 'img_019',
        url: 'https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8',
        alt: 'MindfulMoments app interface',
        isPrimary: true
      },
      {
        id: 'img_020',
        url: 'https://images.unsplash.com/photo-1546279130-f8d483d32d19',
        alt: 'Person using meditation feature'
      },
      {
        id: 'img_021',
        url: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462',
        alt: 'Thought journaling feature'
      }
    ],
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-10-31T00:00:00Z',
    location: 'Boston, MA',
    rewards: [
      {
        id: 'reward_019',
        title: 'Early Access Supporter',
        description: 'Support mental health innovation and get early app access.',
        amount: 15,
        estimatedDelivery: 'January 2024',
        includes: ['Early App Access', '3-Month Premium Subscription']
      },
      {
        id: 'reward_020',
        title: 'Premium Supporter',
        description: 'Full premium access to all features at a special backer price.',
        amount: 50,
        estimatedDelivery: 'January 2024',
        includes: ['Early App Access', '1-Year Premium Subscription', 'Supporter Badge']
      },
      {
        id: 'reward_021',
        title: 'Gift of Wellness',
        description: 'Provide premium access to someone who can\'t afford it, and get access yourself.',
        amount: 75,
        estimatedDelivery: 'January 2024',
        includes: ['Early App Access', '1-Year Premium Subscription', 'Gift Subscription for Someone in Need', 'Philanthropy Badge']
      }
    ],
    risks: 'App development timelines can be unpredictable. While we have a working prototype, final development and testing may take longer than anticipated. We are committed to thorough testing, particularly given the sensitive nature of mental health applications. We may delay launch if needed to ensure the app meets our quality and safety standards.',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-20T00:00:00Z',
    featured: false,
    tags: ['mental health', 'wellness', 'app', 'CBT', 'mindfulness']
  },
  {
    id: 'campaign_008',
    title: 'Sustainable Fashion Workshop Series',
    subtitle: 'Training program teaching textile upcycling and sustainable clothing design techniques',
    slug: 'sustainable-fashion-workshop-series',
    description: 'A series of workshops teaching sustainable fashion design, textile upcycling, and ethical production techniques.',
    story: `<p>Fast fashion has created an environmental crisis, with millions of tons of textile waste ending up in landfills each year. But there's a growing movement of designers and consumers committed to a more sustainable approach—and we want to accelerate this shift by sharing knowledge and skills.</p>
      <p>Our Sustainable Fashion Workshop Series will provide comprehensive training in:</p>
      <ul>
        <li>Textile upcycling techniques to transform waste into new garments</li>
        <li>Natural dyeing using plant-based materials</li>
        <li>Pattern design for longevity and versatility</li>
        <li>Repair and mending techniques to extend garment life</li>
        <li>Small-batch production planning for independent designers</li>
        <li>Ethical sourcing and supply chain development</li>
      </ul>
      <p>The series will include both in-person workshops in five cities and online courses accessible worldwide. All workshop materials will be sustainably sourced, primarily utilizing reclaimed textiles and natural materials.</p>
      <p>The curriculum has been developed by a team of experienced sustainable fashion designers, textile artists, and environmental educators. Our goal is to build a community of practice that continues beyond the workshops through an online platform for resource sharing and collaboration.</p>`,
    creatorId: 'user_008',
    creatorName: 'Sustainable Style Collective',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=SustainableStyle',
    category: 'education',
    status: 'active',
    fundingType: 'flexible',
    fundingGoal: 40000,
    currentAmount: 32400,
    backersCount: 538,
    images: [
      {
        id: 'img_022',
        url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
        alt: 'Sustainable fashion workshop',
        isPrimary: true
      },
      {
        id: 'img_023',
        url: 'https://images.unsplash.com/photo-1594761051656-637622308abf',
        alt: 'Natural dyeing process'
      },
      {
        id: 'img_024',
        url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2',
        alt: 'Upcycled garment example'
      }
    ],
    startDate: '2023-10-01T00:00:00Z',
    endDate: '2023-11-15T00:00:00Z',
    location: 'Portland, OR',
    rewards: [
      {
        id: 'reward_022',
        title: 'Online Course Access',
        description: 'Full access to all online sustainable fashion courses.',
        amount: 65,
        estimatedDelivery: 'February 2024',
        includes: ['Complete Online Curriculum', 'Digital Patterns and Guides', 'Community Forum Access']
      },
      {
        id: 'reward_023',
        title: 'Workshop Series Pass',
        description: 'Attend all in-person workshops in your chosen city.',
        amount: 250,
        estimatedDelivery: 'March-May 2024',
        includes: ['In-Person Workshop Series (1 City)', 'Materials Kit', 'Online Course Access', 'Community Forum Access']
      },
      {
        id: 'reward_024',
        title: 'Designer Starter Package',
        description: 'Comprehensive package for emerging sustainable designers.',
        amount: 500,
        estimatedDelivery: 'March-May 2024',
        includes: ['In-Person Workshop Series (1 City)', 'Premium Materials Kit', 'One-on-One Mentoring Session', 'Sustainable Supplier Directory', 'Business Planning Resources']
      }
    ],
    risks: 'Workshop scheduling depends on securing appropriate venues in each city, which may cause timeline shifts. The online curriculum is already well-developed, so this component has minimal risk of delay. If in-person workshops face significant delays in certain cities, we'll offer expanded online options and future workshop credits.',
    createdAt: '2023-09-15T00:00:00Z',
    updatedAt: '2023-09-20T00:00:00Z',
    featured: false,
    tags: ['fashion', 'sustainability', 'education', 'textiles', 'upcycling']
  },
  {
    id: 'campaign_009',
    title: 'SolarBag: Emergency Power Station',
    subtitle: 'Lightweight, high-capacity emergency power solution with integrated solar charging',
    slug: 'solarbag-emergency-power-station',
    description: 'A portable, solar-rechargeable power station built into a backpack, designed for emergency situations and outdoor adventures.',
    story: `<p>Whether facing a natural disaster or simply going off-grid, reliable access to power can be essential. SolarBag combines advanced battery technology and flexible solar panels into a practical backpack design, creating the most portable high-capacity power solution available.</p>
      <p>Unlike traditional power banks or bulky solar generators, SolarBag integrates seamlessly into a daily carry item. The flexible solar panels cover the exterior of the backpack, harvesting energy whenever you're outdoors. The high-efficiency battery system provides multiple output options to power everything from phones and laptops to small medical devices.</p>
      <p>Key features include:</p>
      <ul>
        <li>1000Wh battery capacity with pure sine wave AC inverter (110V/220V compatible)</li>
        <li>60W solar charging capability with positioning indicators for optimal alignment</li>
        <li>Multiple output ports: USB-C PD (100W), USB-A, 12V DC, and AC outlet</li>
        <li>Pass-through charging allows use while recharging</li>
        <li>Water-resistant construction with reinforced stitching</li>
        <li>Comfortable carrying system with weight distribution technology</li>
        <li>Expandable capacity with optional additional battery modules</li>
      </ul>
      <p>SolarBag was designed based on feedback from emergency responders, disaster relief experts, and outdoor enthusiasts. It's built to provide critical power when and where you need it most.</p>`,
    creatorId: 'user_009',
    creatorName: 'EmergeTech Solutions',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=EmergeTech',
    category: 'technology',
    status: 'active',
    fundingType: 'fixed',
    fundingGoal: 150000,
    currentAmount: 127500,
    backersCount: 853,
    images: [
      {
        id: 'img_025',
        url: 'https://images.unsplash.com/photo-1617135530035-1734c9843f88',
        alt: 'SolarBag prototype',
        isPrimary: true
      },
      {
        id: 'img_026',
        url: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638',
        alt: 'SolarBag in use outdoors'
      },
      {
        id: 'img_027',
        url: 'https://images.unsplash.com/photo-1581881067864-6a33fce7b0dd',
        alt: 'SolarBag charging devices'
      }
    ],
    startDate: '2023-08-15T00:00:00Z',
    endDate: '2023-10-15T00:00:00Z',
    location: 'Boulder, CO',
    rewards: [
      {
        id: 'reward_025',
        title: 'Early Bird SolarBag Essential',
        description: 'The standard SolarBag at a special early bird price.',
        amount: 299,
        estimatedDelivery: 'April 2024',
        limitedQuantity: 300,
        claimedCount: 300,
        includes: ['SolarBag Essential (750Wh)', 'Charging Cables', 'User Manual']
      },
      {
        id: 'reward_026',
        title: 'SolarBag Essential',
        description: 'The standard SolarBag power station backpack.',
        amount: 349,
        estimatedDelivery: 'April 2024',
        includes: ['SolarBag Essential (750Wh)', 'Charging Cables', 'User Manual']
      },
      {
        id: 'reward_027',
        title: 'SolarBag Pro',
        description: 'Enhanced capacity and features for demanding situations.',
        amount: 499,
        estimatedDelivery: 'April 2024',
        includes: ['SolarBag Pro (1000Wh)', 'Expansion Battery (250Wh)', 'All Charging Cables', 'Weatherproof Cover', 'Emergency Light Attachment']
      }
    ],
    risks: 'As with any hardware project involving batteries and electronics, we may face supply chain challenges or certification delays. We have completed working prototypes and secured relationships with manufacturing partners. Our team has prior experience bringing similar products to market, which helps us anticipate and mitigate potential issues.',
    createdAt: '2023-08-01T00:00:00Z',
    updatedAt: '2023-08-10T00:00:00Z',
    featured: true,
    tags: ['solar', 'power', 'emergency', 'outdoor', 'sustainable']
  },
  {
    id: 'campaign_010',
    title: 'Historical Voices: Oral History Archive',
    subtitle: 'Preserving first-person accounts of historical events through immersive digital archives',
    slug: 'historical-voices-oral-history-archive',
    description: 'A digital preservation project capturing oral histories from elders who witnessed significant historical events of the 20th century.',
    story: `<p>Every day, we lose irreplaceable firsthand accounts of history as elderly witnesses to major 20th century events pass away. The Historical Voices project aims to preserve these perspectives through high-quality video interviews, creating an immersive digital archive accessible to researchers, educators, and the public.</p>
      <p>Our team of oral historians, videographers, and digital archivists has already conducted pilot interviews with:</p>
      <ul>
        <li>Civil rights movement participants</li>
        <li>World War II veterans and civilian survivors</li>
        <li>Former refugees from various global conflicts</li>
        <li>Witnesses to major technological and social transformations</li>
        <li>Indigenous elders preserving traditional knowledge</li>
      </ul>
      <p>With your support, we'll expand this work to capture hundreds more stories over the next year, focusing on underrepresented perspectives and rapidly aging populations. Each interview is professionally filmed, transcribed, indexed, and contextualized with historical resources.</p>
      <p>The resulting archive will be made available through:</p>
      <ul>
        <li>A free public website with search capabilities</li>
        <li>Educational curriculum resources for teachers</li>
        <li>Interactive museum installations</li>
        <li>A research database for scholars</li>
        <li>Documentary film compilations on specific historical themes</li>
      </ul>
      <p>By supporting this project, you're helping ensure that future generations can learn from the direct experiences of those who lived through history's pivotal moments.</p>`,
    creatorId: 'user_010',
    creatorName: 'Heritage Preservation Collective',
    creatorAvatar: 'https://api.dicebear.com/7.x/micah/svg?seed=HeritageCollective',
    category: 'education',
    status: 'active',
    fundingType: 'flexible',
    fundingGoal: 60000,
    currentAmount: 47800,
    backersCount: 712,
    images: [
      {
        id: 'img_028',
        url: 'https://images.unsplash.com/photo-1533626904905-cc52fd99285e',
        alt: 'Oral history interview session',
        isPrimary: true
      },
      {
        id: 'img_029',
        url: 'https://images.unsplash.com/photo-1572204097183-e1ab140342ed',
        alt: 'Digital archive interface'
      },
      {
        id: 'img_030',
        url: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2',
        alt: 'Historical photograph collection'
      }
    ],
    startDate: '2023-09-01T00:00:00Z',
    endDate: '2023-11-01T00:00:00Z',
    location: 'Washington, DC',
    rewards: [
      {
        id: 'reward_028',
        title: 'Archive Supporter',
        description: 'Early access to the digital archive and project updates.',
        amount: 25,
        estimatedDelivery: 'January 2024',
        includes: ['Early Archive Access', 'Monthly Project Updates', 'Name in Supporters List']
      },
      {
        id: 'reward_029',
        title: 'Education Pack',
        description: 'Complete curriculum resources for educators using historical interviews.',
        amount: 75,
        estimatedDelivery: 'February 2024',
        includes: ['Early Archive Access', 'Curriculum Resource Pack', 'Classroom Activity Guide', 'Digital Primary Source Collection']
      },
      {
        id: 'reward_030',
        title: 'Interview Sponsor',
        description: 'Sponsor a specific interview and be recognized in the archives.',
        amount: 250,
        estimatedDelivery: 'Ongoing',
        includes: ['Early Archive Access', 'Sponsor Credit on Specific Interview', 'Digital Certificate', 'Behind-the-Scenes Updates on Your Sponsored Interview']
      }
    ],
    risks: 'Our primary challenge is the time-sensitive nature of capturing these stories, as many potential interviewees are elderly. We have an established process for identifying and prioritizing interviews. Technical aspects of the archive development are well-understood, as we've completed a pilot version. The main risk is in scaling up our interview capacity while maintaining quality.',
    createdAt: '2023-08-15T00:00:00Z',
    updatedAt: '2023-08-20T00:00:00Z',
    featured: false,
    tags: ['history', 'education', 'archive', 'preservation', 'storytelling']
  }
];
