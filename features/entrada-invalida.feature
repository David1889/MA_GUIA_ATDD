# language: es
Característica: Entrada inválida

  Escenario: El jugador tipea algo que no es una letra
    Dado una partida con la palabra "CASA"
    Cuando el jugador adivina la letra "5"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas
    Y se ve el mensaje "Entrada inválida"

  Escenario: La partida terminada no acepta más jugadas
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "S"
    Y el jugador adivina la letra "O"
    Y el jugador adivina la letra "L"
    Entonces el campo de entrada está deshabilitado
