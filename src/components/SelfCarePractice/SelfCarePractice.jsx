import styles from "./SelfCarePractice.module.css";

const topics = [
    {
        title: "Humor",
        text: "Perceber mudanças de humor ajuda a reconhecer padrões e a cuidar melhor da rotina emocional.",
        tone: "petroleum",
    },
    {
        title: "Relações",
        text: "Autocuidado também envolve limites, diálogo e atenção à forma como você se relaciona.",
        tone: "sage",
    },
    {
        title: "Estresse",
        text: "Sinais de sobrecarga podem aparecer no corpo, no pensamento e na dificuldade de desacelerar.",
        tone: "petroleum",
    },
    {
        title: "Descanso",
        text: "Descansar não é improdutividade. É parte importante da regulação emocional e da saúde mental.",
        tone: "sage",
    },
    {
        title: "Emoções",
        text: "Nomear emoções com mais clareza pode facilitar escolhas, comunicação e autoconsciência.",
        tone: "petroleum",
    },
    {
        title: "Autocompaixão",
        text: "Tratar-se com gentileza não é se acomodar, mas construir uma relação interna menos punitiva.",
        tone: "sage",
    },
];

export default function SelfCarePractice() {
    return (
        <section
            className={styles.section}
            id="autocuidado"
            aria-labelledby="self-care-practice-title"
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Autocuidado no cotidiano</span>

                    <h2 id="self-care-practice-title" className={styles.title}>
                        Autocuidado na prática
                    </h2>

                    <p className={styles.description}>
                        Cuidar de si não precisa ser algo distante ou abstrato. Pequenos
                        movimentos cotidianos podem fortalecer a percepção emocional, a
                        qualidade das relações e a forma de lidar com a rotina.
                    </p>
                </div>

                <div className={styles.grid}>
                    {topics.map((topic) => (
                        <article
                            key={topic.title}
                            className={`${styles.card} ${topic.tone === "petroleum" ? styles.petroleum : styles.sage
                                }`}
                        >
                            <h3 className={styles.cardTitle}>{topic.title}</h3>
                            <p>{topic.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}