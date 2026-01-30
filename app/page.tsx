import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { CaseStudies } from '@/components/CaseStudies';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ReferencesSection } from '@/components/ReferencesSection';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <CaseStudies />
      <Projects />
      <Experience />
      <ReferencesSection/>
      <Contact />
      <Footer />
    </>
  );
}

