import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
}

export const generateMetadata = ({
  title = `Infonixa | AI-Powered Project Management & Marketing`,
  description = `Infonixa is your AI-powered platform for project management, team collaboration, web & app development, digital marketing, and automation solutions.`,
  icons = [
    { rel: "icon", url: "/icons/icon-dark.png", media: "(prefers-color-scheme: light)" },
    { rel: "icon", url: "/icons/icon.png", media: "(prefers-color-scheme: dark)" },
  ],
  noIndex = false,
  keywords = [
     "Infonixa",
  "infonixa web",
  "infonixa website",
  "infonixa app",
  "infonixa digital marketing",
  "infonixa automation",
  "AI automation",
  "AI-powered solutions",
  "project management",
  "workflow automation",
  "team collaboration",
  "web development",
  "app development",
  "mobile app development",
  "website development",
  "digital marketing services",
  "SEO services",
  "social media marketing",
  "marketing automation",
  "infonixa software",
  "infonixa company",
  "infonixa platform",
  "infonixa AI tools",
  "business automation",
  "marketing workflow",
  "performance tracking",
  "multilingual marketing",
  "online marketing solutions",
  "custom web apps",
  "custom mobile apps",
  "infonixa online",
  ],
  author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
  type = "website",
}: MetadataProps = {}): Metadata => {
  const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://infonixa.com");

  return {
    metadataBase,
    title: {
      template: `%s | Infonixa`,
      default: title,
    },
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: "Infonixa",
    formatDetection: { email: false, address: false, telephone: false },
    icons,
    alternates: {
      canonical: "https://infonixa.com",
    },
    openGraph: {
      title,
      description,
      url: "https://infonixa.com",
      siteName: "Infonixa",
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@Infonixa",
      creator: "@Infonixa",
    },
  };
};
