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
'borrowed by':'undifined'
};

document.write (myBook);

document.write (myBook.author);

document.write (myBook.genre);

document.write (myBook['main characters']);

document.write(myBook.quotes.p116);

document.write(myBook['borrowed by']);

myBook['borrowed by'] = 'Kata';
document.write(myBook['borrowed by']);