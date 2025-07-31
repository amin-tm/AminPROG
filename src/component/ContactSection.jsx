import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils.js"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";
import { ArrowUp } from "lucide-react"

export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "پیام شما ارسال شد!",
                description: "با تشکر از پیام شما، در اسرع وقت با شما تماس خواهم گرفت."
            });


        }, 1500);
    }

    return (

        <section id="contact" className="py-24 px-4 relative font-[IRANYekan]">
            <div className="container mx-auto max-w-5xl mb-14">
                <h2 className="text-5xl md:text-6xl mb-4 text-center font-black">
                    تمــــــاس با <span className="text-primary">من</span>
                </h2>
                <p className="text-muted-foreground font-light text-center mb-12">
                    برای هرگونه سوال یا همکاری، لطفاً از طریق فرم زیر با من در تماس باشید.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold mb-6">اطلاعــــات تماس</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex gradient-border p-3 card-hover items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-right">ایمیل</h4>
                                    <a
                                        href="mailto:mohammadian266@gmail.com"
                                        className="text-foreground/70 font-light hover:text-primary transition-colors duration-300 font-[Poppins] text-xs">
                                        mohammadian266@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gradient-border p-3 card-hover space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-right">تلفن تماس</h4>
                                    <a
                                        href="tel:+989162290079"
                                        className="text-foreground/70 font-light hover:text-primary font-[IRANYekanNum] transition-colors duration-300 text-md ">
                                        916-229-0079 (98+)
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gradient-border p-3 card-hover space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-right">آدرس</h4>
                                    <a
                                        className="text-foreground/70 font-light font-[IRANYekan] transition-colors text-md ">
                                        اصفهان - خیابان فیض
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">با من در ارتباط باشید</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin
                                        className="h-6 w-6 hover:text-primary transition-colors duration-300" />
                                </a>
                                <a href="#" target="_blank">
                                    <Github
                                        className="h-6 w-6 hover:text-primary transition-colors duration-300" />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram
                                        className="h-6 w-6 hover:text-primary transition-colors duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-bold mb-6">پیـــــــام خود را ارســـــــال کنید</h3>
                        <form action="" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-right">نام خود را وارد کنید.</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-right">ایمیل خود را وارد کنید.</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-right">پیام خود را وارد کنید.</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
                                )}
                            >
                                {isSubmitting ? "در حال ارسال پیام" : "ارسال پیام"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <a href="#hero" className="absolute bottom-8 left-1/2 mt-8 transform -translate-x-1/2 flex flex-col items-center animate-bounce font-[IRANYekan] cursor-pointer">
                <ArrowUp className="w-7 h-7 text-primary mb-2" />
                <span className="text-sm text-muted-foreground mb-2 font-black"> رفتن به بالا </span>
            </a>
        </section>
    )
}