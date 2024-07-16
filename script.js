function selectPlan(element, planName) {
    document.querySelectorAll('.plan-card').forEach(card => card.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('selectedPlan').value = planName;
}

function selectCoS(element, cosName) {
    document.querySelectorAll('.cos-option').forEach(option => option.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById('selectedCoS').value = cosName;
}

document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        selectedPlan: document.getElementById('selectedPlan').value,
        selectedCoS: document.getElementById('selectedCoS').value,
        message: document.getElementById('message').value
    };
    console.log(JSON.stringify(formData, null, 2));
    alert('Thank you for your interest. We will get back to you soon.');
});

document.addEventListener('DOMContentLoaded', function() {
    const planCards = document.querySelectorAll('.plan-card');
    const cosOptions = document.querySelectorAll('.cos-option');
    const selectedPlanDropdown = document.getElementById('selectedPlan');
    const selectedCoSDropdown = document.getElementById('selectedCoS');

    function updateSelectedState(elements, selectedValue) {
        elements.forEach(element => {
        if (element.textContent.trim().includes(selectedValue)) {
            element.classList.add('selected');
        } else {
            element.classList.remove('selected');
        }
        });
    }

    selectedPlanDropdown.addEventListener('change', function() {
        updateSelectedState(planCards, this.value);
    });

    selectedCoSDropdown.addEventListener('change', function() {
        updateSelectedState(cosOptions, this.value);
    });

    planCards.forEach(card => {
        card.addEventListener('click', function() {
        const planName = this.querySelector('h3').textContent.trim();
        selectedPlanDropdown.value = planName;
        updateSelectedState(planCards, planName);
        });
    });

    cosOptions.forEach(option => {
        option.addEventListener('click', function() {
        const cosName = this.querySelector('h3').textContent.trim();
        selectedCoSDropdown.value = cosName;
        updateSelectedState(cosOptions, cosName);
        });
    });
});

document.getElementById('addressInput').addEventListener('input', function(e) {
    // add logic to integrate with the NBN address checker API
    // For now, we'll just log the input
    // replace the console.log statement with the appropriate API call and handle the response to determine eligibility.
    console.log('Address input:', e.target.value);
});

    // navbar script
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navItems = document.querySelector('.nav-items');
        const navButtons = document.querySelector('.nav-buttons');
        const dropdowns = document.querySelectorAll('.dropdown');
      
        mobileMenuToggle.addEventListener('click', function() {
          this.classList.toggle('active');
          navItems.classList.toggle('active');
          navButtons.classList.toggle('active');
        });
      
        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
              e.preventDefault();
              this.classList.toggle('active');
              const dropdownContainer = this.querySelector('.dropdown-container');
              if (this.classList.contains('active')) {
                dropdownContainer.style.maxHeight = dropdownContainer.scrollHeight + "px";
              } else {
                dropdownContainer.style.maxHeight = 0;
              }
            }
          });
        });
      
        window.addEventListener('resize', function() {
          if (window.innerWidth > 768) {
            mobileMenuToggle.classList.remove('active');
            navItems.classList.remove('active');
            navButtons.classList.remove('active');
            dropdowns.forEach(dropdown => {
              dropdown.classList.remove('active');
              dropdown.querySelector('.dropdown-container').style.maxHeight = '';
            });
          }
        });
      });