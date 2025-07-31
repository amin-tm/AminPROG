import { Navbar } from "@/component/Navbar.jsx"
import { ThemeToggle } from "@/component/ThemeToggle.jsx";
import { HeroSection } from "@/component/HeroSection.jsx"
import { AboutSection } from "../component/AboutSection";
import { SkillsSection } from "../component/SkillsSection";
import { ProjectSection } from "../component/ProjectSection";
import { ContactSection } from "../component/ContactSection";
import { FooterSection } from "../component/FooterSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/*  Navbar  */}

            <Navbar />

            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <ContactSection />
            </main>

            <FooterSection />

        </div>
    )
}

