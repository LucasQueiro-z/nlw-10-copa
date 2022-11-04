function createGame(player1, hour, player2){
  return `
    <li>
      <img src="./assets/${player1}.svg" alt='bandeira do ${player1}'>
      <strong>${hour}</strong>
      <img src="./assets/${player2}.svg" alt='bandeira do ${player2}'>
    </li>
  `
}

let delay = -0.4;

function createCard(date, day, games){
  delay = delay + 0.4;
  return `
    <div class="card" style='animation-delay: ${delay}s'>
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
    createCard("24/11", "quinta", createGame('portugal','12:00','bolivia') + 
    createGame('uruguay','13:00','wales') + 
    createGame('yemen','14:00','zambia')) +
    createCard("25/11", "sexta", createGame('india','23:00','iran') + 
     createGame('vanuatu','01:00','uganda') + 
      createGame('ukraine','02:00','turks and caicos')) +
    createCard("26/11", "sabado", createGame('ireland','01:00','israel') +  createGame('iraq','04:00','italy') + 
     createGame('japan','11:00','kenya'))