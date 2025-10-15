"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    aboutTitle: "",
    aboutDescription: "",
    mission: "",
    vision: "",
    yearsOfExperience: "",
    projectsCompleted: "",
    clientsSatisfied: "",
    awardsReceived: "",
    education: "",
    certifications: "",
    interests: "",
    funFact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("About data:", formData);
    // Add your database submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto pt-24 md:pt-36">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">About Page</h1>
        <Link href="/dashboard">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 border border-border rounded-lg p-6"
      >
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Main Content</h2>

          <div className="space-y-2">
            <Label htmlFor="aboutTitle">About Section Title</Label>
            <Input
              id="aboutTitle"
              placeholder="e.g., About Me, My Story"
              value={formData.aboutTitle}
              onChange={(e) =>
                setFormData({ ...formData, aboutTitle: e.target.value })
              }
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="aboutDescription">About Description</Label>
            <Textarea
              id="aboutDescription"
              placeholder="Tell your story, background, and what drives you"
              value={formData.aboutDescription}
              onChange={(e) =>
                setFormData({ ...formData, aboutDescription: e.target.value })
              }
              className="bg-background min-h-[150px]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Mission & Vision</h2>

          <div className="space-y-2">
            <Label htmlFor="mission">Mission Statement</Label>
            <Textarea
              id="mission"
              placeholder="Your professional mission and goals"
              value={formData.mission}
              onChange={(e) =>
                setFormData({ ...formData, mission: e.target.value })
              }
              className="bg-background min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vision">Vision Statement</Label>
            <Textarea
              id="vision"
              placeholder="Your long-term vision and aspirations"
              value={formData.vision}
              onChange={(e) =>
                setFormData({ ...formData, vision: e.target.value })
              }
              className="bg-background min-h-[100px]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Input
                id="yearsOfExperience"
                type="number"
                placeholder="e.g., 5"
                value={formData.yearsOfExperience}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    yearsOfExperience: e.target.value,
                  })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectsCompleted">Projects Completed</Label>
              <Input
                id="projectsCompleted"
                type="number"
                placeholder="e.g., 50"
                value={formData.projectsCompleted}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectsCompleted: e.target.value,
                  })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientsSatisfied">Clients Satisfied</Label>
              <Input
                id="clientsSatisfied"
                type="number"
                placeholder="e.g., 30"
                value={formData.clientsSatisfied}
                onChange={(e) =>
                  setFormData({ ...formData, clientsSatisfied: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="awardsReceived">Awards Received</Label>
              <Input
                id="awardsReceived"
                type="number"
                placeholder="e.g., 10"
                value={formData.awardsReceived}
                onChange={(e) =>
                  setFormData({ ...formData, awardsReceived: e.target.value })
                }
                className="bg-background"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Background</h2>

          <div className="space-y-2">
            <Label htmlFor="education">Education</Label>
            <Textarea
              id="education"
              placeholder="Your educational background (degrees, institutions, years)"
              value={formData.education}
              onChange={(e) =>
                setFormData({ ...formData, education: e.target.value })
              }
              className="bg-background min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="certifications">Certifications</Label>
            <Textarea
              id="certifications"
              placeholder="Professional certifications and credentials"
              value={formData.certifications}
              onChange={(e) =>
                setFormData({ ...formData, certifications: e.target.value })
              }
              className="bg-background min-h-[100px]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personal Touch</h2>

          <div className="space-y-2">
            <Label htmlFor="interests">Interests & Hobbies</Label>
            <Textarea
              id="interests"
              placeholder="What you enjoy outside of work"
              value={formData.interests}
              onChange={(e) =>
                setFormData({ ...formData, interests: e.target.value })
              }
              className="bg-background min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="funFact">Fun Fact</Label>
            <Input
              id="funFact"
              placeholder="An interesting fact about yourself"
              value={formData.funFact}
              onChange={(e) =>
                setFormData({ ...formData, funFact: e.target.value })
              }
              className="bg-background"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Save About Information
        </Button>
      </form>
    </div>
  );
}
