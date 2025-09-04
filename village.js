function openModal(card) {
      const title = card.getAttribute("data-title");
      const description = card.getAttribute("data-description");
      document.getElementById("modal-title").textContent = title;
      document.getElementById("modal-description").textContent = description;
      document.getElementById("barangay-modal").style.display = "block";
    }
    function closeModal() {
      document.getElementById("barangay-modal").style.display = "none";
    }
    window.onclick = function(event) {
      const modal = document.getElementById("barangay-modal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }