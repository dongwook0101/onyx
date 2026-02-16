import { HeroSection } from "@/components/sections/hero-section"
import { DemoSection } from "@/components/sections/demo-section"
import { WhyOnyxSection } from "@/components/sections/why-onyx-section"

export default function HomePage() {
  return (
    <main className="bg-black">
      <HeroSection />
      <DemoSection />
      <WhyOnyxSection />
    </main>
  )
}
