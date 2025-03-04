export const getStyle = (pageName) => {
    const cssId = "dynamic-css"; // Unique ID for dynamic CSS
    const cssFile = `/styles/pages/${pageName}.css`;
  
    // Remove existing dynamic CSS
    document.getElementById(cssId)?.remove();
  
    // Create a new <link> element for the required CSS file
    const link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.href = cssFile;
  
    // Append to <head>
    document.head.appendChild(link);
  
    return () => {
      link.remove(); // Cleanup when page changes
    };
  };
  