import { Synth, SynthOptions } from "tone";
import { useEffect } from "react";

import { Instrument, InstrumentProps } from "../Instruments";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      inkscapePerspective: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      sodipodiNamedview: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const svgAttributeElements = {
  "xmlns:dc": "http://purl.org/dc/elements/1.1/",
  "xmlns:cc": "http://creativecommons.org/ns#",
  "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "xmlns:svg": "http://www.w3.org/2000/svg",
  "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
  "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
  "inkscape:version": "0.47 r22583",
  "sodipodi:docname": "quena.png",
};

const inkscapeAttributes = {
  "sodipodi:type": "inkscape:persp3d",
  "inkscape:vp_x": "0 : 0.5 : 1",
  "inkscape:vp_y": "0 : 1000 : 0",
  "inkscape:vp_z": "1 : 0.5 : 1",
  "inkscape:persp3d-origin": "0.5 : 0.33333333 : 1",
};

const sodipodiNamedviewAttributes = {
  pagecolor: "#ffffff",
  bordercolor: "#666666",
  borderopacity: "1",
  objecttolerance: "10",
  gridtolerance: "10",
  guidetolerance: "10",
  "inkscape:pageopacity": "0",
  "inkscape:pageshadow": "2",
  "inkscape:window-width": "1280",
  "inkscape:window-height": "968",
  showgrid: "false",
  "inkscape:zoom": "2.441236",
  "inkscape:cx": "51.88957",
  "inkscape:cy": "88.412676",
  "inkscape:window-x": "-4",
  "inkscape:window-y": "-4",
  "inkscape:window-maximized": "1",
  "inkscape:current-layer": "svg2",
};

const pathAttrs = (
  nodeTypes: "csscc" | "ccccc" | "cscacs" | "css" | "ccsccccc" | "ccc"
) => ({
  "sodipodi:nodetypes": nodeTypes,
});

const pathEvents = (note: string, synth?: Synth<SynthOptions>) => ({
  onMouseDown: () => synth?.triggerAttack(note),
  onMouseUp: () => synth?.triggerRelease("+0.50"),
});

function Flute(props: InstrumentProps) {
  const { synth, setSynth } = props;

  useEffect(() => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();

      return new Synth({
        oscillator: {
          type: "sine",
        },
        envelope: {
          attack: 0.7,
          decay: 0.9,
          sustain: 1,
          release: 0.8,
        },
      }).toDestination();
    });
  }, [setSynth]);

  return (
    <div className="flute-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="514.99969"
        height="348.7648"
        className="flute-svg"
        {...svgAttributeElements}
      >
        <defs id="defs6">
          <inkscapePerspective id="perspective10" {...inkscapeAttributes} />
          <inkscapePerspective id="perspective3618" {...inkscapeAttributes} />
          <inkscapePerspective id="perspective3618-0" {...inkscapeAttributes} />
          <inkscapePerspective id="perspective3618-8" {...inkscapeAttributes} />
          <inkscapePerspective id="perspective3618-1" {...inkscapeAttributes} />
          <inkscapePerspective id="perspective3685" {...inkscapeAttributes} />
          <inkscapePerspective id="perspective3725" {...inkscapeAttributes} />
          <inkscapePerspective id="perspective3747" {...inkscapeAttributes} />
        </defs>
        <sodipodiNamedview id="namedview4" {...sodipodiNamedviewAttributes} />
        <path
          style={{
            fill: "#b77439",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: "1px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="m 488.71108,8.0013628 c 0,0 3.31465,-7.57650616 6.65666,-7.50079919 16.88663,0.38253441 21.10561,15.72049539 18.3587,25.73543939 -0.82523,3.008684 -8.88824,2.932203 -8.88824,2.932203 L 488.71108,8.0013628 z"
          id="path3707"
          {...pathAttrs("csscc")}
        />
        <path
          style={{
            fill: "#b77439",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: "1px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="M 2.6067309,282.62053 40.725375,347.31227 507.21962,32.676723 C 515.25991,22.813701 503.25358,-2.1577041 486.22664,5.2044252 L 2.6067309,282.62053 z"
          id="path2818"
          {...pathAttrs("ccccc")}
        />
        <path
          style={{
            fill: "#44211d",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: "1px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="m 2.6067309,282.62053 c -10.3445319,6.06612 19.8340161,69.72708 37.7800701,65.437 5.958124,-1.42431 4.400522,-9.06173 2.461542,-14.42044 0,0 21.38882,-18.45848 15.862309,-27.47433 -4.576032,-7.46526 -26.232099,1.3815 -26.232099,1.3815 C 22.994669,296.8694 12.492945,276.82317 2.6067309,282.62053 z"
          id="path2820"
          {...pathAttrs("cscacs")}
        />
        <path
          style={{ fill: "#be381f", fillOpacity: 1, stroke: "none" }}
          d="m 124.481,213.28181 8.83144,-5.06918 c 27.28444,2.43301 38.32249,23.65104 34.65585,52.67386 l -7.28787,4.92042 c 6.84484,-23.47289 -5.9769,-51.65731 -36.19942,-52.5251 z"
          id="path2822"
          {...pathAttrs("ccccc")}
        />
        <path
          style={{ fill: "#d6c736", fillOpacity: 1, stroke: "none" }}
          d="m 136.0145,206.66449 c 24.93701,-1.28267 41.47098,24.21296 34.08654,52.79006 l 7.79436,-5.26026 c 6.91148,-20.85062 -5.99111,-53.24306 -33.9189,-52.09607 l -7.962,4.56627 z"
          id="path2824"
          {...pathAttrs("ccccc")}
        />
        <path
          style={{ fill: "#3b552e", fillOpacity: 1, stroke: "none" }}
          d="m 120.23047,215.71044 c 23.83054,-0.10729 44.11106,21.5339 36.51484,52.75067 l -1.7954,1.32336 c 4.51711,-31.41681 -10.17931,-48.59975 -36.38649,-53.10864 l 1.66705,-0.96539 z"
          id="path2828"
          {...pathAttrs("ccccc")}
        />

        <g
          id="g3599"
          className="flute-note"
          transform="matrix(0.976669, 0.0418926, 0.00296543, 1.02402,-25.78311, -0.1683)"
          {...pathEvents("Bb4", synth)}
        >
          <title>Bb</title>
          <path
            {...pathAttrs("css")}
            id="path2832"
            d="m 367.24759,95.120911 c 7.30104,-1.527015 12.62316,19.503029 6.73849,20.733809 -5.8177,1.21677 -14.14641,-19.18444 -6.73849,-20.733809 z"
            style={{ fill: "#20171a", fillOpacity: 1, stroke: "none" }}
          />
          <path
            {...pathAttrs("css")}
            id="path2830"
            d="m 366.63206,97.485861 c -5.89016,1.970925 1.97811,18.796249 6.5765,16.522249 3.63453,-1.79734 -1.32102,-18.280804 -6.5765,-16.522249 z"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
          />
        </g>
        <g
          id="g3606"
          className="flute-note"
          transform="matrix(0.97666941,0.04189263,0.00296543,1.0240151,3.7831053,-17.16829)"
          {...pathEvents("C4", synth)}
        >
          <title>C</title>
          <path
            {...pathAttrs("css")}
            id="path2832"
            d="m 367.24759,95.120911 c 7.30104,-1.527015 12.62316,19.503029 6.73849,20.733809 -5.8177,1.21677 -14.14641,-19.18444 -6.73849,-20.733809 z"
            style={{ fill: "#20171a", fillOpacity: 1, stroke: "none" }}
          />
          <path
            {...pathAttrs("css")}
            id="path2830"
            d="m 366.63206,97.485861 c -5.89016,1.970925 1.97811,18.796249 6.5765,16.522249 3.63453,-1.79734 -1.32102,-18.280804 -6.5765,-16.522249 z"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
          />
        </g>
        <g
          className="flute-note"
          transform="matrix(0.97666941,0.04189263,0.00296543,1.0240151,58.549997,-51.027502)"
          id="g3606-1"
          {...pathEvents("Eb4", synth)}
        >
          <title>Eb</title>

          <path
            {...pathAttrs("css")}
            id="path2832-7"
            d="m 367.24759,95.120911 c 7.30104,-1.527015 12.62316,19.503029 6.73849,20.733809 -5.8177,1.21677 -14.14641,-19.18444 -6.73849,-20.733809 z"
            style={{ fill: "#20171a", fillOpacity: 1, stroke: "none" }}
          />
          <path
            {...pathAttrs("css")}
            id="path2830-4"
            d="m 366.63206,97.485861 c -5.89016,1.970925 1.97811,18.796249 6.5765,16.522249 3.63453,-1.79734 -1.32102,-18.280804 -6.5765,-16.522249 z"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
          />
        </g>
        <g
          className="flute-note"
          transform="matrix(0.97666941,0.04189263,0.00296543,1.0240151,33.283513,-36.189445)"
          id="g3606-9"
          {...pathEvents("D4", synth)}
        >
          <title>D</title>

          <path
            {...pathAttrs("css")}
            id="path2832-4"
            d="m 367.24759,95.120911 c 7.30104,-1.527015 12.62316,19.503029 6.73849,20.733809 -5.8177,1.21677 -14.14641,-19.18444 -6.73849,-20.733809 z"
            style={{ fill: "#20171a", fillOpacity: 1, stroke: "none" }}
          />
          <path
            {...pathAttrs("css")}
            id="path2830-8"
            d="m 366.63206,97.485861 c -5.89016,1.970925 1.97811,18.796249 6.5765,16.522249 3.63453,-1.79734 -1.32102,-18.280804 -6.5765,-16.522249 z"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
          />
        </g>
        <g
          className="flute-note"
          transform="matrix(0.97666941,0.04189263,0.00296543,1.0240151,99.978498,-78.307819)"
          id="g3606-2"
          {...pathEvents("G4", synth)}
        >
          <title>G</title>

          <path
            {...pathAttrs("css")}
            id="path2832-45"
            d="m 367.24759,95.120911 c 7.30104,-1.527015 12.62316,19.503029 6.73849,20.733809 -5.8177,1.21677 -14.14641,-19.18444 -6.73849,-20.733809 z"
            style={{ fill: "#20171a", fillOpacity: 1, stroke: "none" }}
          />
          <path
            {...pathAttrs("css")}
            id="path2830-5"
            d="m 366.63206,97.485861 c -5.89016,1.970925 1.97811,18.796249 6.5765,16.522249 3.63453,-1.79734 -1.32102,-18.280804 -6.5765,-16.522249 z"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
          />
        </g>
        <g
          className="flute-note"
          transform="matrix(0.6181793,0.02651578,0.00213668,0.73782677,216.14884,-32.594901)"
          id="g3606-7"
          {...pathEvents("F4", synth)}
        >
          <title>F</title>
          <path
            {...pathAttrs("css")}
            id="path2832-1"
            d="m 367.24759,95.120911 c 7.30104,-1.527015 12.62316,19.503029 6.73849,20.733809 -5.8177,1.21677 -14.14641,-19.18444 -6.73849,-20.733809 z"
            style={{ fill: "#20171a", fillOpacity: 1, stroke: "none" }}
          />
          <path
            {...pathAttrs("css")}
            id="path2830-1"
            d="m 366.63206,97.485861 c -5.89016,1.970925 1.97811,18.796249 6.5765,16.522249 3.63453,-1.79734 -1.32102,-18.280804 -6.5765,-16.522249 z"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
          />
        </g>
        <g
          className="flute-note"
          transform="matrix(0.6181793,0.02651578,0.00213668,0.73782677,252.24274,-55.725537)"
          id="g3606-7-5"
          {...pathEvents("A4", synth)}
        >
          <title>A</title>
          <path
            {...pathAttrs("css")}
            id="path2832-1-2"
            d="m 367.24759,95.120911 c 7.30104,-1.527015 12.62316,19.503029 6.73849,20.733809 -5.8177,1.21677 -14.14641,-19.18444 -6.73849,-20.733809 z"
            style={{ fill: "#20171a", fillOpacity: 1, stroke: "none" }}
          />
          <path
            {...pathAttrs("css")}
            id="path2830-1-7"
            d="m 366.63206,97.485861 c -5.89016,1.970925 1.97811,18.796249 6.5765,16.522249 3.63453,-1.79734 -1.32102,-18.280804 -6.5765,-16.522249 z"
            style={{ fill: "#000000", fillOpacity: 1, stroke: "none" }}
          />
        </g>

        <path
          style={{ fill: "#3b552e", fillOpacity: 1, stroke: "none" }}
          d="m 150.98368,198.07213 c 22.1122,-3.49712 41.046,29.66429 33.32734,51.79755 l -2.57665,1.72961 c 8.63472,-26.67939 -14.792,-53.99582 -33.15993,-52.13989 l 2.40924,-1.38727 z"
          id="path2828-6"
          {...pathAttrs("ccccc")}
        />
        <path
          style={{ fill: "#be381f", fillOpacity: 1, stroke: "none" }}
          d="m 270.03814,129.77798 c 25.9399,4.31102 30.27724,19.86294 29.30575,42.50536 l 5.05713,-3.41347 c 0.78419,-20.11426 -3.16376,-36.49876 -29.47516,-41.89732 l -4.88772,2.80543 z"
          id="path3711"
          {...pathAttrs("ccccc")}
        />
        <path
          style={{ fill: "#d6c736", fillOpacity: 1, stroke: "none" }}
          d="m 306.77026,167.2791 c 2.03284,-25.93987 -8.85634,-38.65467 -29.09904,-41.87242 l 5.11804,-3.0621 c 25.96058,3.68559 30.60856,21.65113 28.78119,41.69842 l -4.80019,3.2361 z"
          id="path3713"
          {...pathAttrs("ccccc")}
        />
        <path
          style={{ fill: "#bb977d", fillOpacity: 1, stroke: "none" }}
          d="m 6.3685485,291.33099 c -2.2171771,13.20182 12.6964655,38.16869 24.1030525,45.09603 0,0 25.463054,-16.03726 16.587047,-28.50899 -1.258438,-1.76824 -3.827745,-3.23607 -4.141798,-3.13774 -4.656313,0.99636 -9.98661,3.13245 -10.557731,3.34708 -0.537347,-0.48005 -2.060382,-2.37853 -2.933267,-3.46319 -5.781044,1.19985 -7.128866,2.63941 -7.128866,2.63941 -4.073473,-5.85711 -10.90828,-14.65476 -15.9284375,-15.9726 z"
          id="path3715"
          {...pathAttrs("ccsccccc")}
        />
        <path
          style={{ fill: "#3b552e", fillOpacity: 1, stroke: "none" }}
          d="m 266.98418,131.54013 c 21.78765,3.78548 32.28346,18.00574 29.43724,42.72251 l -1.71958,1.25806 c -0.23289,-29.66682 -9.10203,-38.0345 -29.80921,-42.79339 l 2.09155,-1.18718 z"
          id="path2828-1"
          {...pathAttrs("ccccc")}
        />
        <path
          style={{ fill: "#ffffff", fillOpacity: 0.27976194, stroke: "none" }}
          d="M 49.650374,276.81732 C 198.25541,193.10048 348.60644,111.78438 486.6154,13.49795 335.20799,95.518677 193.11999,186.8588 49.650374,276.81732 z"
          id="path3705"
          {...pathAttrs("ccc")}
        />
      </svg>
    </div>
  );
}

export const FluteInstrument = new Instrument("seelapant13", Flute); 
