let optionsTimeout; // Variabilă pentru a stoca timeout-ul

document.getElementById('camping-type').addEventListener('mouseenter', function() {
  clearTimeout(optionsTimeout); // Curăță timeout-ul anterior dacă există

  showOption('tent-camping');
  showOption('caravan-camping');
  showOption('overlanding');
  showOption('glamping');
});

document.getElementById('camping-type').addEventListener('mouseleave', function() {
  optionsTimeout = setTimeout(() => {
    hideOption('tent-camping');
    hideOption('caravan-camping');
    hideOption('overlanding');
    hideOption('glamping');
  }, 300); // Setează delay-ul la 300 de milisecunde (poate fi ajustat după necesitate)
});

function showOption(optionId) {
  var option = document.getElementById(optionId);
  option.style.opacity = '1';
  option.style.visibility = 'visible';
}

function hideOption(optionId) {
  var option = document.getElementById(optionId);
  option.style.opacity = '0';
  option.style.visibility = 'hidden';
}
