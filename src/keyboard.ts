import { Synth } from "./Synth";
import { Voices } from "./Voices";
import { keyMap } from "./keyMap";

const keysDown = new Voices(3);

export function initializeKeyboard(synth: Synth) {
  const keyboard = document.querySelector<HTMLDivElement>("#keyboard")!;
  // sort keys by pitch
  const keys = Object.keys(keyMap).sort(
    (a, b) => keyMap[a].pitch - keyMap[b].pitch
  );

  for (const key of keys) {
    if (key === ",") continue;
    const keyEl = document.createElement("button");
    keyEl.classList.add(
      "key",
      keyMap[key].note.includes("#") ? "black" : "white"
    );
    keyEl.setAttribute("data-note", keyMap[key].note);
    keyEl.setAttribute("data-pitch", keyMap[key].pitch.toString());
    keyEl.addEventListener("mousedown", () => {
      handleClickStart(key, synth);
    });
    keyEl.addEventListener("mouseup", () => {
      handleClickFinish(key, synth);
    });
    keyEl.addEventListener("mouseout", () => {
      handleClickFinish(key, synth);
    });
    keyboard.appendChild(keyEl);
  }

  const waveForm = document.querySelector<HTMLSelectElement>("#waveform")!;
  waveForm.addEventListener("change", (e: Event) => {
    synth.setWavefrom((e.target as any).value as OscillatorType);
  });

  const polyphony = document.querySelector<HTMLInputElement>("#polyphony")!;
  polyphony.addEventListener("change", (e) => {
    keysDown.setMaxVoices((e.target as any).value);
  });

  window.addEventListener("keydown", (e) => handleKeyDown(e.key, synth));
  window.addEventListener("keyup", (e) => handleKeyUp(e.key, synth));
}

function handleKeyDown(key: string, synth: Synth) {
  synth.addVoice(keyMap[key]);
  if (key in keyMap && !keysDown.contains(key)) {
    keysDown.insert(key);

    keysDown.toArray().forEach((k) => {
     // synth.play(keyMap[k as string]);
      synth.play();
    });
  }
}

function handleKeyUp(key: string, synth: Synth) {
  synth.removeVoice(keyMap[key]);
  keysDown.cut(key);
  if (synth) synth.stop(keyMap[key as string]);
}

function handleClickFinish(key: string, synth: Synth) {
  if (keysDown.contains(key)) {
    keysDown.cut(key);
    synth.stop(keyMap[key]);
  }
}

function handleClickStart(key: string, synth: Synth) {
  keysDown.insert(key);
  synth.play(keyMap[key]);
}
