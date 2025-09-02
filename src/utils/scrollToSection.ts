export const scrollToSection = (sectionId: string, router?: any) => {
  // Check if we're on the client side
  if (typeof window === "undefined") return;

  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/home"
  ) {
    if (router) {
      router.push("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    } else {
      window.location.href = "/";
      return;
    }
  }

  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
