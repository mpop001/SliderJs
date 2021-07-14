//get all img 
var myImg = Array.from(document.querySelectorAll(".slider-container img"));

//get number of img 
var counter = myImg.length;

//set Img start pointe 
var currentSlider = 1;

//get slider-Number from html 
var SliderNumber = document.getElementById('slider-number')

// get Button from html 
var prevButton = document.getElementById("prev"),
    nextButton = document.getElementById("next");

//conntecet button with function 
prevButton.onclick = prev;
nextButton.onclick = next;

//create indicators
var myUl = document.createElement("ul");
    myUl.setAttribute("id","myUl");
for(var i=1; i<= counter ;i++){
    var myLi = document.createElement("li");
    myLi.setAttribute("data-index",i)
    myLi.textContent = i;
    myUl.appendChild(myLi)

}
document.getElementById("indicators").appendChild(myUl);

var mynewUl = document.getElementById('myUL');
    mynewli =  Array.from(document.querySelectorAll("#myUl li"));


    checker();
    for(var i = 0 ; i<mynewli.length ;i++){
        mynewli[i].onclick = function(){
            currentSlider = this.getAttribute('data-index')
            checker();
        }
    }

    // funtion partie
    function prev(){
        if(prevButton.classList.contains("disbal")){
            return false
        }
        else{
            currentSlider--;
            checker();
        }
    }
    function next(){
        if(nextButton.classList.contains("disbal")){
            return false
        }
        else{
            currentSlider++;
            checker();
        }
    }

    //checker function
    function checker(){

    SliderNumber.textContent = "#" + currentSlider + " of " + counter;
        remove();
            myImg[currentSlider - 1].classList.add("active");
            mynewli[currentSlider -1].classList.add("active");

          if(currentSlider == 1){
            prevButton.classList.add("disbal")
          } else{
            prevButton.classList.remove("disbal")
          };
          if(currentSlider == counter){
            nextButton.classList.add("disbal")
        } else{
            nextButton.classList.remove("disbal")
        } 
        


    }
    //remove function
    function remove(){
        myImg.forEach(function(img){
            img.classList.remove("active")
        })
        mynewli.forEach(function(indicator){
            indicator.classList.remove("active")
        })
    }