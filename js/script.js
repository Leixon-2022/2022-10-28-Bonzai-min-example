const footer = document.querySelector('.generic-footer')
fetch('../components/footer.html')
  .then(res => res.text())
  .then(data => {
    footer.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
  })

const header = document.querySelector('.generic-header')
fetch('../components/header.html')
  .then(res => res.text())
  .then(data => {
    header.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
  })