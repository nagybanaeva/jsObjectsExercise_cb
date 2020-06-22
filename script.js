var myBook = {
	'title': 'To Kill a Mockingbird',
  	'author': 'Harper Lee',
  	'genre': 'coming-of-age story',
  	'year of publication': 2015,
	'has been read': true,
  	'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
  	'quotes': {
    	'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
    	'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
    	'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
  	},
	'borrowed by':'undifined',
	'page marker': function () {
		var pageInitial = myBook.page;
  		myBook.page = prompt('Melyik oldalon tartasz?');
		if(typeof pageInitial === 'undefined') {
    		alert('Jelenleg az alábbi oldalon tartasz: ' + myBook.page + ' az alábbi könyvedben: ' + myBook.title + '.');
  		} 
		else if (pageInitial > myBook.page) { 
			alert('Szerintem elírtad a aktuális oldalszámot, mert ' + myBook.page + ' kevesebb, mint az előzőleg elolvasott oldalszám, azaz az ' + pageInitial + '.');
		}
		else {
    		alert('Jelenleg az alábbi oldalon tartasz: ' + myBook.page + ' az alábbi könyvedben: ' + myBook.title + '. Legutóbb az alábbi oldalon tartottál: ' + pageInitial + ', így ez alkalommal ' + (myBook.page - pageInitial) + ' oldalt olvastál.');
  		}
	}
};

console.log(myBook);

console.log(myBook.author);

console.log(myBook.genre);

console.log(myBook['main characters']);

console.log(myBook.quotes.p116);

console.log(myBook['borrowed by']);

myBook['borrowed by'] = 'Kata';
console.log(myBook['borrowed by']);

myBook.rating = 5;
console.log(myBook.rating);

console.log('author' in myBook);

console.log('rating' in myBook);

console.log(myBook.hasOwnProperty('rating'));


myBook['page marker']();
myBook['page marker']();

