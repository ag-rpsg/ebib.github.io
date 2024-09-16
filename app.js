// // document.write("Creating an external file for JavaScript using Visual Studio");

// function generate() {
//     document.getElementById("render").innerHTML = "";
//     html2canvas(document.querySelector("#capture")).then(canvas => {
//         document.getElementById("render").appendChild(canvas);
//     });
// }

// function download() {
//     const download = document.getElementById("download");
//     let image = document.querySelector("canvas").toDataURL("image/png")
//                         .replace("image/png", "image/octet-stream");
//     download.setAttribute("href", image);
// }

// document.querySelector("textarea").addEventListener('keyup', function(){
//     const quoteText = document.getElementById("quote__text");

//     if(this.value != ""){
//         quoteText.innerHTML = this.value;
//         renderCanvas();
//     }
//     else {
//         quoteText.innerHTML = "Start typing </br>:)"
//     }
    
// });

function preview_image1(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output_image1');
      var path = document.getElementById('input1');
      output.src = reader.result;
      output.style.visibility = "visible";
    //   path.style.visibility = "hidden";
      path.style.display = "none";
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  function preview_image2(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output_image2');
      var path = document.getElementById('input2');
      output.src = reader.result;
      output.style.visibility = "visible";
    //   path.style.visibility = "hidden";
      path.style.display = "none";
    }
    reader.readAsDataURL(event.target.files[0]);
  }

// window.addEventListener('load', function() {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('img');
//             img.onload = () => {
//                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
//             }
//             img.style.width = '50px';
  
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
//   });