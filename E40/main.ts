//define make album function
function make_album(artist_name: string, album_title: string,tracks?: number){
     let album: {artist: string, title:string, tracks?: number}={
        artist: artist_name, 
        title: album_title,
     };

     if(tracks !== undefined){
        album.tracks = tracks;
     }

     return album;

}
//calling three time function and creating three variables with different values

let album1 = make_album("Rabia", "Album title 1");

let album2 = make_album("usman", "Album title 2");

let album3 = make_album("Ali", "Album title 3", 10);
//printing values of our object  created my function
console.log(album1);

console.log(album2);

console.log(album3);