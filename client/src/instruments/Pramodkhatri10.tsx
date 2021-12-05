import { useEffect } from "react";
import * as Tone from "tone";

import { Instrument, InstrumentProps } from "../Instruments";

const strings = [
  [
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "C#5",
    "D5",
    "D#5",
    "E5",
    "F5",
    "F#5",
    "G5",
    "G#5",
    "A5",
    "A#5",
    "B5",
    "C6",
    "C#6",
    "D6",
  ],
  [
    "B3",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "C#5",
    "D5",
    "D#5",
    "E5",
    "F5",
    "F#5",
    "G5",
    "G#5",
    "A5",
  ],
  [
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "C#5",
    "D5",
    "D#5",
    "E5",
    "F5",
  ],
  [
    "D3",
    "D#3",
    "E3",
    "F3",
    "F#3",
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
  ],
  [
    "A2",
    "A#2",
    "B2",
    "C3",
    "C#3",
    "D3",
    "D#3",
    "E3",
    "F3",
    "F#3",
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
  ],
  [
    "E2",
    "F2",
    "F#2",
    "G2",
    "G#2",
    "A2",
    "A#2",
    "B2",
    "C3",
    "C#3",
    "D3",
    "D#3",
    "E3",
    "F3",
    "F#3",
    "G3",
    "G#3",
    "A3",
    "A#3",
    "B3",
    "C4",
    "C#4",
    "D4",
  ],
];

function Guitar(props: InstrumentProps) {
  const { synth, setSynth } = props;

  useEffect(() => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: "amtriangle9" },
      }).toDestination();
    });
  }, [setSynth]);


  return (
    <div className="guitar bg-bluish-black">
      <div className="guitar-circle" />
      <div className="guitar-strings">
        {strings.map((notes, index) => (
          <div key={`string-${index}`} className="guitar-string">
            {notes.map((note, noteNo) => (
              <div
                key={`string-${index}-note-${noteNo}`}
                className="guitar-note"
                onMouseDown={() => synth?.triggerAttack(note)}
                onMouseUp={() => synth?.triggerRelease("+0.50")}
                title={note}
              >
                <span className="note-name">{note}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export const GuitarInstrument = new Instrument("Pramodkhatri10", Guitar);
