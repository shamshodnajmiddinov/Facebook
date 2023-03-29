let arrow = [0, 5, 4, 8, 5, 3, 8, 0, 5]

let grid = document.querySelector(".grid")

function reload(arr) {
    // grid.innerHTML = ""
    for (let item of arr) {
        let elem = document.createElement('div')
        let div_button = document.createElement("div")
        let todosTitle = document.createElement('h3')
        let todos_subtitle = document.createElement('p')
        let todos_button = document.createElement("button")



        elem.classList.add('elem')
        todosTitle.classList.add('todos_title')
        todos_subtitle.classList.add('todos_subtitle')
        todos_button.classList.add('todos_button')
        div_button.classList.add("div_button")

        todos_button.innerText = "Подробнее"

        div_button.append(todos_button)
        elem.append(todosTitle, todos_subtitle, div_button)
        grid.append(elem)

    }
}

reload(arrow)