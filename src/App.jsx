import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#inicio">Inicio.</a>
        <a href="#programas">Programas</a>
        <a href="#acerca">Acerca</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* Encabezado */}
      <header id="inicio" className="header">
        <h1>SENA</h1>
        <p>
          Centro de Gestión de Mercados, Logística y Tecnologías <br />
          Bogotá
        </p>
      </header>

      {/* Sección Programas */}
      <section id="programas" className="programas">
        <h2>Programas</h2>
        <div className="cards">
          <div className="card">ADSO</div>
          <div className="card">Redes de Datos</div>
          <div className="card">Logística</div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contacto">
        <h2>Contacto</h2>
        <form className="formulario">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo" />
          <textarea placeholder="Mensaje" rows="4"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 SENA - Centro de Gestión de Mercados, Logística y Tecnologías
      </footer>
    </div>
  );
}

export default App;
