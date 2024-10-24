//utk replace welcome name 
function wcnama(){
  let userinput = prompt("Siapa nama anda ?","");
  document.getElementById("inputname").innerHTML = userinput;
}

wcnama();

function validateForm() {
  let inputUsername = document.getElementById("inputnnama").value;
  let inputttl = document.getElementById("input_ttl").value;
  let inputjk = document.getElementById("jk").value;
  let inputpesan = document.getElementById("pesan").value;

  if (inputUsername == "" || inputttl == "" || inputpesan == "") {
    //alert('Inputan Kosong');
    document.getElementById("inputnnama").style.border = "1px solid red";
    document.getElementById("input_ttl").style.border = "1px solid red";
    document.getElementById("pesan").style.border = "1px solid red";
    

  } else {
    document.getElementById("nama").innerHTML = "(" + inputUsername + ")";
    document.getElementById("inputnnama").style.border = "1px solid";
    //console.log(inputUsername);
    document.getElementById("s_ttl").innerHTML = "(" + inputttl + ")";
    document.getElementById("input_ttl").style.border = "1px solid";

    document.getElementById("s_jk").innerHTML = "(" + inputjk + ")";
    document.getElementById("jk").style.border = "1px solid";

    document.getElementById("s_pesan").innerHTML = "(" + inputpesan + ")";
    document.getElementById("pesan").style.border = "1px solid";
  }
  }

let indexSlide = 0;
//(agar gambar mulai dari index 1) 
moveslide(1);

function moveslide(n) {
  slide((indexSlide += n));
}

function slide(n) {
  let listImage = document.getElementsByClassName("photo-banner");

  //untuk button next / prev image
  if (n > listImage.length - 1) {
    indexSlide = 0;
  }

  if (n < 0) {
    indexSlide = listImage.length -1 ;
  }
  //batasnya button disini

  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }
  listImage[indexSlide].style.display = "block";
  console.log(listImage);
  console.log(n);
}

setInterval(() => moveslide(1), 2000); 

