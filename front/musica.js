function filtrarDatas() {
    fetch("http://localhost:8080/relatorio/"+document.getElementById("txtinicio").value + "/" + document.getElementById("txttermino").value).
    then(
        res => res.json()
    ).
    then(
        res => {
            var tabela = `<table border="1" align="center" class="table">
                            <tr>
                                <th>Titulo</th>
                                <th>Cadastro</th>
                                <th>Código</th>
                            </tr>`;
            for (i=0;i<res.length;i++) {
                tabela += `<tr>
                                <td>${res[i].titulo}</td>
                                <td>${res[i].cadastro}</td>
                                <td>${res[i].id}</td>
                            </tr>`
            }
            tabela += `</table>`;
            document.getElementById("tabela").innerHTML = tabela;
        }
    ).
    catch(
        err => {
            window.alert("Musicas não encontradas");
            var tabela = `<table border="1" align="center" class="table">
                            <tr>
                                <th>Titulo</th>
                                <th>Cadastro</th>
                                <th>Código</th>
                            </tr>
                        </table>`;
            document.getElementById("tabela").innerHTML = tabela;
        });
}

function exibirArtistas() {
    fetch("http://localhost:8080/consulta").
    then(
        res => res.json()
    ).
    then(
        res => {
            var template = "";
            for (i=0;i<res.length;i++) {
                template += `<option value="${res[i].id}">${res[i].nomeArtistico}</option> `
            }
            document.getElementById("cmbartistas").innerHTML = template;
        }
    ).
    catch()
}

function filtrar() {
    fetch("http://localhost:8080/consulta/"+document.getElementById("cmbartistas").value).
    then(
        res => res.json()
    ).
    then(
        res => {
            var tabela = `<table border="1" align="center" class="table">
                            <tr>
                                <th>Titulo</th>
                                <th>Cadastro</th>
                                <th>Código</th>
                            </tr>`;
            for (i=0;i<res.musicas.length;i++) {
                tabela += `<tr>
                                <td>${res.musicas[i].titulo}</td>
                                <td>${res.musicas[i].cadastro}</td>
                                <td>${res.musicas[i].id}</td>
                            </tr>`
            }
            tabela += `</table>`;
            document.getElementById("tabela").innerHTML = tabela;
        }
    ).
    catch()
}