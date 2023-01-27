var count = 0;
var cps = 0;
var countUpPer = 1;
var buyPriceCountUpPer = 10;
var buyCirclePrice = 50;
var buyTrianglePrice = 300;
var buySquarePrice = 1200;
var buyLinePrice = 25000;

function buyMultiplier (buyPrice, Multiplier) {
    buyPrice = Math.ceil(buyPrice * Multiplier);
    return buyPrice;
}

function buyCountUpPer () {
    if (count >= buyPriceCountUpPer) {
        count = count - buyPriceCountUpPer;
        buyPriceCountUpPer = buyMultiplier(buyPriceCountUpPer, 1.2);
        countUpPer = countUpPer + 1;
        document.getElementById("btn1").innerText = "Pointer Price: " + buyPriceCountUpPer;
        document.getElementById("display").innerText = count;
    }
}

function changeText() {
    count = count + countUpPer;
    document.getElementById("display").innerText = count, cps;
};

function buyClicker() {
    if (count >= 10) {
        count = count - 10;
        countUpPer = countUpPer + 1;
        document.getElementById("display").innerText = count;
    } else {
        pass;
    }
};

function buyCircle() {
    if (count >= buyCirclePrice) {
        count = count - buyCirclePrice;
        buyCirclePrice = buyMultiplier(buyCirclePrice, 1.2);
        cps = cps + 2;
        document.getElementById("display").innerText = count;
        document.getElementById("btn2").innerText = "Circle Price: " + buyCirclePrice;
    } else {
        pass;
    }
};

function buyTriangle () {
    if (count >= buyTrianglePrice) {
        count = count - buyTrianglePrice;
        buyTrianglePrice = buyMultiplier(buyTrianglePrice, 1.2);
        cps = cps + 5;
        document.getElementById("display").innerText = count;
        document.getElementById("btn3").innerText = "Triangle Price: " + buyTrianglePrice;
    } else {
        pass;
    };
};

function buySquare () {
    if (count >= buySquarePrice) {
        count = count - buySquarePrice;
        buySquarePrice = buyMultiplier(buySquarePrice, 1.2);
        cps = cps + 10;
        document.getElementById("display").innerText = count;
        document.getElementById("btn4").innerText = "Square Price: " + buySquarePrice;
    } else {
        pass;
    };
};


function buyLine () {
    if (count >= buyLinePrice) {
        count = count - buyLinePrice;
        buyLinePrice = buyMultiplier(buyLinePrice, 1.2);
        cps = cps + 100;
        document.getElementById("display").innerText = count;
        document.getElementById("btn5").innerText = "Line Price: " + buyLinePrice;
    } else {
        pass;
    };
};

function mathRound(num) {
    num = Math.round(num * 10);
    return num
}

var cpsPs = function () {
    count = count + (mathRound(cps) /10);
    document.getElementById("display").innerText = count;
    document.getElementById("cpsCounter").innerText = cps;
};

function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=300,width=400,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}

setInterval(cpsPs, 100);

//setInterval(buyCountUpPer, 0.001)
//setInterval(changeText, 0.5)
//setInterval(buyLine, 0.0000001)
