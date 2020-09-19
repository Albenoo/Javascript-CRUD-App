function toggler() {
  let tggl = document.getElementById("row");
   if (tggl.style.display === "flex") {
     tggl.style.display = "none";
     
   } else {
     tggl.style.display = "flex";
     
   }
}



const mens =  document.querySelector(".best");
mens.addEventListener("click", function() {
  const first = document.querySelector(".first"); 
 if (first.style.opacity === "1") {
     first.style.opacity = "0";
     first.style.width = "0";
     first.style.minHeight  = "0";
     
   } else {
     first.style.opacity = "1";
          first.style.width = "300px";
	       first.style.minHeight  = "100vh";


     
   }

})


const add = document.querySelector(".add");
const remove = document.querySelector(".remove");

add.addEventListener("click", function () {
  const cont = document.querySelector(".menu");
  const input = document.querySelector(".put");
  const newli = document.createElement("LI");
	const parent = document.createElement("DIV");
	parent.setAttribute("class", "parent-box");
 var file = document.getElementById('file').files[0];
    var reader  = new FileReader();
    // it's onload event and you forgot (parameters)
    reader.onload = function(e)  {
        var image = document.createElement("img");
				image.style.width = "600px";
				image.style.height = "300px";
        // the result image data
        image.src = e.target.result;
				        parent.appendChild(image);
								parent.appendChild(newli);
					 newli.innerText = input.value;
     }
     // you have to declare the file loading
		 				     reader.readAsDataURL(file);

		 	cont.append(parent);

});

remove.addEventListener("click", function () {
  const df = document.querySelector(".menu");
  df.firstElementChild.remove();
});