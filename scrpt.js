function verificarLogin() {


    const
campoUsuario =


       
document.getElementById("usuario");


 


    const
campoSenha =


       
document.getElementById("senha");


 


    const
mensagem =


       
document.getElementById("mensagem");


 


    const
usuarioDigitado =


       
campoUsuario.value.trim();


 


    const
senhaDigitada =


       
campoSenha.value;


 


    const
usuarioCorreto = "admin";


    const
senhaCorreta = "1234";


 


   
mensagem.className = "";


 


    if (


       
usuarioDigitado === "" ||


       
senhaDigitada === ""


    ) {


       
mensagem.textContent =


           
"Preencha o usuário e a senha.";


 


       
mensagem.classList.add("aviso");


 


       
return;


    }


 


    if (


        usuarioDigitado
=== usuarioCorreto &&


       
senhaDigitada === senhaCorreta


    ) {


       
mensagem.textContent =


           
"Login realizado com sucesso!";


 


       
mensagem.classList.add("sucesso");


 


       
campoUsuario.disabled = true;


        campoSenha.disabled
= true;


 


       
return;


    }


 


   
mensagem.textContent =


       
"Usuário ou senha incorretos.";


 


   
mensagem.classList.add("erro");


}


 


function limparCampos() {


    const
campoUsuario =


        document.getElementById("usuario");


 


    const
campoSenha =


       
document.getElementById("senha");


 


    const
mensagem =


       
document.getElementById("mensagem");


 


   
campoUsuario.value = "";


   
campoSenha.value = "";


 


   
campoUsuario.disabled = false;


   
campoSenha.disabled = false;


 


   
mensagem.textContent = "";


   
mensagem.className = "";


 


   
campoUsuario.focus();


}