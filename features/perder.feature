# language: es
Característica: Perder

  Escenario: El jugador pierde al agotar las vidas
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "F"
    Y el jugador adivina la letra "G"
    Y el jugador adivina la letra "H"
    Entonces se ve el mensaje "PERDISTE"
    Y se ve la palabra "S O L"
