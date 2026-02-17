"use client";

import BackButton from "@/components/BackButton/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export default function AddServicePage() {
  const [formData, setFormData] = useState({
    serviceName: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    duration: "",
    category: "",
    features: "",
    iconUrl: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your database submission logic here
  };

  return (
    <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  ">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="pt-24 md:pt-36 flex justify-between items-center mb-5">
          <h2 className="lg:text-3xl font-bold"> Add Project</h2>
          <BackButton />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 border border-border rounded-lg p-6 bg-slate-100 dark:bg-[#020617]"
        >
          <div className="space-y-2">
            <Label htmlFor="serviceName">Service Name</Label>
            <Input
              id="serviceName"
              placeholder="e.g., Web Development, UI/UX Design"
              value={formData.serviceName}
              onChange={(e) =>
                setFormData({ ...formData, serviceName: e.target.value })
              }
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shortDescription">Short Description</Label>
            <Textarea
              id="shortDescription"
              placeholder="Brief overview of the service"
              value={formData.shortDescription}
              onChange={(e) =>
                setFormData({ ...formData, shortDescription: e.target.value })
              }
              className="bg-background min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullDescription">Full Description</Label>
            <Textarea
              id="fullDescription"
              placeholder="Detailed description of what this service includes"
              value={formData.fullDescription}
              onChange={(e) =>
                setFormData({ ...formData, fullDescription: e.target.value })
              }
              className="bg-background min-h-[150px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                placeholder="e.g., $500 or Starting at $1000"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                placeholder="e.g., 2 weeks, 1 month"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              placeholder="e.g., Development, Design, Consulting"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">Key Features (comma-separated)</Label>
            <Textarea
              id="features"
              placeholder="e.g., Responsive Design, SEO Optimization, Fast Loading"
              value={formData.features}
              onChange={(e) =>
                setFormData({ ...formData, features: e.target.value })
              }
              className="bg-background min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="iconUrl">Service Icon URL (optional)</Label>
            <Input
              id="iconUrl"
              placeholder="Enter icon or image URL"
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
            Submit Service
          </Button>
        </form>
      </div>
    </div>
  );
}
