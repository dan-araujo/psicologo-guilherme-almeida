import styles from "./HowItWorks.module.css";
import { WHATSAPP_URL } from "../../config.js";

const steps = [
  {
    title: "Primeiro contato",
    description:
      "Entre em contato pelo WhatsApp. Combinamos um horário e você me conta um pouco sobre o que está vivendo.",
  },
  {
    title: "Sessão inicial",
    description:
      "Nos encontramos pela primeira vez. Escuto sua história com atenção e entendemos juntos o que trouxe você até aqui.",
  },
  {
    title: "Plano terapêutico",
    description:
      "Com base no que você traz, construímos objetivos claros e escolhemos as ferramentas da TCC mais adequadas para você.",
  },
  {
    title: "Acompanhamento",
    description:
      "Sessões regulares com práticas concretas, reflexão e ajustes ao longo do caminho, sempre no seu ritmo.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="process" aria-labelledby="process-title">
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>Como funciona</span>
          <h2 id="process-title" className={styles.title}>
            O atendimento, passo a passo
          </h2>
          <p className={styles.description}>
            Da primeira mensagem à evolução contínua, cada etapa é pensada
            para que você se sinta acolhido e no controle do seu processo.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepTop}>
                <div className={styles.stepNumber}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaLink}>
          Pronto para começar?{" "}
          <a href={WHATSAPP_URL} className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
            Fale pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
