import { } from 'react'
import './premios.css'
import imagem1 from './imagem1.jpg'
import imagem2 from './imagem2.jpg'
import imagem3 from './imagem3.jpg'
import imagem4 from './imagem4.jpg'
import imagem5 from './imagem5.jpg'
import imagem6 from './imagem6.jpg'

const Premios = () => {
    return (
        <>
            <section className="premios" id="premios">
                <h2 className="heading"><span>Prêmios</span></h2>

                <div className="container-premios">
                    <div className="caixa-premios">
                        <img src={imagem1} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 1</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a.</p>
                            <a href="#" className="btn-premios">adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={imagem2} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 2</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={imagem3} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 3</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a.</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={imagem4} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 4</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a.</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={imagem5} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 5</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={imagem6} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 6</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Premios