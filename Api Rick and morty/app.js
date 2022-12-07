
//Designación de variables con valores dentro
const URL = 'https://rickandmortyapi.com/api/character';
const main = document.getElementById('main');
const selector = document.querySelector('.selector')
const character = document.getElementById('character');
const search = document.getElementById('search');

//Buscar personajes
search.addEventListener("keyup",render);
function render(){
    fetch( `https://rickandmortyapi.com/api/character/?name=${search.value}`)
    .then(response => response.json())
    .then(data => {
        const {info,results} = data
        let items =  ' '
        for(let item of results){
            items +=  `
            <div class = "card_container">
            <p class = "card_name">${item.name}</p>
            <p class = "card_specie">${item.species}</p>
            <div class = "card_img_container">
            <img src="${item.image}" alt="Personaje" class="card_img">
            </div>
            </div>
            `
        }
        main.innerHTML = items
    })
}
render();

//Mostrar elementos que se encuentran dentro de la url
function personajes() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.map(element => {
            const choice = document.createElement('option')
            choice.textContent = element.name
            choice.textContent = element.species
            search.appendChild(choice)
        });
    })
    .catch(error => console.log(error))
}

// crear cards
function card(data){
    const card_container = document.createElement('div');
    const card_name = document.createElement('p');
    const card_species = document.createElement('p');
    const card_img_container = document.createElement('div');
    const card_img = document.createElement('img');

// asignacion de clases
    card_container.classList.add('card_container');
    card_name.classList.add('card_name');
    card_species.classList.add('card_specie');
    card_img_container.classList.add('card_img_container');
    card_img.classList.add('card_img');
    
//contenido a card
    card_name.textContent = data.name
    card_species.textContent = data.species
    card_img.src = data.image

//agregar elementos a su contenedor 
    card_container.appendChild(card_name)
    card_container.appendChild(card_species)
    card_container.appendChild(card_img_container)
    card_img_container.appendChild(card_img)
    main.appendChild(card_container)
}
//mostrar personajes al cargar la pagina
addEventListener('load',()=>{
  fetch(URL)
  .then(res => res.json())
  .then(data => {
      main.innerHTML = "";
      return data.results.map(character => {
          card(character);
      })
  })
  
  });

//   Buscar personajes de las 20 que se muestran al inicio
// search.addEventListener('keyup', e=>{

//     fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const value = search.value;
//         return data.results.map(element =>{
//             if (value == element.name){
//                 main.innerHTML = "";
//                 card(element)
//             }
//         })
//     })
// });
  
