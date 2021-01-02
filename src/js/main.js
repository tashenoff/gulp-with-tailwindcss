

//модальные окна

// document.addEventListener('click', function (e) {
//   e = e || window.event;
//   var target = e.target || e.srcElement;

//   e.preventDefault();

//   if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
//       if (target.hasAttribute('data-target')) {
//           var m_ID = target.getAttribute('data-target');
//           document.getElementById(m_ID).classList.add('open');
//       }
//   }

//   // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
//   if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
//       var modal = document.querySelector('[class="modal open"]');
//       modal.classList.remove('open');
//   }
// }, false);




const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
