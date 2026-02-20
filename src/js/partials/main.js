document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);

	const fadeIn = (element, duration = 0.7, delay = 0) => {
		gsap.to(element, {
			scrollTrigger: {
				trigger: element,
				start: "top 100%",
				end: "bottom 10%"
			},
			opacity: 1,
			duration,
			delay,
			ease: "power2.out"
		});
	}

	const fadeUp = (element, duration = 0.7, delay = 0) => {
		gsap.to(element, {
			scrollTrigger: {
				trigger: element,
				start: "top 100%",
				end: "bottom 10%"
			},
			opacity: 1,
			y: 0,
			duration,
			delay,
			ease: "power2.out"
		});
	}

	const fadeX = (element, duration = 0.7, delay = 0) => {
		gsap.to(element, {
			scrollTrigger: {
				trigger: element,
				start: "top 100%",
				end: "bottom 10%"
			},
			opacity: 1,
			x: 0,
			duration,
			delay,
			ease: "power2.out"
		});
	}

	const fadeY = (element, duration = 0.7, delay = 0) => {
		gsap.to(element, {
			scrollTrigger: {
				trigger: element,
				start: "top 100%",
				end: "bottom 10%"
			},
			opacity: 1,
			y: 0,
			duration,
			delay,
			ease: "power2.out"
		});
	}

	const dashOffset = (element, duration = 0.7, delay = 0) => {
		gsap.to(element, {
			scrollTrigger: {
				trigger: element,
				start: "top 100%",
				end: "bottom 10%"
			},
			strokeDashoffset: 0,
			duration,
			delay,
			ease: "power2.out"
		});
	}

	const arrowMovingX = (element, prop, duration = 0.7, delay = 0) => {
		const distance = getComputedStyle(document.documentElement).getPropertyValue(prop).trim();

		gsap.to(element, {
			x: distance,
			duration,
			delay,
			repeat: -1,
			yoyo: true,
			ease: "power2.out"
		});
	}

	const arrowMovingY = (element, prop, duration = 0.7, delay = 0) => {
		const distance = getComputedStyle(document.documentElement).getPropertyValue(prop).trim();

		gsap.to(element, {
			y: distance,
			duration,
			delay,
			repeat: -1,
			yoyo: true,
			ease: "power2.out"
		});
	}

	const hero = document.querySelector(".hero");
	const advantages = document.querySelector(".advantages");
	const design = document.querySelector(".design");
	const screen = document.querySelector(".screen");
	const control = document.querySelector(".control");
	const sound = document.querySelector(".sound");
	const autonomy = document.querySelector(".autonomy");
	const ai = document.querySelector(".ai");
	const possibility = document.querySelector(".possibility");
	const promo = document.querySelector(".promo");

	if (hero) {
		const title = hero.querySelector(".hero__title");
		const subtitle = hero.querySelector(".hero__subtitle");
		const arrows = hero.querySelector(".hero__arrows");
		const phone = hero.querySelector(".hero__phone");
		const border = hero.querySelector(".hero__border");
		const bottom = hero.querySelector(".hero__bottom");

		fadeUp(title);
		fadeUp(subtitle, 0.7, 0.3);
		fadeUp(arrows, 0.7, 0.6);
		fadeX(phone);
		dashOffset(border, 2, 0.7);
		fadeIn(bottom, 0.7, 1.5);
		arrowMovingX(arrows, "--move-distance", 0.7, 0.7);
	}

	if (advantages) {
		const title = advantages.querySelector(".advantages__title");
		const bgImage = advantages.querySelector(".advantages__bg-image");
		const advantagesColumn = advantages.querySelectorAll(".advantages__col");
		const colorsItem = advantages.querySelectorAll(".colors__item");
		const colorsTitle = advantages.querySelectorAll(".colors__title");

		fadeUp(title);
		fadeIn(bgImage, 0.7, 0.3);
		advantagesColumn.forEach((column) => {
			fadeX(column, 0.7, 0.6);
		});
		colorsItem.forEach((color) => {
			fadeX(color, 0.7, 0.8);
		});
		fadeUp(colorsTitle, 0.7, 1);
	}

	if (design) {
		const title = design.querySelector(".design__title");
		const bgImage = design.querySelector(".design__bg-image");
		const text = design.querySelector(".design__text");
		const border = design.querySelector(".design__border");
		const arrow1 = design.querySelector(".design__arrow-1");
		const arrow2 = design.querySelector(".design__arrow-2");

		fadeUp(title);
		fadeX(bgImage, 0.7, 0.3);
		fadeUp(text, 0.7, 0.6);
		dashOffset(border, 2, 0.7);
		fadeUp(arrow1, 0.7, 1.5);
		fadeUp(arrow2, 0.7, 1.5);
		arrowMovingY(arrow1, "--move-distance-small", 0.7, 1.5);
		arrowMovingY(arrow2, "--move-distance-small", 0.7, 1.5);
	}

	if (screen) {
		const title = screen.querySelector(".screen__title");
		const text = screen.querySelector(".screen__text");
		const banner = screen.querySelector(".screen__banner");
		const arrow1 = screen.querySelector(".screen__arrow-1");
		const arrow2 = screen.querySelector(".screen__arrow-2");
		const characteristics = screen.querySelector(".screen__characteristics-image");

		fadeX(title);
		fadeX(text);
		fadeIn(banner, 0.7, 0.3);
		fadeUp(characteristics, 0.7, 0.6);
		arrowMovingX(arrow1, "--move-distance-small", 0.7, 0.7);
		arrowMovingX(arrow2, "--move-distance-small", 0.7, 0.7);
	}

	if (control) {
		const title = control.querySelector(".control__title");
		const text = control.querySelector(".control__text");
		const border = control.querySelector(".control__border");
		const bgImage = control.querySelector(".control__bg-image");

		fadeUp(title);
		fadeUp(text, 0.7, 0.6);
		dashOffset(border, 2, 0.7);
		fadeX(bgImage, 0.7, 1);
	}

	if (sound) {
		const title = sound.querySelector(".sound__title");
		const banner = sound.querySelector(".sound__banner-image");
		const border = sound.querySelector(".sound__border");
		const arrows = sound.querySelector(".sound__arrow");

		fadeUp(title);
		fadeIn(banner, 0.7, 0.3);
		fadeIn(border, 0.7, 0.6);
		fadeUp(arrows, 0.7, 0.8);
	}

	if (autonomy) {
		const banner = autonomy.querySelector(".autonomy__banner");
		const content = autonomy.querySelector(".autonomy__content");

		fadeIn(banner);
		fadeUp(content, 0.7, 0.3);
	}

	if (ai) {
		const title = ai.querySelector(".ai__title");
		const text = ai.querySelector(".ai__text");
		const logos = ai.querySelector(".ai__logos");

		fadeUp(title);
		fadeUp(text, 0.7, 0.3);
		fadeUp(logos, 0.7, 0.6);
	}

	if (possibility) {
		const title = possibility.querySelector(".possibility__title");
		const list = possibility.querySelector(".possibility__list");
		const banner = possibility.querySelector(".possibility__image");

		fadeUp(title);
		fadeUp(list, 0.7, 0.3);
		fadeX(banner, 0.7, 0.6);
	}

	if (promo) {
		const banner = promo.querySelector(".promo__images");
		const title = promo.querySelector(".promo__title");
		const text = promo.querySelector(".promo__text");
		const button = promo.querySelector(".promo__button");

		fadeIn(banner);
		fadeUp(title);
		fadeUp(text, 0.7, 0.3);
		fadeUp(button, 0.7, 0.6);
	}
});
