const { useState } = React;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Logo</h2>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#">Contact</a>
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

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
