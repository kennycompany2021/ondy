document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenuCloseButton = document.getElementById('mobileMenuCloseButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.add('active');
            if (mobileOverlay) mobileOverlay.classList.remove('hidden');
        });
    }

    if (mobileMenuCloseButton) {
        mobileMenuCloseButton.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.add('hidden');
        });
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.add('hidden');
        });
    }
    
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');

            if (answer.classList.contains('hidden')) {
                // Hide all other answers
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    if (!ans.classList.contains('hidden')) {
                        ans.classList.add('hidden');
                        ans.previousElementSibling.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
                    }
                });
                // Show clicked answer
                answer.classList.remove('hidden');
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                answer.classList.add('hidden');
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });

    // Scholarships Page Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabId) {
        // Hide all tab contents
        tabContents.forEach(tab => {
            tab.style.display = 'none';
        });

        // Remove active class from all buttons
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Show selected tab and set active button
        const tabToShow = document.getElementById(tabId + '-tab');
        const buttonToActivate = document.querySelector(`.tab-button[data-tab='${tabId}']`);

        if(tabToShow) {
            tabToShow.style.display = 'block';
        }
        if(buttonToActivate) {
            buttonToActivate.classList.add('active');
        }
    }
    
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                const tabId = event.currentTarget.getAttribute('data-tab');
                showTab(tabId);
            });
        });

        // Initially show the first tab
        showTab('government');
    }

    // Active Navigation Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Check for exact match or if it's a scholarship detail page
        if (currentPath.includes(linkPath) || (currentPath.includes('scholarship-detail') && linkPath.includes('scholarships.html'))) {
            link.classList.add('active');
        }
    });
}); 