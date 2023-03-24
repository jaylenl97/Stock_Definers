/*var text = "The Globe and Mail Stock";
var link1 = "<a href = 'https://www.theglobeandmail.com/investing/markets/'>" + text + "</a>"; 
document.getElementById("button1").innerHTML = link1;
*/


function link1(id) {
    switch (id) {
        case "button1": 
            window.open("https://www.theglobeandmail.com/investing/markets/");

        case "button2": 
            window.open("https://www.theglobeandmail.com");
    }
    
}