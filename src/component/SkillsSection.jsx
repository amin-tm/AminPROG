import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    { name: "HTML/CSS", level: "95", category: "فرانت اند" },
    { name: "JavaScript", level: "80", category: "فرانت اند" },
    { name: "TailwindCss", level: "50", category: "فرانت اند" },
    { name: "Next.js", level: "10", category: "فرانت اند" },
    { name: "React", level: "50", category: "فرانت اند" },
    { name: "Wordpress", level: "60", category: "فرانت اند" },

    { name: "Node.js", level: "30", category: "بک اند" },

    { name: "Git/GitHub", level: "60", category: "سایر" },
    { name: "Vs Code", level: "90", category: "سایر" },
    { name: "Photoshop", level: "60", category: "سایر" },
]

const categories = ["همه", "فرانت اند", "بک اند", "سایر"]



export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("همه")

    const fillteredSkills = skills.filter(
        (skill) => activeCategory === "همه" || skill.category === activeCategory
    );

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-5xl md:text-6xl font-black mb-12 text-center font-[IRANYekan]">
                مهـــــــارت های <span className="text-primary">من</span>
            </h2>

            <div className="flex flex-wrap justify-center mb-12 gap-4 font-[IRANYekan] font-medium">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fillteredSkills.map((skill, key) => (
                    <div key={key} className="gradient-border p-6 shadow-xs rounded-lg card-hover font-[Poppins]" >
                        <div className="text-center mb-4">
                            <h3 className="font-semibold">{skill.name}</h3>
                        </div>
                        <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }} />
                        </div>
                        <div className="text-left mt-1">
                            <span className="text-sm text-muted-foreground font-light">{skill.level}%</span>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </section>
}