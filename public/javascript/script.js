const contactModal = document.querySelector(".contact-us");
const modal = document.querySelector(".contact-modal");
const exitContact = document.querySelector(".ph-arrow-left-light");
const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".mobile");
const exitMenu = document.querySelector(".ph-x");
const blurScreen = document.querySelector(".blur-screen");

const menuHandler = () => {
  menu.classList.add("show");
};

const exitHandler = () => {
  menu.classList.remove("show");
};

const exitContactHandler = () => {
  modal.classList.remove("display-modal");
  blurScreen.style.display = "none";
};

toggleMenu.addEventListener("click", menuHandler);
exitMenu.addEventListener("click", exitHandler);

contactModal.addEventListener("click", () => {
  modal.classList.add("display-modal");
  blurScreen.style.display = "block";
});

exitContact.addEventListener("click", exitContactHandler);

/* Toastr Notification */
function success(msg){
    toastr.success(msg, 'Notification', {timeOut: 10000, closeButton: true, progressBar: true})
}

function error(msg){
  toastr.error(msg, 'Error', {timeOut: 10000, closeButton: true, progressBar: true})
}

function warning(msg){
  toastr.warning(msg, 'Warning', {timeOut: 10000, closeButton: true, progressBar: true})
}

function info(msg){
  toastr.info(msg, 'Info', {timeOut: 10000, closeButton: true, progressBar: true})
}
/* */

/* Registration */

$('.submit-plan').click(function(e){
  e.preventDefault();

  let fullname = $('#name').val();
  let email = $('#e-mail').val();
  let role = $('.role:checked').val()

  $('.submit-plan').attr('disabled', true)


  $.ajax({
    url: `https://rehbox-waitlist.onrender.com/v1/join-waitlist`,
    method: "POST",
    data: {fullname, email, role},
    success: function(data){
      $('.register').trigger("reset")
      $('.submit-plan').attr('disabled', false);
      success(data.message);
    },
    error: function(jqXHR, exception) {
      if (jqXHR.status === 0) {
        error('Not connect.\n Verify Network.');
      } else if (jqXHR.status === 404) {
        error('An Error Occured!, Try Again[404].');
      } else if (jqXHR.status === 500) {
        error('An Error xOccurred!, Try Again[500].');
      } else if (exception === 'parsererror') {
        error('Requested JSON parse failed.');
      } else if (exception === 'timeout') {
        error('Time out error.');
      } else if (exception === 'abort') {
        error('Ajax request aborted.');
      } else {
        let message = JSON.parse(jqXHR.responseText)
        error(message.message);
      }
    }
  })
})

$('.submit-contact').click(function(e) {
  e.preventDefault();

  let name = $('#c-name').val();
  let email = $('#c_e-mail').val();
  let message = $('#message').val()

  $('.submit-contact').attr('disabled', true)


  $.ajax({
    url: `https://rehbox-waitlist.onrender.com/sendmail`,
    method: "POST",
    data: {name, email, message},
    success: function (data) {
      $('.submit-contact').trigger("reset")
      $('.contact-form').attr('disabled', false)
      success(data.message)
    },
    error: function (jqXHR, exception) {
      if (jqXHR.status === 0) {
        error('Not connect.\n Verify Network.');
      } else if (jqXHR.status === 404) {
        error('An Error Occurred!, Try Again[404].');
      } else if (jqXHR.status === 500) {
        error('An Error Occured!, Try Again[500].');
      } else if (exception === 'parsererror') {
        error('Requested JSON parse failed.');
      } else if (exception === 'timeout') {
        error('Time out error.');
      } else if (exception === 'abort') {
        error('Ajax request aborted.');
      } else {
        let message = JSON.parse(jqXHR.responseText)
        error(message.message);
      }
    }
  })
})
/* End */
