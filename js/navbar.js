let modalActive = 0

document.getElementById("navbar-menu").addEventListener("click", modalToggle)

function modalToggle(){
    if(!modalActive){
        document.getElementById("navbar-menu").style.display = "flex"
        modalActive++
    } else{
        document.getElementById("navbar-menu").style.display = "none"
        modalActive--
    }
}

export {modalToggle}