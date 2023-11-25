// NAVIGATION BAR - SEARCH INPUT
document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('focus', function() {
      this.removeAttribute('placeholder');
  });

  searchInput.addEventListener('blur', function() {
      this.setAttribute('placeholder', 'Search a dataset...');
  });
});

// CITATION POP-UP
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal")
    closeModal(modal)
  })
})

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active")
  modals.forEach(modal => {
    closeModal(modal)
  })
})
function openModal(modal) {
  if (modal == null) return
  modal.classList.add("active")
  overlay.classList.add("active")
}

function closeModal(modal) {
  modal.classList.remove("active")
  overlay.classList.remove("active")
}



// copy citation
const copyButton = document.getElementById('copyButton');
  const modalBodyText = document.querySelector('.modal-body').innerText;

  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(modalBodyText)
  });