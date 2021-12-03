// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';


import { RingVisualizer } from "./visualizers/Pramodkhatri10";
import { GuitarInstrument } from "./instruments/Pramodkhatri10";
<<<<<<< HEAD
import { BongoInstrument } from "./instruments/salonimahat";

=======
>>>>>>> 7600d76af8f30bca2acf08e1f445d2c1e223e87c
import { FluteInstrument } from "./instruments/seelapant13";
import { XylophoneInstrument } from "./instruments/rujarajbhandari";


import { WallCurtainVisualizer } from './visualizers/salonimahat';
import { CrossSquareVisualizer } from "./visualizers/rujarajbhandari";



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
<<<<<<< HEAD
  BongoInstrument  //salonimahat instrument
=======
  XylophoneInstrument //rujarajbhandari
>>>>>>> 7600d76af8f30bca2acf08e1f445d2c1e223e87c
]);
const visualizers = List([WaveformVisualizer,
  RingVisualizer,  //Pramodkhatri10
  WallCurtainVisualizer, //salonimahat visualizer
  CrossSquareVisualizer //rujarajbhandari
]);


export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
