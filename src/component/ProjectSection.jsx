import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


const projects = [
    {
        id: 1,
        title: 'مینی پروژه تست تایپ',
        description: 'این مینی پروژه تست بررسی قابلیت های تایپ است.',
        image: '/files/images/1.png',
        tags: ['تایپ', 'JavaScript', 'پروژه', 'Css'],
        demoUrl: "/about",
        githubUrl: '#'
    },
    {
        id: 2,
        title: 'پروژه دوم ',
        description: 'این  پروژه دوم است.',
        image: '/files/images/2.png',
        tags: ['تست', 'JavaScript', 'Css', 'React'],
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: 3,
        title: 'پروژه سوم ',
        description: 'این  پروژه سوم است.',
        image: '/files/images/3.png',
        tags: ['تست', 'JavaScript', 'Css', 'React'],
        demoUrl: '#',
        githubUrl: '#'
    },
]

// const navigate = useNavigate();
// const handleClick = () => {
//     navigate("/app-type")
// }

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative font-[IRANYekan]">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl md:text-6xl mb-4 text-center font-black">
                    پروژه‌های <span className="text-primary"> من</span>
                </h2>
                <p className="text-muted-foreground font-light text-center mb-12">
                    در این بخش پروژه ها و مینی پروژه هایی که انجام شده قرار گرفته است.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="gradient-border rounded-lg overflow-hidden shadow-xs card-hover border">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold">{project.title}</h3>
                            <p className="text-xs mt-2 px-6 text-muted-foreground font-light mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-end items-center mb-3 px-3 mt-8">
                                <div className="flex space-x-3 text-left">
                                    <Link
                                        to={"/app-type"}
                                        target="_blank"
                                        className=" text-foreground/60 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </Link>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className=" text-foreground/60 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="#"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center justify-center gap-2 mx-auto">
                        مشاهده همه پروژه‌ها <ArrowLeft size={20} />
                    </a>
                </div>
            </div>
        </section>
    )
}