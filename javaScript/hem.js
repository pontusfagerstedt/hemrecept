// Skapar variabeln välkomstfält(<div></div>) och lägger till i body
const välkomstfält = document.createElement('div');
välkomstfält.classList.add('valkomst-falt');
body.appendChild(välkomstfält);

// Skapar variabeln header1(<h1></h1>) och lägger till i välkomstfält
const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.innerHTML = 'Välkommen till Hemrecept.se';
välkomstfält.appendChild(header1);

// Skapar variabeln hemHeader3(<h3></h3>) och lägger till i hemVälkomstfält
const hemHeader3 = document.createElement('h3');
hemHeader3.classList.add('hem-header3');
hemHeader3.innerHTML = 'Här hittar du recept från allt mellan vardagsmat till festmåltider';
välkomstfält.appendChild(hemHeader3);

// Skapar variabeln main(<main></main>) och lägger till i body
const main = document.createElement('main');
main.classList.add('main-hem');
body.appendChild(main);

// Skapar variabeln vadVillDuÄtaIdagInspiration(<h2></h2>) och lägger till i main
const vadVillDuÄtaIdagInspiration = document.createElement('h2');
vadVillDuÄtaIdagInspiration.classList.add('hem-header2');
vadVillDuÄtaIdagInspiration.innerHTML = 'Vad vill du äta idag?';
main.appendChild(vadVillDuÄtaIdagInspiration);

// Skapar variabeln sektion1(<section></section>) och lägger till i body
const sektion1 = document.createElement('section');
sektion1.classList.add('sektion1');
main.appendChild(sektion1);

// Skapar variabeln hemHeader4Sektion1(<h4></h4>) och lägger till i sektion1
const hemHeader4Sektion1 = document.createElement('h4');
hemHeader4Sektion1.classList.add('hem-header4-sektioner');
hemHeader4Sektion1.innerHTML = 'Kött';
sektion1.appendChild(hemHeader4Sektion1);

// Skapar länkVisaFler1(<a>) och lägger till i hemHeader4Sektion1
const länkVisaFler1 = document.createElement('a');
länkVisaFler1.classList.add('visa-fler');
länkVisaFler1.href = 'recept-kott.html';
hemHeader4Sektion1.appendChild(länkVisaFler1);

// Skapar variabeln textVisaFler1(<span></span>) och lägger till i länkVisaFler1
const textVisaFler1 = document.createElement('span');
textVisaFler1.innerHTML = 'Visa fler';
länkVisaFler1.appendChild(textVisaFler1);

// Skapar variabeln pilVisaFler1(<i>) och lägger till i länkVisaFler1
const pilVisaFler1 = document.createElement('i');
pilVisaFler1.classList.add('fa', 'fa-long-arrow-right');
länkVisaFler1.appendChild(pilVisaFler1);

// Skapar variabeln sektion2(<section></section>) och lägger till i body
const sektion2 = document.createElement('section');
sektion2.classList.add('sektion2');
main.appendChild(sektion2);

// Skapar variabeln hemHeader4Sektion2(<h4></h4>) och lägger till i sektion2
const hemHeader4Sektion2 = document.createElement('h4');
hemHeader4Sektion2.classList.add('hem-header4-sektioner');
hemHeader4Sektion2.innerHTML = 'Fisk';
sektion2.appendChild(hemHeader4Sektion2);

// Skapar länkVisaFler2(<a>) och lägger till i hemHeader4Sektion2
const länkVisaFler2 = document.createElement('a');
länkVisaFler2.classList.add('visa-fler');
länkVisaFler2.href = 'recept-fisk.html';
hemHeader4Sektion2.appendChild(länkVisaFler2);

// Skapar variabeln textVisaFler2(<span></span>) och lägger till i länkVisaFler2
const textVisaFler2 = document.createElement('span');
textVisaFler2.innerHTML = 'Visa fler';
länkVisaFler2.appendChild(textVisaFler2);

// Skapar variabeln pilVisaFler2(<i>) och lägger till i länkVisaFler2
const pilVisaFler2 = document.createElement('i');
pilVisaFler2.classList.add('fa', 'fa-long-arrow-right');
länkVisaFler2.appendChild(pilVisaFler2);

// Skapar variabeln sektion3(<section></section>) och lägger till i body
const sektion3 = document.createElement('section');
sektion3.classList.add('sektion3');
main.appendChild(sektion3);

// Skapar variabeln hemHeader4Sektion3(<h4></h4>) och lägger till i sektion3
const hemHeader4Sektion3 = document.createElement('h4');
hemHeader4Sektion3.classList.add('hem-header4-sektioner');
hemHeader4Sektion3.innerHTML = 'Fågel';
sektion3.appendChild(hemHeader4Sektion3);

// Skapar länkVisaFler3(<a>) och lägger till i hemHeader4Sektion3
const länkVisaFler3 = document.createElement('a');
länkVisaFler3.classList.add('visa-fler');
länkVisaFler3.href = 'recept-fagel.html';
hemHeader4Sektion3.appendChild(länkVisaFler3);

// Skapar variabeln textVisaFler3(<span></span>) och lägger till i länkVisaFler3
const textVisaFler3 = document.createElement('span');
textVisaFler3.innerHTML = 'Visa fler';
länkVisaFler3.appendChild(textVisaFler3);

// Skapar variabeln pilVisaFler3(<i>) och lägger till i länkVisaFler3
const pilVisaFler3 = document.createElement('i');
pilVisaFler3.classList.add('fa', 'fa-long-arrow-right');
länkVisaFler3.appendChild(pilVisaFler3);

// Skapar variabeln sektion4(<section></section>) och lägger till i body
const sektion4 = document.createElement('section');
sektion4.classList.add('sektion4');
main.appendChild(sektion4);

// Skapar variabeln hemHeader4Sektion4(<h4></h4>) och lägger till i sektion4
const hemHeader4Sektion4 = document.createElement('h4');
hemHeader4Sektion4.classList.add('hem-header4-sektioner');
hemHeader4Sektion4.innerHTML = 'Vegetariskt';
sektion4.appendChild(hemHeader4Sektion4);

// Skapar länkVisaFler4(<a>) och lägger till i hemHeader4Sektion4
const länkVisaFler4 = document.createElement('a');
länkVisaFler4.classList.add('visa-fler');
länkVisaFler4.href = 'recept-vegetariskt.html';
hemHeader4Sektion4.appendChild(länkVisaFler4);

// Skapar variabeln textVisaFler4(<span></span>) och lägger till i länkVisaFler4
const textVisaFler4 = document.createElement('span');
textVisaFler4.innerHTML = 'Visa fler';
länkVisaFler4.appendChild(textVisaFler4);

// Skapar variabeln pilVisaFler4(<i>) och lägger till i länkVisaFler4
const pilVisaFler4 = document.createElement('i');
pilVisaFler4.classList.add('fa', 'fa-long-arrow-right');
länkVisaFler4.appendChild(pilVisaFler4);

// Skapar variabeln sektion5(<section></section>) och lägger till i body
const sektion5 = document.createElement('section');
sektion5.classList.add('sektion5');
main.appendChild(sektion5);

// Skapar variabeln hemHeader4Sektion5(<h4></h4>) och lägger till i sektion5
const hemHeader4Sektion5 = document.createElement('h4');
hemHeader4Sektion5.classList.add('hem-header4-sektioner');
hemHeader4Sektion5.innerHTML = 'Tillbehör';
sektion5.appendChild(hemHeader4Sektion5);

// Skapar länkVisaFler5(<a>) och lägger till i hemHeader4Sektion5
const länkVisaFler5 = document.createElement('a');
länkVisaFler5.classList.add('visa-fler');
länkVisaFler5.href = 'recept-tillbehor.html';
hemHeader4Sektion5.appendChild(länkVisaFler5);

// Skapar variabeln textVisaFler5(<span></span>) och lägger till i länkVisaFler5
const textVisaFler5 = document.createElement('span');
textVisaFler5.innerHTML = 'Visa fler';
länkVisaFler5.appendChild(textVisaFler5);

// Skapar variabeln pilVisaFler5(<i>) och lägger till i länkVisaFler5
const pilVisaFler5 = document.createElement('i');
pilVisaFler5.classList.add('fa', 'fa-long-arrow-right');
länkVisaFler5.appendChild(pilVisaFler5);





