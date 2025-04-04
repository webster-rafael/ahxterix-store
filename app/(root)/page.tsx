import Collections from "@/components/Collections";
import Feminino from "@/components/Feminino";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Infantil from "@/components/Infantil";
import Masculino from "@/components/Masculino";
import News from "@/components/News";
import PerguntasFrequentes from "@/components/PerguntasFrequentes";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <News />
      <Masculino />
      <Feminino />
      <Infantil />
      <PerguntasFrequentes />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
