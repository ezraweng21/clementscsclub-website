import Hero from "../components/Hero";
import SignalGrid from "../components/SignalGrid";
import QuickAccess from "../components/QuickAccess";
import About from "../components/About";
import BuildTracks from "../components/BuildTracks";
import WhyJoin from "../components/WhyJoin";
import OfficersPreview from "../components/OfficersPreview";
import EventsPreview from "../components/EventsPreview";

function Home() {
  return (
    <>
      <Hero />
      <SignalGrid />
      <QuickAccess />
      <About />
      <BuildTracks />
      <WhyJoin />
      <OfficersPreview />
      <EventsPreview />
    </>
  );
}

export default Home;
