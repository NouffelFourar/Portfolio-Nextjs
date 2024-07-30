import { Imprima } from 'next/font/google';
import ContactSection from './EmailSection';
import Footer from './Footer';
function ContactPage() {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <ContactSection />
      <Footer />
    </div>
  );
}

export default ContactPage;