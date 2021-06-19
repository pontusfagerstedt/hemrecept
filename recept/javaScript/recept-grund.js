// Skapar variabeln receptBehallare(<div></div) och lägger till i body
const receptBehallare = document.createElement('div');
receptBehallare.classList.add('recept-behallare');
body.appendChild(receptBehallare);

// Skapar variabeln bildochbeskrivning(<div></div>) och lägger till i receptBehallare
const bildochbeskrivning = document.createElement('div');
bildochbeskrivning.classList.add('bildochbeskrivning');
receptBehallare.appendChild(bildochbeskrivning);

// Skapar variabeln bildbehallare(<div></div>) och lägger till i bildochbeskrivning
const bildbehallare = document.createElement('div');
bildbehallare.classList.add('bildbehallare');
bildochbeskrivning.appendChild(bildbehallare);

// Skapar variabeln imgPath som kopplar ihop länk till bild för recept
let imgPath = titel.innerHTML.toLowerCase().split(' ');
let character = [];
let sentence;
for (let i = 0; i < imgPath.length; i++) {
	for (let j = 0; j < imgPath[i].length; j++) {
		if (imgPath[i][j] === 'å') {
			character.push('a');
		} else if (imgPath[i][j] === 'ä') {
			character.push('a');
		} else if (imgPath[i][j] === 'ö') {
			character.push('o');
		} else {
			character.push(imgPath[i][j]);
		}
	}
	character.push('-');
}
	character.pop();
	sentence = character.join('');
	imgPath = '../img/receptbilder/' + sentence + '.jpg';

// Skapar variabeln bild(<img>) och lägger till i bildbehallare
const bild = document.createElement('img');
bild.classList.add('bild');
bild.src = imgPath;
bildbehallare.appendChild(bild);

// Skapar variabeln receptbeskrivningsbehallare(<div></div>) och lägger till i bildochbeskrivning
const receptbeskrivningsbehallare = document.createElement('div');
receptbeskrivningsbehallare.classList.add('receptbeskrivningsbehallare');
bildochbeskrivning.appendChild(receptbeskrivningsbehallare);

// Skapar variabeln receptRubrik(<h1></h1>) och lägger till i receptbeskrivningsbehallare
const receptRubrik = document.createElement('h1');
receptRubrik.classList.add('recept-rubrik');
receptRubrik.innerHTML = titel.innerHTML;
receptbeskrivningsbehallare.appendChild(receptRubrik);

// Skapar variabeln tidochkategori(<p></p>) och lägger till i receptbeskrivningsbehallare
const tidochkategori = document.createElement('p');
tidochkategori.classList.add('tidochkategori');
receptbeskrivningsbehallare.appendChild(tidochkategori);

// Skapar variabeln faClockO(<i>) och lägger till i tidochkategori
const faClockO = document.createElement('i');
faClockO.classList.add('fa', 'fa-clock-o');
tidochkategori.appendChild(faClockO);

// Skapar variabeln tid(<span></span) och lägger till i tidochkategori
const tid = document.createElement('span');
tid.classList.add('tid');
//Innehåll skapas via en forloop längst ner på denna sida
tidochkategori.appendChild(tid);

// Skapar variabeln faTag(<i>) och lägger till i tidochkategori
const faTag = document.createElement('i');
faTag.classList.add('fa', 'fa-tag');
tidochkategori.appendChild(faTag);

// Skapar variabeln kott(<span></span>) och lägger till i tidochkategori
const kategori = document.createElement('span');
//Innehåll skapas via en forloop längst ner på denna sida
tidochkategori.appendChild(kategori);

const receptBeskrivning = document.createElement('p');
receptBeskrivning.classList.add('recept-beskrivning');
//Innehåll skapas via en forloop längst ner på denna sida
receptbeskrivningsbehallare.appendChild(receptBeskrivning);

// Skapar variabeln valjPortioner(<div></div>) och lägger till i receptBehallare
const valjPortioner = document.createElement('div');
valjPortioner.classList.add('valj-portioner');
receptBehallare.appendChild(valjPortioner);

// Skapar variabeln divMinus(<div></div>) och lägger till i valjPortioner
const divMinus = document.createElement('div');
valjPortioner.appendChild(divMinus);

// Skapar variabeln iMinus(<i></i>) och lägger till i divMinus
const iMinus = document.createElement('i');
iMinus.classList.add('fa', 'fa-minus');
divMinus.appendChild(iMinus);

// Skapar variabeln divAntalPortioner(<div></div>) och lägger till i valjPortioner
const divAntalPortioner = document.createElement('div');
valjPortioner.appendChild(divAntalPortioner);

// Skapar variabeln spanIdivAntalPortionerNummer(<span></span>) och lägger till i divAntalPortioner
const spanIdivAntalPortionerNummer = document.createElement('span');
spanIdivAntalPortionerNummer.classList.add('antal-portioner');
spanIdivAntalPortionerNummer.innerHTML = 4;
divAntalPortioner.appendChild(spanIdivAntalPortionerNummer);

// Skapar variabeln spanIdivAntalPortionerPortioner(<span></span>) och lägger till i divAntalPortioner
const spanIdivAntalPortionerPortioner = document.createElement('span');
spanIdivAntalPortionerPortioner.innerHTML = ' portioner';
divAntalPortioner.appendChild(spanIdivAntalPortionerPortioner);

// Skapar variabeln divPlus(<div></div>) och lägger till i valjPortioner
const divPlus = document.createElement('div');
valjPortioner.appendChild(divPlus);

// Skapar variabeln iPlus(<i></i>) och lägger till i divPlus
const iPlus = document.createElement('i');
iPlus.classList.add('fa', 'fa-plus');
divPlus.appendChild(iPlus);

// Skapar variabeln ingrediensOchTillagningsBehallare(<div></div>) och lägger till i receptBehallare
const ingrediensOchTillagningsBehallare = document.createElement('div');
ingrediensOchTillagningsBehallare.classList.add('ingrediensochtillagningsbehallare');
receptBehallare.appendChild(ingrediensOchTillagningsBehallare);

// Skapar variabeln ingrediensBehallare(<div></div>) och lägger till i ingrediensOchTillagningsBehallare
const ingrediensBehallare = document.createElement('div');
ingrediensBehallare.classList.add('ingrediensbehallare');
ingrediensOchTillagningsBehallare.appendChild(ingrediensBehallare);

// Skapar variabeln ingredienserUl(<ul></ul>) och lägger till i ingrediensBehallare
const ingredienserUl = document.createElement('ul');
ingredienserUl.classList.add('ingredienser');
ingredienserUl.innerHTML = 'Ingredienser:';
ingrediensBehallare.appendChild(ingredienserUl);

// Skapar variabeln tillagningsBehallare(<div></div>) och lägger till i ingrediensOchTillagningsBehallare
const tillagningsBehallare = document.createElement('div');
tillagningsBehallare.classList.add('tillagningsbehallare');
ingrediensOchTillagningsBehallare.appendChild(tillagningsBehallare);

// Skapar variabeln rubrikTillagning(<p></p>) och lägger till i tillagningsBehallare
const rubrikTillagning = document.createElement('p');
rubrikTillagning.classList.add('rubrik-tillagning');
rubrikTillagning.innerHTML = 'Tillagning:';
tillagningsBehallare.appendChild(rubrikTillagning);

// Skapar variabeln tillagningOl(<ol></ol>) och lägger till i tillagningsBehallare
const tillagningOl = document.createElement('ol');
tillagningOl.classList.add('tillagning');
tillagningsBehallare.appendChild(tillagningOl);





// Lägger till innehåll(tid, kategori, receptbeskrivning, ingredienser och tillagning) som hittas via titel 
for (let i = 0; i < recept.length; i++) {
	if (recept[i].titel === titel.innerHTML) {
		tid.innerHTML = recept[i].tid;
		kategori.innerHTML = recept[i].kategori;
		receptBeskrivning.innerHTML = recept[i].beskrivning;

		// Skapar variabeln ingredienserLi1(<li></li>) och lägger till i ingredienserUl
		const ingredienserLi1 = document.createElement('li');
		ingredienserLi1.classList.add('top-li');
		ingredienserUl.appendChild(ingredienserLi1);
		const span1InLi1 = document.createElement('span');
		span1InLi1.classList.add('mängd');
		span1InLi1.innerHTML = recept[i].ingredienser[0][0];
		ingredienserLi1.appendChild(span1InLi1);
		const span2InLi1 = document.createElement('span');
		span2InLi1.innerHTML = recept[i].ingredienser[0][1];
		ingredienserLi1.appendChild(span2InLi1);

		// Skapar variablarna ingredienserLi2AndUp(<li></li>) och lägger till i ingredienserUl
		for (let j = 1; j < recept[i].ingredienser.length; j++) {
			const ingredienserLi2AndUp = document.createElement('li');
			ingredienserUl.appendChild(ingredienserLi2AndUp);
			let span1InLi2AndUp = document.createElement('span');
			span1InLi2AndUp.classList.add('mängd');
			span1InLi2AndUp.innerHTML = recept[i].ingredienser[j][0];
			ingredienserLi2AndUp.appendChild(span1InLi2AndUp);
			const span2InLi2AndUp = document.createElement('span');
			span2InLi2AndUp.innerHTML = recept[i].ingredienser[j][1];
			ingredienserLi2AndUp.appendChild(span2InLi2AndUp);
		}

		// Skapar variabeln tillagningLi1(<li></li>) och lägger till i tillagningOl
		const tillagningLi1 = document.createElement('li');
		tillagningLi1.classList.add('top-li');
		tillagningLi1.innerHTML = recept[i].tillagning[0];
		tillagningOl.appendChild(tillagningLi1);

		// Skapar variablarna tillagningLi2AndUp(<li></li>) och lägger till i tillagningOl
		for (let k = 1; k < recept[i].tillagning.length; k++) {
			const tillagningLi2AndUp = document.createElement('li');
			tillagningLi2AndUp.innerHTML = recept[i].tillagning[k];
			tillagningOl.appendChild(tillagningLi2AndUp);
		}
		const bytKlickaPortionerMinus = () => {
			if (spanIdivAntalPortionerNummer.innerHTML === '8') {
				spanIdivAntalPortionerNummer.innerHTML = '6';
				for (let l = 0; l < document.getElementsByClassName('mängd').length; l++) {
					document.getElementsByClassName('mängd')[l].innerHTML /= 2;
					document.getElementsByClassName('mängd')[l].innerHTML *= 1.5;
				}
			} else if (spanIdivAntalPortionerNummer.innerHTML === '6') {
				spanIdivAntalPortionerNummer.innerHTML = '4';
				for (let l = 0; l < document.getElementsByClassName('mängd').length; l++) {
					document.getElementsByClassName('mängd')[l].innerHTML /= 1.5;
				}
			} else if (spanIdivAntalPortionerNummer.innerHTML === '4') {
				spanIdivAntalPortionerNummer.innerHTML = '2';
				for (let l = 0; l < document.getElementsByClassName('mängd').length; l++) {
					document.getElementsByClassName('mängd')[l].innerHTML /= 2;
				}
			}
		}

		const bytKlickaPortionerPlus = () => {
			if (spanIdivAntalPortionerNummer.innerHTML === '2') {
				spanIdivAntalPortionerNummer.innerHTML = '4';
				for (let l = 0; l < document.getElementsByClassName('mängd').length; l++) {
					document.getElementsByClassName('mängd')[l].innerHTML *= 2;
				}
			} else if (spanIdivAntalPortionerNummer.innerHTML === '4') {
				spanIdivAntalPortionerNummer.innerHTML = '6';
				for (let l = 0; l < document.getElementsByClassName('mängd').length; l++) {
					document.getElementsByClassName('mängd')[l].innerHTML *= 1.5;
				}
			} else if (spanIdivAntalPortionerNummer.innerHTML === '6') {
				spanIdivAntalPortionerNummer.innerHTML = '8';
				for (let l = 0; l < document.getElementsByClassName('mängd').length; l++) {
					document.getElementsByClassName('mängd')[l].innerHTML /= 1.5;
					document.getElementsByClassName('mängd')[l].innerHTML *= 2;
				}
			}
		}
	iMinus.onclick = bytKlickaPortionerMinus;
	iPlus.onclick = bytKlickaPortionerPlus;

	}
}


