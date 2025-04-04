import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
        <Avatar className="h-32 w-32">
          <AvatarImage src="/avatar-placeholder.jpg" alt="Your Name" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        
        <div className="text-center md:text-left space-y-2 flex-1">
          <h1 className="text-3xl font-bold">Your Name</h1>
          <p className="text-xl text-muted-foreground">Software Engineer & Designer</p>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-3">
            <Badge variant="outline" className="px-3 py-1">React</Badge>
            <Badge variant="outline" className="px-3 py-1">NextJS</Badge>
            <Badge variant="outline" className="px-3 py-1">TypeScript</Badge>
            <Badge variant="outline" className="px-3 py-1">UI/UX</Badge>
            <Badge variant="outline" className="px-3 py-1">Tailwind CSS</Badge>
          </div>
          
          <div className="flex space-x-3 mt-4 justify-center md:justify-start">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Main Content Tabs */}
      <Tabs defaultValue="about" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        
        {/* About Tab */}
        <TabsContent value="about" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription>Professional summary and personal introduction</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I am a passionate software engineer with expertise in building modern web applications.
                With over 5 years of experience in frontend development, I specialize in creating
                responsive, accessible, and performant user interfaces. I'm constantly exploring
                new technologies and approaches to deliver exceptional user experiences.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Experience Tab */}
        <TabsContent value="experience" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Senior Frontend Developer</CardTitle>
              <CardDescription>TechCorp Inc. • 2021 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Led the frontend development of the company's flagship product</li>
                <li>Implemented responsive designs and improved performance by 40%</li>
                <li>Mentored junior developers and established coding standards</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Frontend Developer</CardTitle>
              <CardDescription>WebSolutions Ltd. • 2018 - 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Developed and maintained client websites using React and Next.js</li>
                <li>Collaborated with designers to implement pixel-perfect UI components</li>
                <li>Participated in code reviews and team knowledge sharing sessions</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Projects Tab */}
        <TabsContent value="projects" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>E-commerce Platform</CardTitle>
              <CardDescription>NextJS • TypeScript • Tailwind CSS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A fully responsive e-commerce platform with product management, cart functionality,
                and secure payment processing.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/yourusername/ecommerce-platform" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="https://ecommerce-demo.example.com" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Task Management App</CardTitle>
              <CardDescription>React • Redux • Firebase</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A collaborative task management application with real-time updates,
                user authentication, and task assignment capabilities.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/yourusername/task-manager" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="https://taskmanager-demo.example.com" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Education Tab */}
        <TabsContent value="education" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Master of Computer Science</CardTitle>
              <CardDescription>University of Technology • 2016 - 2018</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Specialized in Human-Computer Interaction and Software Engineering.
                Graduated with honors and completed thesis on "Improving Web Accessibility
                Through Automated Testing."
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Science in Computer Engineering</CardTitle>
              <CardDescription>State University • 2012 - 2016</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Core curriculum in computer architecture, algorithms, and software development.
                Participated in multiple hackathons and led the university's coding club.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Social Media Posts */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Twitter Post */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Twitter className="h-5 w-5 text-blue-400" />
                    <CardTitle className="text-base">Twitter</CardTitle>
                  </div>
                  <CardDescription>Posted 2 days ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">Just released a new article on optimizing React performance with code-splitting and lazy loading. Check it out on my blog!</p>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-sm font-semibold">@yourusername</h4>
                  <p className="text-sm">4,123 followers</p>
                </div>
                <Button size="sm" asChild>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    Follow
                  </a>
                </Button>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* LinkedIn Post */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-base">LinkedIn</CardTitle>
                  </div>
                  <CardDescription>Posted 1 week ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">Excited to announce that I'll be speaking at the upcoming FrontendConf about "Building Accessible Web Applications". Hope to see you there!</p>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-sm font-semibold">Your Name</h4>
                  <p className="text-sm">Software Engineer & Designer</p>
                </div>
                <Button size="sm" asChild>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <footer className="text-center text-muted-foreground text-sm mt-12 pb-8">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind CSS and Shadcn UI</p>
      </footer>
    </div>
  );
}
