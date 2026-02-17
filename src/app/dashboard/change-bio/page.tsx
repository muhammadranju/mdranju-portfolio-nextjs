"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BackButton from "@/components/BackButton/BackButton";

export default function ChangeBioPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    tagline: "",
    shortBio: "",
    longBio: "",
    profileImage: "",
    coverImage: "",
    location: "",
    availability: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your database submission logic here
  };

  return (
    <>
      <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  ">
        <div className="mx-auto max-w-7xl px-2 ">
          <div className="pt-24 md:pt-36 flex justify-between items-center mb-5">
            <h2 className="lg:text-3xl font-bold"> Add Project</h2>
            <BackButton />
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-border rounded-lg p-6"
          >
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input
                id="title"
                placeholder="e.g., Full Stack Developer, UI/UX Designer"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                placeholder="A catchy one-liner about yourself"
                value={formData.tagline}
                onChange={(e) =>
                  setFormData({ ...formData, tagline: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortBio">Short Bio</Label>
              <Textarea
                id="shortBio"
                placeholder="A brief introduction (2-3 sentences)"
                value={formData.shortBio}
                onChange={(e) =>
                  setFormData({ ...formData, shortBio: e.target.value })
                }
                className="bg-background min-h-[100px]"
              />
              <p className="text-sm text-muted-foreground">
                This will be displayed on your profile card
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="longBio">Full Bio</Label>
              <Textarea
                id="longBio"
                placeholder="Your complete professional story, experience, and background"
                value={formData.longBio}
                onChange={(e) =>
                  setFormData({ ...formData, longBio: e.target.value })
                }
                className="bg-background min-h-[200px]"
              />
              <p className="text-sm text-muted-foreground">
                This will be displayed on your about page
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., San Francisco, CA"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Input
                  id="availability"
                  placeholder="e.g., Available for hire, Open to opportunities"
                  value={formData.availability}
                  onChange={(e) =>
                    setFormData({ ...formData, availability: e.target.value })
                  }
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="profileImage">Profile Image URL</Label>
              <Input
                id="profileImage"
                placeholder="Enter profile image URL"
                value={formData.profileImage}
                onChange={(e) =>
                  setFormData({ ...formData, profileImage: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover Image URL</Label>
              <Input
                id="coverImage"
                placeholder="Enter cover/banner image URL"
                value={formData.coverImage}
                onChange={(e) =>
                  setFormData({ ...formData, coverImage: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Update Bio
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
