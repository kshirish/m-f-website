export const scrollToContact = () => {
  // Check if we're on the client side
  if (typeof window === "undefined") return;

  // If we're not on the home page, navigate there first
  if (window.location.pathname !== "/") {
    window.location.href = "/";

    // Wait for navigation and page load, then scroll to contact
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 1500);

    return;
  }

  // If we're already on home page, scroll to contact section immediately
  const contactSection = document.getElementById("contact");

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
