import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import JobsPage from './pages/Jobs';
import EmployersPage from './pages/Employers';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import ScrollPerformanceMonitor from './components/ScrollPerformanceMonitor';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col will-change-scroll">
            <ScrollToTop />
            <ScrollPerformanceMonitor enableLogging={process.env.NODE_ENV === 'development'} />
            <Navbar />
            <main className="flex-1 will-change-transform">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/jobs" element={<JobsPage />} />
                    <Route path="/employers" element={<EmployersPage />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/industries/:industryId" element={<IndustryDetail />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}