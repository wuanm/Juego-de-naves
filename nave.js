
let bala;
let cargador=[];
let vel_Bala=-15;
class Nave{
    constructor(){
        this.x=150;
        this.y=380;
        this.x2=30;
        this.y2=10;
        this.x_bala=160
        this.y_bala=360;
        this.x2_bala=2.5;
        this.y2_bala=2.5;
        
        
    }

    //Dibujo de nave
    dibujarNave(){
        fill(255,255,255)
        rect(this.x+10,this.y,this.x2-20,this.y2-20)
        rect(this.x,this.y,this.x2,this.y2)

    }
    //creamos la bala como un objeto y lo ponemos al cargador
    crearBala(){
        let bala={
            x:this.x_bala=this.x+13,
            y:this.y_bala+5,
            x2:this.x2_bala,
            y2:this.y2_bala
           };
        cargador.push(bala);  
    }

    carrillera(){
        for(let i=0;i<cargador.length;i++){ 
            rect(cargador[i].x,cargador[i].y,cargador[i].x2,cargador[i].y2)
            cargador[i].y +=vel_Bala;
            if(cargador[i].y<0){    //si la bala sale de la pantalla del juego
                cargador.splice(i,1);
            }
        }
    }

    //mover nave
    moverNave(m){
        this.x+=m;
    }
    
}
