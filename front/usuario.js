function exibirusuario() {
    var usuarioStr = localStorage.getItem("usuarioLogado");
    if (usuarioStr == null) {
        window.location = "login.html";
    } else {
        // console.log(usuarioStr);
        var usuarioJson = JSON.parse(usuarioStr);
        document.getElementById("dados").innerHTML =
            `<h3>${usuarioJson.nome}
            <br>${usuarioJson.email}
            <br>Código: ${usuarioJson.id}</h3>`;
        document.getElementById("foto").innerHTML = 
        `<img src=imagens/${usuarioJson.foto}>`
    }
}

function logar() {
    var carta = {
        email : document.getElementById("txtemail").value,
        senha : document.getElementById("txtsenha").value
    };

    var envelope = {
        method : "POST",
        body : JSON.stringify(carta),
        headers : {
            "Content-type" : "application/json"
        }
    };
    console.log("Vai fazer o fetch")

    fetch("http://localhost:8080/login", envelope)
    .then(res => res.json())
    .then(res => {
        window.alert("Login realizado");
        localStorage.setItem("usuarioLogado", JSON.stringify(res));
        window.location = "usuario.html";
    })
    .catch(
        err => {
        console.log("Eita")
        window.alert("Deu ruim");
    });
}

function cadastrar() {
    var carta = {
        email : document.getElementById("txtemail").value,
        senha : document.getElementById("txtsenha").value,
        foto : document.getElementById("txtfoto").value,
        nome : document.getElementById("txtnome").value
    };

    var envelope = {
        method : "POST",
        body : JSON.stringify(carta),
        headers : {
            "Content-type" : "application/json"
        }
    };
    console.log("Vai fazer o fetch")

    fetch("http://localhost:8080/gravar", envelope)
    .then(res => res.json())
    .then(res => {
        window.alert("Usuário gravado");
        window.location = "usuario.html";
    })
    .catch(
        err => {
        window.alert("Deu ruim");
    });
}
