import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.js"
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle.jsx"


const navItems = [
    { name: "خانه", href: "#hero" },
    { name: "درباره من", href: "#about" },
    { name: "مهارت ها", href: "#skills" },
    { name: "نمونه کار ها", href: "#projects" },
    { name: "تماس با من", href: "#contact" },
]

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
        >
            <div className="container flex items-center justify-between font-[IRANYekan] font-bold">
                {/* logo section */}
                <a className="text-2xl font-bold flex items-center text-primary font-[Poppins] " href="#hero" >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Amin</span> PROG
                    </span>
                </a>
                {/* end of logo section */}

                {/* desktop navbar */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                {/* end of desktop navbar */}

                {/* mobile navbar */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground p-2 z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                )}>
                    <ThemeToggle className="fixed z-60 top-4 left-1/2 md:hidden flex flex-col items-center justify-center transition-all duration-300" />
                    <div className="flex flex-col space-y-8 text-xl ">
                        {navItems.map((item, key) => (
                            <a key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                {/*  end of mobile navbar  */}

            </div>

        </nav>
    );
}