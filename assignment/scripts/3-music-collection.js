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
  addToCollection(myCollection, "1sampleTitle", "sampleArtist", "sampleYear")
);
console.log(
  addToCollection(myCollection, "2sampleTitle", "sampleArtist", "sampleYear")
);
console.log(
  addToCollection(myCollection, "3sampleTitle", "sampleArtist", "sampleYear")
);
console.log(
  addToCollection(myCollection, "4sampleTitle", "sampleArtist", "sampleYear")
);
console.log(
  addToCollection(myCollection, "5sampleTitle", "sampleArtist", "sampleYear")
);
console.log(
  addToCollection(myCollection, "6sampleTitle", "sampleArtist", "sampleYear")
);

console.log(myCollection);

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(
      `${collection[i].title} by, ${collection[i].artist}, published in in ${collection[i].yearPublished}`
    );
  }
}

showCollection(myCollection);


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
