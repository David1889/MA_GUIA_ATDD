# language: es
Característica: Ganar

  Escenario: El jugador gana al completar todas las letras
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "S"
    Y el jugador adivina la letra "O"
    Y el jugador adivina la letra "L"
    Entonces se ve el mensaje "GANASTE"
