import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";

const spinnersVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
    defaultVariants: {
      size: "default",
    },
  },
});

interface SpinnerProps extends VariantProps<typeof spinnersVariants> {}

export const Spinner = ({ size }: SpinnerProps) => {
  return <Loader className={cn(spinnersVariants({ size }))} />;
};
