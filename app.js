const { useState } = React;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Logo</h2>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
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

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
