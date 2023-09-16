import { } from 'react'
import './premios.css'
import logo1 from './logo1.jpeg'

const Premios = () => {
    return (
        <>
            <section className="premios" id="premios">
                <h2 className="heading"><span>Prêmios</span></h2>

                <div className="container-premios">
                    <div className="caixa-premios">
                        <img src={logo1} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 1</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a.</p>
                            <a href="#" className="btn-premios">adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={logo1} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 2</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={logo1} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 3</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a.</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={logo1} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 4</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a.</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={logo1} alt="" />
                        <div className="descricao-premios">
                            <h4>Prêmio 5</h4>
                            <h5>1000 pontos</h5>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cupiditate, magni at vero harum,
                                rerum nemo a</p>
                            <a href="#" className="btn-premios">Adquirir</a>
                        </div>
                    </div>

                    <div className="caixa-premios">
                        <img src={logo1} alt="" />
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