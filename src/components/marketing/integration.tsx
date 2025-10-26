"use client";
import { useState } from "react";
import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import { Button } from "../ui/button";
import Ripple from "../ui/ripple";

// --- Dialog Structure ---
const Dialog = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="relative bg-gradient-to-br from-black to-blue-900 text-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b border-white/10 pb-3 mb-4">{children}</div>
);

const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl sm:text-2xl font-bold text-blue-300">{children}</h3>
);

const DialogContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

// --- Social Platforms ---
const SOCIAL_PLATFORMS = [
  "LinkedIn",
  "TikTok",
  "Instagram",
  "YouTube",
  "X (Twitter)",
  "Facebook",
  "Pinterest",
  "Snapchat",
  "Reddit",
  "Telegram",
];

// --- Service Popup Component ---
const ServiceDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-white hover:text-blue-400 transition-colors text-lg"
        onClick={() => onOpenChange(false)}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Header */}
      <DialogHeader>
        <DialogTitle>🚀 Social Media Platforms We Support</DialogTitle>
      </DialogHeader>

      {/* Content */}
      <DialogContent>
        <div className="grid grid-cols-2 gap-3 mt-4 text-sm sm:text-base">
          {SOCIAL_PLATFORMS.map((platform, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition-all"
            >
              <span className="text-blue-400 font-bold">✓</span>
              <p>{platform}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs text-gray-300 text-center">
          *We offer tailored digital marketing services across these platforms.
        </p>
      </DialogContent>
    </Dialog>
  );
};

// --- Integration Section ---
const Integration = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "left-3":
        return "-translate-x-[285px]";
      case "left-2":
        return "-translate-x-[210px]";
      case "left-1":
        return "-translate-x-[125px]";
      case "right-1":
        return "translate-x-[125px]";
      case "right-2":
        return "translate-x-[210px]";
      case "right-3":
        return "translate-x-[285px]";
      default:
        return "";
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "size-20";
      case "medium":
        return "size-16";
      case "small":
        return "size-12";
      default:
        return "size-20";
    }
  };

  const getIconSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "size-10";
      case "medium":
        return "size-7";
      case "small":
        return "size-5";
      default:
        return "size-10";
    }
  };

  const SOCIAL_ICONS = [
    {
      icon: Icons.linkedin,
      position: "left-3",
      size: "small",
      iconSize: "small",
      className: "hidden lg:flex",
    },
    { icon: Icons.tiktok, position: "left-2", size: "medium", iconSize: "medium" },
    { icon: Icons.insta, position: "left-1", size: "large", iconSize: "large" },
    { icon: Icons.youtube, position: "right-1", size: "large", iconSize: "large" },
    { icon: Icons.x, position: "right-2", size: "medium", iconSize: "medium" },
    {
      icon: Icons.facebook,
      position: "right-3",
      size: "small",
      iconSize: "small",
      className: "hidden lg:flex",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      {/* Popup */}
      <ServiceDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

      <Container className="relative">
        <div className="relative flex flex-col lg:hidden items-center justify-center overflow-visible">
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

          <div className="max-w-sm w-full h-auto mx-auto mt-8">
            <Image
              src="/images/integration.svg"
              alt="Integration"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>

      <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:top-1/4 inset-x-0 mt-12 lg:mt-0">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-semibold !leading-snug">
          Our Services
        </h2>
        <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
          Helping brands grow digitally with our expert solutions in social
          media, branding, web, and marketing.
        </p>
      </div>

      <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:bottom-1/4 inset-x-0 z-20 mt-8 lg:mt-0">
        <Button size="lg" onClick={() => setIsDialogOpen(true)}>
          Explore All Services
          <ArrowRightIcon className="size-4 ml-2" />
        </Button>
      </div>

      <Container delay={0.3}>
        <div className="relative hidden lg:flex items-center justify-center overflow-visible">
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

          <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-visible">
            <Ripple />
          </div>

          <div className="absolute z-20 flex items-center justify-center group">
            <Images.logo className="size-24 group-hover:scale-110 transition-all duration-500" />
          </div>

          {SOCIAL_ICONS.map((platform, index) => (
            <div
              key={index}
              className={cn(
                "absolute z-20 size-16 p-3 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110",
                getPositionClasses(platform.position),
                getSizeClasses(platform.size),
                platform.className
              )}
            >
              <platform.icon
                className={cn(
                  "size-auto text-foreground",
                  getIconSizeClasses(platform.iconSize)
                )}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Integration;

// --- Simple animation (add this in globals.css if not existing) ---
// @keyframes zoomIn {
//   0% { transform: scale(0.8); opacity: 0; }
//   100% { transform: scale(1); opacity: 1; }
// }
// .animate-zoomIn {
//   animation: zoomIn 0.3s ease-out;
// }
