function switchCSS() {
    debugger;
    if (document.getElementById('css').getAttribute('href') === 'style.css') {
        document.getElementById('css').setAttribute('href', 'altStyle.css');
    } else {
        document.getElementById('css').setAttribute('href', 'style.css');
    }
    
}