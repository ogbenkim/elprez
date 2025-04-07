import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Twitter, Image as ImageIcon, Heart, MessageCircle } from "lucide-react";
import { PhotoGallery } from "@/components/PhotoGallery";
import Image from "next/image";

export default function Home() {
  // User's actual photos with correct paths
  const photos = [
    {
      id: "1",
      src: "/photos/benspumpkinpatch.JPG",
      alt: "At a pumpkin patch with pumpkins arranged on a checkerboard",
      likes: 124,
      comments: 14,
      caption: "Pumpkin chess tournament! 🎃 #fall #pumpkinpatch",
      date: "October 15, 2023"
    },
    {
      id: "2",
      src: "/photos/snowboardwinterpark.JPG",
      alt: "Snowboarding on a beautiful mountain with blue skies",
      likes: 189,
      comments: 27,
      caption: "Perfect day for snowboarding! ❄️ #winter #mountains #snowboarding",
      date: "January 8, 2023"
    },
    {
      id: "3",
      src: "/photos/weddingportrait.PNG",
      alt: "Dressed in a formal beige suit at an outdoor event",
      likes: 246,
      comments: 32,
      caption: "Dressed up for the evening. #formal #event #weekend",
      date: "September 23, 2022"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
        <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-primary/80 shadow-xl ring-2 ring-muted">
        <Image
            src="/photos/portrait-fixed.jpg" 
            alt="Kim" 
            fill
            sizes="160px"
            className="object-cover object-[center_20%]" 
          priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="text-center md:text-left space-y-2 flex-1">
          <h1 className="text-3xl font-bold">Ben Kim</h1>
          <p className="text-xl text-muted-foreground">Failed Entrepreneur turned Curious Tech Sales and Product Manager</p>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-3">
            <Badge variant="outline" className="px-3 py-1">Cold Caller</Badge>
            <Badge variant="outline" className="px-3 py-1">React</Badge>
            <Badge variant="outline" className="px-3 py-1">TypeScript</Badge>
            <Badge variant="outline" className="px-3 py-1">Green Belt in Lean Six Sigma PM</Badge>
            <Badge variant="outline" className="px-3 py-1">Burrito Champ</Badge>
          </div>
          
          <div className="flex space-x-3 mt-4 justify-center md:justify-start">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/st-benjamin-kim-9b0462186/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="instagram.com/stbenkim" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:stbenkim@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Main Content Tabs */}
      <Tabs defaultValue="feed" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="feed">
            <div className="flex items-center gap-1">
              <ImageIcon className="h-4 w-4" />
              <span>Feed</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        
        {/* Feed Tab - Combined About and Photos */}
        <TabsContent value="feed" className="mt-6">
          {/* Simple Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* About Card */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="flex items-center p-4">
                <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                  <Image 
                    src="/photos/portrait-fixed.jpg" 
                    alt="Ben Kim" 
                    fill
                    className="object-cover object-[center_20%]" 
                  />
                </div>
                <span className="font-medium">Ben Kim</span>
              </div>
              <CardContent className="px-4 pb-4 pt-0">
                <p className="text-sm text-muted-foreground mb-2">
                  I am a passionate software engineer with expertise in building modern web applications.
                  When I'm not coding, you can find me snowboarding in the mountains or exploring pumpkin
                  patches in the fall. I love combining my technical skills with my adventurous spirit to
                  create memorable experiences both in code and in life.
                </p>
              </CardContent>
            </Card>

            {/* Snowboarding Photo */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/snowboardwinterpark.JPG" 
                  alt="Snowboarding on a mountain" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Hiking Photo */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/hiking.jpg" 
                  alt="Hiking outdoors" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Beach Photo */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/beach.jpg" 
                  alt="Beach scene" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Coffee Photo */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/coffee.jpg" 
                  alt="Coffee time" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* City View Photo */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/cityview.jpg" 
                  alt="City view" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Outdoors Photo */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/outdoors.jpg" 
                  alt="Outdoors adventure" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Pumpkin Patch Photo */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/benspumpkinpatch.JPG" 
                  alt="Pumpkin patch with pumpkins on checkerboard" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Wedding Portrait */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/weddingportrait.PNG" 
                  alt="Formal attire at an event" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Conference Speaking */}
            <Card className="overflow-hidden bg-white shadow-sm">
              <div className="relative aspect-square w-full">
                <Image 
                  src="/photos/conferencepublicspeaking.jpg" 
                  alt="Speaking at a conference" 
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </TabsContent>
        
        {/* Experience Tab */}
        <TabsContent value="experience" className="mt-6 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded">
          <Image
                  src="/logos/payjunction.png" 
                  alt="PayJunction Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <CardTitle>Business Development Representative</CardTitle>
                <CardDescription>Pay Junction • Jan 2025 - Present</CardDescription>
              </div>
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
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md shadow-sm">
                <div className="relative h-10 w-10 overflow-hidden">
          <Image
                    src="/logos/att.png" 
                    alt="AT&T Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-gray-500">→</span>
                <div className="relative h-10 w-10 overflow-hidden">
          <Image
                    src="/logos/verizon.png" 
                    alt="Verizon Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <CardTitle>Territory Manager in Indianpolis, Denver, then Bay Area (Oakland, San Jose, San Francisco)</CardTitle>
                <CardDescription>AT&T June 2019, Verizon Jan 2020 • 2018 - 2021</CardDescription>
              </div>
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
              <CardTitle>TypeScript, React, Java with the help of the notorious Steven Doctor</CardTitle>
              <CardDescription>
              
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
              Steven Doctor is a very unique and once in awhile friend. As anyone could hope to have a friend like that for life, I'd also like to be present.
              I've learned a lot from him, and I'm grateful for the time we've spent together. 
              However, I call him a friend because its continuous. He the A type player, picks up on things quickly and defines 'street smart'.
              He has taught me how to be adaptable and aware. There is a time and place for everything, and he has taught me to be present in the moment.
              I very much challenge you to think about what it means to be a friend, reach out to that somebody and elevate the relationship with gratitude. 
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Arts and Letters in Social Sciences</CardTitle>
              <CardDescription>San Diego State University • 2015 - 2019</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Core curriculum in History. I got to take an interesting class called Cultural and Historical Origins of Surfing. 
                We covered localism within surf communities, the role of environmentalism in surfing practices, and the impact of U.S. annexation of Hawaii on indigenous people and their traditions. 
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Professional & Personal Development */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Professional Development */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-blue-100">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Professional Growth</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-medium text-sm">Bachelor's in Sociology</h4>
                <p className="text-sm text-muted-foreground">San Diego State University • Expected 2026</p>
              </div>
              <div>
                <h4 className="font-medium text-sm">Lean Six Sigma Green Belt: Project Management</h4>
                <p className="text-sm text-muted-foreground">UCSD Extended Studies • In progress</p>
              </div>
            </CardContent>
          </Card>

          {/* Personal Development */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-amber-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <CardTitle className="text-base">Current Reads</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-medium text-sm">Ego is the Enemy</h4>
                <p className="text-sm text-muted-foreground">by Ryan Holiday • Non-fiction</p>
              </div>
              <div>
                <h4 className="font-medium text-sm">Unwind</h4>
                <p className="text-sm text-muted-foreground">Fiction • Currently reading</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="text-center text-muted-foreground text-sm mt-12 pb-8">
        <p>© {new Date().getFullYear()} Kim. All rights reserved.</p>
        <p className="mt-1">Built with Next.js, Tailwind CSS and Shadcn UI</p>
      </footer>
    </div>
  );
}
