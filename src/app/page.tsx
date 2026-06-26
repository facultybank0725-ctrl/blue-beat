import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ブルービート株式会社",
  url: "https://blue-beat.co",
  email: "takashi.aoyagi@blue-beat.co.jp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "大岡403-1 101",
    addressLocality: "沼津市",
    addressRegion: "静岡県",
    postalCode: "410-0022",
    addressCountry: "JP",
  },
  description: "AI経理・AI顧問サービスで中小企業の財務課題を解決する会社です。",
  areaServed: "JP",
  serviceType: ["AI経理", "AI顧問", "法人設立支援", "海外進出支援"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
