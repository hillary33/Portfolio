export function Header() {
    return(
        <>
        <div className="header">
            <div className="intro">
                <h2>Olá, sou a Hillary!</h2>
                <p>
                    Estou prestes a me formar em Análise e Desenvolvimento de Sistemas (ADS) e sou apaixonada por desenvolvimento web. Estou sempre ansiosa para aprender cada vez mais e estou determinada a aprimorar minhas habilidades para criar soluções inovadoras e impactantes.
                </p>
            </div>  

            <div className="avatarP">
                <img src="/img/avatar.svg" alt="avatar" />
            </div>
        </div>
            <span className="spn-header">Venha conhecer mais sobre mim</span>
            <img className="arrowInteration" src="/img/arrowDown.svg" alt="seta para baixo" />
        </>
    )
}