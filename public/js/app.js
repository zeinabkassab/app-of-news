// var form = document.getElementById('myForm')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     formData()
//     form.reset()
// })


let formData = async() => {

    const res = await fetch('http://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=9766753375a64b608e931cfa151c00ca')
    const data = await res.json()
    console.log(data)
    if (data.error) {
        document.getElementById('error').textContent = data.error
        document.getElementById('imgcard').textContent = ''
        document.getElementById('titlecard').textContent = ''
        document.getElementById('descriptioncard').textContent = ''
    } else {
        document.getElementById('imgcard').textContent = data.imgcard
        document.getElementById('titlecard').textContent = data.titlecard
        document.getElementById('descriptioncard').textContent = data.descriptioncard
        document.getElementById('error').textContent = ''
    }
}
formData()