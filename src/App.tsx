import Nav from './components/Nav'
import Hero from './components/Hero'
import BrandPromise from './components/BrandPromise'
import CollectionPreview from './components/CollectionPreview'
import WhyPremium from './components/WhyPremium'
import UseCases from './components/UseCases'
import Craftsmanship from './components/Craftsmanship'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandPromise />
        <CollectionPreview />
        <WhyPremium />
        <UseCases />
        <Craftsmanship />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
