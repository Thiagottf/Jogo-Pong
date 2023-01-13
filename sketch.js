// Variaveis da bola
let xbola = 300;
let ybola = 200;
let diametro = 15;
let raio = diametro/2;
let vxbola = 3;
let vybola = 3;

// Variaveis da raquete
let xraquete = 5;
let yraquete = 150;
let lado1 = 10;
let lado2 = 90;

// Variaveis da raquete do oponente
let xraquete2 = 585;
let yraquete2 = 150;
let lado12 = 10;
let lado22 = 90;
let vyraqueteoponente;

// Variaveis do placar
let MeusPontos = 0;
let OponentesPontos = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  MostrarBola();
  MovimentoBola();
  MostraRaquete();
  MovimentoRaquete();
  ColisaoRaquete();
  MostraRaqueteOponente();
  ColisaoRaqueteOponente();
  MovimentoRaqueteOponente();
  Placar();
  MarcaPonto();
  
function MostrarBola()
{
  circle (xbola, ybola, diametro);
}
function MovimentoBola()
{
  xbola += vxbola;
  ybola += vybola;
  
  if(xbola + raio > width || xbola - raio < 0)
  {
    vxbola *= -1;
  }
  if(ybola + raio > height || ybola - raio < 0)
  {
    vybola *= -1;
  }
  function Mostraraquete()
  {
    rect(xraquete, yraquete, lado1, lado2);
  }
}
function MostraRaquete()
{
    rect(xraquete, yraquete, lado1, lado2);
  }
function MovimentoRaquete()
{
    if(keyIsDown(UP_ARROW))
       {
        yraquete -=10;
       }
    if(keyIsDown(DOWN_ARROW))
       {
        yraquete +=10;
       }
  }
function ColisaoRaquete()
  {
    if(xbola - raio < xraquete + lado1 &&
       ybola - raio < yraquete + lado2 && 
       ybola + raio > yraquete) 
       {
       vxbola *= -1;
       }
  }
  function MostraRaqueteOponente()
  {
    rect(xraquete2, yraquete2, lado12, lado22);
  }
function ColisaoRaqueteOponente()
  {
     if(xbola + raio > xraquete2 + lado12 &&
       ybola + raio < yraquete2 + lado22 && 
       ybola - raio > yraquete2 ) 
       {
       vxbola *= -1;
       }
  }
function MovimentoRaqueteOponente()
  {
    {
    if(keyIsDown(87))
        yraquete2 -=10;
       }
    if(keyIsDown(83))
       {
        yraquete2 +=10;
       }
 
  }
  function Placar()
  {
    stroke(255)
    textAlign(CENTER);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(MeusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(OponentesPontos, 470, 26);
    
  }
    
  function MarcaPonto()
  {
  if(xbola > 592)
    {
    MeusPontos += 1;
    }
   if(xbola < 8)
     OponentesPontos += 1;
  }
}



















