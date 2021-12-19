document.getElementById('searchBtn').addEventListener('click', function() {
    var reg = document.getElementById('regPlate').value;

    if (reg == "") {
        void(0);
    } else {
        console.log('redirecting...');
        chrome.tabs.update({url: 'https://www.parkers.co.uk/car-specs/confirm/'+reg});
    }
});