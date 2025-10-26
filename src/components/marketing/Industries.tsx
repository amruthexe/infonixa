// components/Features.tsx
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";
import { cn } from "@/lib/cn"; // Adjusted path for better organization

// The icon type for a feature item
interface FeatureIconProps {
  className?: string;
}

// Mock up for the FEATURES constant array
// In a real project, this would be in "@/constants/index.ts" or similar
const FEATURES = [
  {
    title: "Social Networking",
    description:
      "Connect people and communities with seamless social platforms designed for engagement and growth.",
    image: "/images/domains/social-networking.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="12" r="3" />
        <circle cx="20" cy="12" r="3" />
        <path d="M7 12h10" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand visibility and reach with data-driven digital marketing strategies.",
    image: "/images/domains/digital-marketing.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 11l19-9v20l-19-9z" />
      </svg>
    ),
  },
  {
    title: "Ecommerce Development",
    description:
      "Develop scalable, user-friendly ecommerce solutions to drive seamless shopping experiences.",
    image: "/images/domains/ecommerce.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M6 6h15l-1.5 9h-13z" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    ),
  },
  {
    title: "Video Service",
    description:
      "Deliver high-quality video streaming, editing, and sharing platforms for creators and brands.",
    image: "/images/domains/video-service.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Banking Service",
    description:
      "Build secure and efficient digital banking and fintech platforms for modern finance.",
    image: "/images/domains/banking.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 10h18L12 3z" />
        <path d="M3 10v10h18V10" />
      </svg>
    ),
  },
  {
    title: "Enterprise Service",
    description:
      "Enhance business productivity with powerful enterprise-grade digital solutions.",
    image: "/images/domains/enterprise.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Education Service",
    description:
      "Develop e-learning platforms and tools for interactive, accessible education.",
    image: "/images/domains/education.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M22 9L12 5 2 9l10 4 10-4z" />
        <path d="M2 9v6a10 10 0 0 0 20 0V9" />
      </svg>
    ),
  },
  {
    title: "Tour and Travels",
    description:
      "Empower travel businesses with booking systems, guides, and itinerary management tools.",
    image: "/images/domains/tour-travel.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Health Service",
    description:
      "Provide patients and professionals with reliable healthcare and telemedicine solutions.",
    image: "/images/domains/health.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 12h6m-3-3v6M4.22 4.22a10 10 0 1 1 15.56 15.56" />
      </svg>
    ),
  },
  {
    title: "Event & Ticket",
    description:
      "Simplify ticketing, booking, and event management for organizers and users.",
    image: "/images/domains/event-ticket.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 6v12" />
      </svg>
    ),
  },
  {
    title: "Restaurant Service",
    description:
      "Design food delivery, restaurant management, and POS solutions for hospitality.",
    image: "/images/domains/restaurant.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 2v20M10 2v8M16 2v8M22 2v20" />
      </svg>
    ),
  },
  {
    title: "Business Consultant",
    description:
      "Offer expert business analysis, process optimization, and growth consulting digitally.",
    image: "/images/domains/business-consultant.png",
    icon: ({ className }: FeatureIconProps) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2 0 4 1 4 3v5H8v-5c0-2 2-3 4-3z" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];



const Industries  = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            {/* The Container component is mocked to simply be a div for the demo */}
           <Container>
  <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
      Helping Businesses in All <br />
      <span className="font-subheading italic text-blue-500">Domains</span>
    </h2>
    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
      We have successfully delivered digital products across various industries, 
      making us a one-stop solution for all your business and digital transformation needs.
    </p>
  </div>
</Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">

                {FEATURES.map((feature, index) => (
                    // The main card wrapper (simulating the outer border/hover)
                    <div key={feature.title} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",
                       
                    )}>
                        {/* MagicCard component provides the gradient hover effect on the content */}
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            // Note: gradientColor is applied as a background/inner shadow on hover
                            gradientColor="rgba(59,130,246,0.1)" 
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <feature.icon className="size-5 text-primary" />
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>

                          
                        </MagicCard>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Industries ;

// This mock is included for completeness in a single file environment.
// In your project, it should be in "@/constants/index.ts"
// export const FEATURES = [ ... ];