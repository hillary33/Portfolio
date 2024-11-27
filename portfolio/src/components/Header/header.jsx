import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
    return(
        <>
            <div className={styles.header}>
                <div className={styles.textHeader}>
                    <h2>Olá, sou a Hillary!</h2>
                    <p>
                        Estou prestes a me formar em Análise e Desenvolvimento de Sistemas (ADS) e sou apaixonada por desenvolvimento web. Estou sempre ansiosa para aprender cada vez mais e estou determinada a aprimorar minhas habilidades para criar soluções inovadoras e impactantes.
                    </p>
                </div>  

                <div className={styles.logo}>
                    <img src="/img/avatar.svg" alt="avatar" />
                </div>
            </div>
                <Link to='about-me'> <span>Venha conhecer mais sobre mim</span> </Link> 
                <img src="/img/arrowDown.svg" alt="seta para baixo" />
        </>
    )
}