 "use client";

 import type React from "react";

 import BackButton from "@/components/BackButton/BackButton";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Textarea } from "@/components/ui/textarea";
 import { Sparkles } from "lucide-react";
 import { useState } from "react";
 import Image from "next/image";

 export default function GenerateImagePage() {
  const [formData, setFormData] = useState({
    prompt: "",
    negativePrompt: "",
    style: "",
    aspectRatio: "1:1",
    quality: "standard",
    numberOfImages: "1",
  });

  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Generate image with:", formData);
    // Add your image generation logic here
    // Simulate image generation
    setGeneratedImage("/ai-generated-image.jpg");
  };

  return (
    <div className="relative overflow-hidden bg-slate-100 dark:bg-[#020617]  ">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="pt-24 md:pt-36 flex justify-between items-center mb-5">
          <h2 className="lg:text-3xl font-bold"> Add Project</h2>
          <BackButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-border rounded-lg p-6"
          >
            <div className="space-y-2">
              <Label htmlFor="prompt">Image Prompt</Label>
              <Textarea
                id="prompt"
                placeholder="Describe the image you want to generate..."
                value={formData.prompt}
                onChange={(e) =>
                  setFormData({ ...formData, prompt: e.target.value })
                }
                className="bg-background min-h-[120px]"
              />
              <p className="text-sm text-muted-foreground">
                Be specific and descriptive for best results
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="negativePrompt">Negative Prompt (optional)</Label>
              <Textarea
                id="negativePrompt"
                placeholder="What to avoid in the image..."
                value={formData.negativePrompt}
                onChange={(e) =>
                  setFormData({ ...formData, negativePrompt: e.target.value })
                }
                className="bg-background min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="style">Style</Label>
              <Input
                id="style"
                placeholder="e.g., realistic, anime, oil painting, 3D render"
                value={formData.style}
                onChange={(e) =>
                  setFormData({ ...formData, style: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="aspectRatio">Aspect Ratio</Label>
                <select
                  id="aspectRatio"
                  value={formData.aspectRatio}
                  onChange={(e) =>
                    setFormData({ ...formData, aspectRatio: e.target.value })
                  }
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="1:1">1:1 (Square)</option>
                  <option value="16:9">16:9 (Landscape)</option>
                  <option value="9:16">9:16 (Portrait)</option>
                  <option value="4:3">4:3</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quality">Quality</Label>
                <select
                  id="quality"
                  value={formData.quality}
                  onChange={(e) =>
                    setFormData({ ...formData, quality: e.target.value })
                  }
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="standard">Standard</option>
                  <option value="hd">HD</option>
                  <option value="ultra">Ultra HD</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="numberOfImages">Number of Images</Label>
              <Input
                id="numberOfImages"
                type="number"
                min="1"
                max="4"
                value={formData.numberOfImages}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfImages: e.target.value })
                }
                className="bg-background"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Image
            </Button>
          </form>

          <div className="border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            {generatedImage ? (
              <div className="space-y-4">
                <Image
                  src={generatedImage || "/placeholder.svg"}
                  alt="Generated preview"
                  width={1024}
                  height={1024}
                  className="w-full h-auto rounded-lg border border-border object-contain"
                />
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Save to Gallery
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 border border-dashed border-border rounded-lg">
                <p className="text-muted-foreground">
                  Generated image will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
