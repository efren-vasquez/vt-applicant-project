/*==========================================

Displays the URL with the values the user selected
in the gift form.

==========================================*/

function logURL(){
    var giftAmount       = document.querySelector('input[name=giftAmount]:checked').value;
    var giftFrequency    = document.querySelector('input[name=giftFrequency]:checked').value;
    var otherGiftAmount  = document.getElementById('otherGiftAmount').value;
    var siteURL          = window.location.href;

    //Removes #main if user uses skip to main content link
    siteURL              = siteURL.replace('#main','')
    
    //If other gift amount is larger than 10,000 the form will not process
    if(otherGiftAmount > 10000){
        return false
    }

    /*
        If the other gift amount is empty then use the values from the selected gift amount to create URL.
        Else use the other gift amount user enters into input field to create URL
    */

    if(otherGiftAmount == ''){
        console.log(siteURL + 'index.html?giftAmount=' + giftAmount + '&giftFrequency=' + giftFrequency)
    }else{
        console.log(siteURL + 'index.html?giftAmount=' + otherGiftAmount + '&giftFrequency=' + giftFrequency)
    }

     /* Prevents form from submitting and reloading the page. This was done due to the instructions saying the 
    form doesn't have to process */
    event.preventDefault();
}

/*==========================================

Clears the "Enter Gift Amount Field" if a radio
button is selected for gift amount.

==========================================*/

document.getElementById("giftAmount").onclick = function() {clearOtherGift()};

function clearOtherGift() {
    document.getElementById('otherGiftAmount').value='';
}