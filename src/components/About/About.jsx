import styles from "./About.module.css";
import guilhermePhoto from "../../assets/images/foto-guilherme.jpg";
import { WHATSAPP_URL, CRP } from "../../config.js";

// Confirmar dados profissionais com o Guilherme antes de publicar
const infoCards = [
  { label: "Abordagem", value: "Terapia Cognitivo-Comportamental" },
  { label: "Público", value: "Adultos e adolescentes" },
  { label: "Modalidade", value: "Online e presencial" },
  { label: "CRP", value: CRP },
];

export default function About() {
  return (
    <section
      className={styles.section}
      id="about"
      aria-labelledby="about-title"
    >
      <div className={styles.container}>

        {/* Coluna esquerda: texto */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Quem sou</span>

          <h2 id="about-title" className={styles.title}>
            Guilherme Almeida
          </h2>

          <p className={styles.role}>Psicólogo · CRP {CRP}</p>

          <p className={styles.bio}>
            Sou psicólogo com foco em Terapia Cognitivo-Comportamental, atuando
            no atendimento de adultos e adolescentes. Meu trabalho é oferecer um
            espaço de escuta e acolhimento para quem busca compreender melhor
            suas emoções, lidar com desafios do cotidiano e construir estratégias
            mais conscientes para o dia a dia.
          </p>

          <p className={styles.bio}>
            Acredito que a terapia começa pela observação — dos próprios padrões,
            pensamentos e formas de se relacionar. Com base nisso, buscamos juntos
            formas mais funcionais de lidar com o que você está vivendo.
          </p>

          <ul className={styles.infoCards} aria-label="Dados profissionais">
            {infoCards.map((card) => (
              <li key={card.label} className={styles.infoCard}>
                <span className={styles.infoLabel}>{card.label}</span>
                <span className={styles.infoValue}>{card.value}</span>
              </li>
            ))}
          </ul>

          <a href={WHATSAPP_URL} className={styles.cta} target="_blank" rel="noopener noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
        <div className={styles.visualArea} aria-hidden="true">
          <div className={styles.cardWrapper}>
            <div className={styles.sideBand} />
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                <img
                  src={guilhermePhoto.src}
                  alt="Guilherme Almeida, psicólogo"
                  className={styles.photo}
                />
              </div>
            </div>
          </div>
          <div className={styles.floatingCard}>
            <span className={styles.floatingLabel}>Autoconfiança</span>
            <p>renovada com o auxílio da psicoterapia</p>
          </div>
        </div>

      </div>
    </section>
  );
}
