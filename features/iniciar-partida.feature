# language: es
Característica: Iniciar partida

  Escenario: El jugador inicia una partida y ve la palabra enmascarada y las vidas
    Dado una partida con la palabra "CASA"
    Cuando la página arranca
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas
