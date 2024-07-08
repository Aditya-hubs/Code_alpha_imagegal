document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");

    document.querySelectorAll(".Image img").forEach(function(img) {
        img.addEventListener("click", function() {
            popupImage.src = img.src;
            popup.style.display = "flex";
        });
    });

    popup.addEventListener("click", function(e) {
        if (e.target !== popupImage) {
            closePopup();
        }
    });
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}



function filterImages(category) {
    const images = document.querySelectorAll('.Gallery .Image');
    if (category === 'all') {
        images.forEach(image => {
            image.style.display = 'inline-block';
        });
    } else {
        images.forEach(image => {
            if (image.classList.contains(category)) {
                image.style.display = 'inline-block';
            } else {
                image.style.display = 'none';
            }
        });
    }
}




function searchImages() {
    const searchTerm = document.getElementById("searchTerm").value.toLowerCase();
    const images = document.querySelectorAll(".Image img");

    images.forEach(img => {
        const keywords = img.getAttribute("data-keyword").toLowerCase();
        if (keywords.includes(searchTerm)) {
            img.style.display = "inline";
        } else {
            img.style.display = "none";
        }
    });
}

// document.addEventListener("DOMContentLoaded", function() {
//     const imageFolder = 'img/'; // Folder where images are stored
//     const imageCount = 48; // Total number of images (adjust accordingly)
//     let currentIndex = 1;

//     const galleryImage = document.getElementById('galleryImage');
//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');

//     function updateImage() {
//         galleryImage.src = `${imageFolder}image${currentIndex}.jpg`;
//     }

//     prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + imageCount) % imageCount;
//         if (currentIndex === 0) currentIndex = imageCount;
//         updateImage();
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex % imageCount) + 1;
//         updateImage();
//     });
// });


