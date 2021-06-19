// Skapar randomJumbotron(<div></div>) och lägger till i body
const randomJumbotron = document.createElement('div');
randomJumbotron.classList.add('jumbotron');
body.appendChild(randomJumbotron);

// Skapar array jumbotronbilder och lägger till 10st lokala länkar till bilder 
const jumbotronbilder = ["url('./img/jumbotron/iStock-887937764.jpg')",
						 "url('./img/jumbotron/biffar-stekhall.jpg')",
						 "url('./img/jumbotron/mom-with-her-toddler-boy-prepares-healthy-food-1015639436-66041b22d46c4150b96bb6237f3d9a2d.jpg')",
						 "url('./img/jumbotron/Cooking-Home-Collection.jpg')",
						 "url('./img/jumbotron/HERO_Rest_Secrets_GettyImages-1142109340.jpg')",
						 "url('./img/jumbotron/7-tips-for-cooking-seafood-hero.jpg')",
						 "url('./img/jumbotron/cooking.jpg')",
						 "url('./img/jumbotron/Cooking-IG_2.jpg')",
						 "url('./img/jumbotron/CookingWithDistilledVinegar_HERO_041020_6222.jpg')",
						 "url('./img/jumbotron/getty-italian-food.jpg')"];

// Skapar slumpfunktion
slumpaJumbotronbild = () => {
	const slumpaNummer = Math.floor(Math.random() * jumbotronbilder.length);
	randomJumbotron.style.backgroundImage = jumbotronbilder[slumpaNummer];
};

slumpaJumbotronbild();

// Skapar variabeln jumbotronContent<p></p> och lägger till i randomJumbotron
const jumbotronContent = document.createElement('p');
jumbotronContent.classList.add('jumbotron-content');
jumbotronContent.innerHTML = 'Goda recept för vardag eller fest';
randomJumbotron.appendChild(jumbotronContent);

