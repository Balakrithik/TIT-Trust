      document.addEventListener('DOMContentLoaded', function() {
    // Declare all variables once
    const detailsSection = document.getElementById('details-section');
    const confirmSection = document.getElementById('confirm-section');
    const donationForm = document.getElementById('donation-form');
    const goBackButton = document.getElementById('go-back-button');
    const sendMoneyButton = document.getElementById('send-money-button');
    const floatingCard = document.getElementById('floating-card');
    const closeCardButton = document.getElementById('close-card-button');

    // Function to show a section with animation
    function showSection(section) {
        section.classList.remove('hidden');
        section.classList.add('fade-in');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to hide a section
    function hideSection(section) {
        section.classList.add('hidden');
        section.classList.remove('fade-in');
    }

    // Update confirmation details on form submission
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(donationForm);
        document.getElementById('confirm-email').textContent = formData.get('email');
        document.getElementById('confirm-first-name').textContent = formData.get('first-name');
        document.getElementById('confirm-last-name').textContent = formData.get('last-name');
        document.getElementById('confirm-phone').textContent = formData.get('phone');
        document.getElementById('confirm-email-details').textContent = formData.get('email');
        document.getElementById('confirm-address').textContent = `${formData.get('street')}, ${formData.get('city')}, ${formData.get('state')} ${formData.get('zipcode')}`;
        document.getElementById('confirm-message').textContent = formData.get('message');
        
        const amount = parseFloat(formData.get('amount')).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById('confirm-amount').textContent = amount;
        document.getElementById('confirm-total').textContent = amount;

        hideSection(detailsSection);
        showSection(confirmSection);
    });

    // Show floating card when "Send Money" is clicked
    sendMoneyButton.addEventListener('click', function() {
        floatingCard.classList.remove('hidden');
    });

    // Close floating card and show failure message
    closeCardButton.addEventListener('click', function() {
        floatingCard.classList.add('hidden');
        alert('Transaction failed or canceled.'); // Failure message
    });

    // Handle "Go Back" button click
    goBackButton.addEventListener('click', function() {
        floatingCard.classList.add('hidden');
        hideSection(confirmSection);
        showSection(detailsSection);
        alert('Transaction canceled by the user.'); // Failure message
    });

    // Simulate a successful transaction (customize this part if needed)
    // This part simulates success when the floating card is clicked
    floatingCard.addEventListener('click', function(event) {
        if (event.target.id === 'send-money-button') {
            floatingCard.classList.add('hidden');
            alert('Transaction successful!');
            // You can dynamically show a success section here
        }
    });
});


// Get DOM elements
const floatingCard = document.getElementById('floating-card');
const sendMoneyButton = document.getElementById('send-money-button');
const closeCardButton = document.getElementById('close-card-button');
const submitScreenshotButton = document.getElementById('submit-screenshot-button');
const paymentScreenshotInput = document.getElementById('payment-screenshot');

// Show floating card when Send Money is clicked
sendMoneyButton.addEventListener('click', function() {
    floatingCard.classList.remove('hidden');
});

// Handle close card (failure case)
closeCardButton.addEventListener('click', function() {
    floatingCard.classList.add('hidden');
    alert('Transaction canceled by the user.');
});

// Handle screenshot submission
submitScreenshotButton.addEventListener('click', function() {
    const file = paymentScreenshotInput.files[0];
    
    if (!file) {
        alert('Please upload a payment screenshot before submitting.');
        return;
    }

    // Simulate screenshot verification process
    // You can implement actual file upload logic here
    floatingCard.classList.add('hidden');
    alert('Payment screenshot submitted successfully. Your transaction will be verified shortly.');
    
    // Proceed to show the success section or confirmation message
    showSuccessMessage();
});

// Function to show success message (you can customize this)
function showSuccessMessage() {
    alert('Transaction successful! Thank you for your donation.');
    // Additional logic to update the DOM for success state can go here
}


    const form = document.getElementById('donation-form');
    const detailsSection = document.getElementById('details-section');
    const confirmSection = document.getElementById('confirm-section');

    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevents form submission
        detailsSection.classList.add('hidden');
        confirmSection.classList.remove('hidden');
    });

    // Event listener for the 'Send Money' button in the confirmation section
document.getElementById('send-money-button').addEventListener('click', function() {
  // Get the amount from the confirmation section
  const amount = document.getElementById('confirm-amount').innerText;
  const email = document.getElementById('confirm-email-details').innerText;

  // Update the success section with the fetched amount and email
  document.getElementById('success-amount').innerText = amount;
  document.getElementById('success-email').innerText = email;

  // Hide the confirmation section and show the success section
  document.getElementById('confirm-section').classList.add('hidden');
  document.getElementById('success-section').classList.remove('hidden');
});


  document.addEventListener("DOMContentLoaded", function() {
      const floatingCard = document.getElementById('floating-card');
      const successSection = document.getElementById('success-section');
      const submitScreenshotBtn = document.getElementById('submit-screenshot'); // Ensure this button exists in your HTML
  
      // Initially hide the success section
      successSection.classList.add('hidden');
  
      // Show the floating card initially (if desired)
      floatingCard.classList.remove('hidden'); // Remove this line if the floating card opens through another button
  
      // Event listener for the submit screenshot button
      submitScreenshotBtn.addEventListener('click', function() {
          floatingCard.classList.add('hidden');    // Hide the floating card
          successSection.classList.remove('hidden'); // Show the success section
          successSection.classList.add('fade-in'); // Apply the fade-in animation
      });
  });
