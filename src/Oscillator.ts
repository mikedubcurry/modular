export class Oscillator {
  public ctx: AudioContext;
  public frequency: number;
  public waveform: OscillatorType;
  private oscilator: OscillatorNode;

  constructor(waveform: OscillatorType, frequency: number) {
    this.ctx = new AudioContext();
    this.waveform = waveform;
    this.frequency = frequency;

    this.oscilator = new OscillatorNode(this.ctx, {
      frequency: 0,
      type: this.waveform,
    });
    this.oscilator.connect(this.ctx.destination)
    this.oscilator.start(this.ctx.currentTime)
  }

  play() {
    this.oscilator.frequency.setValueAtTime(
      this.frequency,
      this.ctx.currentTime
    );
  }

  pause() {
    this.oscilator.stop(this.ctx.currentTime);
  }

  setFreqency(freq: number) {
    this.frequency = freq
  }
}
