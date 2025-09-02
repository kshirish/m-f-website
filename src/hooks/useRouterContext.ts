"use client";

import { useRouter } from "next/navigation";
import { scrollToContact } from "@/utils/scrollToContact";

export function useRouterContext() {
  const router = useRouter();

  return {
    navigate: (path: string) => {
      router.push(path);
    },
    scrollToContact,
  };
}
