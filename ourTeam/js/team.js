
const Ourteam = [
{   nome: 'Wayne',
    cognome: 'Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
},
{   nome: 'Angela',
    cognome: 'Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
},
{   nome: 'Walter',
    cognome: 'Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
},
{   nome: 'Angela',
    cognome: 'Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
},
{   nome: 'Barbara',
    cognome: 'Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
},
{   nome: 'Scott',
    cognome: 'Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
}

];

const team = document.querySelector('.row');
let TEAM = '';

for(let i = 0; i < Ourteam.length; i++){

   const myteam = Ourteam[i];
   const layout = `<div class="col col-4">
   <div class="card m-3 border bg-black">
       <img class="card-img-top" 
       src="/img/${myteam.image} " alt="${myteam.nome} ${myteam.cognome} ">
       
       <div class="cad-body m-2 text-center">
       <div class="fs-5 fw-bold text-white">${myteam.nome} ${myteam.cognome}</div>
       <div class="text-white">${myteam.role}</div>
       </div>
   </div>
</div>`;
    TEAM += layout;
}
    team.innerHTML = TEAM;