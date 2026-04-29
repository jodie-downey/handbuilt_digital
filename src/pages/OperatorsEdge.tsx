import OEHero from "../components/sections/OEHero";
import OETrustBar from "../components/sections/OETrustBar";
import OEProblem from "../components/sections/OEProblem";
import OEProductSuite from "../components/sections/OEProductSuite";
import OEHowItWorks from "../components/sections/OEHowItWorks";
import OEAbout from "../components/sections/OEAbout";
import OEFAQ from "../components/sections/OEFAQ";
import OEFinalCTA from "../components/sections/OEFinalCTA";

export default function OperatorsEdge() {
  return (
    <div className="font-body">
      <OEHero />
      <OETrustBar />
      <OEProblem />
      <OEProductSuite />
      <OEHowItWorks />
      <OEAbout />
      <OEFAQ />
      <OEFinalCTA />
    </div>
  );
}
