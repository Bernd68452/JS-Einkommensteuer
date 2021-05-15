$(window).resize(function () {
    let windowHeight = $(window).height();

    let newHeaderHeight = windowHeight * 0.3;
    $('#header').height(newHeaderHeight);

    let newContentHeight = windowHeight * 0.7;
    let newContentHeightMargin = (windowHeight * 0.3);
    $('#content').height(newContentHeight);
});


function calcIncomeTax() {
    let preFormattedIncome = document.getElementById("income").value;
    let income = preFormattedIncome.replace(/[^\d.-]/g, '');

    if (income < 0) {
        document.getElementById("total").innerHTML = (0.00).toFixed(2);
    } else if (income >= 0 && income < 27050) {
        let incomeTax = income * 0.15;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 27050 && income < 65550) {
        let incomeTax = 4057.50 + ((income - 27050) * 0.275);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 65550 && income < 136750) {
        let incomeTax = 14654 + ((income - 65550) * 0.305);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 136750 && income < 297350) {
        let incomeTax = 36361 + ((income - 136750) * 0.355);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else {
        let incomeTax = 93374 + ((income - 297350) * 0.391);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    }
}