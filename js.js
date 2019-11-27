// таймер обратного отчета
// В теле функции initializeTimer мы инициализируем наш таймер и пишем логику изменений чисел в случае когда одно из них становится равным нулём:
function initializeTimer() {
	var endDate = new Date(2020,0,1,00,00);
 
	var currentDate = new Date();
	var seconds = (endDate-currentDate) / 1000;
	if (seconds > 0) {
		var minutes = seconds/60; 
		var hours = minutes/60;
		var days = hours / 24;
		minutes = (hours - Math.floor(hours)) * 60; 
		days = Math.floor(days);
		hours =  Math.floor(hours)- days * 24; 
 
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 
		minutes = Math.floor(minutes); 
 
		setTimePage(days, hours,minutes,seconds); 
 
		function secOut() {
		  if (seconds == 0) { 
			  if (minutes == 0) { 
				  if (hours == 0) { 
				  	   if(days == 0){
				  			showMessage(timerId); 
				  	    }
				  		else{
				  			days--; 
				  			hours = 24; 
						    minutes = 59; 
						    seconds = 59; 
				  		}
				  }
				  else {
					  hours--; 
					  minutes = 59; 
					  seconds = 59; 
				  }
			  }
			  else {
				  minutes--; 
				  seconds = 59; 
			  }
		  }
		  else {
			  seconds--; 
		  }
		  setTimePage(days, hours,minutes,seconds); 
		}
		timerId = setInterval(secOut, 1000) 
	}
	else {
		alert("Установленая дата уже прошла");
	}
}

// вызов функции с таймером
window.onload = function()
{
     initializeTimer();
}

// описание функцию setTimePage, которая выводит значения нашего таймера в соответствующие элементы span
function setTimePage(d,h,m,s) { 
	var days = document.getElementById("days");
	var hours = document.getElementById("hours"); 
	var minutes = document.getElementById("minutes"); 
	var seconds = document.getElementById("seconds"); 
 
	days.innerHTML = d;
	hours.innerHTML = h;
	minutes.innerHTML = m;
	seconds.innerHTML = s;
 
}
