import styles from "./SelfRecognition.module.css";

const situations = [
    {
        title: "Ansiedade",
        text: "Preocupações frequentes, antecipação de problemas e sensação de alerta constante.",
        icon: (
            <path d="M12 5a7 7 0 0 0-7 7v2.5A2.5 2.5 0 0 0 7.5 17H8v-5H5m14 0h-3v5h.5a2.5 2.5 0 0 0 2.5-2.5V12a7 7 0 0 0-7-7Z" />
        ),
    },
    {
        title: "Estresse",
        text: "Cansaço mental, irritabilidade e dificuldade de desacelerar mesmo nos momentos livres.",
        icon: <path d="M12 3v6l4 2m5 1a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
    },
    {
        title: "Autocrítica",
        text: "Cobranças excessivas, sensação de nunca fazer o suficiente e medo de errar.",
        icon: <path d="M8 8h8M8 12h5m-8 8V5a2 2 0 0 1 2-2h8l4 4v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />,
    },
    {
        title: "Baixa autoestima",
        text: "Dificuldade de reconhecer qualidades, limites e necessidades pessoais.",
        icon: <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 8-5 5 5 0 0 1 8 5c-2 4.5-9 9-9 9Z" />,
    },
    {
        title: "Procrastinação",
        text: "Adiar tarefas importantes, travar diante de decisões e sentir culpa depois.",
        icon: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />,
    },
    {
        title: "Relações desgastantes",
        text: "Conflitos repetidos, dificuldade de comunicação e sensação de sobrecarga nas relações.",
        icon: <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3m-8 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2c-2.67 0-5 1.34-5 3v2h10v-2c0-1.66-2.33-3-5-3Zm8 0c-.65 0-1.26.08-1.82.23 1.09.78 1.82 1.83 1.82 3.04V18h6v-2c0-1.66-2.33-3-5-3Z" />,
    },
    {
        title: "Alterações de humor",
        text: "Oscilações emocionais, irritação frequente ou dificuldade de compreender o que sente.",
        icon: <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
    },
    {
        title: "Dificuldade de descanso",
        text: "Sensação de culpa ao pausar, sono pouco reparador ou mente ativa durante o descanso.",
        icon: <path d="M21 12.8A8 8 0 1 1 11.2 3 6 6 0 0 0 21 12.8Z" />,
    },
    {
        title: "Pensamentos acelerados",
        text: "Muitas ideias ao mesmo tempo, dificuldade de foco e sensação de mente sempre ocupada.",
        icon: <path d="M4 13a8 8 0 0 1 15.5-2.7M4 17h7m-7-4h10m5 4h1m-4 0h1m-4 0h1" />,
    },
];

function SituationIcon({ children }) {
    return (
        <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

export default function SelfRecognition() {
    return (
        <section className={styles.section} id="therapy" aria-labelledby="self-recognition-title">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Terapia e vida cotidiana</span>

                    <h2 id="self-recognition-title" className={styles.title}>
                        Você se reconhece em alguma dessas situações?
                    </h2>

                    <p className={styles.description}>
                        A psicoterapia pode ajudar a compreender padrões emocionais,
                        pensamentos recorrentes e formas de lidar com situações que se repetem
                        no cotidiano.
                    </p>
                </div>

                <div className={styles.grid}>
                    {situations.map((situation) => (
                        <article className={styles.card} key={situation.title}>
                            <div className={styles.iconBox}>
                                <SituationIcon>{situation.icon}</SituationIcon>
                            </div>

                            <h3>{situation.title}</h3>
                            <p>{situation.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}