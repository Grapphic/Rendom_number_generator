document.getElementById('generateBtn').addEventListener('click', function() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Display the random number
    document.getElementById('randomNumber').textContent = 'Random Number: ' + randomNumber;
  });
  