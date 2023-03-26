/*var text = "The Globe and Mail Stock";
var link1 = "<a href = 'https://www.theglobeandmail.com/investing/markets/'>" + text + "</a>"; 
document.getElementById("button1").innerHTML = link1;
*/


function link1(id) {
    switch (id) {
        case "button1": 
            window.open("https://www.theglobeandmail.com/investing/markets/");

        case "button2": 
            window.open("https://ca.finance.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAIMDQFcM-N7KqQoMU4oL5qwwtnDbDx1lVkP0_J1PTbk6Le9K1dgaocPzZk5R-53Fk5B5lzexygo7jdzBSyKGwuuQYe_Sjyvw7URbUzDApMqPxEuC42Av-FCYkMQM04RMtKagPbJw2FznZTHtOU8jzf1yDEWpQvx303GjkQg5PAE7");

        case "button3":
            window.open("https://www.nerdwallet.com/article/investing/what-is-the-stock-market#:~:text=The%20stock%20market%20is%20where%20investors%20buy%20and%20sell%20shares,rather%20than%20through%20an%20exchange).");
    
        case "button4":
            window.open("https://www.elearnmarkets.com/blog/25-stock-market-terms-for-beginners/#:~:text=Buy%20%E2%80%93%20This%20means%20buying%20shares,to%20pay%20for%20a%20stock.");
        
        case "button5":
            window.open("https://www.nasdaq.com/glossary");
        }
    
}
