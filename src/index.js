import _ from 'underscore';
import{crearDeck} from './usecases/crear-deck'
import{pedirCarta} from './usecases/pedir-carta'
import{valorCarta} from './usecases/valor-carta'
//import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'

const miModulo = (()=> {
  'use strict'
  let deck = [];

  const tipos = ['C','D','H','S'],
       especiales = ['A','J','Q','K']
  //let puntosJugador =0,
   //   puntosPc =0;
  // Referencia en html
  let puntosJugadores = [0,0];
  const btnGetCard = document.querySelector('#btnGetCard');
  const btnStop = document.querySelector('#btnStop');
  const btnNewGame = document.querySelector('#btnNewGame');
  const scord = document.querySelectorAll('small');
  const divCartasJugador = document.querySelectorAll('.divCartas');
 

  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipos,especiales);
      puntosJugadores = [];
      for (let i=0; i<numJugadores; i++){
          puntosJugadores.push(0);
      }
      scord.forEach( elem => elem.innerText = 0);
      //scord[0].innerText=0;scord[1].innerText=0;
      divCartasJugador.forEach( elem => elem.innerHTML ='');
      
  }
  
    
  
 
  
  // turno de la computadora

  const acumularPuntos = (carta, turno)=> {
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      scord[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
  }
  const crearCarta = (carta, turno)=> {
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png` ;
      imgCarta.classList.add('card1');
      divCartasJugador[turno].append(imgCarta);

  }
  const determinarGanador = ()=>{
      const [puntosMinimo,puntosPc] = puntosJugadores;
      setTimeout( ()=> {
          if (puntosPc>21){
              console.warn('win');
          }else if (puntosPc===puntosMinimo){
              console.warn('empate');
          } else {console.warn('loser')}
          },10);

  }
  
  const turnoPc = (puntosMinimo) => {
     let puntosPc =0;
     do{
      const carta = pedirCarta(deck);
       puntosPc = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);        
      if (puntosMinimo> 21){
          break;
          console.warn('loser');
      }
  
     } while ((puntosPc < puntosMinimo) && (puntosMinimo<=21));
     determinarGanador();
  }
  
  // eventos
  
  btnGetCard.addEventListener('click', ()=>{       
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0);
      crearCarta(carta, 0); 
  
      if ( puntosJugador>21){
          btnGetCard.disabled =true;
          btnStop.disabled =true;
          turnoPc(puntosJugador);
      } else if ( puntosJugador === 21){
          btnGetCard.disabled =true;
          btnStop.disabled =true;
          turnoPc(puntosJugador);
      }
  });
  
  btnStop.addEventListener('click', ()=>{
      btnGetCard.disabled =true;
      btnStop.disabled =true;
      turnoPc(puntosJugadores[0]);
  })
  btnNewGame.addEventListener('click', ()=>{
      btnGetCard.disabled =false;
      btnStop.disabled =false;
      console.clear();
      inicializarJuego();
      
  })
  return {
      nuevoJuego: inicializarJuego
  };
  
})();


