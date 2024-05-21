import { Box } from "@chakra-ui/react";
import { Hero } from "./components/Hero";
import { ProductSection } from "./components/ProductSection";
import { MetalSection } from "./components/MetalSection";
import { Footer } from "./components/Footer";
import { TravelShoppSec } from "./components/TravelShoppSec";
import Navbar from "./components/Navbar";
import { HOME } from "./constant";

export default function Home() {
  return (
    <Box>
      <Navbar navigation={HOME.NAVIGATION} />
      <Hero />
      <TravelShoppSec />
      <ProductSection />
      <MetalSection />
      <Footer />
    </Box>
  );
}
