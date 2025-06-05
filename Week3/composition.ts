class Heart {
	beat() {
		console.log('Heart is beating');
	}
}

class Human {
	heart: Heart;

	constructor(heart: Heart) {
		this.heart = heart;
	}
}

const person = new Human();

// The Human  creates and owns a heart
