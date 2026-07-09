import { useState } from "react";
import styles from "./Header.module.css";
import logoImg from "../../assets/images/logo-wbg.png";

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Terapia", href: "#therapy" },
  { label: "Autocuidado", href: "#self-care" },
  { label: "Abordagem", href: "#approach" },
  { label: "Sobre", href: "#about" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contact" },
];

const whatsappMessage = encodeURIComponent(
  "Olá, Guilherme. Gostaria de saber mais sobre o atendimento psicológico."
);

const whatsappUrl = `https://wa.me/5581992951734?text=${whatsappMessage}`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand} onClick={closeMenu}>
          <img src={logoImg.src} alt="Guilherme Almeida Psicólogo" className={styles.logo} />
        </a>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={whatsappUrl} className={styles.cta}>
          Agendar
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={styles.decorativeLine} />

      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Navegação mobile"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a href={whatsappUrl} className={styles.mobileCta} onClick={closeMenu}>
          Agendar pelo WhatsApp
        </a>
      </nav>
    </header>
  );
}