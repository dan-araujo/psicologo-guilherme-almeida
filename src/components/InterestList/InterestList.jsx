import { ALMEIDA_INSTITUTO_GROUP, INSTAGRAM_INSTITUTO } from "../../config";
import styles from "./InterestList.module.css";

const courses = [
    "Manejo do comportamento",
    "Protocolos de avaliação: VB-MAPP, ABLLS-R e AFLS",
    "Entrevista devolutiva",
    "Manejo das emoções na psicologia baseada em evidências",
];

export default function InterestList() {
    return (
        <section className={styles.section} id="course" aria-labelledby="course-title">
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.eyebrow}>Formação presencial</span>

                    <h2 id="course-title" className={styles.title}>
                        Cursos para profissionais e estudante da área da saúde
                    </h2>

                    <p className={styles.description}>
                        Guilherme ministra cursos presenciais em Recife voltados para
                        psicólogos, terapeutas e estudantes que atuam ou pretendem atuar
                        com análise do comportamento e TCC.
                    </p>

                    <ul className={styles.highlights} aria-label="Cursos disponíveis">
                        {courses.map((course) => (
                            <li key={course} className={styles.highlightItem}>
                                <span className={styles.dot} aria-hidden="true" />
                                {course}
                            </li>
                        ))}
                    </ul>

                    <a
                        href={ALMEIDA_INSTITUTO_GROUP}
                        className={styles.cta}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Entrar na lista de interesse
                    </a>

                    <p className={styles.note}>
                        Ao entrar no grupo, você recebe avisos sobre novas turmas e datas.
                    </p>
                </div>

                <div className={styles.card}>
                    <span className={styles.cardTag}>Presencial · Recife</span>
                    <h3 className={styles.cardTitle}>
                        Análise do Comportamento Aplicada
                    </h3>
                    <p className={styles.cardSubtitle}>
                        Formações práticas com foco em evidências, voltadas para quem quer
                        se aprofundar na área comportamental.
                    </p>
                    <hr className={styles.cardDivider} />
                    <a 
                    href={INSTAGRAM_INSTITUTO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardBrand}>Instituto Almeida</a>
                </div>
            </div>
        </section>
    );
}