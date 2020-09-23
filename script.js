console.log("Script Loaded")



function validateForm() {
    var x;
  
    // Get the value of the input field with id="feedurl"
    x = document.getElementById("feedurl").value;
    x = String(x)


    //TODO: Implement more robust check for rss links
    if (!x.includes("rss")) {
      text = "Please enter a valid RSS link";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }