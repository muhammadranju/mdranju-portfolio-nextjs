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

export default function AddSkillPage() {
  const [formData, setFormData] = useState({
    skillName: "",
    proficiency: "",
    category: "",
    description: "",
    iconUrl: "",
    yearsOfExperience: "",
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
              <Label htmlFor="skillName">Skill Name</Label>
              <Input
                id="skillName"
                placeholder="e.g., React, Node.js, Python"
                value={formData.skillName}
                onChange={(e) =>
                  setFormData({ ...formData, skillName: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="proficiency">Proficiency Level</Label>
                <Input
                  id="proficiency"
                  placeholder="e.g., Beginner, Intermediate, Expert"
                  value={formData.proficiency}
                  onChange={(e) =>
                    setFormData({ ...formData, proficiency: e.target.value })
                  }
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                <Input
                  id="yearsOfExperience"
                  type="number"
                  placeholder="e.g., 3"
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                placeholder="e.g., Frontend, Backend, Database, DevOps"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description of your experience with this skill"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="bg-background min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="iconUrl">Icon URL (optional)</Label>
              <Input
                id="iconUrl"
                placeholder="Enter icon or logo URL"
                value={formData.iconUrl}
                onChange={(e) =>
                  setFormData({ ...formData, iconUrl: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Submit Skill
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
