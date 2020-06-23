//                                                                                feedback modal interactive
let feedback_section = document.querySelector(".feedback-modal-section");
let open_fb_button = document.querySelector(".feedback-button");
let close_fb_button = document.querySelector(".feedback-close-button");

let fb_username_input = document.querySelector(".feedback-modal-section .name-input");
let fb_email_input = document.querySelector(".feedback-modal-section .email-input");
let fb_form = document.querySelector(".feedback-form");

let storage_username = localStorage.getItem("UserName");
let storage_access = true;
try{
  storage_username;
} catch (err) {
  storage_access = false;
}

open_fb_button.addEventListener("click", function(e){
  e.preventDefault();
  feedback_section.classList.add("popped");
  if (storage_username) {
    fb_username_input.value = storage_username;
    fb_email_input.focus();
  } else {
    fb_username_input.focus();
  }
});
close_fb_button.addEventListener("click", function(e){
  e.preventDefault();
  feedback_section.classList.remove("error");
  feedback_section.classList.remove("popped");
})
window.addEventListener("keydown", function(e){
  if (e.keyCode === 27 && feedback_section.classList.contains("popped")) {
    feedback_section.classList.remove("popped");
    feedback_section.classList.remove("error");
  }
})

//                                                                                feedback submit interactive

fb_form.addEventListener("submit", function(e) {
  if (!fb_username_input.value || !fb_email_input.value) {
  e.preventDefault();
  feedback_section.classList.remove("error");
  feedback_section.offsetWidth = feedback_section.offsetWidth;
  feedback_section.classList.add("error");
} else {
    e.preventDefault();
    if (storage_access) {
      localStorage.setItem("UserName", fb_username_input.value);
    }
  }
});

//                                                                                map modal interactive
let mapSection = document.querySelector(".map-modal-section");
let openMapArea = document.querySelector(".map-unfold");
let closeMapButton = document.querySelector(".map-close-button");

openMapArea.addEventListener("click", function(e){
  e.preventDefault();
  mapSection.classList.add("popped");
});
closeMapButton.addEventListener("click", function(e){
  e.preventDefault();
  mapSection.classList.remove("popped");
})
window.addEventListener("keydown", function(e){
  if (e.keyCode === 27 && mapSection.classList.contains("popped")) {
    mapSection.classList.remove("popped");
  }
})

//                                                                                features slider interactive
let delivery_button = document.querySelector(".delivery-button");
let guarantee_button = document.querySelector(".guarantee-button");
let credit_button = document.querySelector(".credit-button");

let delivery_info = document.querySelector(".delivery-info");
let guarantee_info = document.querySelector(".guarantee-info");
let credit_info = document.querySelector(".credit-info");

guarantee_button.addEventListener("click", function(e){
  if (!guarantee_button.classList.contains("current-button")) {
    e.preventDefault();

    guarantee_button.classList.add("current-button");
    guarantee_info.classList.add("current-info");

    delivery_button.classList.remove("current-button");
    delivery_info.classList.remove("current-info");

    credit_button.classList.remove("current-button");
    credit_info.classList.remove("current-info");
  }
})
delivery_button.addEventListener("click", function(e){
  if (!delivery_button.classList.contains("current-button")) {
    e.preventDefault();

    delivery_button.classList.add("current-button");
    delivery_info.classList.add("current-info");

    guarantee_button.classList.remove("current-button");
    guarantee_info.classList.remove("current-info");

    credit_button.classList.remove("current-button");
    credit_info.classList.remove("current-info");
  }
})
credit_button.addEventListener("click", function(e){
  if (!credit_button.classList.contains("current-button")) {
    e.preventDefault();

    credit_button.classList.add("current-button");
    credit_info.classList.add("current-info");

    guarantee_button.classList.remove("current-button");
    guarantee_info.classList.remove("current-info");

    delivery_button.classList.remove("current-button");
    delivery_info.classList.remove("current-info");
  }
})

//                                                                                ad slider interactive
let first_toggle = document.querySelector(".slider-controls .first-button");
let second_toggle = document.querySelector(".slider-controls .second-button");
let third_toggle = document.querySelector(".slider-controls .third-button");

let first_slide = document.querySelector(".slides .slide-1");
let second_slide = document.querySelector(".slides .slide-2");
let third_slide = document.querySelector(".slides .slide-3");

first_toggle.addEventListener("click", function(e){
  if (!first_toggle.classList.contains("current-button")) {
    e.preventDefault();

    first_toggle.classList.add("current-button");
    first_slide.classList.add("current-slide");

    second_toggle.classList.remove("current-button");
    second_slide.classList.remove("current-slide");

    third_toggle.classList.remove("current-button");
    third_slide.classList.remove("current-slide");
    }
});
second_toggle.addEventListener("click", function(e){
  if (!second_toggle.classList.contains("current-button")) {
    e.preventDefault();

    second_toggle.classList.add("current-button");
    second_slide.classList.add("current-slide");

    first_toggle.classList.remove("current-button");
    first_slide.classList.remove("current-slide");

    third_toggle.classList.remove("current-button");
    third_slide.classList.remove("current-slide");
    }
});
first_toggle.addEventListener("click", function(e){
  if (!first_toggle.classList.contains("current-button")) {
    e.preventDefault();

    first_toggle.classList.add("current-button");
    first_slide.classList.add("current-slide");

    second_toggle.classList.remove("current-button");
    second_slide.classList.remove("current-slide");

    third_toggle.classList.remove("current-button");
    third_slide.classList.remove("current-slide");
    }
});
third_toggle.addEventListener("click", function(e){
  if (!third_toggle.classList.contains("current-button")) {
    e.preventDefault();

    third_toggle.classList.add("current-button");
    third_slide.classList.add("current-slide");

    first_toggle.classList.remove("current-button");
    first_slide.classList.remove("current-slide");

    second_toggle.classList.remove("current-button");
    second_slide.classList.remove("current-slide");
    }
});

//                                                                                v1.1 features slider interactive
// let features_buttons = document.querySelectorAll(".features-names button");
// let features_infos = document.querySelectorAll(".features-description li");
// for(i = 0; i < features_buttons.length; i++) {
//   features_buttons[i].addEventListener('click', function(e){
//     for(k = 0; k < features_buttons.length; k++) {
//       if (features_buttons[k].contains("current-button")) {
//           features_buttons[k].remove("current-button")
//       }
//     };
//     if (!e.target.classList.contains("current-button")) {
//       e.preventDefault();
//       e.target.classList.add("current-button");
//     }
//     for(q = 0; q < features_infos.length; q++) {
//       if (features_infos[q].classList.contains("current-info")) {
//         features_infos[q].classList.remove("current-info");
//       }
//         };
//     for(j = 0; j < features_infos.length; j++) {
//       if (!features_infos[j].classList.contains("current-info")
//         && features_infos[j].classList.contains(features_buttons[j].classList[0].slice(0, -7) + "-info")) {
//            features_infos[j].classList.add("current-info");
//       };
//     }
//   })
// };
