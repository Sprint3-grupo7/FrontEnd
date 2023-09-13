import {useState} from 'react'
import './reciclar.css'


const Reciclar = () =>{

    const [numero, setNumero] = useState(0);

    // Função para aumentar o número em 1
    const aumentarNumero = () => {
        if (numero < 6) { // Verifica se o número é menor que 6
            setNumero(numero + 1);
          }
    };
  
    // Função para diminuir o número em 1
    const diminuirNumero = () => {
        if (numero > 0) { // Verifica se o número é maior que 0
            setNumero(numero - 1);
          }
    };

    const exibirMensagem = () => {
        var pontos = numero * 1000
        alert(`Você ganhou ${pontos} pontos!`);
    };

    return(
        <>
        <section className='reciclar' id='reciclar'>
            <h2>Informe a quantidade de lixo que deseja reciclar</h2>
            <h2>Peso do lixo reciclado(limite 6kg): {numero}</h2>
            <div className='botoes-reciclagem'>
                <button className='btn-reciclar' onClick={diminuirNumero}>-</button>
                <button className='btn-reciclar' onClick={aumentarNumero}>+</button>               
            </div>
            
            <button className='btn-reciclar' onClick={exibirMensagem}>Confirmar</button>
        </section>
        
        </>
    )
}

export default Reciclar