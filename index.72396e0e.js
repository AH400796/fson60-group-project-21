new Swiper(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});(()=>{const e={logo:document.querySelector("[data-logo]"),discount:document.querySelector("[data-discount]")};e.logo.addEventListener("click",(function(){e.logo.classList.toggle("animated"),e.discount.classList.toggle("animated")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn1:document.querySelector("[data-modal-open1]"),openModalBtn2:document.querySelector("[data-modal-open2]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.openModalBtn1.addEventListener("click",t),e.openModalBtn2.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={radioBtn1:document.querySelector("[data-payment1]"),radioBtn2:document.querySelector("[data-payment2]"),disabledButton:document.querySelector("[data-disabled-button]"),openModal2Btn:document.querySelector("[data-modal2-open]"),closeModal2Btn:document.querySelector("[data-modal-close2]"),modal:document.querySelector("[data-modal]"),modal2:document.querySelector("[data-modal2]"),modal3:document.querySelector("[data-modal-appear]")};function t(){e.disabledButton.removeAttribute("disabled")}e.closeModal2Btn.addEventListener("click",(function(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden"),e.modal2.classList.toggle("is-close"),e.modal3.classList.toggle("is-open")})),e.openModal2Btn.addEventListener("click",(function(){e.modal2.classList.toggle("is-close")})),e.openModal2Btn.addEventListener("click",(function(){e.modal3.classList.toggle("is-open")})),e.radioBtn1.addEventListener("click",t),e.radioBtn2.addEventListener("click",t)})(),(()=>{const e={dishChoise:document.querySelector("[data-dish-is-checked]"),dishChoise1:document.querySelector("[data-dish-is-checked1]"),dishChoise2:document.querySelector("[data-dish-is-checked2]"),dishChoise3:document.querySelector("[data-dish-is-checked3]"),dishChoise4:document.querySelector("[data-dish-is-checked4]"),dishChoise5:document.querySelector("[data-dish-is-checked5]"),dishChoise6:document.querySelector("[data-dish-is-checked6]"),dishChoise7:document.querySelector("[data-dish-is-checked7]"),dishChoise8:document.querySelector("[data-dish-is-checked8]"),quantity:document.querySelector("[data-quantity]"),quantity1:document.querySelector("[data-quantity1]"),quantity2:document.querySelector("[data-quantity2]"),quantity3:document.querySelector("[data-quantity3]"),quantity4:document.querySelector("[data-quantity4]"),quantity5:document.querySelector("[data-quantity5]"),quantity6:document.querySelector("[data-quantity6]"),quantity7:document.querySelector("[data-quantity7]"),quantity8:document.querySelector("[data-quantity8]"),checkedDish:document.querySelector("[data-checked-dish]"),checkedDish1:document.querySelector("[data-checked-dish1]"),checkedDish2:document.querySelector("[data-checked-dish2]"),checkedDish3:document.querySelector("[data-checked-dish3]"),checkedDish4:document.querySelector("[data-checked-dish4]"),checkedDish5:document.querySelector("[data-checked-dish5]"),checkedDish6:document.querySelector("[data-checked-dish6]"),checkedDish7:document.querySelector("[data-checked-dish7]"),checkedDish8:document.querySelector("[data-checked-dish8]"),disabledButton:document.querySelector("[data-modal2-open]")};e.dishChoise.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity.classList.toggle("available"),e.checkedDish.classList.toggle("checked")})),e.dishChoise1.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity1.classList.toggle("available"),e.checkedDish1.classList.toggle("checked")})),e.dishChoise2.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity2.classList.toggle("available"),e.checkedDish2.classList.toggle("checked")})),e.dishChoise3.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity3.classList.toggle("available"),e.checkedDish3.classList.toggle("checked")})),e.dishChoise4.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity4.classList.toggle("available"),e.checkedDish4.classList.toggle("checked")})),e.dishChoise5.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity5.classList.toggle("available"),e.checkedDish5.classList.toggle("checked")})),e.dishChoise6.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity6.classList.toggle("available"),e.checkedDish6.classList.toggle("checked")})),e.dishChoise7.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity7.classList.toggle("available"),e.checkedDish7.classList.toggle("checked")})),e.dishChoise8.addEventListener("click",(function(){e.disabledButton.removeAttribute("disabled"),e.quantity8.classList.toggle("available"),e.checkedDish8.classList.toggle("checked")}))})();const{height:e}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${e}px`;
//# sourceMappingURL=index.72396e0e.js.map
