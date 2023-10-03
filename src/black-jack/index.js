import {crearMazo} from "./casosUso/crearMazo";
import { revolverMazo } from "./casosUso/revolverMazo";
import { pedirCarta } from "./casosUso/pedirCarta";
import { valorCarta } from "./casosUso/valorCarta";

(()=>{
    'use strict'
    
  
    //Puntos jugadores
    let puntosJugador = 0
    let viJugador = 0
    let puntosComputadora = 0
    let viComputadora = 0
  
    
    let mazo = crearMazo() 
    let mazoRevuelto = revolverMazo(mazo)
  
    
  
    
  
    // ====================== Referencias HTML ======================
  
    const btnNuevo = document.querySelector('#btnNuevo')
    const btnPedir = document.querySelector('#btnPedir')
    const btnDetener = document.querySelector('#btnDetener')
    // Referencias puntaje
    let marcadorJugador = document.querySelector('#marcadorJugador')
    let marcadorComputadora = document.querySelector('#marcadorComputadora')
    //Referencia espacios de juego
    const espacioJugador = document.querySelector('#espacioJugador')
    const espacioComputadora = document.querySelector('#espacioComputadora')
    //Referencia victorias
    const victoriasJugador = document.querySelector('#victoriasJugador')
    const victoriasComputadora = document.querySelector('#victoriasComputadora')
  
  
    // ================== Funciona ganador ==================
    const ganador = ()=>{
        setTimeout(() => {
            if(puntosJugador>puntosComputadora){
                viJugador += 1
                victoriasJugador.innerHTML = viJugador
                alert("Ganaste")
            }else if(puntosComputadora === puntosJugador){
                alert("Empate")
            }
            else if(puntosComputadora>21){
                viJugador += 1
                victoriasJugador.innerHTML = viJugador
                alert("Ganaste")
            }else if(puntosComputadora>puntosJugador){
                viComputadora += 1
                victoriasComputadora.innerHTML = viComputadora
                alert("Computadora Gana")
            }
        }, 500);
    }
  
    // ==================== Turno computadora ====================
    const turnoComputadora = (puntosJ)=>{
        do {
            let carta= pedirCarta(mazoRevuelto)
            let puntos = valorCarta(carta)
            puntosComputadora += puntos
            marcadorComputadora.innerHTML = puntosComputadora
            let cartaImg = document.createElement('img')
            cartaImg.src = `assets/cartas/${carta}.png`
            cartaImg.className = 'carta'
            espacioComputadora.append(cartaImg)
            if(puntosJ>21){
                break
            }
        } while ((puntosComputadora<puntosJ) && (puntosComputadora<21));
    }
  
    // ==================== Turno Jugador ====================
    btnPedir.addEventListener('click', ()=>{
        let carta= pedirCarta(mazoRevuelto)
        let puntos = valorCarta(carta)
        puntosJugador += puntos
        marcadorJugador.innerHTML = puntosJugador
        let cartaImg = document.createElement('img')
        cartaImg.src = `assets/cartas/${carta}.png`
        cartaImg.className = 'carta'
        espacioJugador.append(cartaImg)
        if(puntosJugador === 21){
            btnPedir.disabled = true
            btnDetener.disabled = true
            turnoComputadora(puntosJugador)
            ganador()
        }else if(puntosJugador>21){
            btnPedir.disabled = true
            btnDetener.disabled = true
            turnoComputadora(puntosJugador)
            viComputadora += 1
            victoriasComputadora.innerHTML = viComputadora
            setTimeout(()=>{
                alert("Perdiste")
            },500)
        }
    })
  
    // ============================ btn detener ============================
  
    btnDetener.addEventListener('click',()=>{
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugador)
        ganador()
    })
  
    btnNuevo.addEventListener('click',()=>{
        marcadorJugador.innerHTML = 0
        marcadorComputadora.innerHTML = 0
        espacioJugador.innerHTML = ''
        espacioComputadora.innerHTML = ''
        btnPedir.disabled = false
        btnDetener.disabled = false
        mazo = []
        mazo = crearMazo()
        mazoRevuelto = revolverMazo(mazo)
        puntosJugador = 0
        puntosComputadora = 0
    })
  })()