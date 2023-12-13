import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Inicio",
      icon: "info-circle",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "Guías",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Errores",
      icon: "info-circle",
      prefix: "troubleshoot/",
      children: "structure",
    },
  ],
});