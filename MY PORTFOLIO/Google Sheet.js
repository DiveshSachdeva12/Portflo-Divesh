const scriptURL = 'https://script.google.com/macros/s/AKfycbyKfHxgg5dWWal7RqC4ELEcrDvVyMkB52S-PQ2I9qJvYZlLz-3_2jdsTGZwPdKaM7UpKA/exec'


const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

