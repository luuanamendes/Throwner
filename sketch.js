const World = Matter.World;
const Engine = Matter.World;
const Bodies = Matter.World;
const Constraint = Matter.World;

var jogador, arqueiro1;
var chaoInvisivel, paredeEsquerda, paredeDireita, paredeFundo, fundo;
var d = 2;

var gameState = "menu";

var btnPlay, btnCreditos, btnMute;

var teste;

var gArqueiro;


function preload() {
    //subir imagens (de tarefa, subir a de fundo)
}

function setup() {
    createCanvas(800, 600);

    jogador = createSprite(100, 525, 20, 20);
    jogador.visible = false;

    fundo = createSprite(400, 300);
    fundo.visible = false;

    chaoInvisivel = createSprite(400, 550, 800, 20);
    chaoInvisivel.visible = false;

    paredeEsquerda = createSprite(50, 300, 20, 800);
    paredeEsquerda.visible = false;

    paredeDireita = createSprite(width / 2, 300, 20, 800);
    paredeDireita.visible = false;

    paredeFundo = createSprite(490, 300, 20, 800);
    paredeFundo.visible = false;

    btnPlay = createSprite(400, 100, 60, 20);
    btnPlay.shapeColor = "red";

    btnCreditos = createSprite(400, 150, 60, 20);
    btnCreditos.shapeColor = "blue";
    //btnVoltar

    btnMute = createSprite(730, 50, 20, 20);
    btnMute.shapeColor = "green";
    btnMute.visible = false;

    gArqueiro = new Group();

    teste = createSprite(600, 530, 20, 20);
    teste.shapeColor = "purple";

}

function draw() {
    background(200);

    if (mousePressedOver(btnPlay)) {
        gameState = "playing";
    }

    if (gameState === "playing") {
        btnPlay.visible = false;
        btnCreditos.visible = false;
        btnMute.visible = true;
        fundo.visible = true;
        jogador.visible = true;
        chaoInvisivel.visible = true;

        console.log(jogador.x);

        jogador.velocityY += 1;

        if (keyDown("w")) {
            jogador.velocityY = -10;
        }

        if (keyDown("a")) {
            jogador.x -= 8;
            fundo.x += 8;
        }

        if (keyDown("d")) {
            jogador.x += 8;
            fundo.x -= 8;
        }

        if (keyDown("space")) {
            //change animation (ataque)
            jogador.shapeColor = "red";
        } else {
            //change animation (normal)
            jogador.shapeColor = "gray";
        }

        console.log(fundo.x);



        if ((jogador.x / 200) == 1) {
            //arqueiro1.velocityX = -2;
            for (var i = 0; i <= 1; i++) {
                gerarArqueiro();
                console.log("1");
            }
        }

    }

    jogador.collide(chaoInvisivel);
    jogador.collide(paredeDireita);
    jogador.collide(paredeEsquerda);
    fundo.collide(paredeFundo);

    drawSprites();
}