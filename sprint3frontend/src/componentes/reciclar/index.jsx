import {useState} from 'react'
import './reciclar.css'


const Reciclar = () =>{

    //uso de ganchos para escolher o peso do lixo a ser descartado
    const [numero, setNumero] = useState(0);

    const aumentarNumero = () => {
        if (numero < 6) { 
            setNumero(numero + 1);
          }
    };
  
    
    const diminuirNumero = () => {
        if (numero > 0) { 
            setNumero(numero - 1);
          }
    };

    const gerarNumeroAleatorio = () => {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        setNumero(numeroAleatorio);
      };

    const exibirMensagem = () => {
        var pontos = numero * 1000
        alert(`Você ganhou ${pontos} pontos!`);
    };

    return(
        <>
        <section className='reciclar' id='reciclar'>
            <h2>Informe a quantidade de lixo que deseja reciclar</h2>
            <h2>Peso do lixo reciclado(limite 6kg): {numero}KG</h2>
            <div className='botoes-reciclagem'>
                <button className='btn-reciclar' onClick={diminuirNumero}>-</button>
                <button className='btn-reciclar' onClick={aumentarNumero}>+</button>  
                <button className='btn-reciclar' onClick={gerarNumeroAleatorio}>Aleatório</button>             
            </div>
            
            <button className='btn-reciclar' onClick={exibirMensagem}>Confirmar</button>
        </section>
        
        </>

        
    )
}



export default Reciclar