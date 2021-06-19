// Skapar variabeln välkomstfält(<div></div>) och lägger till i body
const välkomstfält = document.createElement('div');
välkomstfält.classList.add('valkomst-falt');
body.appendChild(välkomstfält);

// Skapar variabeln header1(<h1></h1>) och lägger till i välkomstfält
const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.innerHTML = 'Nyheter';
välkomstfält.appendChild(header1);