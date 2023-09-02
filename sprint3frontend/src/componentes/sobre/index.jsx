import './sobre.css'
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis in dolor iure ut minima quo velit. Nulla mollitia
                    similique quasi dolor, eos vel accusamus sit assumenda
                    delectus quod et quas? Optio est rem sunt excepturi autem
                    harum velit id facere?</p>

                <a href="#" className="btn">Ler Mais</a>

            </div>
        </section>
    )
}

export default Sobre