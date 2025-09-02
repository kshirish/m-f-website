/**
 * Utility function to scroll to any section on the home page
 * @param sectionId - The ID of the section to scroll to (without the # prefix)
 */
export const scrollToSection = (sectionId: string) => {
  // Check if we're on the client side
  if (typeof window === "undefined") return;

  // If we're not on the home page, navigate there first
  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/home"
  ) {
    window.location.href = "/";

    // Wait for navigation and page load, then scroll to section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 1500);

    return;
  }

  // If we're already on home page, scroll to section immediately
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
