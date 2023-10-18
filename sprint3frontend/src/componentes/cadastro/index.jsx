import {} from 'react'
import './cadastro.scss'

const Cadastro = () => {
    return(
        <>
        <section className='cadastro' id='cadastro'>
            <h2 className='heading'>Cadastro</h2>
            <form>
                <div className='caixa-input'>
                    <input type="text" id='nome' placeholder='Nome Completo'/>
                    <input type="email" id='email' placeholder='Email'/>
                </div>

                <div className="caixa-input">
                    <input type="password" id='senha' placeholder='Senha'/>
                    <input type="number" id='cpf' placeholder='CPF'/>
                </div>

                <button className='btn' type='submit' onClick={() => {
                    //Validação de formulário usando lógica de javascript
                    var nome = document.getElementById("nome").value;
                    var email = document.getElementById("email").value;
                    var senha = document.getElementById("senha").value;
                    var cpf = document.getElementById("cpf").value;

                    if (nome === "" || email === "" || senha === "" || cpf === "") {
                        alert("Por favor, preencha todos os campos.");
                    } else {
                        alert("Cadastro concluido com sucesso!")
                        //Funcão para adicionar os dados na sessioStorage
                        var dados = {
                            nome: nome,
                            email: email,
                            senha: senha,
                            cpf: cpf
                        };

                        sessionStorage.setItem("dadosDoFormulario", JSON.stringify(dados));

                        document.getElementById("nome").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("senha").value = "";
                        document.getElementById("cpf").value = "";
                    }
                }}>Concluir</button>
            </form>
        </section>
        </>


    )
}

export default Cadastro