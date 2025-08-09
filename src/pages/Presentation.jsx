import ParallaxGlow from "../components/anim/ParallaxGlow";
import Slide01_Title from "../slides/Slide01_Title";
import Slide02_Why from "../slides/Slide02_Why";
import Slide03_Diagnostics from "../slides/Slide03_Diagnostics";
import Slide04_AIIntro from "../slides/Slide04_AIIntro";
import Slide05_Tech from "../slides/Slide05_Tech";
import Slide06_Pipeline from "../slides/Slide06_Pipeline";
import Slide07_Applications from "../slides/Slide07_Applications";
import Slide08_CaseDeepMind from "../slides/Slide08_CaseDeepMind";
import Slide09_CaseWatson from "../slides/Slide09_CaseWatson";
import Slide10_Benefits from "../slides/Slide10_Benefits";
import Slide11_Risks from "../slides/Slide11_Risks";
import Slide12_Future from "../slides/Slide12_Future";
import Slide13_Vision2035 from "../slides/Slide13_Vision2035.jsx";
import Slide14_EthicalPrivacy from "../slides/Slide14_EthicalPrivacy";
import Slide15_EmergingFields from "../slides/Slide15_EmergingFields";
import Slide16_FutureDirections from "../slides/Slide16_FutureDirections";

import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <main
      className="bg-white text-black"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <ParallaxGlow />
      <Slide01_Title />

      {/* Wrap slides in consistent animation + spacing */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <section className="max-w-7xl mx-auto px-10 py-24 space-y-32">
          <Slide02_Why />
          <Slide03_Diagnostics />
          <Slide04_AIIntro />
          <Slide05_Tech />
          <Slide06_Pipeline />
          <Slide07_Applications />
          <Slide08_CaseDeepMind />
          <Slide09_CaseWatson />
          <Slide10_Benefits />
          <Slide11_Risks />
          <Slide12_Future />
          <Slide13_Vision2035 />
          <Slide14_EthicalPrivacy />
          <Slide15_EmergingFields />
          <Slide16_FutureDirections />
        </section>
      </motion.div>
    </main>
  );
}
