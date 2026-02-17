"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BackButton from "@/components/BackButton/BackButton";

export default function ResumeUrlPage() {
  const [formData, setFormData] = useState({
    resumeUrl: "",
    resumeTitle: "",
    lastUpdated: "",
    fileType: "",
    description: "",
    isPublic: true,
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
          className="space-y-6 border border-border rounded-lg p-6"
        >
          <div className="space-y-2">
            <Label htmlFor="resumeUrl">Resume URL</Label>
            <Input
              id="resumeUrl"
              placeholder="https://example.com/resume.pdf or cloud storage link"
              value={formData.resumeUrl}
              onChange={(e) =>
                setFormData({ ...formData, resumeUrl: e.target.value })
              }
              className="bg-background"
            />
            <p className="text-sm text-muted-foreground">
              Enter the URL where your resume is hosted (Google Drive, Dropbox,
              personal website, etc.)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="resumeTitle">Resume Title</Label>
            <Input
              id="resumeTitle"
              placeholder="e.g., Full Stack Developer Resume 2025"
              value={formData.resumeTitle}
              onChange={(e) =>
                setFormData({ ...formData, resumeTitle: e.target.value })
              }
              className="bg-background"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="lastUpdated">Last Updated</Label>
              <Input
                id="lastUpdated"
                type="date"
                value={formData.lastUpdated}
                onChange={(e) =>
                  setFormData({ ...formData, lastUpdated: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fileType">File Type</Label>
              <Input
                id="fileType"
                placeholder="e.g., PDF, DOCX"
                value={formData.fileType}
                onChange={(e) =>
                  setFormData({ ...formData, fileType: e.target.value })
                }
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Brief description of this resume version (e.g., 'Updated with latest projects and skills')"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="bg-background min-h-[100px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isPublic"
              checked={formData.isPublic}
              onChange={(e) =>
                setFormData({ ...formData, isPublic: e.target.checked })
              }
              className="h-4 w-4 rounded border-border"
            />
            <Label htmlFor="isPublic" className="cursor-pointer">
              Make resume publicly accessible
            </Label>
          </div>

          <div className="border border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              Upload your resume to get a shareable URL
            </p>
            <Button type="button" variant="outline" size="sm">
              Choose File
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Save Resume URL
          </Button>
        </form>
      </div>
    </div>
  );
}
