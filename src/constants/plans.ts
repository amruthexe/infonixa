export type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    annuallyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    desc: "Web design (from design to deployment) with Next.js tech stack optimized for SEO.",
    monthlyPrice: 30000,
    annuallyPrice: 30000,
    buttonText: "Choose Plan",
    features: [
      "Website design & deployment",
      "Next.js tech stack for high SEO",
      "Responsive design",
      "Basic maintenance & support",
    ],
    link: "#"
  },
  {
    id: "digital-marketing",
    title: "Website + Digital Marketing Pack",
    desc: "Everything in Website Maintenance + Digital Marketing & Automation for better reach.",
    monthlyPrice: 49000,
    annuallyPrice: 49000,
    badge: "Most Popular",
    buttonText: "Choose Plan",
    features: [
      "All features of Website Maintenance",
      "Digital marketing campaigns",
      "Marketing automation setup",
      "SEO optimization & reports",
    ],
    link: "#"
  },
  {
    id: "enterprise-pack",
    title: "Enterprise Pack",
    desc: "Full-scale solution including Website, Digital Marketing, and advanced automation for large businesses.",
    monthlyPrice: 99000,
    annuallyPrice: 99000,
    badge: "Premium",
    buttonText: "Contact Sales",
    features: [
      "All features of Digital Marketing Pack",
      "Advanced automation workflows",
      "Custom analytics & reports",
      "Dedicated support & account manager",
    ],
    link: "#"
  },
  {
    id: "complete-business-suite",
    title: "Complete Business Suite",
    desc: "Ultimate package for enterprises: Website, Marketing, Automation, Custom Integrations & Priority Support.",
    monthlyPrice: 149000,
    annuallyPrice: 149000,
    badge: "Ultimate",
    buttonText: "Contact Sales",
    features: [
      "All features of Enterprise Pack",
      "Full-scale marketing automation",
      "Custom software integrations",
      "Priority 24/7 support",
      "Dedicated account manager",
      "Advanced performance analytics",
    ],
    link: "#"
  }
];


export const PLANS_FAQ = [
    {
        id: 1,
        question: "How does the AI content generation work?",
        answer: "Our AI generates high-quality marketing content across various formats including social media posts, email campaigns, and blog articles, while maintaining your brand voice."
    },
    {
        id: 2,
        question: "Can I manage multiple brands or clients?",
        answer: "Yes! The Scale Pro plan supports up to 5 brands, while Enterprise offers unlimited brand management capabilities."
    },
    {
        id: 3,
        question: "Is there a discount for annual billing?",
        answer: "Yes, you can save 15% by choosing annual billing over monthly billing for any of our plans."
    },
    {
        id: 4,
        question: "Do you offer special pricing for contractors?",
        answer: "Yes, we offer special rates for independent contractors and small construction firms. Contact our sales team for more information."
    },
    {
        id: 5,
        question: "How does the BIM integration work?",
        answer: "Our Enterprise plan includes full BIM integration, allowing you to view and manage 3D models, coordinate with team members, and track changes in real-time."
    },
    {
        id: 6,
        question: "What kind of support do you provide?",
        answer: "We offer email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support with a personal account manager for Enterprise plans."
    },
    {
        id: 7,
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing period. Downgrades take effect at the next billing cycle."
    },
    {
        id: 8,
        question: "Is mobile access available?",
        answer: "Yes, all plans include access to our mobile app for iOS and Android, allowing you to manage projects on the go."
    },
    {
        id: 9,
        question: "What security measures do you have in place?",
        answer: "We offer industry-standard security for all plans, with additional features like SSO, audit logs, and custom security policies available in the Enterprise plan."
    }
];

export const PLANS_TABLE = [
    {
        id: 1,
        title: 'Growth Starter',
        priceMonthly: '$29',
        priceYearly: "$290",
        buttonText: 'Start free trial',
        usage: {
            members: '2 members',
            contentGeneration: '1,000 words/mo',
            socialChannels: '3 channels',
            brands: '1 brand',
        },
        features: [
            'Basic AI content generation',
            'Social media scheduling',
            'Content calendar',
            'Basic analytics',
            'Email marketing templates',
            'Basic automation',
            'Mobile app access',
            'Community support',
        ],
    },
    {
        id: 2,
        title: 'Scale Pro',
        priceMonthly: '$79',
        priceYearly: "$790",
        buttonText: 'Scale now',
        usage: {
            members: '5 members',
            contentGeneration: '10,000 words/mo',
            socialChannels: 'All platforms',
            brands: '5 brands',
        },
        features: [
            'Advanced AI content generation',
            'Custom AI training',
            'Advanced automation',
            'Campaign tracking',
            'Performance analytics',
            'A/B testing',
            'Priority support',
            'API access',
            'Advanced reporting',
        ],
    },
    {
        id: 3,
        title: 'Enterprise AI',
        priceMonthly: '$199',
        priceYearly: "$1990",
        buttonText: 'Contact sales',
        usage: {
            members: 'Unlimited',
            contentGeneration: 'Unlimited',
            socialChannels: 'Unlimited',
            brands: 'Unlimited',
        },
        features: [
            'Custom AI solutions',
            'Enterprise automation',
            'Multi-brand management',
            'Advanced security',
            'Custom integrations',
            'Dedicated support',
            'Custom training',
            'Enterprise analytics',
            'Custom workflows',
        ],
    },
];
