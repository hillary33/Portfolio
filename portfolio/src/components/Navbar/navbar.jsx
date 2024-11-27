import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar(){
    return(
        <>
            <section className={styles.navbar}>
            <Link to='/'> HOME </Link>
            <Link to='about-me'> SOBRE MIM </Link>
            <Link to='project'> PROJETOS </Link>
            <Link to='certificate'> CERTIFICADOS </Link>
            <Link to='contatos'> CONTATOS </Link>
            </section>
        </>
    )
}

