let donate = document.querySelector(".jumbotron");
let btnVolunteer = document.querySelector(".volunteer");
let btnDonate = document.querySelector(".donate");

let email = document.querySelector("#exampleInputEmail1");
let name = document.querySelector("#example-text-input");
let textArea = document.querySelector("#exampleTextarea");

let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
let btnSutmit = document.querySelector(".submit");

blueBtn.addEventListener("click", () => {
  donate.style.backgroundColor = `#588fbd`;
  btnDonate.style.backgroundColor = `#ffa500`;
  btnVolunteer.style.backgroundColor = `black`;
  btnVolunteer.style.color = `white`;
});

orangeBtn.addEventListener("click", () => {
  donate.style.backgroundColor = `#f0ad4e`;
  btnDonate.style.backgroundColor = `#5751fd`;
  btnVolunteer.style.backgroundColor = `#31b0d5`;
  btnVolunteer.style.color = `white`;
});

greenBtn.addEventListener("click", () => {
  donate.style.backgroundColor = `#87ca8a`;
  btnDonate.style.backgroundColor = `#ffa500`;
  btnVolunteer.style.backgroundColor = `black`;
  btnVolunteer.style.color = `#8c9c08`;
});

btnSutmit.addEventListener("click", (event) => {
    let data = [name, email, textArea];
    console.log(`${data[0].value}   ${data[1].value}   ${data[2].value}`);
    data.map((element) => {
        if(element.value == 0){
            element.style.backgroundColor = `Red`;
            return false;
        }
        else{
            element.style.backgroundColor = `white`;
            return true;
        }
    });

    if (data[0].Value != 0 && data[2].value != 0 && /\S+@\S+/.test(data[1].value)) {
        data.forEach(element => element.value = '');
        alert('Thank you for filling out the form!');
    }
    event.preventDefault();
});
