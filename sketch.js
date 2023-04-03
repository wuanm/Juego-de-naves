let nave;
let movimiento=20;
let touchDown=false;//variable para saber el estado de la pantalla

//funciones de sonidos
function sonDisparo(){
  const dp=new Audio( "disparo.mp3")//traemos la ubicacion del sonido
  dp.play();
}

function sonidoExplocion(){
  const sE=new Audio("explocion.mp3");
  sE.play();
}



function setup() {
  //creamos variable y la introducimos el canvas en el div
  var canvas=createCanvas(345, 400);
  canvas.parent("eldiv")
  nave=new Nave();
  inva=new naveInvasoras();

}

function draw() {
  background(0);

  //dibujamos la nave en nuestra pantalla
  nave.dibujarNave();
  //dibujamos la carrillera
  nave.carrillera();



  //dibujamos las naves invasoras
  ponemosNaves();
  inva.dibujarLasNaves();
  inva.moverNaves();
  

  destruccionNavesInvasoras();



  
  
}


//si el boton no esta presionado
function botonNoPresionado(){
  nave.moverNave(0);
}

//creamos una funcionn para darle movimiento a nuestra nave
function keyPressed(){
  if(key=="ArrowRight"){
    (nave.x+nave.x2)>335 ? nave.moverNave(0):nave.moverNave(movimiento)
  }else if(key=="ArrowLeft"){
    (nave.x)<10 ? nave.moverNave(0): nave.moverNave(-movimiento)
  }else if(key=="ArrowUp"){ //al usar Up activamos la creacion de bala
    nave.crearBala();
    sonDisparo();
  }
}

//si no existen naves creadas las creamos
function ponemosNaves(){
  if(baseNaves.length<1){
    inva.crearNaves();
  }
}
//destruccion de naves enemigas
function destruccionNavesInvasoras(){
  //agrupar partes de la nave
  for(let i=0;i< baseNaves.length;i++){
    impacto=false;
    for(let j=0;j<cargador.length;j++){
      if((baseNaves[i][1]==cargador[j].y  && baseNaves[0]==cargador[j].x )||  baseNaves[i][0]==cargador[j].x){
        sonidoExplocion();
        //modificamos el marcador
        let cont=1;
        let valor=document.getElementById("punt")
        let valorActual=valor.innerHTML;
        let punto=parseInt(valorActual)+(cont);
        valor.innerHTML=punto;
        

        //borramos nave y proyectil que hicieron contacto
        baseNaves.splice(i,1);
        cargador.splice(j,1)
        impacto=true;
        break;
      }
    }
    if(impacto){
      break;
    }
}
}

//manejador de eventos que se llamara cuando el usuario toque la pantalla
function touchStart(){
  touchDown=true;
}

//manejador de eventos que se llamara cuando el usuario levanto el dedo.
function touchEnd(){
  touchDown=false;
}

//funcion para el touch de pantalla de celular
function touchMoved(){
  //Obtenemos la posicion del dedo del usuario en la pantalla
  let touchX=touches[0].x;
  //Obtenemos la posicion actual de la nave
  let naveX=nave.x + nave.x2 /2;

  //Obtenemos la distancia entre la posicion de la nave y posicion del usuario
  let distancia= touchX- naveX;

  //movemos el la nave en la distancia calculada.
  if(distancia>0){
    nave.moverNave(movimiento);

  }else {
    nave.moverNave(-movimiento);
  }

  //Prevenimos que la pantalla se deslice cunado el usuario mueva la nave con el touch.
  return false;
}

//agregamos esta condicion para disparar al tocar la pantalla
if(touchDown){
  nave.crearBala();
  sonDisparo();
  
}











