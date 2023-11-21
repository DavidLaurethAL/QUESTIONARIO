function validaformulario() {
    const nome = document.getElementById("nome").value
    const email = document.querySelector("#email").value
    const senha = document.getElementById("senha").value

    // validação de campos vazios
    if(nome === ''|| email === '' || senha === ''){
        alert("Por favor preencha os campos vazios")
    }
    const emailRegex = /^[^\s@]+@[↑\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Digite um e-mail Valido")
        return
    }
}