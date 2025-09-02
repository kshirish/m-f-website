"use client";

import { useRouter } from "next/navigation";
import { scrollToSection } from "@/utils/scrollToSection";

export function useRouterContext() {
  const router = useRouter();

  return {
    navigate: (path: string) => {
      router.push(path);
    },
    scrollToSection: (sectionId: string) => scrollToSection(sectionId, router),
  };
}
