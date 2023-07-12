alert("inicia el juego")
alert("elije tu ataque")
console.log("inicia el juego")

let player = prompt("elije 0 para piedra , 1 para papel y 2 para tijera")
console.log(player)
if (player == 0 ) {
    alert("elejist2 piedra")
} else if (player == 1 ) {
    alert("elejist2 papel")
} else if (player == 2 ) {
    alert("elejist2 tijera")
}

let enemy = Math.round(Math.random() * 2)
console.log(enemy)
if (enemy == 0 ) {
    alert("el enemigo elijio piedra")
} else if (enemy == 1 ) {
    alert("el enemigo elijio papel")
} else if (enemy == 2 ) {
    alert("el enemigo elijio tijera")
}


if (player == enemy) {
    alert("empate :| ")
} else if (player == 0 && enemy == 2) {
    alert("en hora buena ganasteee :D")
} else if (player == 1 && enemy == 0) {
    alert("en hora buena ganasteee :D")
} else if (player == 2 && enemy == 1) {
    alert("en hora buena ganasteee :D")
} else {
    alert("perdiste :(")
}



