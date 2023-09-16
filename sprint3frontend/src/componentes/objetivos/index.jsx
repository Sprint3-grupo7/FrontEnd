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
                        <p>Para engajar a população nosso projeto utilizará um sistema de pontuação e resgate de prêmios,
                            tendo em vista que um incentivo tangível pode ser de grande ajuda, tanto para atrair atenção quanto para, além disso tabém buscamos informar as pessoas sobre os problemas do acúmulo de
                            lixo e os benefícios da reciclagem. 
                        </p>
                        
                    </div>
                    <div className="caixa-objetivos">
                        <i className='bx bx-trash'></i>
                        <h3>Ruas mais limpas</h3>
                        <p>Com mais pessoas engajadas com a reciclagem e o descarte correto do lixo acreditamos
                            que isso será refletido nas ruas, tornando-as mais limpas e agradáveis.
                        </p>
                        
                    </div>
                    <div className="caixa-objetivos">
                        <i className='bx bx-recycle'></i>
                        <h3>Menos poluição</h3>
                        <p>Com a reciclagem sendo feita de maneira correto o acúmlo de lixo em aterros, ou o descarte de grandes quantidades
                            de lixo em locais inadequados tende a diminuir, assim gerando uma diminuição na poluição.
                        </p>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Objetivos