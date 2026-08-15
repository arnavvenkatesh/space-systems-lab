# Space Systems Lab

An open-source, interactive website for learning spacecraft engineering — orbital mechanics, attitude control, CubeSat systems, and mission design — built for students, educators, and anyone curious about how satellites actually work.

**Live site:** https://arnavvenkatesh.com/space-systems-lab/

## What's inside

Four hands-on modules, each pairing a real-time interactive simulator with a written lesson:

- **Module 01 — Orbital Mechanics**: 2D orbit simulator with adjustable altitude and velocity, Hohmann transfer calculator, and real Keplerian physics driving the motion.
- **Module 02 — Attitude Control**: spacecraft rotation simulator covering manual control, PID auto-stabilization, and detumbling with reaction wheels, magnetorquers, and thrusters.
- **Module 03 — CubeSat Systems**: an exploded 3D-style view of a CubeSat, power flow diagrams, comms link budgets, and failure scenario simulations.
- **Module 04 — Mission Design**: a guided, step-by-step capstone that walks you through building a full mission design document from scratch.

Each module has a companion PDF lesson with the formulas, worked examples, and diagrams behind the simulation. There's also a **Beginner's Guide** for anyone starting from zero with same core ideas and no heavy math required.

Complete all four modules and you can generate and download a personal completion certificate.

## Tech stack

Plain HTML5, CSS, and JavaScript: no frameworks, no build step. All simulations run on the HTML5 Canvas with physics computed directly in-browser.

## Running locally

No installation or dependencies needed. Clone the repo and open `index.html` in any browser:

```bash
git clone https://github.com/arnavvenkatesh/space-systems-lab.git
cd space-systems-lab
open index.html
```

(Or just double-click `index.html` — everything runs client-side.)

## Contributing

This project is open source and open to improvements (bug fixes, new modules, clearer explanations, or better simulations are all welcome). Fork it, make your changes, and open a pull request.

## License

MIT License: free to use, modify, and build on.
