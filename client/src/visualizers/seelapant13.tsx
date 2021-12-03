// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";

const randomColors = Array(50)
  .fill(0)
  .map(
    () => "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
  );
const randomInt = (max: number) => Math.floor(Math.random() * max) + 1;

export const SpringVisualizer = new Visualizer(
  "seelapant13",
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
      const x = i * 150;
      const y = height / 2;
      const h = height / 2 + amplitude * height;
      p5.stroke(randomColors[i % 20]);
      if (amplitude) {
        p5.point(randomInt(width), randomInt(height));
        p5.ellipse(x, y, h, h);
      }
    }
    p5.endShape();
  }
);
