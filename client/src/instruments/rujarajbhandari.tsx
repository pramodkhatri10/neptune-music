import { useEffect } from "react";
import { Synth } from "tone";
import { Instrument, InstrumentProps } from "../Instruments";

const notes = ["C6", "D6", "E6", "F6", "G6", "A6", "B6", "C7", "D7", "E7"];

export function Xylophone(props: InstrumentProps) {
  const { synth, setSynth } = props;

  useEffect(() => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();

      return new Synth({
        oscillator: {
          type: "fatsquare1",
        },
        envelope: {
          attack: 0.005,
          decay: 0.2,
          sustain: 0.4,
          release: 1.4,
        },
      }).toDestination();
    });
  }, [setSynth]);

  return (
    <div className="bg-bluish-black">
    <div className="xylophone">
      {notes.map((note) => (
        <div
          className="xylophone-note bg-bluish-black"
          onMouseDown={() => synth?.triggerAttack(`${note}`)}
          onMouseUp={() => synth?.triggerRelease("+0.25")}
        >
          {note}
        </div> 
      ))}
    </div>
    </div>
  );
}

export const XylophoneInstrument = new Instrument("rujarajbhandari", Xylophone); 
