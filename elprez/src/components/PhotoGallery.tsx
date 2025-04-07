"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";

interface Photo {
  id: string;
  src: string;
  alt: string;
  likes: number;
  comments: number;
  caption?: string;
  date: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  username: string;
  userAvatar: string;
}

export function PhotoGallery({ photos, username, userAvatar }: PhotoGalleryProps) {
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLiked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <Sheet key={photo.id}>
          <SheetTrigger asChild>
            <Card className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardFooter className="p-2 flex justify-between">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8" 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(photo.id);
                    }}
                  >
                    <Heart className={`h-5 w-5 ${liked[photo.id] ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <span className="text-sm text-muted-foreground">{photo.likes + (liked[photo.id] ? 1 : 0)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{photo.comments}</span>
                </div>
              </CardFooter>
            </Card>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-md w-full">
            <SheetHeader className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userAvatar} />
                  <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <SheetTitle className="text-base">{username}</SheetTitle>
              </div>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="h-4 w-4" />
                </Button>
              </SheetClose>
            </SheetHeader>
            <div className="mt-4 h-[calc(100%-8rem)] flex flex-col">
              <div className="relative flex-1 min-h-[300px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-contain"
                />
              </div>
              {photo.caption && (
                <SheetDescription className="mt-4 text-sm">
                  {photo.caption}
                </SheetDescription>
              )}
              <div className="mt-auto pt-4 border-t">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => toggleLike(photo.id)}
                    >
                      <Heart className={`h-5 w-5 ${liked[photo.id] ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                  <span className="text-xs text-muted-foreground">{photo.date}</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium">{photo.likes + (liked[photo.id] ? 1 : 0)} likes</p>
                  <p className="text-xs text-muted-foreground mt-1">{photo.comments} comments</p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
} 