import Banner from "./components/sections/banner";
import Footer from "./components/sections/footer";
import HighLights from "./components/sections/highlights";
import Subscription from "./components/sections/subscription";

function App() {
  return (
    <div style={{ width: "97.7vw" }} className="min-h-screen">
      <Banner />
      <HighLights />
      <Subscription />
      <Footer />
      {/* <CarouselDemo /> */}
    </div>
  );
}

export default App;
