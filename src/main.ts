import { initializeKeyboard } from "./keyboard";
import "./main.css";
import { Synth } from "./Synth";

(function () {
  let synth = new Synth(
    document.querySelector<HTMLSelectElement>("#waveform")!
      .value as OscillatorType
  );
  initializeKeyboard(synth);
})();
