/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["No More", "The End is Where We Begin", "Blow Me Way", "For the Glory"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
var image_links = ["https://i.ytimg.com/vi/uUmdVqHZGFE/maxresdefault.jpg",
"https://i.ytimg.com/vi/ifLtbrk4Vg4/maxresdefault.jpg",
"https://m.media-amazon.com/images/M/MV5BZDE0N2E4ODctYThiNS00ZTFlLTlkYTMtYTg5YzJjODM1Zjg5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
"https://i.ytimg.com/vi/ESwLsdCTCCo/maxresdefault.jpg"];
var artists = ["Disturbed", "Thousand Foot Krutch", "Breaking Benjamin", "All Good Things"];
var song_lengths = ["3:53", "3:44", "3:25", "4:46"];
var links = ["https://www.youtube.com/watch?v=eQji1bEXwc0", "https://www.youtube.com/watch?v=IPQ7mvL5_04",
"https://www.youtube.com/watch?v=L1VIh_lEP_o", "https://www.youtube.com/watch?v=zBUx6zTxr98"];
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(songItem){
    $("#songs").append();
});

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
}