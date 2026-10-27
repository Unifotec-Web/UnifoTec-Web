import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import CTA from "@/components/CTA";

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <PageHero
        eyebrow="Our team"
        title="The people behind UNIFOTEC-WEB"
        description="Meet the leadership, engineering and marketing professionals working together to deliver useful digital solutions."
      />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
