// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro!

const ourTeam = [{
    name : "Wayne Barnett",
    position : "Founder & CEO",
    img : "wayne-barnett-founder-ceo.jpg"
},

{
    name : "Angela Caroll",
    position : "Chief Editor",
    img : "angela-caroll-chief-editor.jpg"
},

{
    name : "Walter Gordon",
    position : "Office Manager",
    img : "walter-gordon-office-manager.jpg"
},

{
    name : "Angela Lopez",
    position : "Social Media Manager",
    img : "angela-lopez-social-media-manager.jpg"
},

{
    name : "Scott Estrada",
    position : "Developer",
    img : "scott-estrada-developer.jpg"
},

{
    name : "Barbara Ramos",
    position : "Graphic Designer",
    img : "barbara-ramos-graphic-designer.jpg"
}
];

for (let i = 0; i < ourTeam.length; i++){
    console.log(ourTeam[i].name);
    console.log(ourTeam[i].position);
    console.log(ourTeam[i].img); 
}

const cardsElement = document.querySelector("div.cards");



for (let i = 0; i < ourTeam.length; i++){

    const cardElement = document.createElement("div");
    cardElement.innerHTML = `<p>${ourTeam[i].name}</p> <p>${ourTeam[i].position}</p> <img class="box-shadow d-block w-100" src="./img/${ourTeam[i].img}" alt="pictures"></img>`;
    cardsElement.appendChild(cardElement);
    cardElement.classList.add("col-12", "col-sm-6", "col-md-4", "col-xl-2")

}


