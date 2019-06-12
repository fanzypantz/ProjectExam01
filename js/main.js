


let currentFocus = 0;
let currentSite = null;
let isScrolling = false;
let documentHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
let scrollInterval = null;

let scrollNames = [
    ['#header-index', '.history', '#hero01', '.gallery', '#hero02', '#index-cta', '#hero03', '#business'],
    ['#header-reusability', '#reflight-gallery', '#cores', '#first-landing' ],
    ['#header-rockets', '#falcon-9', '#falcon-heavy', '#falcon-1']
];

let currentTitle = document.getElementsByTagName("title")[0].innerHTML;

// Establish what site you are on
if (currentTitle === "Letha - Space Exploration Technologies") {
    currentSite = 0;
} else if (currentTitle === "Letha - Reusability") {
    currentSite = 1;
} else if (currentTitle === "Letha - Rockets") {
    currentSite = 2;
} else if (currentTitle === "Letha - Missions") {
    currentSite = 3;
}

let boolToText = function (input) {
    if (input) {
        return "Yes"
    } else {
        return "No"
    }
};

let mapNumber = function (input, inMin, inMax, outMin, outMax) {
    return (input - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

let initiateScrollBar = function () {
    document.querySelector('#scroll').style.height = 1000 / (documentHeight / 1000) + "px";
    if (currentSite !== 3) {
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";
    }
};

let scroll = function () {
    // calculate the cercentage the scrollbar should be at while at a certain spot in the page
    let docE = document.documentElement;
    let scrollPercentage = (docE['scrollTop'] || document.body['scrollTop']) / ((docE['scrollHeight'] || document.body['scrollHeight']) - docE.clientHeight) * 100;
    let scrollbarHeight = window.innerHeight * 0.65; // corresponds to 65vh
    let scrollHeight = parseInt(document.querySelector('#scroll').style.height, 10);
    let scrollDiffPercentage = scrollHeight * (100/scrollbarHeight);
    let newPercentage = mapNumber(scrollPercentage, 0, 100, 0, (100 - scrollDiffPercentage) + 0.3);
    document.querySelector('#scroll').style.top = newPercentage + "%" // assign the new percentage to the scroll bar
};

let finishScroll = function () {
    isScrolling = false;
    clearInterval(scrollInterval);
};

let scrollFunction = function (e) {
    e.preventDefault();

    if (!isScrolling && currentFocus >= 0 ) {
        let nextElement = null;

        if (e.deltaY > 0 && currentFocus < (scrollNames[currentSite].length - 1)) {
            nextElement = document.querySelector(scrollNames[currentSite][currentFocus + 1]);
            currentFocus = currentFocus + 1;
        } else if ( e.deltaY < 0 && currentFocus > 0 ) {
            nextElement = document.querySelector(scrollNames[currentSite][currentFocus - 1]);
            currentFocus = currentFocus - 1;
        } else {
            return false;
        }

        if (!isScrolling) {
            isScrolling = true;

            if (isScrolling === true) {
                nextElement.scrollIntoView({behavior: "smooth"})
            }
            scrollInterval = setInterval(scroll, 15); // 15ms seem to make a smooth enough animation
            setTimeout(finishScroll, 500);
        }
    }
};

// if (currentSite === 3) {
//     window.addEventListener('scroll', scroll, {passive: false});
// } else {
//     window.addEventListener('wheel', scrollFunction, {passive: false});
// }
//
// // window.addEventListener("touchmove", scrollFunction, {passive: false});
// initiateScrollBar();


