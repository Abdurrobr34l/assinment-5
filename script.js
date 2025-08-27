//* REUSEABLE FUNCTIONS
function getElementById(id) {
  return document.getElementById(id)
}
function getElementsByClassName(className) {
  return document.getElementsByClassName(className)
}

//* 1: HOTLINE HEART COUNTER
const heartCounter = getElementById('heart-counter');
const hotlineHearts = getElementsByClassName('hotline-heart');

for (let heart of hotlineHearts) {
  heart.addEventListener('click', function () {
    let heartCount = parseInt(heartCounter.innerText);

    if (heart.classList.contains('fa-regular')) {
      heartCounter.innerText = heartCount + 1
      heart.classList.remove('fa-regular')
      heart.classList.add('fa-solid')
      heart.style.color = "red"
    } else {
      heartCounter.innerText = heartCount - 1
      heart.classList.remove('fa-solid')
      heart.classList.add('fa-regular')
      heart.style.color = "#5C5C5C"
    }

  })

}

//* 2: HOTLINE NUMBER COPY COUNTER & COPY HOTLINE NUMBER
const copyiedCounter = getElementById('copied-number-counter');
const hotlineNumbers = getElementsByClassName('hotline-phone-number');
const copyButtons = getElementsByClassName('hotline-copy-button');

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener('click', function () {

    //? COPY HOTLINE
    let number = hotlineNumbers[i].innerText;
    alert("Copied Number: " + number);
    navigator.clipboard.writeText(number)

    //? COPY COUNTER
    let counterValue = parseInt(copyiedCounter.innerText);
    copyiedCounter.innerText = counterValue + 1

  })
}

//* 3: CALL BUTTON
const goToCallHistoryButton = getElementById('call-history-button');

const coniHave = getElementById('coin-counter');
const serviceName = getElementsByClassName('hotline-service-name');
const callButton = getElementsByClassName('hotline-call-button');

const hotlineService = getElementsByClassName('hotline-service-name');
const hotlineNumber = getElementsByClassName('hotline-phone-number');

const callHistoryParent = getElementById('call-history-parent');
const clearHistoryButton = getElementById('clear-button');

for (let i = 0; i < callButton.length; i++) {

  callButton[i].addEventListener('click', function () {
    goToCallHistoryButton.classList.remove('hidden');

    let coin = parseInt(coniHave.innerText)
    if (coin >= 20) {
      alert(`📞 Calling ${serviceName[i].innerText} ${hotlineNumbers[i].innerText}`);
      let newBalance = coin - 20
      coniHave.innerText = newBalance


      let newHistory = document.createElement('div');
      newHistory.innerHTML = `
         <div class="p-4 bg-[#FAFAFA] rounded-lg">
              <h6 class="text-lg font-semibold text-[#111111]">
              ${hotlineService[i].innerText}</h6>
              <p class="flex justify-between text-[#5C5C5C]">
                ${hotlineNumber[i].innerText}
                <span class="text-[#111111]">
                ${new Date().toLocaleTimeString()}</span>
              </p>
            </div>
      `
      callHistoryParent.prepend(newHistory);


    } else {
      alert('❌ Insufficient Balance');
    }

  })



}

clearHistoryButton.addEventListener('click', function () {
  callHistoryParent.innerHTML = "";
  goToCallHistoryButton.classList.add('hidden');
})