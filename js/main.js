 function calculateArea(){
   const lengthtRectangle =document.getElementById("length").value;
   const widthRectangle =document.getElementById("width").value;
   let area = document.getElementById("result") ;


  if(!isNaN(lengthtRectangle) && !isNaN(widthRectangle) && widthRectangle!== "" &&  lengthtRectangle !=="" ){
            area.innerHTML =  lengthtRectangle * widthRectangle;

  }
  else{
           area.innerHTML = "please insert number in both of text boxs.";
  }

}

     /*    راه دوم      */

/* let lengthtRectangle =10;
 const widthRectangle = 11;

 function calculateArea(){
     let area = lengthtRectangle * widthRectangle;
     console.log(area);
 }

 calculateArea();

 */
