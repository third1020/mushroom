import React from "react";
import { bindAll } from "lodash";
import "./CountUnlockDrag.css";

const colorPalette = {
  bg: { r: 0, g: 6, b: 25 },
  matter: [{ r: 255, g: 255, b: 255 }]
};

const config = {
  particleNumber: 100,
  maxParticleSize: 2,
  maxSpeed: 10,
  colorVariation: 50
};


class CountUnlockDrag extends React.Component {
  constructor() {
    super();
    bindAll(this, "canvasRef", "onCanvasClick", "onFrame");
  }

  componentDidMount() {
    this.startAnimation();
  }

  onCanvasClick(e) {
    this.cleanUpParticles();
    this.initParticles(config.particleNumber, e.clientX, e.clientY);
  }

  onFrame() {
    this.drawBg(this.ctxRef, colorPalette.bg);
    this.particles.map(p => this.updateParticleModel(p));
    this.particles.forEach(p => {
      this.drawParticle(p.x, p.y, p.r, p.c);
    });
    requestAnimationFrame(this.onFrame);
  }

  startAnimation() {
    this.ctxRef = this.canvas.getContext("2d");
    this.particles = [];
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.drawBg(this.ctxRef, colorPalette.bg);
    this.onFrame();
    this.initParticles(config.particleNumber);
  }

  initParticles(numParticles, x, y) {
    for (let i = 0; i < numParticles; i++) {
      this.particles.push(this.newParticle(x, y));
    }
    this.particles.forEach(p => {
      this.drawParticle(p.x, p.y, p.r, p.c);
    });
  }

  drawParticle(x, y, r, c) {
    this.ctxRef.beginPath();
    this.ctxRef.fillStyle = c;
    this.ctxRef.arc(x, y, r, 0, 5 * Math.PI, false);
    this.ctxRef.fill();
    this.ctxRef.closePath();
  }

  updateParticleModel(p) {
    const a = 180 - (p.d + 90); // find the 3rd angle
    p.d > 0 && p.d < 180
      ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
      : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
    p.d > 90 && p.d < 270
      ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
      : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
    return p;
  }

  newParticle(x, y) {
    return {
      x: x || Math.round(Math.random() * this.canvas.width),
      y: y || Math.round(Math.random() * this.canvas.height),
      r: Math.ceil(Math.random() * config.maxParticleSize),
      c: this.colorVariation(
        colorPalette.matter[
          Math.floor(Math.random() * colorPalette.matter.length)
        ],
        true
      ),
      s: Math.ceil(Math.random() * config.maxSpeed) ** 0.9,
      d: Math.round(Math.random() * 360)
    };
  }

  colorVariation(color, returnString) {
    const r = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.r
    );
    const g = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.g
    );
    const b = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.b
    );
    const a = Math.random() + 0.5;
    if (returnString) {
      return `rgba(${r},${g},${b},${a})`;
    }
    return { r, g, b, a };
  }

  drawBg(ctx, color) {
    ctx.fillStyle = `rgb(${color.r},${color.g},${color.b})`;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  cleanUpParticles() {
    this.particles.filter(p => p.x > -100 && p.y > -100);
  }

  canvasRef(ref) {
    this.canvas = ref;
  }

  render() {
    return (
      <React.Fragment>

        <div id="large-header" class="large-header">
          <canvas id="demo-canvas" ref={this.canvasRef} onClick={this.onCanvasClick}></canvas>
            <h1 class="main-title">Connect <span class="thin">Three</span></h1>
        </div>
        <div className="bgimage" />
      </React.Fragment>
    );
  }
}

export default CountUnlockDrag;
