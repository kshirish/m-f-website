import { useNavigate } from "react-router-dom";

export function useRouterContext() {
  const navigate = useNavigate();

  return {
    navigate: (path: string) => {
      navigate(path);
    },
    scrollToContact: () => {
      const pathname = window.location.pathname;
      if (pathname === "/" || pathname === "/home") {
        // If we're on home page, scroll to contact section
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If we're on a different page, navigate to home and then scroll
        navigate("/");
        setTimeout(() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    },
  };
}
