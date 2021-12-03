// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const CrossSquareVisualizer = new Visualizer(
  'rujarajbhandari',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 205);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);

    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const initialPoints = 20;
      const movement = width / initialPoints;
      const x = Math.max(i, 1) * movement;
      const y = height / 2;   
      const h = amplitude * -y;
      const color = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

      p5.fill(color);   
      p5.rect(x, y, h, h);
    }
    p5.endShape();
  }
);