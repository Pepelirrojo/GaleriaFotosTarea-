
var folderPhoto = ['Gatito0.jpg', 'Gatito1.jpg', 'Gatito2.jpg', 'Gatito3.jpg', 'Gatito4.jpg'];
var c = 0;

var photo = document.querySelector('#photo');
function changePhotoPlus(butt) {
    if (butt === 'Previous') {
        if (c != 0) {
            c--;
            photo.setAttribute("src", "gatitos/" + folderPhoto[c]);
            console.log(c);
        } 
    } else if (c != folderPhoto.length - 1) {
        c++;
        photo.setAttribute("src", "gatitos/" + folderPhoto[c]);
        console.log(c);
    } 
    if (c===0) {
        document.getElementById("Previous").disabled = true;
    } else {
        document.getElementById("Previous").disabled = false;
    }
    if (c===4) {
        document.getElementById("Next").disabled = true;
    } else {
        document.getElementById("Next").disabled = false;
    }
}


    