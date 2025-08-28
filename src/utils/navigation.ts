// Temporary utility to help with the migration from hash routing to react-router
// Replace window.location.hash = "home" with navigateToHome()
export const navigateToHome = () => {
  window.location.href = "/";
};

export const navigateToPath = (path: string) => {
  window.location.href = path;
};

export const scrollToContactOnHome = () => {
  const pathname = window.location.pathname;
  if (pathname === "/" || pathname === "/home") {
    // If we're on home page, scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // If we're on a different page, navigate to home and then scroll
    window.location.href = "/";
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
};
