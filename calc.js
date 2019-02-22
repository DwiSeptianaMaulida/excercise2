var tampil = document.formAngka.isiText;
function input(num) {
 tampil.value += num;
}

function samaDengan() {
tampil.value = eval(tampil.value);
var sd = (eval(tampil.value));
alert(sd);
}
function bcksp() {
 tampil.value = tampil.value.substr(0,tampil.value.length-1);
}
function hapusAll() {
 
 var tanya = confirm("Apakah Data akan di hapus?");
 	if (tanya === true) {
 			pesan = "Ya";
 			tampil.value = "";
 			}else{
 			pesan = "Tidak";	
 			document.getElementById("tampil").innerHTML = pesan;
 }
 }

