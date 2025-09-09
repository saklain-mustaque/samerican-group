import Hero from '../components/Hero'
import HomepageCards from './Homepage'
import HomeSection from '../components/HomeSection'
import FeaturedJobs from '../components/FeaturedJobs'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <Hero className="hero-home" showGetStarted={true}/>
      <HomepageCards />
      <HomeSection />
      <FeaturedJobs />
    </>
  )
}

export default Home