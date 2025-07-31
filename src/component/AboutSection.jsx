import { User, Briefcase, Code } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative font-[IRANYekan]">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl md:text-6xl mb-12 text-center font-black">
                    دربـــــــاره <span className="text-primary"> من</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">طراحی منحصر به فرد و خلاقانه </h3>
                        <p className="text-muted-foreground font-light text-justify">طراح وب با بیش از دو سال سابقه در زمینه طراحی و توسعه صفحات ریسپانسیو.
                            به خلق رابط‌های کاربری منحصربه‌فرد و تجربه‌های دیجیتال مؤثر علاقه‌مندم.
                            هدف من ارائه راهکارهایی است که در کنار زیبایی بصری، کارایی و رضایت کاربران را نیز تضمین کند.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                            <a href="#contact" className="cosmic-button">
                                تماس با من
                            </a>
                            <a
                                href="/files/rezome.pdf"
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                دانلود رزومه
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-right">
                                    <h4 className="font-semibold">طراحی سایت های مدرن</h4>
                                    <p className="text-muted-foreground font-thin mt-1">با استفاده از فریمورک های مدرن</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-right">
                                    <h4 className="font-semibold">طراح و علاقه مند به طراحی  UI/UX</h4>
                                    <p className="text-muted-foreground font-thin mt-1">طراح UI/UX با رویکردی مینیمال و تمرکز بر بهینه سازی تعامل کاربر با محصول </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-right">
                                    <h4 className="font-semibold">مدیریت پروژه</h4>
                                    <p className="text-muted-foreground font-thin mt-1">در مدیریت پروژه تمرکز بر زمان بندی دقیق، ارتباط شفاف و تحویل به موقع است.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}