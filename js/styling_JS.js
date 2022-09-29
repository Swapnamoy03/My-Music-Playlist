
var id = null;
var audio = null;
var playing = null;
var LoadLimit = 5;
var i = 0;
var j = 5;

function ChangeFavorite(name) {
    //console.log(name);
    var x = document.getElementsByClassName('fav');
    console.log(x);

    for (i = 0; i < x.length; i++) {
        //console.log(x[i].currentSrc);
        if (x[i].name == name) {
            break;
        }
    }

    if (x[i].alt == "Not Selected") {
        x[i].alt = "Selected";
        x[i].src = 'img/FavoriteON.png';
    }
    else {
        x[i].alt = "Not Selected";
        x[i].src = 'img/FavoriteOFF.png';
    }
}


function ChangePlayPause(name) {

    var x = document.getElementsByClassName('PlayPause');
    //console.log(x);

    if (playing != null) {
        for (i = 0; i < x.length; i++) {
            if (x[i].name == playing) {
                pauseAudio(playing);
                x[i].alt = "Play Audio";
                x[i].src = "img/Play.png";
                break;
            }
        }
    }
    if (playing == name) {
        playing = null;
        return;
    }
    for (i = 0; i < x.length; i++) {
        //console.log(x[i].currentSrc);
        if (x[i].name == name) {
            break;
        }
    }
    if (x[i].alt == "Play Audio") {
        playAudio(name);
        console.log(x);
        x[i].alt = "Pause Audio";
        x[i].src = 'img/Pause.png';
    }

    playing = name;
}

function pauseAudio(AudioName) {
    if (audio != null) {
        audio.pause();
    }
}

function playAudio(AudioName) {

    //console.log(AudioName);
    /*if (audio != null) {
        audio.pause();
    }*/
    var songName = "audios/" + AudioName + ".mp3";
    audio = new Audio(songName);
    console.log(songName);
    audio.play();
}
function OnLoad() {
    var x = document.getElementsByClassName('musicCards');
    for (var k = 5; k < x.length; k++) {
        x[k].hidden = true;
    }
}
function LoadMore() {
    var x = document.getElementsByClassName('musicCards');
    while (i != LoadLimit) {
        if (j < x.length) {
            x[j].hidden = false;
        }
        else {
            break;
        }
        j++;
        i++;
    }
    i = 0;
    //console.log(x);
}