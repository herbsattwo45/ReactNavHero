const { useState } = React;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Logo</h2>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to My Website</h1>
      <p>This is a fully responsive hero section with React.js</p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>We are a company dedicated to providing the best solutions for our customers.</p>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>We create modern, responsive websites for businesses and individuals.</p>
        </div>
        <div className="service-item">
          <h3>Graphic Design</h3>
          <p>We design logos, posters, and branding materials to make your business stand out.</p>
        </div>
        <div className="service-item">
          <h3>SEO Optimization</h3>
          <p>We help improve your website's ranking on search engines for better visibility.</p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"This company transformed my business! Highly recommend."</p>
          <h4>- Jane Doe</h4>
        </div>
        <div className="testimonial-item">
          <p>"Excellent service and professional work. 10/10!"</p>
          <h4>- John Smith</h4>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      <details>
        <summary>What services do you offer?</summary>
        <p>We offer web development, graphic design, and SEO optimization.</p>
      </details>
      <details>
        <summary>How can I contact you?</summary>
        <p>You can contact us through our email or phone number listed in the footer.</p>
      </details>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <p>&copy; 2025 My Company. All rights reserved.</p>
      <p>Contact us at: support@mycompany.com</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
