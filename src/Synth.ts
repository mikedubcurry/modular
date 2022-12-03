import { Oscillator } from "./Oscillator";
import { Voices } from "./Voices";
import { Key, keyMap } from "./keyMap";

export class Synth {
  public oscilators: { [key: string]: Oscillator };
  private waveform: OscillatorType;
  private voices: Voices<string>;

  constructor(waveform: OscillatorType) {
    this.oscilators = {};
    this.waveform = waveform || "sine";
    this.voices = new Voices(4);
  }

  play() {
    const voices = this.voices.toArray();
    voices.forEach((voice) => {
      if (!this.oscilators[voice]) {
        this.oscilators[voice] = new Oscillator(this.waveform, keyMap[voice].pitch)
        this.oscilators[voice].play()
      }
    });
    //if (!this.oscilators[key.note]) {
    //  this.oscilators[key.note] = new Oscillator(this.waveform, key.pitch);
    //  this.oscilators[key.note].play();
    //}
  }

  stop(key: Key) {
    //this.oscilators[key.note].pause();
    //delete this.oscilators[key.note];
  }

  setWavefrom(waveform: OscillatorType) {
    this.waveform = waveform;
  }

  setVoiceCount(v: number) {
    this.voices.setMaxVoices(v);
  }

  addVoice(key: Key) {
    this.voices.insert(key.note);
  }

  removeVoice(key: Key) {
    this.voices.cut(key.note);

    this.oscilators[key.note].pause();
    delete this.oscilators[key.note]
  }
}
