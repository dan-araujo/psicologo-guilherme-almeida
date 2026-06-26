import styles from "./Approach.module.css";

const pillars = [
    {
        number: "01",
        title: "Pensamentos",
        text: "Identificar crenças e padrões que influenciam como você interpreta as situações.",
    },
    {
        number: "02",
        title: "Emoções",
        text: "Reconhecer e nomear o que você sente para lidar com mais clareza.",
    },
    {
        number: "03",
        title: "Comportamentos",
        text: "Observar ações e reações que se repetem e compreender seus efeitos.",
    },
    {
        number: "04",
        title: "Estratégias",
        text: "Desenvolver formas mais conscientes de responder a desafios do cotidiano.",
    },
    {
        number: "05",
        title: "Autonomia",
        text: "Construir recursos internos para lidar com situações com mais independência.",
    },
];

export default function Approach() {
    return (
        <section
            className={styles.section}
            id="approach"
            aria-labelledby="abordagem-title"
        >
            <div className={styles.container}>
                <span className={styles.eyebrow}>
                    TCC - Terapia Cognitivo-Comportamental
                </span>
                <h2 id="abordagem-title" className={styles.title}>
                    Uma abordagem prática e acolhedora
                </h2>

                <blockquote className={styles.quote}>
                    <p>
                        A terapia começa quando você passa a observar seus próprios padrões.
                    </p>
                </blockquote>

                <p className={styles.description}>
                    A Terapia Cognitivo-Comportamental é uma abordagem estruturada que
                    conecta pensamentos, emoções e comportamentos. O processo busca ampliar
                    a compreensão sobre si mesmo e construir estratégias mais conscientes
                    para o dia a dia.
                </p>

                <ul className={styles.pillars} aria-label="Pilares da abordagem">
                    {pillars.map((pillar) => (
                        <li key={pillar.title} className={styles.pillar}>
                            <span className={styles.pillarNumber}>{pillar.number}</span>
                            <strong className={styles.pillarTitle}>{pillar.title}</strong>
                            <p className={styles.pillarText}>{pillar.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}