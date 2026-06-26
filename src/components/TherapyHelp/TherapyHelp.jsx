import styles from "./TherapyHelp.module.css";

const therapySteps = [
    {
        title: "Compreender padrões",
        text: "Observar situações que se repetem ajuda a perceber como pensamentos, emoções e comportamentos se conectam.",
    },
    {
        title: "Nomear emoções",
        text: "Identificar o que você sente pode trazer mais clareza para lidar com conflitos, escolhas e reações do cotidiano.",
    },
    {
        title: "Desenvolver estratégias",
        text: "A terapia pode contribuir para construir formas mais conscientes de enfrentar dificuldades e organizar a rotina.",
    },
    {
        title: "Fortalecer relações",
        text: "O processo terapêutico pode ajudar a reconhecer limites, melhorar a comunicação e cuidar dos vínculos.",
    },
    {
        title: "Construir autonomia",
        text: "Com mais compreensão sobre si, torna-se possível fazer escolhas mais alinhadas às suas necessidades e valores.",
    },
];

export default function TherapyHelp() {
    return (
        <section
            className={styles.section}
            id="therapy-help"
            aria-labelledby="therapy-help-title"
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Psicoterapia e clareza</span>

                    <h2 id="therapy-help-title" className={styles.title}>
                        Como a terapia pode ajudar?
                    </h2>

                    <p className={styles.description}>
                        A psicoterapia pode ajudar a compreender pensamentos, emoções e
                        comportamentos, criando espaço para reconhecer padrões e desenvolver
                        estratégias mais conscientes para o dia a dia.
                    </p>
                </div>

                <ol className={styles.steps}>
                    {therapySteps.map((step, index) => (
                        <li className={styles.step} key={step.title}>
                            <article className={styles.card}>
                                <span className={styles.number}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}