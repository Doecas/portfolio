
// Scroll effect for navigation links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for header height
                behavior: "smooth",
            });
        }
    });
});

// Form button click effect
const submitButton = document.querySelector("form button");

submitButton.addEventListener("click", () => {
    alert("Merci pour votre message ! Nous reviendrons vers vous sous peu.");
});

// Hover effect for gallery images
const galleryImages = document.querySelectorAll(".galerie-container img");

galleryImages.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1) rotate(2deg)";
        image.style.transition = "transform 0.5s ease, box-shadow 0.3s ease";
        image.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
    });

    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1) rotate(0deg)";
        image.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    });
});