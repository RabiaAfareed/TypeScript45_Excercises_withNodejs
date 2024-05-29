//define make album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three time function and creating three variables with different values
var album1 = make_album("Rabia", "Album title 1");
var album2 = make_album("usman", "Album title 2");
var album3 = make_album("Ali", "Alum title 3", 10);
//printing values of our object  created my function
console.log(album1);
console.log(album2);
console.log(album3);
