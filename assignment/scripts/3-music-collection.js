console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
}

console.log(
  addToCollection(myCollection, "1sampleTitle", "sampleArtist", 2024)
);
console.log(
  addToCollection(myCollection, "2sampleTitle", "sampleArtist", 2024)
);
console.log(
  addToCollection(myCollection, "3sampleTitle", "sampleArtist", 2024)
);
console.log(
  addToCollection(myCollection, "4sampleTitle", "sampleArtist", 2024)
);
console.log(
  addToCollection(myCollection, "5sampleTitle", "sampleArtist", 2024)
);
console.log(
  addToCollection(myCollection, "6sampleTitle", "anotherArtist", 2024)
);

console.log(addToCollection(myCollection, "Ray Song", "Ray Charles", 1957));

console.log(myCollection);

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(
      `${collection[i].title} by, ${collection[i].artist}, published in ${collection[i].yearPublished}`
    );
  }
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let findArtistArray = [];
  for (let i = 0; i < collection.length; i++)
    if (collection[i].artist === artist) {
      findArtistArray.push(collection[i]);
    }
  return findArtistArray;
}

console.log(findByArtist(myCollection, "sampleArtist"));
console.log(findByArtist(myCollection, "Baby Keem"));

// const searchCriteria = { artist: "Ray Charles", year: 1957 };

// function searchArtistAndYear(collection, searchCriteria) {
//   if (!searchCriteria || (!searchCriteria.artist && !searchCriteria.year)) {
//     return collection;
//   }
//   let mostCriteriaArray = [];
//   for (let i = 0; i < collection.length; i++) {
//     if (
//       searchCriteria.artist === collection[i].artist &&
//       searchCriteria.year === collection[i].yearPublished
//     ) {
//       mostCriteriaArray.push(collection[i]);
//     }
//   }
//   return mostCriteriaArray;
// }

// console.log(searchArtistAndYear(myCollection, searchCriteria));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
