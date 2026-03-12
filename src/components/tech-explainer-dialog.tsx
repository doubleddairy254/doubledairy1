"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { type Technology } from "@/lib/types";
import { explainTechnology } from "@/app/actions";
import { type TechnologyExplainerOutput } from "@/ai/flows/technology-explainer";

type TechExplainerDialogProps = {
  technology: Technology | null;
  isOpen: boolean;
  onClose: () => void;
};

export function TechExplainerDialog({ technology, isOpen, onClose }: TechExplainerDialogProps) {
  const [explanation, setExplanation] = useState<TechnologyExplainerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && technology) {
      setIsLoading(true);
      setExplanation(null);
      const fetchExplanation = async () => {
        const result = await explainTechnology(technology.name);
        setExplanation(result);
        setIsLoading(false);
      };
      fetchExplanation();
    }
  }, [isOpen, technology]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card/80 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            {technology?.icon}
            {technology?.name}
          </DialogTitle>
          <DialogDescription>
            AI-powered explanation, simplified.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isLoading && (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          )}
          {explanation && (
            <p className="text-foreground/90">{explanation.shortExplanation}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
