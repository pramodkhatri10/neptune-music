//resources used
//https://medium.com/@iminked/build-a-drum-machine-with-javascript-html-and-css-33a53eeb1f73

// 3rd party library imports
import { useEffect } from "react";
import * as Tone from "tone";

// project imports
import { Instrument, InstrumentProps } from "../Instruments";

export function Bongo(props: InstrumentProps) {
  const { synth, setSynth } = props;

  useEffect(() => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();

      return new Tone.MembraneSynth().toDestination();
    });
  }, [setSynth]);

  return (
    <div className="bongo-container bg-bluish-black">
    <svg
      className="bongo bg-bluish-black"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 1000 1000"
      enable-background="new 0 0 1000 1000"
      xmlSpace="preserve"
    >
        <g>
          <g transform="translate(0.000000,511.000000) scale(0.150000,-0.150000)">
            <path
              className="bongo-upper"
              onClick={() => synth?.triggerAttackRelease("C2", "8n")}
              d="M1928.4,2681.3c-414.1-33.8-920.5-155.3-1161.4-279.1c-162.1-81-290.3-193.6-337.6-294.8c-69.8-141.8-49.5-231.8,87.8-369.1c546.9-546.9,2622.1-643.7,3540.4-164.3c393.9,204.8,465.9,459.1,198.1,686.5C3879.8,2584.5,2898.5,2762.3,1928.4,2681.3z"
            />
            <path
              className="bongo-upper"
              onClick={() => synth?.triggerAttackRelease("D2", "8n")}
              d="M7102.8,2681.3c-756.2-72-1348.2-297.1-1485.5-562.7c-74.3-141.8-22.5-315.1,130.5-432.1c767.5-585.2,3128.5-551.4,3731.7,51.8c137.3,137.3,157.5,227.3,87.8,369.1c-76.5,159.8-265.6,283.6-605.4,398.4C8473.5,2672.3,7733,2739.8,7102.8,2681.3z"
            />
            <path
              className="bongo-strip"
              d="M150.3,1672.9c-27-45-60.8-398.4-47.3-495.2c45-294.8,652.7-564.9,1541.7-682c328.6-42.8,1278.4-36,1609.3,13.5C3924.8,606.1,4411,786.2,4618,1011.2l92.3,101.3l-9,252.1c-4.5,137.3-20.3,267.8-31.5,288.1c-20.3,36-31.5,29.3-94.5-54C4273.7,1207,3465.7,973,2410.1,973C1343.2,973,510.5,1216,226.9,1607.7C190.8,1654.9,157.1,1684.2,150.3,1672.9z"
            />
            <path
              className="bongo-strip"
              d="M5315.8,1582.9c-13.5-63-24.7-198.1-24.7-297.1c0-177.8,0-180.1,90-276.8c495.2-535.7,2460-727,3727.2-362.4c432.1,126,754,337.6,787.8,522.2c15.8,83.3-18,456.9-47.3,501.9c-9,13.5-42.8-13.5-78.8-65.3c-303.8-418.6-1224.4-661.7-2374.5-625.7c-1037.6,33.8-1721.8,256.6-2007.6,655l-47.3,67.5L5315.8,1582.9z"
            />
            <path
              className="bongo-lower"
              d="M233.6,516.1c6.8-27,110.3-585.2,229.6-1242.4C704-2061,681.5-1989,915.6-2146.6c272.3-180.1,655-285.8,1170.4-324.1c321.9-24.8,790-4.5,1044.3,45c400.6,76.5,729.2,220.6,898,391.6c96.8,99,99,108,157.5,400.6l58.5,299.3h754h754l58.5-299.3c58.5-292.6,60.8-301.6,157.6-400.6c114.8-117,373.6-256.6,594.2-319.6c650.5-189.1,1627.3-166.6,2203.5,49.5c229.6,87.8,445.6,229.6,519.9,342.1c18,29.3,128.3,573.9,249.8,1240.1c117,652.7,220.6,1210.9,227.3,1237.9c9,45-2.3,42.8-166.6-38.3c-533.4-265.6-1224.4-375.9-2196.7-353.4c-819.3,18-1350.4,121.5-1802.9,346.6c-83.3,42.8-157.5,72-164.3,65.3c-6.7-6.8,13.5-157.6,47.3-337.6c31.5-180.1,58.5-335.4,58.5-348.9c0-18-171-24.8-540.2-24.8c-369.1,0-540.2,6.7-540.2,24.8c0,13.5,27,168.8,58.5,348.9c33.8,180.1,54,330.8,47.3,337.6c-6.8,6.7-81-22.5-164.3-65.3c-461.4-231.8-1143.4-353.4-1980.6-353.4c-882.3,0-1541.7,117-2027.9,362.4C233.6,558.8,224.6,561.1,233.6,516.1z M5635.4-663.3c20.3-110.3,42.8-240.8,51.8-292.6l15.8-96.8h-704.5h-704.5l15.7,96.8c9,51.8,31.5,182.3,51.8,292.6l36,195.8h600.9h600.9L5635.4-663.3z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export const BongoInstrument = new Instrument("Bongo", Bongo);