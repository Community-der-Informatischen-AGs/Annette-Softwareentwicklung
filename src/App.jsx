import { Footer, Header } from "./components"; 
import { LandingSection, IntroductionSection } from "./sections";
// durch die index.js dateien, die das Exportieren der Inhalte zusammenbündelt, damit man dann alle components von "./components" importieren kann


function App() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <IntroductionSection />
      </main>
      <Footer />
    </>
  );
}

function Umbaerto() {
  return (
    <p>^^</p>
  );
}

export default App;
