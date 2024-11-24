import { toast } from "@/hooks/use-toast";

type ToastVariant = "success" | "default" | "destructive" | null | undefined;
export const handleToast = (description: string, variant: ToastVariant) => {
  toast({
    title: `${variant}`,
    description: description,
    variant: variant,
  });
}