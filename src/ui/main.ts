import { Ahorcado } from "../domain/Ahorcado";

const root = document.getElementById("app");

function readWordFromQuery(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("word") || "CASA";
}

if (root) {
  root.innerHTML = `
    <div>
      <div data-testid="word">_ _ _ _</div>
      <div data-testid="lives">6</div>
      <input type="text" id="guess-input" />
      <div data-testid="message"></div>
    </div>
  `;

  const palabra = readWordFromQuery();
  const juego = new Ahorcado(palabra);

  const wordEl = root.querySelector("[data-testid=word]") as HTMLElement;
  const livesEl = root.querySelector("[data-testid=lives]") as HTMLElement;
  const messageEl = root.querySelector("[data-testid=message]") as HTMLElement;
  const input = root.querySelector("#guess-input") as HTMLInputElement;

  function render() {
    if (wordEl) wordEl.textContent = juego.palabraEnmascarada();
    if (livesEl) livesEl.textContent = String(juego.vidas());
    if (juego.haGanado()) {
      if (messageEl) messageEl.textContent = "GANASTE";
      input.disabled = true;
    } else if (juego.haPerdido()) {
      if (messageEl) messageEl.textContent = "PERDISTE";
      if (wordEl) wordEl.textContent = juego.palabraRevelada();
      input.disabled = true;
    } else {
      if (messageEl) messageEl.textContent = "";
    }
  }

  // initial render
  render();

  // when user presses Enter, submit the letter to domain and re-render
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const letra = input.value.trim();
      if (letra.length > 0) {
        if (juego.fueIntentada(letra)) {
          if (messageEl) messageEl.textContent = "Ya intentaste esa letra";
        } else {
          juego.adivinar(letra);
          input.value = "";
          render();
        }
      }
    }
  });
}
