import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import Clients from '@/sections/Clients/Clients'
import DedicatedToLife from '@/sections/DedicatedToLife/DedicatedToLife'
import Hero from '@/sections/Hero/Hero'
import Insights from '@/sections/Insights/Insights'
import InsightsFeature from '@/sections/InsightsFeature/InsightsFeature'
import Intro from '@/sections/Intro/Intro'
import Products from '@/sections/Products/Products'
import Projects from '@/sections/Projects/Projects'
import ServicesGallery from '@/sections/ServicesGallery/ServicesGallery'
import Stats from '@/sections/Stats/Stats'
import Tagline from '@/sections/Tagline/Tagline'
import Testimonial from '@/sections/Testimonial/Testimonial'
import VideoBanner from '@/sections/VideoBanner/VideoBanner'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Projects />
        <DedicatedToLife />
        <VideoBanner />
        <ServicesGallery />
        <Insights />
        <InsightsFeature />
        <Products />
        <Testimonial />
        <Stats />
        <Clients />
        <Tagline />
      </main>
      <Footer />
    </>
  )
}
