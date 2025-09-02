// Temporary utility to help with the migration from hash routing to react-router
// Replace window.location.hash = "home" with navigateToHome()
export const navigateToHome = () => {
  window.location.href = "/";
};

export const navigateToPath = (path: string) => {
  window.location.href = path;
};
