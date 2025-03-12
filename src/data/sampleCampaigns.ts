
import { Campaign, CampaignCategory, CampaignStatus, FundingType } from "../types/campaign";

export const sampleCampaigns: Campaign[] = [
  {
    id: "1",
    title: "EcoHarvest: Sustainable Urban Farming",
    slug: "ecoharvest-sustainable-urban-farming",
    category: CampaignCategory.ENVIRONMENT,
    creatorId: "user1",
    creatorName: "Alex Johnson",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "Transforming urban spaces into productive and sustainable food gardens.",
    fullDescription: `
      EcoHarvest is revolutionizing how cities interact with food production. Our system transforms unused urban spaces—rooftops, vacant lots, even vertical walls—into productive food gardens using innovative hydroponic and aquaponic systems.

      ## The Problem
      Urban areas face multiple challenges: food deserts, carbon emissions from long-distance food transport, and disconnection from natural food systems. Meanwhile, countless urban spaces sit unused.

      ## Our Solution
      EcoHarvest combines cutting-edge vertical farming technology with community engagement:
      
      - **Space-Efficient Designs**: Custom systems for various urban spaces
      - **Water-Conserving Technology**: Up to 95% less water than conventional farming
      - **Community Integration**: Training programs for local residents
      - **Zero Carbon Footprint**: Solar-powered systems and ultra-local distribution

      ## What We'll Deliver
      With your support, we'll launch 3 pilot sites in underserved neighborhoods, each producing up to 2,000 pounds of fresh produce annually while training local residents in sustainable farming techniques.

      ## Timeline
      - Month 1-2: Site preparation and system installation
      - Month 3-4: First plantings and community training programs
      - Month 5-6: First harvests and distribution program launch
      
      Join us in transforming how cities feed themselves!
    `,
    goal: 75000,
    amountRaised: 42650,
    backers: 215,
    fundingType: FundingType.FIXED,
    startDate: "2023-07-15T00:00:00Z",
    endDate: "2023-10-15T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "1-1",
        date: "2023-08-01T10:00:00Z",
        title: "First site selected!",
        content: "We're excited to announce that we've secured our first rooftop location in the downtown area. Site preparations begin next week!"
      },
      {
        id: "1-2",
        date: "2023-08-15T14:30:00Z",
        title: "Equipment ordered",
        content: "Thanks to your generous contributions, we've placed orders for our first hydroponic systems. They should arrive within 2 weeks!"
      }
    ],
    rewards: [
      {
        id: "1-r1",
        title: "Urban Gardener",
        description: "Digital thank-you card and monthly newsletter with updates on our progress.",
        amount: 10,
        delivery: "Immediate",
        items: ["Digital thank-you card", "Monthly newsletter subscription"]
      },
      {
        id: "1-r2",
        title: "Harvest Supporter",
        description: "Get a monthly basket of fresh produce from our first harvest for 3 months, plus the Urban Gardener rewards.",
        amount: 50,
        delivery: "Starting Month 5",
        items: ["3 monthly produce baskets", "Digital thank-you card", "Monthly newsletter subscription"]
      },
      {
        id: "1-r3",
        title: "Founding Farmer",
        description: "Personalized plaque at one of our sites, private tour when installations are complete, and all Harvest Supporter rewards.",
        amount: 250,
        delivery: "Plaque installed Month 3, Tour in Month 4",
        items: ["Personalized plaque", "Private tour", "3 monthly produce baskets", "Digital thank-you card", "Monthly newsletter subscription"]
      }
    ]
  },
  {
    id: "2",
    title: "RainSaver: Smart Water Conservation System",
    slug: "rainsaver-smart-water-conservation",
    category: CampaignCategory.TECHNOLOGY,
    creatorId: "user2",
    creatorName: "Priya Sharma",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "AI-powered rainwater harvesting system that reduces water bills by up to 60%.",
    fullDescription: `
      RainSaver is the world's first smart rainwater harvesting system that combines weather forecasting AI with efficient storage and filtration technology.

      ## The Problem
      Clean water is increasingly precious, and traditional rainwater systems are inefficient, collecting water regardless of forecasts and offering limited filtration.

      ## Our Solution
      RainSaver uses:
      
      - **Predictive Weather AI**: Automatically prepares for collection before rain events
      - **Multi-Stage Filtration**: Makes rainwater safe for gardens, laundry, and even drinking
      - **Smart Home Integration**: Controls via app and works with existing smart home systems
      - **Modular Design**: Easily scales from apartment balconies to large homes

      ## What We'll Deliver
      A complete RainSaver system including the smart controller, base storage unit, filtration system, and smartphone app with 2-year subscription to the AI forecasting service.

      ## Timeline
      - Month 1-3: Complete final product testing and certification
      - Month 4-5: Begin manufacturing
      - Month 6-7: Fulfillment to backers
      
      Help us make water conservation effortless and effective!
    `,
    goal: 120000,
    amountRaised: 89750,
    backers: 412,
    fundingType: FundingType.FLEXIBLE,
    startDate: "2023-06-01T00:00:00Z",
    endDate: "2023-09-01T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "2-1",
        date: "2023-06-10T09:15:00Z",
        title: "Certification process underway",
        content: "We've submitted RainSaver for water quality certification - an important milestone!"
      },
      {
        id: "2-2",
        date: "2023-07-05T16:45:00Z",
        title: "App development milestone",
        content: "Our app development is ahead of schedule! We've completed the water quality monitoring features and are now working on the forecast integration."
      },
      {
        id: "2-3",
        date: "2023-08-01T11:30:00Z",
        title: "Manufacturing partners confirmed",
        content: "We've finalized agreements with our manufacturing partners. They're ready to begin production as soon as we complete our funding round!"
      }
    ],
    rewards: [
      {
        id: "2-r1",
        title: "Early Bird Basic",
        description: "RainSaver Basic System with smart controller and 50-gallon storage at 20% off future retail price.",
        amount: 199,
        delivery: "Month 7",
        items: ["RainSaver Controller", "50-gallon storage tank", "Basic filtration system", "App with 1-year AI subscription"]
      },
      {
        id: "2-r2",
        title: "Home System",
        description: "Complete RainSaver system with 100-gallon capacity, premium filtration, and extended 3-year AI subscription.",
        amount: 349,
        delivery: "Month 7",
        items: ["RainSaver Controller", "100-gallon storage tank", "Premium multi-stage filtration", "App with 3-year AI subscription"]
      },
      {
        id: "2-r3",
        title: "Ultimate Conservation Package",
        description: "Expanded 200-gallon system with our highest-grade filtration (potable water rated), permanent AI subscription, and professional installation.",
        amount: 799,
        delivery: "Month 8",
        items: ["RainSaver Pro Controller", "200-gallon modular system", "Potable-rated filtration system", "Lifetime AI subscription", "Professional installation"]
      }
    ]
  },
  {
    id: "3",
    title: "MindfulMornings: Guided Wellness Alarm Clock",
    slug: "mindfulmornings-wellness-alarm",
    category: CampaignCategory.HEALTH,
    creatorId: "user3",
    creatorName: "David Chen",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "A gentle alarm clock that eases you into your day with guided meditation and personalized routines.",
    fullDescription: `
      MindfulMornings reimagines how you start your day, replacing jarring alarms with a science-backed wake-up experience.

      ## The Problem
      Traditional alarms shock you awake, triggering your stress response and potentially setting a negative tone for your entire day.

      ## Our Solution
      MindfulMornings combines:
      
      - **Natural Light Simulation**: Gradually brightens to trigger natural cortisol production
      - **Personalized Audio**: Transitions from subtle sounds to guided morning meditations
      - **Smart Sleep Detection**: Wakes you during light sleep phases for easier transitions
      - **Routine Builder**: Guides you through a personalized morning wellness routine

      ## What We'll Deliver
      The MindfulMornings device with companion app, featuring pre-loaded guided meditations and routines from certified wellness experts.

      ## Timeline
      - Month 1-2: Finalize production design
      - Month 3-4: Complete software development
      - Month 5-6: Production and quality testing
      - Month 7: Fulfillment to backers
      
      Start your days with intention and calm!
    `,
    goal: 65000,
    amountRaised: 58700,
    backers: 976,
    fundingType: FundingType.FIXED,
    startDate: "2023-08-01T00:00:00Z",
    endDate: "2023-11-01T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "3-1",
        date: "2023-08-12T08:30:00Z",
        title: "Wellness partnerships announced",
        content: "We're thrilled to announce partnerships with three renowned meditation experts who will be creating exclusive content for MindfulMornings users!"
      }
    ],
    rewards: [
      {
        id: "3-r1",
        title: "Early Bird Essentials",
        description: "MindfulMornings device with 6-month premium subscription at 25% off future retail price.",
        amount: 79,
        delivery: "Month 7",
        items: ["MindfulMornings device", "6-month premium subscription", "10 guided meditation tracks"]
      },
      {
        id: "3-r2",
        title: "Wellness Package",
        description: "MindfulMornings device with 1-year premium subscription and exclusive ambient soundscapes.",
        amount: 119,
        delivery: "Month 7",
        items: ["MindfulMornings device", "1-year premium subscription", "20 guided meditation tracks", "Exclusive ambient soundscape collection"]
      },
      {
        id: "3-r3",
        title: "Complete Transformation",
        description: "Two MindfulMornings devices, lifetime premium subscription, personal routine consultation with a wellness expert.",
        amount: 299,
        delivery: "Month 7-8",
        items: ["2 MindfulMornings devices", "Lifetime premium subscription", "Complete meditation library", "45-minute personal routine consultation", "Priority support"]
      }
    ]
  },
  {
    id: "4",
    title: "GlobalPal: Real-time Translation Earbuds",
    slug: "globalpal-translation-earbuds",
    category: CampaignCategory.TECHNOLOGY,
    creatorId: "user4",
    creatorName: "Sophia Rodriguez",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "Break language barriers with AI earbuds that translate conversations in real-time.",
    fullDescription: `
      GlobalPal makes cross-language conversation as easy as talking to someone who speaks your language.

      ## The Problem
      Language barriers limit connections, complicate travel, and hinder global collaboration, while existing translation solutions are clunky and interrupt natural conversation flow.

      ## Our Solution
      GlobalPal delivers:
      
      - **Real-time Translation**: Less than 0.5 second delay for natural conversation
      - **40+ Languages**: Covers 95% of globally spoken languages
      - **Dialect Recognition**: Understands regional accents and expressions
      - **Offline Capability**: Core languages work without internet connection
      - **Natural Sound**: Full-spectrum audio makes translated voices sound natural

      ## What We'll Deliver
      GlobalPal earbuds in a charging case, companion app with language downloads, and 2-year subscription to language updates.

      ## Timeline
      - Month 1-3: Complete AI training for remaining languages
      - Month 4-5: Production of first batch
      - Month 6: Quality testing and refinement
      - Month 7-8: Fulfillment to backers
      
      Join us in making global communication seamless!
    `,
    goal: 200000,
    amountRaised: 176500,
    backers: 1245,
    fundingType: FundingType.FLEXIBLE,
    startDate: "2023-05-15T00:00:00Z",
    endDate: "2023-08-15T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "4-1",
        date: "2023-06-01T14:00:00Z",
        title: "AI accuracy milestone reached",
        content: "Our translation AI has reached 97% accuracy in our 15 most common languages - exceeding our target!"
      },
      {
        id: "4-2",
        date: "2023-07-10T09:45:00Z",
        title: "Production samples received",
        content: "We've received our first production samples and they've passed all initial quality tests. We're on track for our delivery timeline!"
      }
    ],
    rewards: [
      {
        id: "4-r1",
        title: "Early Adopter",
        description: "One GlobalPal earbud set with 10 core languages and 1-year subscription to language updates.",
        amount: 179,
        delivery: "Month 8",
        items: ["GlobalPal earbuds", "Charging case", "App access", "10 core languages", "1-year language update subscription"]
      },
      {
        id: "4-r2",
        title: "Global Traveler",
        description: "One GlobalPal earbud set with all 40+ languages and 2-year subscription to language updates and new features.",
        amount: 249,
        delivery: "Month 8",
        items: ["GlobalPal earbuds", "Charging case", "App access", "40+ languages", "2-year comprehensive subscription"]
      },
      {
        id: "4-r3",
        title: "Business Communication Package",
        description: "Two GlobalPal earbud sets with all languages, premium business terminology packs, and 3-year subscription.",
        amount: 449,
        delivery: "Month 8",
        items: ["2 GlobalPal earbud sets", "2 Charging cases", "App access", "40+ languages", "Business terminology packs", "3-year comprehensive subscription"]
      }
    ]
  },
  {
    id: "5",
    title: "LegacyNotes: Preserving Family Stories",
    slug: "legacynotes-family-stories",
    category: CampaignCategory.COMMUNITY,
    creatorId: "user5",
    creatorName: "James Wilson",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "An AI-assisted service to record, preserve and share family histories across generations.",
    fullDescription: `
      LegacyNotes helps families capture their most precious asset - their stories and history - before they're lost forever.

      ## The Problem
      Family stories disappear with each passing generation. Elderly family members often take irreplaceable knowledge, stories, and wisdom with them.

      ## Our Solution
      LegacyNotes provides:
      
      - **Guided Interview System**: AI-powered question prompts that elicit meaningful stories
      - **Multi-format Preservation**: Audio, video, and auto-transcribed text archives
      - **Family Tree Integration**: Stories tagged to family members and events
      - **Private Family Network**: Secure sharing within family groups
      - **Archival-quality Storage**: Guaranteed 100-year digital preservation

      ## What We'll Deliver
      Access to the LegacyNotes platform, including interview tools, storage, and family sharing network. Premium tiers include physical memory books and professional interview facilitation.

      ## Timeline
      - Month 1-2: Complete platform development
      - Month 3: Beta testing with select families
      - Month 4: Platform launch to backers
      
      Don't let your family's stories disappear!
    `,
    goal: 50000,
    amountRaised: 37500,
    backers: 412,
    fundingType: FundingType.FLEXIBLE,
    startDate: "2023-07-01T00:00:00Z",
    endDate: "2023-10-01T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "5-1",
        date: "2023-07-20T10:30:00Z",
        title: "Interview prompt system completed",
        content: "We've finalized our AI-assisted interview system with over 1,000 thoughtfully crafted prompts designed to elicit meaningful family stories!"
      },
      {
        id: "5-2",
        date: "2023-08-05T15:45:00Z",
        title: "Beta testers needed",
        content: "We're looking for 20 diverse families to beta test the platform. If you're interested, please fill out the form in your backer portal."
      }
    ],
    rewards: [
      {
        id: "5-r1",
        title: "Digital Preservation",
        description: "One year of LegacyNotes access with 10 hours of story storage and basic family sharing.",
        amount: 49,
        delivery: "Month 4",
        items: ["Platform access", "10 hours storage", "Basic family sharing", "Auto-transcription"]
      },
      {
        id: "5-r2",
        title: "Family Historian",
        description: "Three years of LegacyNotes access with 50 hours of story storage, premium family sharing, and one printed memory book.",
        amount: 129,
        delivery: "Month 4-5",
        items: ["Platform access", "50 hours storage", "Premium family sharing", "Advanced AI interview system", "One 50-page printed memory book"]
      },
      {
        id: "5-r3",
        title: "Generation Bridge",
        description: "Lifetime LegacyNotes access, unlimited storage, remote professional interviewer session, and annual memory books.",
        amount: 499,
        delivery: "Month 4-5",
        items: ["Lifetime platform access", "Unlimited storage", "Priority support", "3-hour professional remote interviewer session", "Annual printed memory books for 3 years"]
      }
    ]
  },
  {
    id: "6",
    title: "ArtiScan: 3D Art Digitization Tool",
    slug: "artiscan-3d-digitization",
    category: CampaignCategory.ARTS,
    creatorId: "user6",
    creatorName: "Maya Patel",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "Affordable 3D scanning system that lets artists digitize physical artwork with professional quality.",
    fullDescription: `
      ArtiScan bridges the physical and digital art worlds with accessible, high-quality 3D scanning technology.

      ## The Problem
      Artists creating physical work struggle to create high-quality digital versions for online portfolios, NFTs, or digital exhibitions without expensive equipment.

      ## Our Solution
      ArtiScan offers:
      
      - **Smartphone-Based Scanning**: Uses your phone's camera with our special lens attachment
      - **Photogrammetry Platform**: Guided rotation stand ensures complete capture
      - **Studio-Quality Lighting**: Built-in adjustable LED lighting eliminates shadows
      - **Automatic Processing**: Cloud software creates detailed 3D models automatically
      - **Creator-Friendly Usage Rights**: You own all scanned artwork files completely

      ## What We'll Deliver
      The ArtiScan hardware kit (platform, lighting, phone attachment) plus software subscription for model processing and portfolio management.

      ## Timeline
      - Month 1-2: Complete manufacturing setup
      - Month 3-4: Software platform finalization
      - Month 5: Production
      - Month 6: Fulfillment to backers
      
      Help democratize art digitization technology!
    `,
    goal: 80000,
    amountRaised: 62400,
    backers: 831,
    fundingType: FundingType.FIXED,
    startDate: "2023-06-15T00:00:00Z",
    endDate: "2023-09-15T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "6-1",
        date: "2023-07-01T12:00:00Z",
        title: "Software beta version available",
        content: "We've completed the beta version of our scanning software! Check your backer portal for early access information."
      },
      {
        id: "6-2",
        date: "2023-08-10T09:30:00Z",
        title: "Production progress update",
        content: "We've finalized our manufacturing arrangements and are on track for timely production. Here's a sneak peek at the final design!"
      }
    ],
    rewards: [
      {
        id: "6-r1",
        title: "Early Creator",
        description: "ArtiScan hardware kit and 1-year software subscription with up to 25 high-quality scans per month.",
        amount: 129,
        delivery: "Month 6",
        items: ["ArtiScan platform", "LED lighting ring", "Phone attachment", "1-year software subscription", "25 monthly scans"]
      },
      {
        id: "6-r2",
        title: "Professional Package",
        description: "ArtiScan hardware kit with premium lighting, 2-year software subscription, and up to 100 scans per month.",
        amount: 249,
        delivery: "Month 6",
        items: ["ArtiScan pro platform", "Adjustable LED lighting studio", "Phone attachment", "2-year software subscription", "100 monthly scans"]
      },
      {
        id: "6-r3",
        title: "Studio Solution",
        description: "Two ArtiScan professional kits, lifetime software subscription, unlimited scans, and priority support.",
        amount: 599,
        delivery: "Month 6",
        items: ["2 ArtiScan pro platforms", "2 Adjustable LED lighting studios", "2 Phone attachments", "Lifetime software subscription", "Unlimited scans", "Priority support"]
      }
    ]
  },
  {
    id: "7",
    title: "PlantPal: Smart Garden Companion",
    slug: "plantpal-garden-companion",
    category: CampaignCategory.ENVIRONMENT,
    creatorId: "user7",
    creatorName: "Olivia Kim",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "AI-powered device that monitors your plants and provides real-time care instructions.",
    fullDescription: `
      PlantPal is like having a botanist on call 24/7, ensuring your indoor and outdoor plants thrive year-round.

      ## The Problem
      Even experienced gardeners struggle to provide optimal care for diverse plant species with varying needs, and new gardeners often give up after plant failures.

      ## Our Solution
      PlantPal delivers:
      
      - **Plant Recognition**: Identifies 5,000+ species and their varieties
      - **Environment Monitoring**: Tracks soil moisture, sunlight, temperature and humidity
      - **Personalized Care**: Provides species-specific watering, fertilizing and care schedules
      - **Problem Diagnosis**: Identifies diseases and pests with treatment recommendations
      - **Growth Tracking**: Documents plant progress with time-lapse capabilities

      ## What We'll Deliver
      The PlantPal sensor stake with companion app, including plant identification, care instructions, and community features.

      ## Timeline
      - Month 1-2: Finalize hardware production
      - Month 3: Complete software development
      - Month 4-5: Production and quality testing
      - Month 6: Fulfillment to backers
      
      Grow your green thumb with technology!
    `,
    goal: 90000,
    amountRaised: 103500,
    backers: 1750,
    fundingType: FundingType.FLEXIBLE,
    startDate: "2023-04-01T00:00:00Z",
    endDate: "2023-07-01T00:00:00Z",
    status: CampaignStatus.SUCCESSFUL,
    updates: [
      {
        id: "7-1",
        date: "2023-04-15T11:30:00Z",
        title: "Fully funded in two weeks!",
        content: "We're thrilled to announce that PlantPal has been fully funded in just two weeks! Thanks to our amazing backers, we're now working toward stretch goals."
      },
      {
        id: "7-2",
        date: "2023-05-10T10:00:00Z",
        title: "Plant database expanded",
        content: "We've expanded our plant database to include over 7,000 species - well beyond our initial goal!"
      },
      {
        id: "7-3",
        date: "2023-06-20T14:15:00Z",
        title: "Production underway",
        content: "Production has begun! The first batch of PlantPal sensors is coming to life, and we're right on schedule for our delivery timeline."
      }
    ],
    rewards: [
      {
        id: "7-r1",
        title: "Green Starter",
        description: "One PlantPal sensor stake with standard monitoring capabilities and app access.",
        amount: 59,
        delivery: "Month 6",
        items: ["PlantPal sensor stake", "App access", "Plant identification", "Basic care instructions"]
      },
      {
        id: "7-r2",
        title: "Garden Enthusiast",
        description: "Two PlantPal sensor stakes with premium features including pest detection and advanced analytics.",
        amount: 99,
        delivery: "Month 6",
        items: ["2 PlantPal sensor stakes", "App access", "Premium features", "Pest and disease detection", "Growth analytics"]
      },
      {
        id: "7-r3",
        title: "Master Gardener",
        description: "Five PlantPal sensor stakes, early access to new features, and a 30-minute consultation with a professional botanist.",
        amount: 199,
        delivery: "Month 6",
        items: ["5 PlantPal sensor stakes", "App access", "Premium features", "Beta feature access", "30-minute botanist consultation"]
      }
    ]
  },
  {
    id: "8",
    title: "Melodica: Adaptive Music Learning Platform",
    slug: "melodica-music-learning",
    category: CampaignCategory.EDUCATION,
    creatorId: "user8",
    creatorName: "Thomas Jackson",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "An AI-powered platform that adapts to your learning style to teach musical instruments effectively.",
    fullDescription: `
      Melodica transforms how people learn musical instruments by creating a customized learning journey for each student.

      ## The Problem
      Traditional music learning is either expensive (private lessons) or one-size-fits-all (apps and videos), leading to high dropout rates.

      ## Our Solution
      Melodica provides:
      
      - **Learning Style Assessment**: Identifies your optimal learning approach
      - **Adaptive Curriculum**: Adjusts difficulty and style based on performance
      - **Real-time Feedback**: Listens to your playing and offers specific corrections
      - **Visual Learning Tools**: Shows finger positions, notes, and techniques in intuitive ways
      - **Practice Motivation**: Gamified elements maintain engagement and consistent practice

      ## What We'll Deliver
      Access to the Melodica platform with instrument-specific learning paths for piano, guitar, violin, and more, plus the Melodica audio processor for accurate performance analysis.

      ## Timeline
      - Month 1-2: Platform development completion
      - Month 3: Audio processor production
      - Month 4: Beta testing with music educators
      - Month 5: Full platform launch to backers
      
      Make your musical dreams a reality!
    `,
    goal: 70000,
    amountRaised: 45600,
    backers: 683,
    fundingType: FundingType.FIXED,
    startDate: "2023-08-15T00:00:00Z",
    endDate: "2023-11-15T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "8-1",
        date: "2023-09-01T13:45:00Z",
        title: "New instruments added",
        content: "Due to popular demand, we've added saxophone and drums to our instrument lineup, bringing our total to eight supported instruments!"
      }
    ],
    rewards: [
      {
        id: "8-r1",
        title: "Solo Artist",
        description: "One-year access to Melodica for a single instrument of your choice.",
        amount: 79,
        delivery: "Month 5",
        items: ["Platform access", "Single instrument course", "Basic feedback tools", "Melodica audio processor"]
      },
      {
        id: "8-r2",
        title: "Multi-Instrumentalist",
        description: "Two-year access to Melodica for up to three instruments of your choice.",
        amount: 149,
        delivery: "Month 5",
        items: ["Platform access", "Three instrument courses", "Advanced feedback tools", "Melodica audio processor", "Performance analytics"]
      },
      {
        id: "8-r3",
        title: "Music Academy",
        description: "Lifetime access to all instruments, priority support, and four 30-minute sessions with professional music educators.",
        amount: 349,
        delivery: "Month 5",
        items: ["Lifetime platform access", "All instrument courses", "Premium feedback system", "Melodica audio processor", "Four educator sessions", "Priority support"]
      }
    ]
  },
  {
    id: "9",
    title: "NutriPrep: Automated Meal Planning",
    slug: "nutriprep-meal-planning",
    category: CampaignCategory.HEALTH,
    creatorId: "user9",
    creatorName: "Michael Foster",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "An AI system that creates personalized meal plans and automatically orders ingredients from local stores.",
    fullDescription: `
      NutriPrep eliminates the daily stress of deciding what to eat while ensuring your meals are healthy, delicious, and aligned with your goals.

      ## The Problem
      Meal planning is time-consuming, grocery shopping is inefficient, and maintaining dietary goals is difficult without considerable effort.

      ## Our Solution
      NutriPrep offers:
      
      - **Personalized Nutrition**: Creates meal plans based on your health goals, dietary restrictions, and preferences
      - **Taste Learning**: Adapts recommendations based on your feedback
      - **Automated Shopping**: Integrates with local grocery stores and delivery services
      - **Waste Reduction**: Plans meals to utilize ingredients efficiently
      - **Budget Management**: Works within your specified grocery budget

      ## What We'll Deliver
      Access to the NutriPrep platform, including meal planning, recipe database, and grocery integration services.

      ## Timeline
      - Month 1: Complete platform development
      - Month 2: Finalize grocery store partnerships
      - Month 3: Launch to backers
      
      Transform how you eat without the daily decision fatigue!
    `,
    goal: 40000,
    amountRaised: 51200,
    backers: 1284,
    fundingType: FundingType.FLEXIBLE,
    startDate: "2023-07-20T00:00:00Z",
    endDate: "2023-09-20T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "9-1",
        date: "2023-08-05T12:30:00Z",
        title: "Surpassed our goal!",
        content: "We're excited to announce that NutriPrep has exceeded its funding goal with a month still remaining in our campaign! We're now working on expanding our grocery store partnerships nationally."
      },
      {
        id: "9-2",
        date: "2023-08-25T10:15:00Z",
        title: "Recipe database milestone",
        content: "Our culinary team has completed our initial recipe database with over 5,000 dishes spanning 15 different cuisine types!"
      }
    ],
    rewards: [
      {
        id: "9-r1",
        title: "Meal Planner Basic",
        description: "One-year access to NutriPrep with standard meal planning and grocery integration.",
        amount: 49,
        delivery: "Month 3",
        items: ["Platform access", "Weekly meal planning", "Recipe database", "Basic grocery integration"]
      },
      {
        id: "9-r2",
        title: "Family Nutrition",
        description: "Two-year access to NutriPrep with family profiles, preference management, and premium grocery services.",
        amount: 89,
        delivery: "Month 3",
        items: ["Platform access", "Multiple family profiles", "Advanced preference settings", "Premium grocery integration", "Nutritionist-reviewed plans"]
      },
      {
        id: "9-r3",
        title: "Nutrition Pro",
        description: "Lifetime access to NutriPrep with all premium features and a personalized nutrition consultation.",
        amount: 199,
        delivery: "Month 3",
        items: ["Lifetime platform access", "All premium features", "Priority support", "60-minute nutrition consultation", "Custom dietary analysis"]
      }
    ]
  },
  {
    id: "10",
    title: "CommuniLift: Ridesharing for Rural Communities",
    slug: "communilift-rural-ridesharing",
    category: CampaignCategory.COMMUNITY,
    creatorId: "user10",
    creatorName: "Sarah Martinez",
    creatorAvatar: "/placeholder.svg",
    bannerImage: "/placeholder.svg",
    shortDescription: "A ridesharing platform designed specifically for underserved rural areas with limited transportation options.",
    fullDescription: `
      CommuniLift provides reliable transportation in rural areas where traditional ridesharing services don't operate and public transportation is limited or nonexistent.

      ## The Problem
      Rural communities face significant transportation challenges. Many residents—particularly elderly, disabled, or economically disadvantaged individuals—struggle with basic mobility needs.

      ## Our Solution
      CommuniLift delivers:
      
      - **Scheduled Rides**: Book transportation days or weeks in advance
      - **Community Drivers**: Local residents serve their communities while earning income
      - **Resource Pooling**: Combines private vehicles, community vans, and volunteer drivers
      - **Accessibility Focus**: Specialized options for those with mobility challenges
      - **Offline Functionality**: Works in areas with limited cell service

      ## What We'll Deliver
      The CommuniLift platform, including rider and driver apps, dispatching system, and community organization tools. We'll launch in three rural counties with plans for rapid expansion.

      ## Timeline
      - Month 1: Complete platform development
      - Month 2: Driver recruitment and training in pilot communities
      - Month 3: Launch in first three rural counties
      - Month 4-6: Expansion to additional communities
      
      Help bring mobility to those who need it most!
    `,
    goal: 100000,
    amountRaised: 87300,
    backers: 942,
    fundingType: FundingType.FLEXIBLE,
    startDate: "2023-06-01T00:00:00Z",
    endDate: "2023-09-01T00:00:00Z",
    status: CampaignStatus.ACTIVE,
    updates: [
      {
        id: "10-1",
        date: "2023-06-15T09:45:00Z",
        title: "Pilot communities selected",
        content: "We've selected our three launch communities in consultation with local officials and community organizations. We're excited to announce that Bradford County, Harlan County, and Wheeler County will be our pilot locations!"
      },
      {
        id: "10-2",
        date: "2023-07-20T14:00:00Z",
        title: "Driver program details",
        content: "We've finalized our driver program, including training, compensation, and safety protocols. Driver recruitment will begin next week in our pilot counties."
      },
      {
        id: "10-3",
        date: "2023-08-10T11:30:00Z",
        title: "Platform testing successful",
        content: "We've completed our initial platform testing with community volunteers. The feedback has been invaluable, and we've made several improvements to enhance usability for both riders and drivers."
      }
    ],
    rewards: [
      {
        id: "10-r1",
        title: "Community Supporter",
        description: "Recognition in our supporter gallery and $50 in ride credits when we launch in your area.",
        amount: 25,
        delivery: "Upon area launch",
        items: ["Supporter recognition", "$50 ride credits", "Launch notification"]
      },
      {
        id: "10-r2",
        title: "Early Adopter",
        description: "$150 in ride credits, priority access in new launch areas, and a CommuniLift sustainable tote bag.",
        amount: 75,
        delivery: "Upon area launch",
        items: ["$150 ride credits", "Priority area access", "Sustainable tote bag", "Quarterly program updates"]
      },
      {
        id: "10-r3",
        title: "Community Champion",
        description: "$400 in ride credits, ability to donate 10 rides to community members in need, and input into future launch locations.",
        amount: 200,
        delivery: "Upon area launch",
        items: ["$400 ride credits", "10 community donation rides", "Launch location input", "Exclusive program updates", "Champion recognition"]
      }
    ]
  }
];
