async function main(){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(displayBooks)
    console.log(books)
}


function displayBooks(books){
    let root = document.querySelector('#root')
    let li = document.createElement('li')
    li.textContent = books.title
    let amountOfBooks = document.createElement('input')
    amountOfBooks.value = books.quantity
    let submitButton = document.createElement('button')
    submitButton.textContent = 'Save'

    submitButton.addEventListener('click', function(){
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: books.id,
                quantity: amountOfBooks.value
            })
        })
    })

    li.append(amountOfBooks, submitButton)
    root.append(li)
}

main()