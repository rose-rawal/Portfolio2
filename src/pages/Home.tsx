import { memo } from "react";
import Page from "../components/Page.tsx";
import Hero from "../sections/Hero.tsx";
import AboutSection from "../sections/AboutSection.tsx";
import SelectedWork from "../sections/SelectedWork.tsx";
import Approach from "../sections/Approach.tsx";
import Expertise from "../sections/Expertise.tsx";
import Quote from "../sections/Quote.tsx";

function Home({ ready = false }: { ready?: boolean }) {
  return (
    <Page className="page--home">
      <Hero play={ready} />
      <AboutSection />
      <SelectedWork />
      <Approach />
      <Expertise />
      <Quote />
    </Page>
  );
}

/* memo: flipping `ready`/`preloading` in the shell must not re-reconcile the
   whole home tree mid-transition — that hitch made the preloader exit stutter. */
export default memo(Home);
