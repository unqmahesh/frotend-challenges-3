const faqQuestions = document.querySelectorAll(".faq__question")
const faqAnswers = document.querySelectorAll(".faq__answer")
const faq = document.querySelectorAll(".faq-card__faq")

let i

for(i=0; i < faq.length; i++){
      faq[i].addEventListener('click', (event)=>{
            // faqAnswers[i].classList.toggle('faq__answer--active')
            const answer = event.target.nextElementSibling
            answer.classList.toggle('faq__answer--active')
      })
}