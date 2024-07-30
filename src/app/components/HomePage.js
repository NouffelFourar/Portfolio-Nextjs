import HeroSection from './HeroSection';
import Navbar from './Navbar';
import AchievementsSection from './AchievementsSection';
import ProjectsSection from './ProjectsSection';
import EmailSection from './EmailSection';
import Footer from './Footer';

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <HeroSection />
      
      <Footer />
    </main>
  );
}

export default HomePage;