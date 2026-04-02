const lampadina = document.querySelector('#lampadina');
const bottoneAccensioneLampadina = document.querySelector('#accendi');

function bottonAccensioneLampadina() {
    if (lampadina.src.includes("white_lamp.png")) {
        lampadina.src = "./imgs/yellow_lamp.png";
        bottoneAccensioneLampadina.innerHTML = 'Spegni lampadina';
    } else {
        lampadina.src = "./imgs/white_lamp.png";
        bottoneAccensioneLampadina.innerHTML = 'Accendi lampadina';
    }
}

bottoneAccensioneLampadina.addEventListener(
    'click', bottonAccensioneLampadina
)