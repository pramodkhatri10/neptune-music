// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';


import { RingVisualizer } from "./visualizers/Pramodkhatri10";
import { GuitarInstrument } from "./instruments/Pramodkhatri10";
import { BongoInstrument } from "./instruments/salonimahat";

import { FluteInstrument } from "./instruments/seelapant13";
import { SpringVisualizer } from "./visualizers/seelapant13";
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
