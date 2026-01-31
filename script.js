document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Hamburger Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Active Link Highlight ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Typing Animation (Only on Home Page) ---
    const typingElement = document.querySelector('.typing-text');

    if (typingElement) {
        const texts = ["Full-Stack Developer", "Management Student"];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];

            // Logic to type and delete
            // Using a simple CSS animation approach is easier, 
            // but here is a pure JS implementation requested.

            letter = currentText.slice(0, ++index);
            typingElement.textContent = letter;

            if (letter.length === currentText.length) {
                // Pause at end of word
                setTimeout(() => {
                    // Simple deletion logic visualization or just jump to next for simplicity
                    // To implement backspace effect:
                    let deleteInterval = setInterval(() => {
                        index--;
                        typingElement.textContent = currentText.slice(0, index);
                        if (index === 0) {
                            clearInterval(deleteInterval);
                            count++;
                            type();
                        }
                    }, 50);
                }, 2000);
            } else {
                setTimeout(type, 100);
            }
        })();
    }
});