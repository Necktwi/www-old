/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var ModifierChain = famous.modifiers.ModifierChain;

// create the main context
var mainContext = Engine.createContext();

// your app here
var logo = new ImageSurface({
	size: [200, 200],
	content: 'img/FerryFairLogo1.svg',
	classes: ['double-sided']
});

var spinModifierChain = new ModifierChain();

var initialTime = Date.now();

var centerModifier = new Modifier({
	origin: [0.5, 0.5],
	align: [0.5, 0.5]
});

var spinYModifier = new Modifier({
	transform: function () {
		return Transform.rotateY(.001 * (Date.now() - initialTime));
	}
});

var spinXModifier = new Modifier({
	transform: function () {
		return Transform.rotateX(.001 * (Date.now() - initialTime));
	}
});

mainContext.add(centerModifier).add(spinXModifier).add(spinYModifier).add(logo);
