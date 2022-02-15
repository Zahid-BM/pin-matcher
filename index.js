
// To generate 6 digits pin 
function getPin() {
    const pin = Math.round(Math.random() * 1000000);
    const pinToString = pin + ''; /* as number has no length but string has so if we want to get the length of a number we must convert that number into string */
    if (pinToString.length == 6) {
        return pin;
    }
    else {
        return getPin(); /* this is for recursion untill if condition gets true */
    }
}
// for onclick attribute 
function generatePin() {
    const generatedPin = getPin();
    const getInputPin = document.getElementById('input-pin');
    getInputPin.value = generatedPin;
}
// Event deligation bubbling process to get input digits from calculator 
document.getElementById('digits').addEventListener('click', function (event) {
    const getClickedDigit = event.target;
    const getDisplayInput = document.getElementById('display-digit');
    getDisplayInput.value = getClickedDigit.innerText;

})