function myFirstApp (name, age){
	name = "Igor";
	age = "20";
	alert("Привет, меня зовут " + name + " и это моя первая программа!");


	function ShowSkills() {
		let skills = ["HTML", "CSS", "Photoshop", "MSword"];
	
	for (let i = 0; i < skills.length; i++) {
		document.write("Я владею " + skills[i] + "<br>");
		}
}
	ShowSkills();

	function checkAge () {
		if (age > 18) {
			alert("Good boys");
		}
		else {
			alert("Bad boys");
		}
	}
checkAge();

let num = prompt('какое число возвести в квадрат ?');
function clacPow (num) {
	console.log('Квадрат числа: ' + num * num)
}
clacPow(num);


}
myFirstApp("Mushketov", 20);