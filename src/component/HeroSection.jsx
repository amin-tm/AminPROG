import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-8xl mx-auto text-center z-10">
                <div className="space-y-8">
                    {/* <h1 className="text-lg md:text-4xl font-black tracking-tight font-[Poppins]">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Amin </span>

                        <span className="opacity-0 mr-2 animate-fade-in-delay-2"></span>

                    </h1> */}
                    <h1 className="top-1 font-[IRANYekan] font-black text-4xl md:text-7xl">
                        <span className="opacity-0 animate-fade-in">ســـــلام، من </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">امیـــــــــــــــن</span>
                        <span className="opacity-0 mr-2 animate-fade-in-delay-2">م</span>
                    </h1>
                    <p className="font-[IRANYekan] font-light text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">یک طراح وب با اشتیاق برای ساخت تجربه‌های دیجیتال، کاربرپسند و تاثیرگذار.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                        <a href="#projects" className="cosmic-button font-[IRANYekan]">مشاهده پروژه‌ها</a>
                    </div>
                </div>
            </div>

            <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce font-[IRANYekan] cursor-pointer">
                <span className="text-sm text-muted-foreground mb-2 font-light"> به پایین بکشید </span>
                <ArrowDown className="w-5 h-5 text-primary" />
            </a>
        </section>
    )
}