export interface KeyMap {
  [key: string]: Key;
}

export type Key = { pitch: number; note: string };
export const keyMap: KeyMap = {
  z: { pitch: 130.81, note: "c3" },
  s: { pitch: 138.59, note: "c#3" },
  x: { pitch: 146.83, note: "d3" },
  d: { pitch: 155.56, note: "d#3" },
  c: { pitch: 164.81, note: "e3" },
  v: { pitch: 174.61, note: "f3" },
  g: { pitch: 185.0, note: "f#3" },
  b: { pitch: 196.0, note: "g3" },
  h: { pitch: 207.65, note: "g#3" },
  n: { pitch: 220.0, note: "a3" },
  j: { pitch: 233.08, note: "a#3" },
  m: { pitch: 246.94, note: "b3" },
  ",": { pitch: 261.63, note: "c4" },
  q: { pitch: 261.63, note: "c4" },
  "2": { pitch: 277.18, note: "c#4" },
  w: { pitch: 293.66, note: "d4" },
  "3": { pitch: 311.13, note: "d#4" },
  e: { pitch: 329.63, note: "e4" },
  r: { pitch: 349.23, note: "f4" },
  "5": { pitch: 369.99, note: "f#4" },
  t: { pitch: 392.0, note: "g4" },
  "6": { pitch: 415.3, note: "g#4" },
  y: { pitch: 440.0, note: "a4" },
  7: { pitch: 466.16, note: "a#4" },
  u: { pitch: 493.88, note: "b4" },
  i: { pitch: 523.25, note: "c5" },

  c3: { pitch: 130.81, note: "c3" },
  "c#3": { pitch: 138.59, note: "c#3" },
  d3: { pitch: 146.83, note: "d3" },
  "d#3": { pitch: 155.56, note: "d#3" },
  e3: { pitch: 164.81, note: "e3" },
  f3: { pitch: 174.61, note: "f3" },
  "f#3": { pitch: 185.0, note: "f#3" },
  g3: { pitch: 196.0, note: "g3" },
  "g#3": { pitch: 207.65, note: "g#3" },
  a3: { pitch: 220.0, note: "a3" },
  "a#3": { pitch: 233.08, note: "a#3" },
  b3: { pitch: 246.94, note: "b3" },
  c4: { pitch: 261.63, note: "c4" },
  "c#4": { pitch: 277.18, note: "c#4" },
  d4: { pitch: 293.66, note: "d4" },
  "d#4": { pitch: 311.13, note: "d#4" },
  e4: { pitch: 329.63, note: "e4" },
  f4: { pitch: 349.23, note: "f4" },
  "f#4": { pitch: 369.99, note: "f#4" },
  g4: { pitch: 392.0, note: "g4" },
  "g#4": { pitch: 415.3, note: "g#4" },
  a4: { pitch: 440.0, note: "a4" },
  "a#4": { pitch: 466.16, note: "a#4" },
  b4: { pitch: 493.88, note: "b4" },
  c5: { pitch: 523.25, note: "c5" },
};
