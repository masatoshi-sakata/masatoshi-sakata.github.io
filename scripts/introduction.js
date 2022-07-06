const picts = ["image/one.jpg", "image/three.jpg", "image/two.jpg", "image/four.jpg"]
let change_image = document.querySelector('img')

let num = -1
function slideshow_timer(){
    if (num === 3){
      num = 0;
    } 
    else {
      num ++;
    }
    document.getElementById("mypic").src = picts[num];
  }
   
  setInterval(slideshow_timer, 5000);