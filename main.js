(function() {

	var beat = document.getElementById("beat");

	var tl = new TimelineMax({paused: false, repeat: -1, delay: 0});

	tl.add(
		TweenMax.to(beat, 1.2, {
			scale: 1.2,
			ease: Elastic.easeOut,
		})
	);

	tl.add(
		TweenMax.fromTo(beat, 0.2, {
			autoAlpha: 0.7
		},{
			autoAlpha: 1.0
		}),
		"-=1.2"
	);

})();
