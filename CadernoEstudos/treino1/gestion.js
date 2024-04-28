// Começar a logica do login adicionando um "Ouvinte de evento" para interceptar o botao submit. Detectar quando usado e assim possibilita a logica

document.getElementById('Submit').addEventListener('click', function(event) {
    event.preventDefault(); //Evita que o formulario seja enviado sem dados e também evita que fique atualizando sem motivos

    //Criando credenciais para teste do codigo
    const validUsername = 'user123'
    const validPassword = '12345'

    //Capturar os valores recebidos do usuario
    const username = document.getElementById('username-field').value;
    const password = document.getElementById('password-field').value;

    //Já tenho os dados, agora falta fazer a condição
    if (username === validUsername && password === validPassword){
        alert('Login Successful');
    } else {
        alert('Any credential is not correct. Please try again')
    }
});