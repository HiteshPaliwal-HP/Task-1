
function domainName(){
    var url=document.getElementById("link").value;
    url=url.replace("http://", "")
    url=url.replace("https://", "")
    url=url.replace("www.", "")
    // x=domainName(s);
    console.log(url.split(".")[0]);
    console.log("Hi hitesh here");
    document.getElementById("domain").innerHTML=(url.split(".")[0]);
    // return url.split(".")[0]
}



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function generatepdf(){
    const element = document.getElementById("myDIV");

}

