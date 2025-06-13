import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ExternalLink, Calendar, Code, Smartphone, Database, Cpu, Github, Linkedin, Download } from "lucide-react";

const Index = () => {
  const technicalSkills = [
    "Android (Java, Kotlin)",
    "Multithreading (Coroutines, RxJava)",
    "Firebase, Jetpack Libraries",
    "WebSocket and Push Notifications",
    "Maps API, Mapbox",
    "SQLite, Room"
  ];

  const tools = [
    "Android Studio", "Git", "Jira", "GitHub", "GitLab", "Figma", "Adobe XD", "Zeplin"
  ];

  const experiences = [
    {
      title: "Android Developer",
      company: "Delivery-Express",
      period: "April 2023 - Present",
      location: "Remote",
      description: "Developed and deployed Android applications using Java and Kotlin, ensuring adherence to Android's design guidelines. Integrated APIs and conducted thorough testing for high-quality, bug-free apps.",
      projects: [
        {
          name: "Allow - Driver App",
          description: "Developed a robust Driver App to streamline the delivery process for clients' products. The app enables efficient order management, real-time tracking of driver locations, and seamless communication between drivers and the central system.",
          technologies: ["Java", "Kotlin", "MVVM", "REST API", "Google Maps API", "Firebase"]
        }
      ]
    },
    {
      title: "Android Developer | Leader",
      company: "IT Private Limited",
      period: "August 2021 – March 2023",
      location: "Remote",
      description: "Developed and deployed an Android Java application for Saudi Arabia Municipality. Directed planning, execution, and delivery of multiple Android projects, ensuring adherence to timelines and quality standards.",
      projects: [
        {
          name: "EPM Web Portal",
          description: "Gateway to public services. Access essential services, submit requests, track applications. Professional licenses service to submit applications and cancel business licenses."
        },
        {
          name: "Balaghati",
          description: "Innovative and user-friendly reporting system designed for the residents of the Eastern Region. This app empowers citizens to actively participate in improving their community by reporting violations related to municipal services."
        },
        {
          name: "Fox-HR",
          description: "Cutting-edge Human Resource Management application customized for forward-thinking startups and companies. Specializing in efficient workforce management, covering the entire employee lifecycle from onboarding to offboarding and beyond."
        }
      ]
    },
    {
      title: "Android Developer",
      company: "Macom Solutions Pvt Ltd",
      period: "August 2018 – August 2021",
      location: "India",
      description: "Developed and deployed Java-based Android apps, ensuring adherence to Android's design guidelines for seamless user experiences and integrating APIs for high-quality, bug-free apps. Led a team of 8 Android developers.",
      projects: [
        {
          name: "Manappuram Personal Loan",
          description: "A dedicated portal exclusively for existing Manappuram Gold Loan customers who are eligible for personal loans. Customers can view loan tenure, applicable interest rates (ROI), and avail personal loans instantly—completely paperless and hassle-free."
        },
        {
          name: "KYC App",
          description: "A streamlined application for creating customer profiles using valid national identity proofs, including Driving License, Aadhaar Card, PAN Card, and Passport. Designed to simplify and digitize the customer onboarding and KYC verification process."
        },
        {
          name: "Manappuram Chits",
          description: "Chits Qpay is an online payment application and also used to create new chits in Manappuram Chits. The app is a quick pay system - customers can pay their chits within seconds without any login."
        }
      ]
    },
    {
      title: "Technical Support",
      company: "Onward E-Services Ltd",
      period: "January 2016 – August 2018",
      location: "Kerala, India",
      description: "Provided technical support for the software utilized in FIR registration and various station duties for Kerala Police."
    }
  ];

  return (
    <div className="min-h-screen bg-background mx-4">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <span className="hidden font-bold sm:inline-block">Dineesh P U</span>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-primary">About</a>
              <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
              <a href="#experience" className="transition-colors hover:text-primary">Experience</a>
              <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="about" className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">Dineesh P U</h1>
                <p className="text-xl text-muted-foreground">Senior Android Developer</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Thrissur, Kerala</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>6+ Years Experience</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Results-driven Senior Android Application Developer with 6+ years of experience in designing,
                developing, and deploying high-performance Android applications. Expertise in Java and Kotlin, with a
                strong focus on scalability, security, and user experience.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button className="gap-2">
                  <a href="mailto:dineeshofficial@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                  Contact Me
                </Button>
                <Button variant="outline" className="gap-2">
                  <a href="/Android_Developer_DineeshPU.pdf" download>
                    <Download className="h-4 w-4" />
                  </a>
                  Download CV
                </Button>
                <Button variant="outline" size="icon">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon">
                  <a
                    href="https://www.linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="lg:col-span-1">
              <CardContent className="p-6">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src="/di.jpg"
                    alt="Dineesh P U"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Smartphone className="h-4 w-4 text-primary" />
                    <span>Android Specialist</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Code className="h-4 w-4 text-primary" />
                    <span>Java & Kotlin Expert</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Database className="h-4 w-4 text-primary" />
                    <span>Full-Stack Mobile Dev</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Technical Expertise</h2>
              <p className="text-muted-foreground">Proficient in modern Android development technologies</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Core Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <Badge key={index} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Professional Journey</h2>
              <p className="text-muted-foreground">Building innovative mobile solutions</p>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="font-medium text-primary">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {exp.projects && (
                      <div className="space-y-4">
                        <h4 className="font-semibold">Key Projects</h4>
                        <div className="grid gap-4">
                          {exp.projects.map((project, projectIndex) => (
                            <div key={projectIndex} className="border rounded-lg p-4 space-y-2">
                              <h5 className="font-medium">{project.name}</h5>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                              {project.technologies && (
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.map((tech, techIndex) => (
                                    <Badge key={techIndex} variant="outline" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <CardDescription>HIRD College, Valappad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Graduated March 2013</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
              <CardDescription>
                Ready to discuss your next Android project or explore collaboration opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Dineeshofficial@gmail.com
              </Button>
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                +91 8089273918
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
