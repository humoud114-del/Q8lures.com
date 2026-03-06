// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add to Cart functionality
    const cartButtons = document.querySelectorAll('.add-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            const price = this.closest('.product-card').querySelector('.price').textContent;
            
            // Show alert
            alert(`${productName} (${price}) has been added to your cart!`);
            
            // Optional: Add animation
            this.style.backgroundColor = '#28a745';
            this.textContent = '✓ Added!';
            
            setTimeout(() => {
                this.style.backgroundColor = '';
                this.textContent = 'Add to Cart';
            }, 2000);
        });
    });

    // CTA Button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Social Links - Open in new tab
    document.querySelectorAll('.social-links a').forEach(link => {
        link.setAttribute('target', '_blank');
    });
});