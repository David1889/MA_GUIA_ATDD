export class Ahorcado {
  private palabra: string;
  private intentos: number;
  private letrasAdivinadas: Set<string>;

  constructor(palabra: string) {
    this.palabra = palabra;
    this.intentos = 6;
    this.letrasAdivinadas = new Set();
  }

  adivinar(letra: string): void {
    this.letrasAdivinadas.add(letra.toUpperCase());
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((caracter) =>
        this.letrasAdivinadas.has(caracter.toUpperCase()) ? caracter : "_"
      )
      .join(" ");
  }

  vidas(): number {
    return this.intentos;
  }
}
