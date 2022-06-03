const quoteText = document.querySelector('.quote')

const randomQuote = () => {
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerHTML = result.content
    })
}
quoteText.addEventListener('click', randomQuote)
