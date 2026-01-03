document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const appFrame = document.getElementById('app-frame');
    const defaultAppUrl = navLinks.length > 0 ? navLinks[0].href : 'about:blank';

    // Function to set the active link
    function setActiveLink(link) {
        // Remove 'active' class from all links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        // Add 'active' class to the clicked link
        if (link) {
            link.classList.add('active');
        }
    }

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const appUrl = this.href;
            
            // Load the new app into the iframe
            appFrame.src = appUrl;

            // Set the clicked link as active
            setActiveLink(this);
        });
    });

    // Load the first app by default and set it as active
    if (navLinks.length > 0) {
        appFrame.src = defaultAppUrl;
        setActiveLink(navLinks[0]);
    }
});
