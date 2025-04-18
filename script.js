function submitRSVP(response) {
  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter your name");
    return;
  }

  // Close modal & show confirmation
  document.getElementById('id01').style.display = 'none';
  document.getElementById('confirmationPopup').style.display = 'flex';
  document.getElementById('responseMessage').innerText =
    response === 'going'
      ? `Thank you for confirming your attendance, ${name}!`
      : `Sorry you can't make it, ${name}.`;

  // Clear input
  nameInput.value = '';

  const formData = {
    Name: name,
    Response: response
  };

  // 🔗 Replace with your actual working Web App URL here:
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxmMq0z45t0ISNKUMGmV8HQtdgDuCK1AAobTXdNXCplcL8vHPF9TLMgMezBKf8EW0C7vA/exec';

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.text())
  .then(text => {
    console.log("Server response:", text);
  })
  .catch(error => {
    console.error("Error!", error.message);
    alert("There was an error submitting your RSVP. Please try again later.");
  });
}


function closeConfirmationPopup() {
  document.getElementById('confirmationPopup').style.display = 'none';
}
