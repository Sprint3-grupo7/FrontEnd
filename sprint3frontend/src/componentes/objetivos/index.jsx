import { } from 'react'
import './objetivos.css'

const Objetivos = () => {
    return (
        <>
            <section className="objetivos" id="objetivos">
                <h2 className="heading"><span>Objetivos</span></h2>

                <div className="container-objetivos">
                    <div className="caixa-objetivos">
                        <i className='bx bx-male-female'></i>
                        <h3>Engajamento da população</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ad rem a autem nihil qui. Natus quae
                            soluta eius ex aliquid. Enim magni debitis ipsa
                            illum facilis neque reiciendis sed nam!</p>
                        <a href="#" className="btn">Ler mais</a>
                    </div>
                    <div className="caixa-objetivos">
                        <i className='bx bx-trash'></i>
                        <h3>Ruas mais limpas</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ad rem a autem nihil qui. Natus quae
                            soluta eius ex aliquid. Enim magni debitis ipsa
                            illum facilis neque reiciendis sed nam!</p>
                        <a href="#" className="btn">Ler mais</a>
                    </div>
                    <div className="caixa-objetivos">
                        <i className='bx bx-recycle'></i>
                        <h3>Menos poluição</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ad rem a autem nihil qui. Natus quae
                            soluta eius ex aliquid. Enim magni debitis ipsa
                            illum facilis neque reiciendis sed nam!</p>
                        <a href="#" className="btn">Ler mais</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Objetivos