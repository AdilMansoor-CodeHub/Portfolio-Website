// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Function to open a new page in a new tab
    function openInNewTab(page) {
        window.open(page, '_blank');
    }

    // Handle "Contact Me" button click
    document.querySelector('.intro button').addEventListener('click', function () {
        openInNewTab('#contact-loc'); // Opens the contact section in a new tab
    });

    // Handle "See More" buttons in the portfolio section
    const portfolioButtons = document.querySelectorAll('.portfolio-card .overlay button');
    portfolioButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            switch (index) {
                case 0:
                    openInNewTab('physics.html'); // Replace with the actual page
                    break;
                case 1:
                    openInNewTab('zombie.html');
                    break;
                case 2:
                    openInNewTab('renderer.html');
                    break;
                case 3:
                    openInNewTab('shepherds.html');
                    break;
                case 4:
                    openInNewTab('hunter.html');
                    break;
                case 5:
                    openInNewTab('nasa.html');
                    break;
                case 6:
                    openInNewTab('gym.html');
                    break;
                case 7:
                    openInNewTab('todo.html');
                    break;
                case 8:
                    openInNewTab('amazon.html');
                    break;
                default:
                    alert('Page not found!');
            }
        });
    });

    // Handle "View More" button click in the portfolio section
    document.querySelector('.portfolio section button').addEventListener('click', function () {
        openInNewTab('/portfolio.html'); // Replace with your "View More" page URL
    });

    // Handle navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Handle search icon click
    document.querySelector('.search i').addEventListener('click', function () {
        const searchText = document.querySelector('.search input').value;
        alert(`Search functionality not implemented yet. You searched for: ${searchText}`);
        // Implement search functionality as needed
    });
});
