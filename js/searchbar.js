// document.getElementById("search-bar").addEventListener("keyup", search)

function search(){
    let searchBar = document.getElementById("search-bar").value
    searchBar = searchBar.toLowerCase()
    let animals = document.getElementsByClassName('animal')

    for (animal of animals){
        if (!animal.innerHTML.toLowerCase().includes(searchBar)) {
            animal.style.display="none";
        }
        else {
            animal.style.display="list-item";                 
        }
    }

}