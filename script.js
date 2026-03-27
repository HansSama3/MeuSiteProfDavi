// FILMES
let filmes = [

    {
    titulo: "Five Nights at Freddy's: O pesadelo sem fim",
    imagem: "fnafilme.jpg",
    descricao: "O filme Five Nights at Freddy's (2023) segue Mike Schmidt, um segurança noturno problemático que aceita emprego em uma pizzaria abandonada, a Freddy Fazbear's Pizza. Ele descobre que os animatrônicos do local são possuídos pelos espíritos de crianças desaparecidas nos anos 80, orquestrado por William Afton, um serial killer que se disfarça."
    }
    
    ];
    
    // SÉRIES
    let series = [
    
    {
    titulo: "Dexter",
    imagem: "dextermorgan.jpg",
    descricao: "Dexter é uma aclamada série que acompanha Dexter Morgan (Michael C. Hall), um analista forense especializado em padrões de sangue para a polícia de Miami que, secretamente, é um assassino em série. Assombrado por traumas de infância, ele segue um código de Harry ensinado por seu pai adotivo para canalizar seus impulsos, matando apenas outros criminosos que escaparam do sistema judicial."}

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaSeries = document.getElementById("listaSeries");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    series.forEach(function(s){
    
    listaSeries.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();
