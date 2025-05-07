import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Clients from "@/components/clients";
import Gallery from "@/components/gallery";
import WhyChooseUs from "@/components/why-choose-us";
import Footer from "@/components/footer";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <Logo />
      </div>
      <Hero />

      <Services />
      <Clients />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
