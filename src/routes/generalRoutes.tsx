import type { ComponentType } from "react";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Work from "../pages/Work.tsx";
import Contact from "../pages/Contact.tsx";

export type RouteDef = {
  name: string;
  path: string;
  Component: ComponentType<{ ready?: boolean }>;
};

export const generalRoutes: RouteDef[] = [
  { name: "Home", path: "/", Component: Home },
  { name: "About", path: "/about", Component: About },
  { name: "Work", path: "/work", Component: Work },
  { name: "Contact", path: "/contact", Component: Contact },
];
