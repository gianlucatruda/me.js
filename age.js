(function() {

	var birthDate = new Date("Jan 6, 1996 19:00:00").getTime();
			var x = setInterval(function(){
				var now = new Date().getTime();

				var distance = now - birthDate

				var years = distance / (365.25*24*60*60*1000)
				yearsOut = years.toFixed(10)

				document.getElementById("age").innerHTML = yearsOut
			}, 50);

})();
