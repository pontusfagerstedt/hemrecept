// Skapar variablar som kopplar ihop head och body
const head = document.getElementsByTagName('head')[0];
const body = document.getElementsByTagName('body')[0];

// Skapar variabeln metaFörMobilaSkärmar(<meta>) och lägger till i head
const metaFörMobilaSkärmar = document.createElement('meta');
metaFörMobilaSkärmar.name = 'viewport';
metaFörMobilaSkärmar.content = 'width=device-width, initial-scale=1';
head.appendChild(metaFörMobilaSkärmar);


const länkaTillStylePunktCss = document.createElement('link');
länkaTillStylePunktCss.rel = 'stylesheet';
länkaTillStylePunktCss.type = 'text/css';
länkaTillStylePunktCss.href = './css/style.css';
head.appendChild(länkaTillStylePunktCss);


const länkaTillFontAwsome = document.createElement('link');
länkaTillFontAwsome.rel = 'stylesheet';
länkaTillFontAwsome.type = 'text/css';
länkaTillFontAwsome.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
head.appendChild(länkaTillFontAwsome);

// Skapar variablarna länka
const länkaTillGoogleFontsRad1 = document.createElement('link');
const länkaTillGoogleFontsRad2 = document.createElement('link');
länkaTillGoogleFontsRad1.rel = 'preconnect';
länkaTillGoogleFontsRad1.href = 'https://fonts.gstatic.com';
länkaTillGoogleFontsRad2.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap';
länkaTillGoogleFontsRad2.rel = 'stylesheet';

head.appendChild(länkaTillGoogleFontsRad1);
head.appendChild(länkaTillGoogleFontsRad2);

const länkaFaviconRad1 = document.createElement('link');
länkaFaviconRad1.rel = 'apple-touch-icon';
länkaFaviconRad1.sizes = '57x57';
länkaFaviconRad1.href = './img/favicon/apple-icon-57x57.png';
const länkaFaviconRad2 = document.createElement('link');
länkaFaviconRad2.rel = 'apple-touch-icon';
länkaFaviconRad2.sizes = '60x60';
länkaFaviconRad2.href = './img/favicon/apple-icon-60x60.png';
const länkaFaviconRad3 = document.createElement('link');
länkaFaviconRad3.rel = 'apple-touch-icon';
länkaFaviconRad3.sizes = '72x72';
länkaFaviconRad3.href = './img/favicon/apple-icon-72x72.png';
const länkaFaviconRad4 = document.createElement('link');
länkaFaviconRad4.rel = 'apple-touch-icon';
länkaFaviconRad4.sizes = '76x76';
länkaFaviconRad4.href = './img/favicon/apple-icon-76x76.png';
const länkaFaviconRad5 = document.createElement('link');
länkaFaviconRad5.rel = 'apple-touch-icon';
länkaFaviconRad5.sizes = '114x114';
länkaFaviconRad5.href = './img/favicon/apple-icon-114x114.png';
const länkaFaviconRad6 = document.createElement('link');
länkaFaviconRad6.rel = 'apple-touch-icon';
länkaFaviconRad6.sizes = '120x120';
länkaFaviconRad6.href = './img/favicon/apple-icon-120x120.png';
const länkaFaviconRad7 = document.createElement('link');
länkaFaviconRad7.rel = 'apple-touch-icon';
länkaFaviconRad7.sizes = '144x144';
länkaFaviconRad7.href = './img/favicon/apple-icon-144x144.png';
const länkaFaviconRad8 = document.createElement('link');
länkaFaviconRad8.rel = 'apple-touch-icon';
länkaFaviconRad8.sizes = '152x152';
länkaFaviconRad8.href = './img/favicon/apple-icon-152x152.png';
const länkaFaviconRad9 = document.createElement('link');
länkaFaviconRad9.rel = 'apple-touch-icon';
länkaFaviconRad9.sizes = '180x180';
länkaFaviconRad9.href = './img/favicon/apple-icon-180x180.png';
const länkaFaviconRad10 = document.createElement('link');
länkaFaviconRad10.rel = 'icon';
länkaFaviconRad10.type = 'image/png';
länkaFaviconRad10.sizes = '192x192';
länkaFaviconRad10.href = './img/favicon/android-icon-192x192.png';
const länkaFaviconRad11 = document.createElement('link');
länkaFaviconRad11.rel = 'icon';
länkaFaviconRad11.type = 'image/png';
länkaFaviconRad11.sizes = '32x32';
länkaFaviconRad11.href = './img/favicon/favicon-32x32.png';
const länkaFaviconRad12 = document.createElement('link');
länkaFaviconRad12.rel = 'icon';
länkaFaviconRad12.type = 'image/png';
länkaFaviconRad12.sizes = '96x96';
länkaFaviconRad12.href = './img/favicon/favicon-96x96.png';
const länkaFaviconRad13 = document.createElement('link');
länkaFaviconRad13.rel = 'icon';
länkaFaviconRad13.type = 'image/png';
länkaFaviconRad13.sizes = '16x16';
länkaFaviconRad13.href = './img/favicon/favicon-16x16.png';
const metaFaviconRad1 = document.createElement('meta');
metaFaviconRad1.name = 'msapplication-TileColor';
metaFaviconRad1.content = '#ffffff';
const metaFaviconRad2 = document.createElement('meta');
metaFaviconRad2.name = 'msapplication-TileImage';
metaFaviconRad2.content = './img/favicon/ms-icon-144x144.png';
const metaFaviconRad3 = document.createElement('meta');
metaFaviconRad3.name = 'theme-color';
metaFaviconRad3.content = '#ffffff';

head.appendChild(länkaFaviconRad1);
head.appendChild(länkaFaviconRad2);
head.appendChild(länkaFaviconRad3);
head.appendChild(länkaFaviconRad4);
head.appendChild(länkaFaviconRad5);
head.appendChild(länkaFaviconRad6);
head.appendChild(länkaFaviconRad7);
head.appendChild(länkaFaviconRad8);
head.appendChild(länkaFaviconRad9);
head.appendChild(länkaFaviconRad10);
head.appendChild(länkaFaviconRad11);
head.appendChild(länkaFaviconRad12);
head.appendChild(länkaFaviconRad13);
head.appendChild(metaFaviconRad1);
head.appendChild(metaFaviconRad2);
head.appendChild(metaFaviconRad3);





