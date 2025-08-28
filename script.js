
document.addEventListener("DOMContentLoaded", function () {
  let currentPage = window.location.pathname.split("/").pop();

  if (!currentPage) {
    currentPage = "home.html";
  }

  let links = document.querySelectorAll(".navTitles a");

  links.forEach(link => {
    let href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.querySelector(".sendMessage");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
      alert("⚠️ Please Fill all The feilds");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("⚠️ Plaese Enter a valid Email");
      return;
    }

    formMessage.style.display = "block";

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      subject: subjectInput.value,
      message: messageInput.value
    };
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    console.log("Form submitted:", formData);

    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  console.log("buyTicket: init");

  const buttons = document.querySelectorAll(".buyTicket");
  console.log("buyTicket: found", buttons.length, "buttons");

  if (!buttons.length) return;

  buttons.forEach((button, index) => {

    const ticketName = button.closest(".ticketCart")?.querySelector("h3")?.innerText?.trim() || `ticket-${index}`;
    const storageKey = `ticketState_${ticketName}`;

    let savedState = localStorage.getItem(storageKey);
    if (!savedState) {
      savedState = "buy";
      localStorage.setItem(storageKey, savedState);
    }
    button.dataset.state = savedState;
    updateButtonAppearance(button);

    button.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.dataset.state === "buy") {
        alert(`✅ You have successfully purchased the "${ticketName}"`);
        this.dataset.state = "purchased";
      } else if (this.dataset.state === "purchased") {
        alert(`❌ "${ticketName}" has been removed from your purchases.`);
        this.dataset.state = "buy";
      }

      localStorage.setItem(storageKey, this.dataset.state);
      updateButtonAppearance(this);
    });
  });

  function updateButtonAppearance(btn) {
    const state = btn.dataset.state;
    btn.classList.remove("bt-buy", "bt-purchased");

    if (state === "buy") {
      btn.textContent = "Buy Now!";
      btn.classList.add("bt-buy");
    } else if (state === "purchased") {
      btn.textContent = "Purchased";
      btn.classList.add("bt-purchased");
    }
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const formInputs = document.querySelectorAll("input, textarea");

  formInputs.forEach((input, index) => {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const nextInput = formInputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        } else {
          document.querySelector(".sendMessage")?.click();
        }
      }
    });
  });
});
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.stayUpdated').forEach(section => {
    const form = section.querySelector('form');
    const emailInput = section.querySelector('input[type="email"]');
    const btn = section.querySelector('.stayUpdatedButton');

    if (!emailInput || !btn) return;

    let msg = section.querySelector('.subscribe-msg');
    if (!msg) {
      msg = document.createElement('p');
      msg.className = 'subscribe-msg';
      Object.assign(msg.style, {
        display: 'none',
        color: '#30db06ff',
        marginBottom:"20px",
        fontWeight: '500',
        fontSize:"25px",
      });
      btn.insertAdjacentElement('afterend', msg);
    }

    function handleSubscribe() {
      const email = (emailInput.value || '').trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        alert('⚠️Please Enter Your Email!');
        emailInput.focus();
        return;
      }
      if (!emailRegex.test(email)) {
        alert('⚠️Please Enter a valid Email!');
        emailInput.focus();
        return;
      }

      msg.innerHTML = `✅ You have successfully subscribed!<br>You will be contacted via "<strong>${email}</strong>".`;
      msg.style.display = 'block';
      btn.textContent = 'Subscribed';

    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        handleSubscribe();
      });
    }

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      handleSubscribe();
    });
  });
});

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  const btn  = document.querySelector('.andMore');
  const icon = btn.querySelector('.arrow1');

  btn.addEventListener('mouseenter', () => {
    icon.src = 'Icons/arrow2.png';
  });

  btn.addEventListener('mouseleave', () => {
    icon.src = 'Icons/arrow.png';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const btn  = document.querySelector('.andMore2');
  const icon = btn.querySelector('.arrow1');

  btn.addEventListener('mouseenter', () => {
    icon.src = 'Icons/arrow2.png';
  });

  btn.addEventListener('mouseleave', () => {
    icon.src = 'Icons/arrow.png';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const btn  = document.querySelector('.ticketCart');
  const icon = btn.querySelector('.arrow1');

  btn.addEventListener('mouseenter', () => {
    icon.src = 'Icons/arrowDark.png';
  });

  btn.addEventListener('mouseleave', () => {
    icon.src = 'Icons/arrow.png';
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const btn  = document.querySelector('.ticketCart2');
  const icon = btn.querySelector('.arrowN2');

  btn.addEventListener('mouseenter', () => {
    icon.src = 'Icons/arrowDark.png';
  });

  btn.addEventListener('mouseleave', () => {
    icon.src = 'Icons/arrow.png';
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const btn  = document.querySelector('.ticketCart3');
  const icon = btn.querySelector('.arrowN3');

  btn.addEventListener('mouseenter', () => {
    icon.src = 'Icons/arrowDark.png';
  });
  btn.addEventListener('mouseleave', () => {
    icon.src = 'Icons/arrow.png';
  });
});
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {

  const leftArrow  = document.querySelector('.arrowleft');
  leftArrow.addEventListener('mouseenter', () => {
    leftArrow.src = 'Icons/arrowLeftHover.png';
  });
  leftArrow.addEventListener('mouseleave', () => {
    leftArrow.src = 'Icons/arrowLeft.png';
  });


  const rightArrow = document.querySelector('.arrow1Right');
  rightArrow.addEventListener('mouseenter', () => {
    rightArrow.src = 'Icons/arrowRightHover.png';
  });
  rightArrow.addEventListener('mouseleave', () => {
    rightArrow.src = 'Icons/arrowRight.png';
  });
});

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const cards = Array.from(document.querySelectorAll('.pastAttendeesSection .cartAttend'));
  const prevBtn = document.querySelector('.arrowleft');
  const nextBtn = document.querySelector('.arrow1Right');

  let current = 0;

  function layout() {

    cards.forEach(c => c.classList.remove('is-current','is-prev','is-next','is-rest'));

    const n = cards.length;
    const prev = (current - 1 + n) % n;
    const next = (current + 1) % n;


    cards[current].classList.add('is-current');
    cards[prev].classList.add('is-prev');
    cards[next].classList.add('is-next');

    cards.forEach((c, i) => {
      if (i !== current && i !== prev && i !== next) c.classList.add('is-rest');
    });
  }
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % cards.length;
    layout();
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    layout();
  });

  layout();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {

    const savedTime = localStorage.getItem('countdownTime');

    let days, hours, minutes;

    if (savedTime) {
        const timeData = JSON.parse(savedTime);
        days = timeData.days;
        hours = timeData.hours;
        minutes = timeData.minutes;

        const savedTimestamp = timeData.timestamp;
        const now = new Date().getTime();
        const elapsedMinutes = Math.floor((now - savedTimestamp) / 60000);

        if (elapsedMinutes > 0) {
            minutes -= elapsedMinutes;

            while (minutes < 0) {
                minutes += 60;
                hours -= 1;

                if (hours < 0) {
                    hours += 24;
                    days -= 1;

                    if (days < 0) {
                        days = 0;
                        hours = 0;
                        minutes = 0;
                        break;
                    }
                }
            }
            if (days < 0) days = 0;
            if (hours < 0) hours = 0;
            if (minutes < 0) minutes = 0;
        }
    } else {
        days = 12;
        hours = 5;
        minutes = 30;
    }
    updateDisplay(days, hours, minutes);

    const countdownInterval = setInterval(function() {
        minutes--;


        if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
                hours = 23;
                days--;

                if (days < 0) {
                    clearInterval(countdownInterval);
                    days = 0;
                    hours = 0;
                    minutes = 0;

                    localStorage.removeItem('countdownTime');
                    updateDisplay(days, hours, minutes);
                    console.log("Countdown finished!");
                    return;
                }
            }
        }
        saveTime(days, hours, minutes);
        updateDisplay(days, hours, minutes);

    }, 60000);
    function updateDisplay(d, h, m) {
        document.getElementById("days").textContent = String(d).padStart(2, "0");
        document.getElementById("hours").textContent = String(h).padStart(2, "0");
        document.getElementById("minutes").textContent = String(m).padStart(2, "0");
    }
    function saveTime(d, h, m) {
        const timeData = {
            days: d,
            hours: h,
            minutes: m,
            timestamp: new Date().getTime()
        };
        localStorage.setItem('countdownTime', JSON.stringify(timeData));
    }
});
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollHome", window.scrollY);
});

window.addEventListener("load", () => {
  const savedScroll = localStorage.getItem("scrollHome");
  if (savedScroll) {
    window.scrollTo(0, savedScroll);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
