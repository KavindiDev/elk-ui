import Contributors from "@/components/about/Contributors";
import AboutHero from "@/components/about/Hero";
import Offer from "@/components/about/Offer";

export const metadata = {
  title: 'About - Elk/ui',
  description: 'Discover Elk/ui, a versatile and modern UI component library designed to simplify web development. Build stunning web applications with ease.'
}
export default function AboutPage() {
  return (
    <div className="p-4 lg:p-16">
      <AboutHero />
      <Offer />
      <Contributors />
    </div>
  )
}
