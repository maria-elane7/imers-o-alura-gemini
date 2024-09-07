function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

      if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum resultado foi encontrado</p>"

        return
      }
        campoPesquisa = campoPesquisa.toLowerCase();
    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar o resultado da pesquisa
    let resultado = "";
    let titulo = "";
    let descricao = "";
    
  
    // Itera sobre cada música no array "musicas"
    for (let musicas of musica) {
      titulo = musicas.musica.toLowerCase();
      descricao = musicas.descricao.toLowerCase();
       if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultado += `
            <div class="item-resultado">
              <h2 class="item-resultado h2"><a href="#" target="_black">${musicas.musica}</a></h2>
              <p class="descricao-meta">${musicas.descricao}</p>
              <a href="${musicas.link}" target="_blank">Letra da música</a>
            </div>
          `;
       }
     }
     
     if(!resultado){
      resultado = "<p >Nenhum resultado foi encontrado</p>"
     }
  
    // Atribui o HTML gerado para a seção "resultados-pesquisa"
    section.innerHTML = resultado;
  }