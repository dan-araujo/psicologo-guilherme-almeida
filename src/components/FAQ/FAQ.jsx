import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
    {
        q: "Como é a primeira sessão?",
        a: "A primeira sessão é um espaço para você se apresentar e contar o que te trouxe até aqui. Escuto sua história com atenção, sem julgamentos, e juntos entendemos o que faz sentido trabalhar no processo terapêutico.",
    },
    {
        q: "O atendimento é online ou presencial?",
        a: "Atendo nas duas modalidades. O formato online acontece por videochamada e tem a mesma qualidade do presencial. A escolha depende da sua preferência e disponibilidade.",
    },
    {
        q: "Quanto tempo dura cada sessão?",
        a: "Cada sessão tem duração de 50 minutos, tempo padrão na psicoterapia para um trabalho consistente e focado.",
    },
    {
        q: "Com que frequência acontecem as sessões?",
        a: "A frequência recomendada é semanal, especialmente no início do processo. Com o avanço da terapia, podemos ajustar conforme suas necessidades.",
    },
    {
        q: "As sessões são sigilosas?",
        a: "Sim. O sigilo é um princípio ético fundamental da psicologia. Tudo o que é compartilhado nas sessões permanece entre nós, respeitando o Código de Ética do CFP.",
    },
    {
        q: "Você atende pelo plano de saúde?",
        a: "No momento atendo de forma particular. Caso precise de reembolso, verifique as condições do seu plano — muitos cobrem psicoterapia com profissional credenciado.",
    },
    {
        q: "Você atende adolescentes?",
        a: "Sim, atendo adolescentes e adultos. Para menores de idade, o processo inclui um contato inicial com os responsáveis para alinhar expectativas e funcionamento do atendimento.",
    },
    {
        q: "Como funciona o curso presencial?",
        a: "Os cursos são realizados em Recife e abordam temas como manejo do comportamento, protocolos de avaliação e psicologia baseada em evidências. Entre na lista de interesse para receber avisos sobre novas turmas.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    function toggle(index) {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section className={styles.section} id="faq" aria-labelledby="faq-title">
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.eyebrow}>Dúvidas frequentes</span>
                    <h2 id="faq-title" className={styles.title}>
                        Dúvidas antes de começar
                    </h2>
                    <p className={styles.description}>
                        Respostas para as perguntas mais comuns sobre o atendimento,
                        funcionamento e o que esperar da terapia.
                    </p>
                </div>

                <ul className={styles.list} role="list">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <li key={i} className={styles.item}>
                                <button
                                    className={styles.question}
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${i}`}
                                    id={`faq-question-${i}`}
                                >
                                    <span>{faq.q}</span>
                                    <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                                        +
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${i}`}
                                    className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                                >
                                    <div className={styles.answerInner}>
                                        <p className={styles.answerText}>{faq.a}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
}