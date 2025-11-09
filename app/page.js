import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
