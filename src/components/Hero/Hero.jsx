import styles from "./Hero.module.css";
import { WHATSAPP_URL } from "../../config.js";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Guilherme Almeida</span>

          <h1 id="hero-title" className={styles.title}>
            Psicoterapia para transformar autocuidado em prática.
          </h1>

          <p className={styles.description}>
            Atendimento psicológico para adultos que buscam compreender emoções,
            lidar com estresse, fortalecer relações e construir estratégias mais
            conscientes para o dia a dia.
          </p>

          <div className={styles.professionalInfo}>
            <span>Psicólogo</span>
            <span>Terapia Cognitivo-Comportamental</span>
            <span>Análise do Comportamento</span>
            <span>Direcionada a Orientação Parental</span>
            <span>Terapia dos Esquemas</span>
            <span>CRP 00/00000</span>
          </div>

          <div className={styles.actions}>
            <a href={WHATSAPP_URL} className={styles.primaryCta}>
              Agendar pelo WhatsApp
            </a>

            <a href="#approach" className={styles.secondaryCta}>
              Conhecer a abordagem
            </a>
          </div>
        </div>
        <div className={styles.visualArea} aria-hidden="true">
          <div className={styles.sideBand} />

          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder}>
              <video
                className={styles.heroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/animations/tcc.mp4" type="video/mp4" />
                <source src="/animations/tcc.webm" type="video/webm" />
              </video>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <span className={styles.floatingLabel}>Autocuidado</span>
            <p>clareza, direção e estratégias práticas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
