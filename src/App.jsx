import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import PostCard from "./sections/PostCard";
import FinalVideo from "./sections/FinalVideo";
import ComingSoon from "./sections/ComingSoon-Section";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <PostCard />
      <FinalVideo/>
      <ComingSoon />
    </main>
  );
}

export default App;
