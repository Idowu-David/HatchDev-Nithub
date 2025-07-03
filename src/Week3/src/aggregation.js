"use strict";
class Carz {
    constructor(engine) {
        this.engine = engine;
    }
    startCar() {
        console.log('Car Started');
        this.engine.start();
    }
}
class Engine {
    start() {
        console.log('Engine Started');
    }
}
const engine = new Engine();
const car = new Carz(engine);
car.startCar();
