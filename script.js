
const time_elmt=document.getElementsByClassName("time")

function countdown(){
	const newYear="1 Jan 2022";
	const Remaining= new Date(newYear)- new Date();

	const secRemaining= Remaining/1000;

	const days= Math.floor(secRemaining/3600/24);
	const hours= Math.floor(secRemaining/3600%24);
	const mins= Math.floor(secRemaining/60%60);
	const secs= Math.floor(secRemaining%60);

	// console.log(days,hours,mins,secs);

	time_elmt[0].innerHTML= days;
	time_elmt[1].innerHTML= hours;
	time_elmt[2].innerHTML= mins;
	time_elmt[3].innerHTML= secs;
}

countdown();

setInterval(countdown,1000);
