import './sobre.scss'
import imagemSobre from './imagemSobre.png'

const Sobre = () => {
    return (
        <section className="sobre" id="sobre">
            <div className='imagem-sobre'>
                <img src={imagemSobre} alt="imagem reciclagem"/>
            </div>

            <div className="conteudo-sobre">
                <h2 className="heading">Sobre o EcoPoints</h2>
                <h3>O que você precisa saber sobre esse projeto.</h3>
                <p>O projeto consiste na implementação de lixeiras com sensores especiais em variados locais de uma cidade
                    , esses sensores servirão para calcular a quantidade de lixo reciclado pelos usuários e então force-los uma 
                    quantidade de pontos de acordo com o lixo que foi reciclado, pontos esses que poderão ser usados para resgatar
                    alguns prêmios simples, como descontos em eventos culturais ou em passagens de transporte público.
                </p>

                <a href="#objetivos" className="btn">Saber Mais</a>

            </div>
        </section>
    )
}

export default Sobre