import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import AutomationSection from "@/components/marketing/AutomationSection";
import Companies from "@/components/marketing/companies";
import ContactForm from "@/components/marketing/ContactForm";
import CTA from "@/components/marketing/cta";
import FAQSection from "@/components/marketing/FAQSection";
import Features from "@/components/marketing/features";
import { FeaturesSectionGlobe } from "@/components/marketing/FeaturesSectionGlobe";
import Hero from "@/components/marketing/hero";
import Industries from "@/components/marketing/Industries";
import InfonixaInfoSection from "@/components/marketing/InfonixaInfoSection";
import Integration from "@/components/marketing/integration";
import LanguageSupport from "@/components/marketing/lang-support";
import Pricing from "@/components/marketing/pricing";
import ProjectsShowcase from "@/components/marketing/ProjectsShowcase";
import Stats from "@/components/marketing/stats";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <Companies />
            <InfonixaInfoSection/>
            <Features />
            <Analysis />
            <Stats/>
            <Industries/>
            {/* <FeaturesSectionGlobe/> */}
           
            <AutomationSection/>
            <Pricing />
            <LanguageSupport />
             <Integration />
             <ProjectsShowcase/>
             
            <ContactForm/>
            <FAQSection/>
            <CTA />
        </Wrapper>
    )
};

export default HomePage
