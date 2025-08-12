import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HomepageCards from './pages/Homepage'
import HomeSection from './components/HomeSection'

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <HomepageCards />
                <HomeSection />
                {/* <Services />
                <About />
                <Testimonials />
                <Contact /> */}
            </main>
            {/* <Footer /> */}
        </div>
    )
}