function toggleMenu(){

    document.getElementById("navAll").classList.toggle("hide");
}
let date = new Date();
document.getElementById("currYear").innerHTML= date.getFullYear();
document.getElementById("lastmod").innerHTML="Last Update: " + document.lastModified;