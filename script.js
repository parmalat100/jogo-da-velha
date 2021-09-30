const player1 = "X"
const player2 = "O"
var playTime = player1
var gameOver = false

atualizaMostrador()
inicializarEspacos()

function atualizaMostrador() {
    if (gameOver) { return }
    if (playTime == player1) {
        var player = document.querySelectorAll("div#mostrador img")[0]
        player.setAttribute("src", "velha01.png")
    } else {
        var player = document.querySelectorAll("div#mostrador img")[0]
        player.setAttribute("src", "velha02.png")
    }
}

function inicializarEspacos() {
    var espacos = document.getElementsByClassName("espaco")
    for (var i = 0; i < espacos.length; i++) {

        espacos[i].addEventListener("click", function () {
            if (gameOver) {
                return
            }
            if (this.getElementsByTagName("img").length == 0) {
                if (playTime == player1) {
                    this.innerHTML = "<img src='velha01.png'>"
                    this.setAttribute("jogada", player1)
                    playTime = player2
                } else {
                    this.innerHTML = "<img src='velha02.png'>"
                    this.setAttribute("jogada", player2)
                    playTime = player1

                }
                atualizaMostrador()
                verificarVencedor()
            }
        })
    }
}

async function verificarVencedor() {
    var a1 = document.getElementById("a1").getAttribute("jogada")
    var a2 = document.getElementById("a2").getAttribute("jogada")
    var a3 = document.getElementById("a3").getAttribute("jogada")

    var b1 = document.getElementById("b1").getAttribute("jogada")
    var b2 = document.getElementById("b2").getAttribute("jogada")
    var b3 = document.getElementById("b3").getAttribute("jogada")

    var c1 = document.getElementById("c1").getAttribute("jogada")
    var c2 = document.getElementById("c2").getAttribute("jogada")
    var c3 = document.getElementById("c3").getAttribute("jogada")

    var vencedor = ""

    if (((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3)) && a1 != "") {
        vencedor = a1
        if (a1 == b1 && a1 == c1) {
            document.getElementById("a1").style.backgroundColor = 'green'
            document.getElementById("b1").style.backgroundColor = 'green'
            document.getElementById("c1").style.backgroundColor = 'green'
        }
        else if (a1 == a2 && a1 == a3) {
            document.getElementById("a1").style.backgroundColor = 'green'
            document.getElementById("a2").style.backgroundColor = 'green'
            document.getElementById("a3").style.backgroundColor = 'green'
        }
        else if (a1 == b2 && a1 == c3) {
            document.getElementById("a1").style.backgroundColor = 'green'
            document.getElementById("b2").style.backgroundColor = 'green'
            document.getElementById("c3").style.backgroundColor = 'green'
        }

    } else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) {
        vencedor = b2
        if (b2 == b1 && b2 == b3) {
            document.getElementById("b2").style.backgroundColor = 'green'
            document.getElementById("b1").style.backgroundColor = 'green'
            document.getElementById("b3").style.backgroundColor = 'green'
        }
        else if (b2 == a2 && b2 == c2) {
            document.getElementById("b2").style.backgroundColor = 'green'
            document.getElementById("a2").style.backgroundColor = 'green'
            document.getElementById("c2").style.backgroundColor = 'green'
        }
        else if (b2 == a3 && b2 == c1) {
            document.getElementById("b2").style.backgroundColor = 'green'
            document.getElementById("a3").style.backgroundColor = 'green'
            document.getElementById("c1").style.backgroundColor = 'green'
        }
    }
    else if (((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != "") {
        vencedor = c3
        if (c3 == c2 && c3 == c1) {
            document.getElementById("c3").style.backgroundColor = 'green'
            document.getElementById("c2").style.backgroundColor = 'green'
            document.getElementById("c1").style.backgroundColor = 'green'
        }
        else if (c3 == a3 && c3 == b3) {
            document.getElementById("c3").style.backgroundColor = 'green'
            document.getElementById("a3").style.backgroundColor = 'green'
            document.getElementById("b3").style.backgroundColor = 'green'
        }
    }
    else if ((a1 != "") && (a2 != "") && (a3 != "") && (b1 != "") &&  (b2 != "") &&  (b3 != "")&& (c1 != "") &&  (c2 != "") &&  (c3 != "")){

        document.getElementById("a1").style.backgroundColor = 'red'
        document.getElementById("a2").style.backgroundColor = 'red'
        document.getElementById("a3").style.backgroundColor = 'red'

        document.getElementById("b1").style.backgroundColor = 'red'
        document.getElementById("b2").style.backgroundColor = 'red'
        document.getElementById("b3").style.backgroundColor = 'red'

        document.getElementById("c1").style.backgroundColor = 'red'
        document.getElementById("c2").style.backgroundColor = 'red'
        document.getElementById("c3").style.backgroundColor = 'red'

        await sleep(50)
        alert('Deu Velha')
    }

    if (vencedor != "") {
        gameOver = true

        await sleep(50)
        alert("O ganhador foi o '" + vencedor + "'")

    }

}


function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms))

}

function jogarNovamente() {
    document.location.reload(true)
}