// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';


import { RingVisualizer } from "./visualizers/Rings";
import { GuitarInstrument } from "./instruments/Guitar";
import { BongoInstrument } from "./instruments/Bongo";

import { FluteInstrument } from "./instruments/Flute";
import { SpringVisualizer } from "./visualizers/Springs";
import { XylophoneInstrument } from "./instruments/Xylophone";


import { WallCurtainVisualizer } from './visualizers/WallCurtains';
import { CrossSquareVisualizer } from "./visualizers/CrossSquares";



/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument,
  GuitarInstrument, //Pramodkhatri10
  FluteInstrument, //seelapant13
  BongoInstrument,  //salonimahat instrument
  XylophoneInstrument //rujarajbhandari
]);
const visualizers = List([WaveformVisualizer,
  RingVisualizer,  //Pramodkhatri10
  WallCurtainVisualizer, //salonimahat visualizer
  CrossSquareVisualizer, //rujarajbhandari
  SpringVisualizer //seelapant13
]);


export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
