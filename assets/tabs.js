function openCalculator(evt, calculatorName) {
    var i, tabcontent, tablinks;

    // Get the infoNotice and note elements
    var infoNotice = document.querySelector('.infoNotice');
    var note = document.querySelector('.note');

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(calculatorName).style.display = "block";
    evt.currentTarget.className += " active";

    // Set display properties based on active tab
    if (calculatorName === 'infoTab') {
        infoNotice.style.display = 'block';
        note.style.display = 'none';
    } else {
        infoNotice.style.display = 'none';
        note.style.display = 'block';
    }
}