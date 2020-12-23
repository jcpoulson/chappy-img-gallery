const galleryImgs = document.querySelector('.row');
const modalImg = document.querySelector('.modal-body')

galleryImgs.addEventListener("click", function(event) {
    if (event.target.id == "gallery-img") {
        modalImg.innerHTML = `<img src="${event.target.src}" alt="modal picture" class="modal-pic">`
    }
})