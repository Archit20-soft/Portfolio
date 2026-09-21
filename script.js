// Select navigation links and page sections
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

// Add active effect when navigation links are clicked
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Update active navigation link while scrolling
window.addEventListener("scroll", function () {
    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Open certificate popup
function openCertificate(imageSource) {
    const lightbox = document.getElementById("certLightbox");
    const preview = document.getElementById("certificatePreview");

    preview.src = imageSource;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}

// Close certificate popup
function closeCertificate(event) {
    if (event && event.target.id === "certificatePreview") {
        return;
    }

    const lightbox = document.getElementById("certLightbox");
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
}

// Close certificate popup with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const lightbox = document.getElementById("certLightbox");
        lightbox.classList.remove("show");
        document.body.style.overflow = "";
    }
});

// Handle contact form submission
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been submitted.");
}