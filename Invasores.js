let baseNaves=[];
let direccionNaves=1;
let fin=false;
let vidas=document.getElementById("vid")
let valor=document.getElementById("punt")

class naveInvasoras{
    constructor(){
        this.x_naves=65;
        this.y_naves=40;
        this.x2_naves=10;
        this.y2_naves=10;
    }
 

    
    crearNaves(){
        for(let i=0;i<7;i++){
            for(let j=0;j<5;j++){
                let c=[(this.x_naves-5)+j*60,this.y_naves+2.5+(i*20),this.x2_naves+10,this.y2_naves-5]
                let m=[(this.x_naves)+j*60,this.y_naves+(i*20),this.x2_naves,this.y2_naves]//tener cuidado hay que meterlos en [] para poder encontra las posiciones
                baseNaves.push(c,m)
                
        }
    }
        
    }
   //sacamos las naves del array y con la funciuon "rect" pintamos.
   //tener cuidado que en la función crear nave este dentro de un array.
    dibujarLasNaves(){
        for(let i=0;i<baseNaves.length;i++){
            let nave=baseNaves[i];
            rect(nave[0],nave[1],nave[2],nave[3])  
        }  
    }

    //Movimiento de naves de un lado a otro.
    moverNaves(){
        let Ancho=345;
        let m=15;// velocidad con la que bajan las naves
    
        for(const naves of baseNaves){
            naves[0]+=direccionNaves;
            if(naves[0]+10>Ancho || naves[0]==0){
                direccionNaves*=-1;
                for(const n of baseNaves){
                n[1]+=m;
                if(n[1]==370){
                    fin=true;
                }
                }
            }
            if(fin){
                fin=false;
                baseNaves.length=0;//borramos todas las naves restantes
                //quitamos vida  si las naves llegan a la altura de la nave
                let descontarVidas=1;
                let vidaActual=vidas.innerHTML;
                let vidaActualizada=vidaActual-descontarVidas;
                vidas.innerHTML=vidaActualizada;//ponermos el nuevo valor de la vida
                valor.innerHTML=0;//pnemos los puntos en cero
                if(vidaActualizada<0){
                    baseNaves=0;
                    alert("Juego terminado, refrescar pagina para empezar de nuevo")
                }else{
                    break;
                }
                
                
            }
        }
       
        }
   
    
    
}