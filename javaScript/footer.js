// Skapar variabeln footer(<footer></footer>) och lägger till i body
const footer = document.createElement('footer');
body.appendChild(footer);

// Skapar variablarna divFörCopyright och divFörMediaLänkar(<div></div>) och lägger till i footer
const divFörCopyright = document.createElement('div');
divFörCopyright.classList.add('copyright-div');
footer.appendChild(divFörCopyright);
const divFörMediaLänkar = document.createElement('div');
divFörMediaLänkar.classList.add('medialinks-div');
footer.appendChild(divFörMediaLänkar);

// Skapar variabeln copyrightikon(<i>) och lägger till i divFörCopyright
const copyrightikon = document.createElement('i');
copyrightikon.classList.add('fa', 'fa-copyright');
divFörCopyright.appendChild(copyrightikon);

// Skapar variabeln copyright(<span></span>) och lägger till i divFörCopyright
const copyright = document.createElement('span');
const år = new Date().getFullYear();
copyright.innerHTML = 'Hemrecept.se' + ' ' + år;
divFörCopyright.appendChild(copyright);

// Skapar variablarna medialänkar(<a></a>) och lägger till i divFörMediaLänkar
const medialänkar1 = document.createElement('a');
medialänkar1.href = 'https://www.instagram.com';
medialänkar1.title = 'länk till instagram';
medialänkar1.target = '_blank';
divFörMediaLänkar.appendChild(medialänkar1);

const medialänkar2 = document.createElement('a');
medialänkar2.href = 'https://www.facebook.com';
medialänkar2.title = 'länk till facebook';
medialänkar2.target = '_blank';
divFörMediaLänkar.appendChild(medialänkar2);

// Skapar variabeln instagram(<i>) och lägger till i medialänkar1
const instagram = document.createElement('i');
instagram.classList.add('fa', 'fa-instagram');
medialänkar1.appendChild(instagram);

// Skapar variabeln facebook(<i>) och lägger till i medialänkar2
const facebook = document.createElement('i');
facebook.classList.add('fa', 'fa-facebook');
medialänkar2.appendChild(facebook);