// Skapar variabeln headerElement(<header></header>) och lägger till i body
const headerElement = document.createElement('header');
headerElement.classList.add('header-element');
body.appendChild(headerElement);


// Skapar variabeln aForLogo(<a></a>) och lägger till i headerElement
const aForLogo = document.createElement('a');
aForLogo.href = '../index.html';
aForLogo.classList.add('a-for-logo');
headerElement.appendChild(aForLogo);

// Skapar variabeln logoImageDesktop(<img>) och lägger till i aForLogo
const logoImageDesktop = document.createElement('img');
logoImageDesktop.classList.add('desktop-logo');
logoImageDesktop.src = '../img/logo.png';
logoImageDesktop.title = 'Bild på logotype Hemrecept';
aForLogo.appendChild(logoImageDesktop);

// Skapar variabeln navElement(<nav></nav>) och lägger till i headerElement
const navElement = document.createElement('nav');
navElement.classList.add('nav-element');
headerElement.appendChild(navElement);

// Skapar variablarna iconMobilMeny(<i>) och lägger till i navElement
const iconMobilMenyBars = document.createElement('i');
iconMobilMenyBars.classList.add('fa', 'fa-bars', 'fa-2x');
navElement.appendChild(iconMobilMenyBars);

const iconMobilMenyX = document.createElement('i');
iconMobilMenyX.classList.add('fa', 'fa-times', 'fa-2x');
navElement.appendChild(iconMobilMenyX);

// Skapar variabeln mobileNavUnorderedList(<ul></ul>) och lägger till i navElement
const mobileNavUnorderedList = document.createElement('ul');
mobileNavUnorderedList.classList.add('mobile-nav-unordered-list');
navElement.appendChild(mobileNavUnorderedList);

// Skapar variablerna mobileNavListItem(<li></li>) och lägger till i mobilepNavUnorderedList
const mobileNavListItem1 = document.createElement('li');
mobileNavUnorderedList.appendChild(mobileNavListItem1);

const mobileNavListItem2 = document.createElement('li');
mobileNavUnorderedList.appendChild(mobileNavListItem2);

const mobileNavListItem3 = document.createElement('li');
mobileNavUnorderedList.appendChild(mobileNavListItem3);

const mobileNavListItem4 = document.createElement('li');
mobileNavUnorderedList.appendChild(mobileNavListItem4);

const mobileNavListItem5 = document.createElement('li');
mobileNavUnorderedList.appendChild(mobileNavListItem5);

// Skapar variabeln mobileNavAForListItem1(<a></a>) och lägger till i mobileNavListItem1
const mobileNavAForListItem1 = document.createElement('a');
mobileNavAForListItem1.innerHTML = 'Hem';
mobileNavAForListItem1.href = '../index.html';
mobileNavAForListItem1.title = 'Länk till Hem';
mobileNavListItem1.appendChild(mobileNavAForListItem1);

// Skapar variabeln mobileNavAForListItem2(<a></a>) och lägger till i mobileNavListItem2
const mobileNavAForListItem2 = document.createElement('a');
mobileNavAForListItem2.innerHTML = 'Recept';
mobileNavAForListItem2.title = 'Klicka för att välja kategori';
mobileNavAForListItem2.classList.add('mobile-li-recept');
mobileNavListItem2.appendChild(mobileNavAForListItem2);

// Skapar mobileNavListItemArrow(<i>) och lägger till i mobileNavListItem2
const mobileNavListItemArrow = document.createElement('i');
mobileNavListItemArrow.classList.add('fa', 'fa-caret-right');
mobileNavListItem2.appendChild(mobileNavListItemArrow);

// Skapar varibaeln mobileNavUnorderedListInUnorderedList(<ul></ul>) och lägger till i mobileNavListItem2
const mobileNavUnorderedListInUnorderedList = document.createElement('ul');
mobileNavUnorderedListInUnorderedList.classList.add('mobile-nav-unordered-list-in-undordered-list');
mobileNavListItem2.appendChild(mobileNavUnorderedListInUnorderedList);

// Skapar variablarna mobileNavListItemInUnorderedListInUnorderedList(<li></li>) och lägger till i mobileNavUnorderedListInUnorderedList
const mobileNavListItemInUnorderedListInUnorderedList1 = document.createElement('li');
mobileNavUnorderedListInUnorderedList.appendChild(mobileNavListItemInUnorderedListInUnorderedList1);

const mobileNavListItemInUnorderedListInUnorderedList2 = document.createElement('li');
mobileNavUnorderedListInUnorderedList.appendChild(mobileNavListItemInUnorderedListInUnorderedList2);

const mobileNavListItemInUnorderedListInUnorderedList3 = document.createElement('li');
mobileNavUnorderedListInUnorderedList.appendChild(mobileNavListItemInUnorderedListInUnorderedList3);

const mobileNavListItemInUnorderedListInUnorderedList4 = document.createElement('li');
mobileNavUnorderedListInUnorderedList.appendChild(mobileNavListItemInUnorderedListInUnorderedList4);

const mobileNavListItemInUnorderedListInUnorderedList5 = document.createElement('li');
mobileNavUnorderedListInUnorderedList.appendChild(mobileNavListItemInUnorderedListInUnorderedList5);

const mobileNavListItemInUnorderedListInUnorderedList6 = document.createElement('li');
mobileNavUnorderedListInUnorderedList.appendChild(mobileNavListItemInUnorderedListInUnorderedList6);

// Skapar variabeln mobileNavAForListItem3(<a></a>) och lägger till i mobileNavListItem3
const mobileNavAForListItem3 = document.createElement('a');
mobileNavAForListItem3.innerHTML = 'Nyheter';
mobileNavAForListItem3.href = '../nyheter.html';
mobileNavAForListItem3.title = 'Länk till Nyheter';
mobileNavListItem3.appendChild(mobileNavAForListItem3);

// Skapar variabeln mobileNavAForListItem4(<a></a>) och lägger till i mobileNavListItem4
const mobileNavAForListItem4 = document.createElement('a');
mobileNavAForListItem4.innerHTML = 'Om';
mobileNavAForListItem4.href = '../om.html';
mobileNavAForListItem4.title = 'Länk till Om';
mobileNavListItem4.appendChild(mobileNavAForListItem4);

// Skapar variabeln mobileNavAForListItem5(<a></a>) och lägger till i mobileNavListItem5
const mobileNavAForListItem5 = document.createElement('a');
mobileNavAForListItem5.innerHTML = 'Kontakt';
mobileNavAForListItem5.href = '../kontakt.html';
mobileNavAForListItem5.title = 'Länk till Kontakt';
mobileNavListItem5.appendChild(mobileNavAForListItem5);


// Skapar variabeln mobileNavAForListItemInUnorderedListInUnorderedList1(<a></a>) och lägger till i mobileNavListItemInUnorderedListInUnorderedList1
const mobileNavAForListItemInUnorderedListInUnorderedList1 = document.createElement('a');
mobileNavAForListItemInUnorderedListInUnorderedList1.innerHTML = 'Kött';
mobileNavAForListItemInUnorderedListInUnorderedList1.href = '../recept-kott.html';
mobileNavAForListItemInUnorderedListInUnorderedList1.title = 'Länk till recept på kött';
mobileNavListItemInUnorderedListInUnorderedList1.appendChild(mobileNavAForListItemInUnorderedListInUnorderedList1);

// Skapar variabeln mobileNavAForListItemInUnorderedListInUnorderedList2(<a></a>) och lägger till i mobileNavListItemInUnorderedListInUnorderedList2
const mobileNavAForListItemInUnorderedListInUnorderedList2 = document.createElement('a');
mobileNavAForListItemInUnorderedListInUnorderedList2.innerHTML = 'Fisk';
mobileNavAForListItemInUnorderedListInUnorderedList2.href = '../recept-fisk.html';
mobileNavAForListItemInUnorderedListInUnorderedList2.title = 'Länk till recept på fisk';
mobileNavListItemInUnorderedListInUnorderedList2.appendChild(mobileNavAForListItemInUnorderedListInUnorderedList2);

// Skapar variabeln mobileNavAForListItemInUnorderedListInUnorderedList3(<a></a>) och lägger till i mobileNavListItemInUnorderedListInUnorderedList3
const mobileNavAForListItemInUnorderedListInUnorderedList3 = document.createElement('a');
mobileNavAForListItemInUnorderedListInUnorderedList3.innerHTML = 'Fågel';
mobileNavAForListItemInUnorderedListInUnorderedList3.href = '../recept-fagel.html';
mobileNavAForListItemInUnorderedListInUnorderedList3.title = 'Länk till recept på fågel';
mobileNavListItemInUnorderedListInUnorderedList3.appendChild(mobileNavAForListItemInUnorderedListInUnorderedList3);

// Skapar variabeln mobileNavAForListItemInUnorderedListInUnorderedList4(<a></a>) och lägger till i mobileNavListItemInUnorderedListInUnorderedList4
const mobileNavAForListItemInUnorderedListInUnorderedList4 = document.createElement('a');
mobileNavAForListItemInUnorderedListInUnorderedList4.innerHTML = 'Vegetariskt';
mobileNavAForListItemInUnorderedListInUnorderedList4.href = '../recept-vegetariskt.html';
mobileNavAForListItemInUnorderedListInUnorderedList4.title = 'Länk till vegetariska recept';
mobileNavListItemInUnorderedListInUnorderedList4.appendChild(mobileNavAForListItemInUnorderedListInUnorderedList4);

// Skapar variabeln mobileNavAForListItemInUnorderedListInUnorderedList5(<a></a>) och lägger till i mobileNavListItemInUnorderedListInUnorderedList5
const mobileNavAForListItemInUnorderedListInUnorderedList5 = document.createElement('a');
mobileNavAForListItemInUnorderedListInUnorderedList5.innerHTML = 'Tillbehör';
mobileNavAForListItemInUnorderedListInUnorderedList5.href = '../recept-tillbehor.html';
mobileNavAForListItemInUnorderedListInUnorderedList5.title = 'Länk till recept på tillbehör';
mobileNavListItemInUnorderedListInUnorderedList5.appendChild(mobileNavAForListItemInUnorderedListInUnorderedList5);

// Skapar variabeln mobileNavAForListItemInUnorderedListInUnorderedList6(<a></a>) och lägger till i mobileNavListItemInUnorderedListInUnorderedList6
const mobileNavAForListItemInUnorderedListInUnorderedList6 = document.createElement('a');
mobileNavAForListItemInUnorderedListInUnorderedList6.innerHTML = 'Alla recept';
mobileNavAForListItemInUnorderedListInUnorderedList6.href = '../alla-recept.html';
mobileNavAForListItemInUnorderedListInUnorderedList6.title = 'Länk till att se alla recept';
mobileNavListItemInUnorderedListInUnorderedList6.appendChild(mobileNavAForListItemInUnorderedListInUnorderedList6);

// Skapar variabeln desktopNavUnorderedList(<ul></ul>) och lägger till i navElement
const desktopNavUnorderedList = document.createElement('ul');
desktopNavUnorderedList.classList.add('desktop-nav-unordered-list');
navElement.appendChild(desktopNavUnorderedList);

// Skapar variablerna desktopNavListItem(<li></li>) och lägger till i desktopNavUnorderedList
const desktopNavListItem1 = document.createElement('li');
desktopNavUnorderedList.appendChild(desktopNavListItem1);

const desktopNavListItem2 = document.createElement('li');
desktopNavUnorderedList.appendChild(desktopNavListItem2);

const desktopNavListItem3 = document.createElement('li');
desktopNavUnorderedList.appendChild(desktopNavListItem3);

const desktopNavListItem4 = document.createElement('li');
desktopNavUnorderedList.appendChild(desktopNavListItem4);

const desktopNavListItem5 = document.createElement('li');
desktopNavUnorderedList.appendChild(desktopNavListItem5);

// Skapar variabeln desktopNavAForListItem1(<a></a>) och lägger till i desktopNavListItem1
const desktopNavAForListItem1 = document.createElement('a');
desktopNavAForListItem1.innerHTML = 'Hem';
desktopNavAForListItem1.href = '../index.html';
desktopNavAForListItem1.title = 'Länk till Hem';
desktopNavListItem1.appendChild(desktopNavAForListItem1);

// Skapar variabeln desktopNavAForListItem2(<a></a>) och lägger till i desktopNavListItem2
const desktopNavAForListItem2 = document.createElement('a');
desktopNavAForListItem2.innerHTML = 'Recept';
desktopNavAForListItem2.title = 'Klicka för att välja kategori';
desktopNavAForListItem2.classList.add('desktop-li-recept');
desktopNavListItem2.appendChild(desktopNavAForListItem2);

// Skapar desktopNavListItemArrow(<i>) och lägger till i desktopNavListItem2
const desktopNavListItemArrow = document.createElement('i');
desktopNavListItemArrow.classList.add('fa', 'fa-caret-right');
desktopNavListItem2.appendChild(desktopNavListItemArrow);

// Skapar varibaeln desktopNavUnorderedListInUnorderedList(<ul></ul>) och lägger till i desktopNavListItem2
const desktopNavUnorderedListInUnorderedList = document.createElement('ul');
desktopNavUnorderedListInUnorderedList.classList.add('desktop-nav-unordered-list-in-undordered-list');
desktopNavListItem2.appendChild(desktopNavUnorderedListInUnorderedList);

// Skapar variablarna desktopNavListItemInUnorderedListInUnorderedList(<li></li>) och lägger till i desktopNavUnorderedListInUnorderedList
const desktopNavListItemInUnorderedListInUnorderedList1 = document.createElement('li');
desktopNavUnorderedListInUnorderedList.appendChild(desktopNavListItemInUnorderedListInUnorderedList1);

const desktopNavListItemInUnorderedListInUnorderedList2 = document.createElement('li');
desktopNavUnorderedListInUnorderedList.appendChild(desktopNavListItemInUnorderedListInUnorderedList2);

const desktopNavListItemInUnorderedListInUnorderedList3 = document.createElement('li');
desktopNavUnorderedListInUnorderedList.appendChild(desktopNavListItemInUnorderedListInUnorderedList3);

const desktopNavListItemInUnorderedListInUnorderedList4 = document.createElement('li');
desktopNavUnorderedListInUnorderedList.appendChild(desktopNavListItemInUnorderedListInUnorderedList4);

const desktopNavListItemInUnorderedListInUnorderedList5 = document.createElement('li');
desktopNavUnorderedListInUnorderedList.appendChild(desktopNavListItemInUnorderedListInUnorderedList5);

const desktopNavListItemInUnorderedListInUnorderedList6 = document.createElement('li');
desktopNavUnorderedListInUnorderedList.appendChild(desktopNavListItemInUnorderedListInUnorderedList6);

// Skapar variabeln desktopNavAForListItem3(<a></a>) och lägger till i desktopNavListItem3
const desktopNavAForListItem3 = document.createElement('a');
desktopNavAForListItem3.innerHTML = 'Nyheter';
desktopNavAForListItem3.href = '../nyheter.html';
desktopNavAForListItem3.title = 'Länk till Nyheter';
desktopNavListItem3.appendChild(desktopNavAForListItem3);

// Skapar variabeln desktopNavAForListItem4(<a></a>) och lägger till i desktopNavListItem4
const desktopNavAForListItem4 = document.createElement('a');
desktopNavAForListItem4.innerHTML = 'Om';
desktopNavAForListItem4.href = '../om.html';
desktopNavAForListItem4.title = 'Länk till Om';
desktopNavListItem4.appendChild(desktopNavAForListItem4);

// Skapar variabeln desktopNavAForListItem5(<a></a>) och lägger till i desktopNavListItem5
const desktopNavAForListItem5 = document.createElement('a');
desktopNavAForListItem5.innerHTML = 'Kontakt';
desktopNavAForListItem5.href = '../kontakt.html';
desktopNavAForListItem5.title = 'Länk till Kontakt';
desktopNavListItem5.appendChild(desktopNavAForListItem5);

// Skapar variabeln desktopNavAForListItemInUnorderedListInUnorderedList1(<a></a>) och lägger till i desktopNavListItemInUnorderedListInUnorderedList1
const desktopNavAForListItemInUnorderedListInUnorderedList1 = document.createElement('a');
desktopNavAForListItemInUnorderedListInUnorderedList1.innerHTML = 'Kött';
desktopNavAForListItemInUnorderedListInUnorderedList1.href = '../recept-kott.html';
desktopNavAForListItemInUnorderedListInUnorderedList1.title = 'Länk till recept på kött';
desktopNavListItemInUnorderedListInUnorderedList1.appendChild(desktopNavAForListItemInUnorderedListInUnorderedList1);

// Skapar variabeln desktopNavAForListItemInUnorderedListInUnorderedList2(<a></a>) och lägger till i desktopNavListItemInUnorderedListInUnorderedList2
const desktopNavAForListItemInUnorderedListInUnorderedList2 = document.createElement('a');
desktopNavAForListItemInUnorderedListInUnorderedList2.innerHTML = 'Fisk';
desktopNavAForListItemInUnorderedListInUnorderedList2.href = '../recept-fisk.html';
desktopNavAForListItemInUnorderedListInUnorderedList2.title = 'Länk till recept på fisk';
desktopNavListItemInUnorderedListInUnorderedList2.appendChild(desktopNavAForListItemInUnorderedListInUnorderedList2);

// Skapar variabeln desktopNavAForListItemInUnorderedListInUnorderedList3(<a></a>) och lägger till i desktopNavListItemInUnorderedListInUnorderedList3
const desktopNavAForListItemInUnorderedListInUnorderedList3 = document.createElement('a');
desktopNavAForListItemInUnorderedListInUnorderedList3.innerHTML = 'Fågel';
desktopNavAForListItemInUnorderedListInUnorderedList3.href = '../recept-fagel.html';
desktopNavAForListItemInUnorderedListInUnorderedList3.title = 'Länk till recept på fågel';
desktopNavListItemInUnorderedListInUnorderedList3.appendChild(desktopNavAForListItemInUnorderedListInUnorderedList3);

// Skapar variabeln desktopNavAForListItemInUnorderedListInUnorderedList4(<a></a>) och lägger till i desktopNavListItemInUnorderedListInUnorderedList4
const desktopNavAForListItemInUnorderedListInUnorderedList4 = document.createElement('a');
desktopNavAForListItemInUnorderedListInUnorderedList4.innerHTML = 'Vegetariskt';
desktopNavAForListItemInUnorderedListInUnorderedList4.href = '../recept-vegetariskt.html';
desktopNavAForListItemInUnorderedListInUnorderedList4.title = 'Länk till vegetariska recept';
desktopNavListItemInUnorderedListInUnorderedList4.appendChild(desktopNavAForListItemInUnorderedListInUnorderedList4);

// Skapar variabeln desktopNavAForListItemInUnorderedListInUnorderedList5(<a></a>) och lägger till i desktopNavListItemInUnorderedListInUnorderedList5
const desktopNavAForListItemInUnorderedListInUnorderedList5 = document.createElement('a');
desktopNavAForListItemInUnorderedListInUnorderedList5.innerHTML = 'Tillbehör';
desktopNavAForListItemInUnorderedListInUnorderedList5.href = '../recept-tillbehor.html';
desktopNavAForListItemInUnorderedListInUnorderedList5.title = 'Länk till recept på tillbehör';
desktopNavListItemInUnorderedListInUnorderedList5.appendChild(desktopNavAForListItemInUnorderedListInUnorderedList5);

// Skapar variabeln desktopNavAForListItemInUnorderedListInUnorderedList6(<a></a>) och lägger till i desktopNavListItemInUnorderedListInUnorderedList6
const desktopNavAForListItemInUnorderedListInUnorderedList6 = document.createElement('a');
desktopNavAForListItemInUnorderedListInUnorderedList6.innerHTML = 'Alla recept';
desktopNavAForListItemInUnorderedListInUnorderedList6.href = '../alla-recept.html';
desktopNavAForListItemInUnorderedListInUnorderedList6.title = 'Länk till att se alla recept';
desktopNavListItemInUnorderedListInUnorderedList6.appendChild(desktopNavAForListItemInUnorderedListInUnorderedList6);

const klickaInMobilMeny = function() {
	iconMobilMenyBars.style.opacity = '0';
	iconMobilMenyX.style.opacity = '1';
	iconMobilMenyX.style.zIndex = '0';
	mobileNavUnorderedList.style.right = '0';
}

const klickaBortMobilMeny = function() {
	iconMobilMenyX.style.opacity = '0';
	iconMobilMenyX.style.zIndex = '-1';
	iconMobilMenyBars.style.opacity = '1';
	mobileNavUnorderedList.style.right = '100%';
}

arrowMobileÄrVriden = false;

const öppnaRullgardingsmenyMobile = () => {
	if (!arrowMobileÄrVriden) {
		mobileNavUnorderedListInUnorderedList.style.display = 'block';
		mobileNavListItemArrow.style.transform = 'rotate(90deg)';
		mobileNavUnorderedListInUnorderedList.style.position = 'relative';
		mobileNavUnorderedListInUnorderedList.style.right = '0';
		mobileNavUnorderedListInUnorderedList.style.visibility = 'visible';
		mobileNavUnorderedListInUnorderedList.style.opacity = '1';
		mobileNavUnorderedListInUnorderedList.style.transition = 'all 300ms ease-out 20ms';
		arrowMobileÄrVriden = true;
	} else {
		mobileNavUnorderedListInUnorderedList.style.transition = 'none';
		mobileNavListItemArrow.style.transform = 'rotate(0)';
		mobileNavUnorderedListInUnorderedList.style.position = 'absolute';
		mobileNavUnorderedListInUnorderedList.style.right = '200px';
		mobileNavUnorderedListInUnorderedList.style.visibility = 'hidden';
		mobileNavUnorderedListInUnorderedList.style.opacity = '0';
		arrowMobileÄrVriden = false;
	}
}

arrowDesktopÄrVriden = false;
const öppnaRullgardingsmenyDesktop = () => {
	if (!arrowDesktopÄrVriden) {
		desktopNavListItemArrow.style.transform = 'rotate(90deg)';
		desktopNavUnorderedListInUnorderedList.style.visibility = 'visible';
		desktopNavUnorderedListInUnorderedList.style.opacity = '1';
		arrowDesktopÄrVriden = true;
	} else {
		desktopNavListItemArrow.style.transform = 'rotate(0)';
		desktopNavUnorderedListInUnorderedList.style.visibility = 'hidden';
		desktopNavUnorderedListInUnorderedList.style.opacity = '0';
		arrowDesktopÄrVriden = false;
	}
}

const lämnarRullgardinsmenyDesktop = () => {
		desktopNavListItemArrow.style.transform = 'rotate(0)';
		desktopNavUnorderedListInUnorderedList.style.visibility = 'hidden';
		desktopNavUnorderedListInUnorderedList.style.opacity = '0';
		arrowDesktopÄrVriden = false;
}

iconMobilMenyBars.onclick = klickaInMobilMeny;
iconMobilMenyX.onclick = klickaBortMobilMeny;
mobileNavAForListItem2.onclick = öppnaRullgardingsmenyMobile;
desktopNavAForListItem2.onclick = öppnaRullgardingsmenyDesktop;
desktopNavUnorderedListInUnorderedList.onmouseleave = lämnarRullgardinsmenyDesktop;










