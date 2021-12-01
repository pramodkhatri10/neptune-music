// resources used:
//https://stackoverflow.com/questions/43193341/how-to-generate-random-pastel-or-brighter-color-in-javascript
//https://521dimensions.com/open-source/amplitudejs/docs
//https://www.yworks.com/pages/diagram-visualization-with-typescript
//https://stackoverflow.com/questions/61430300/how-to-get-a-waveform-music-player-with-angular-typescript


// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone"; 

// project imports 
import { Visualizer } from "../Visualizers";

const randomColors = Array(50)
  .fill(0)
  .map(
    () => "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0") // generates random colors
  );

export const WallCurtainVisualizer = new Visualizer(
  "salonimahat",
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 205); 
    p5.strokeWeight(dim * 0.01); 
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    const values = analyzer.getValue(); 
    p5.beginShape();

    for (let i = 0; i < values.length; i++) { 
      const amplitude = values[i] as number;
      const initialPoints = 50;
      const movement = width / initialPoints;
      const x = Math.max(i, 1) * movement;
      const y = 0;
      const h = amplitude * height * 2;

// Keeping the colors on the ideal state
      if (amplitude !== 0) { 
        p5.fill(randomColors[i % initialPoints]);
        p5.rect(x, y, initialPoints, h, 5, 5, 50);
      }
    }
    p5.endShape();
  }
);