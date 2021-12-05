// 3rd party library imports
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as Tone from "tone";
import { Music32 } from "@carbon/icons-react";

// project imports
import { InstrumentContainer } from "./Instruments";
import { AppState } from "./State";
import { DispatchAction } from "./Reducer";
import { SideNav } from "./SideNav";
import { VisualizerContainer } from "./Visualizers";
import { SongsDetails } from "./SongDetails";

type PanelProps = {
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
};

/** ------------------------------------------------------------------------ **
 * Instrument and visualizer component
 ** ------------------------------------------------------------------------ */

function InstrumentPanel({ state, dispatch }: PanelProps): JSX.Element {
  /**
   * This React component is the top-level for the instrument.
   */
  const instrument = state.get("instrument");

  return (
    <div>
      {instrument && (
        <InstrumentContainer
          state={state}
          dispatch={dispatch}
          instrument={instrument}
        />
      )}
    </div>
  );
}

function VisualizerPanel({ state }: PanelProps): JSX.Element {
  /**
   * This React component is the top-level for the visualizer.
   */
  const visualizer = state.get("visualizer");

  return (
    <div>
      {visualizer && (
        <VisualizerContainer key={visualizer.name} visualizer={visualizer} />
      )}
    </div>
  );
}

function InstrumentAndVisualizer({ state, dispatch }: PanelProps): JSX.Element {
  /**
   * This React component bundles the instrument panel and visualizer panel together.
   */

  return (
    <div
      className="absolute right-0 bottom-0 top-0 flex flex-column bg-bluish-black"
      style={{ left: "16rem" }}
    >
      <InstrumentPanel state={state} dispatch={dispatch} />
      <VisualizerPanel state={state} dispatch={dispatch} />
    </div>
  );
}

function ShowWelcome(): JSX.Element {
  return (
    <div
      className="absolute right-0 bottom-0 top-0 flex flex-column items-center justify-center gold bg-bluish-black"
      style={{ left: "16rem" }}
    >
      <div className="flex items-center flex-column mw6 lh-copy mb4 df">
        <div className="flex items-center justify-center mb2">
          <Music32 />
          <div className="di fw7 ml2 f2">Neptune Music</div>
        </div>
        <div className="tc f4 mb3 white">
          Select an instrument and a visualizer on the left to serve some fresh
          beats.
        </div>
      </div>
    </div>
  );
}

/** ------------------------------------------------------------------------ **
 * Main page component
 ** ------------------------------------------------------------------------ */

export function MainPage({ state, dispatch }: PanelProps): JSX.Element {
  /**
   * This React component bundles together the entire main page.
   */

  const location = useLocation();
  const isWelcome = !state.get("instrument");
  const isDetailPage = location.pathname.includes("/songs/");
  const songNo = location.pathname.replace("/songs/", "");

  useEffect(() => {
    dispatch(new DispatchAction("SET_LOCATION", { location }));
  }, [dispatch, location]);

  return (
    <div
      className="fixed top-0 left-0 h-100 w-100 bg-white"
      onClick={() => Tone.start()}
    >
      <SideNav state={state} dispatch={dispatch} />
      {isDetailPage ? (
        <SongsDetails state={state} songNo={Number(songNo)} />
      ) : isWelcome ? (
        <ShowWelcome />
      ) : (
        <InstrumentAndVisualizer state={state} dispatch={dispatch} />
      )}
    </div>
  );
}
