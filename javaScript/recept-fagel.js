// Skapar variabeln välkomstfält(<div></div>) och lägger till i body
const välkomstfält = document.createElement('div');
välkomstfält.classList.add('valkomst-falt');
body.appendChild(välkomstfält);

// Skapar variabeln header1(<h1></h1>) och lägger till i välkomstfält
const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.innerHTML = 'Recept fågel';
välkomstfält.appendChild(header1);

// Skapar variabeln receptRäknare(<p></p>) och lägger till i välkomstfält
const receptRäknare = document.createElement('p');
receptRäknare.classList.add('recept-raknare');
body.appendChild(receptRäknare);

// Skapar en lista med recept från 'recept-register.js', sorterar i bokstavsordning, lägger till divReceptnamnOchBild(<div></div>) och lägger till i body
let temporaryArray = [];
let nyReceptArray = [];

for (let key in recept) {
	if (recept[key].kategori === 'Fågel') {
		temporaryArray.push(recept[key].titel);
	}
}

temporaryArray.sort();

for (let i = 0; i < temporaryArray.length; i++) {
	for (let j = 0; j < recept.length; j++) {
		if (temporaryArray[i] === recept[j].titel) {
			nyReceptArray.push(recept[j]);
		}
	}
}

receptRäknare.innerHTML = '-- Antal recept i RECEPT FÅGEL: ' + nyReceptArray.length + ' st. --';

let storBokstavOvanforRecept = document.createElement('p');
storBokstavOvanforRecept.classList.add('stor-bokstav-ovanfor-recept');
storBokstavOvanforRecept.innerHTML = nyReceptArray[0].titel[0];
body.appendChild(storBokstavOvanforRecept);

for (let i = 0; i < nyReceptArray.length; i++) {

	if (i !== 0) {
		if (nyReceptArray[i-1].titel[0] !== nyReceptArray[i].titel[0]) {
			let storBokstavOvanforRecept = document.createElement('p');
			storBokstavOvanforRecept.classList.add('stor-bokstav-ovanfor-recept');
			storBokstavOvanforRecept.innerHTML = nyReceptArray[i].titel[0];
			body.appendChild(storBokstavOvanforRecept);
		}
	}
	
	let divReceptnamnOchBild = document.createElement('div');
	divReceptnamnOchBild.classList.add('recept-namn-och-bild');
	body.appendChild(divReceptnamnOchBild);
	
	// Skapar divForReceptBild(<div></div>) och lägger till i divReceptnamnOchBild
	let divForReceptBild = document.createElement('div');
	divForReceptBild.classList.add('div-receptbild')	
	divReceptnamnOchBild.appendChild(divForReceptBild);
	
	let aForReceptBild = document.createElement('a');
	aForReceptBild.href = nyReceptArray[i].sidPath;
	divForReceptBild.appendChild(aForReceptBild);

	let receptBild = document.createElement('img');
	receptBild.classList.add('receptbild-lista');
	receptBild.src = nyReceptArray[i].imgPath;
	aForReceptBild.appendChild(receptBild);
	let aForReceptNamn = document.createElement('a');
	aForReceptNamn.classList.add('a-receptnamn');
	aForReceptNamn.href = nyReceptArray[i].sidPath;
	divReceptnamnOchBild.appendChild(aForReceptNamn);
	let receptNamn = document.createElement('p');
	receptNamn.classList.add('p-receptnamn');
	receptNamn.innerHTML = nyReceptArray[i].titel;
	aForReceptNamn.appendChild(receptNamn);
}
