import { WHATSAPP_URL } from '../../config';
import styles from './CTAFinal.module.css';

export default function CTAFinal() {
    return (
        <section className={styles.section} id='contact' aria-labelledby='cta-title'>
            <div className={styles.container}>
                <p className={styles.eyebrow}>Primeiro contato</p>

                <h2 id="cta-title" className={styles.title}>
                    Quer começar a cuidar de si <br />com mais clareza?
                </h2>

                <p className={styles.description}>
                    O primeiro passo é uma mensagem. Sem compromisso,
                    sem julgamento — só uma conversa.
                </p>

                <a
                    href={WHATSAPP_URL}
                    className={styles.cta}
                    target="_blank"
                    rel='noopener noreferrer'
                >
                    Agendar pelo Whatsapp
                </a>
            </div>
        </section>
    );
}