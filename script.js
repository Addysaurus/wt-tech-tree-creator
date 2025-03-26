const tree_types = document.getElementsByClassName('tree-type')
let selected_tree_type = 'ground-forces'
for (let i = 0; i < tree_types.length; i++) {
    tree_types[i].addEventListener('click', () => {
        if (document.getElementById(selected_tree_type)){
            document.getElementById(selected_tree_type).classList.remove('tree-type-selected')
        }
        selected_tree_type = tree_types[i].id
        document.getElementById(selected_tree_type).classList.add('tree-type-selected')
    })
}

const navbar_options = document.getElementsByClassName('navbar-option')
let selected_navbar_option
for (let i = 0; i < navbar_options.length; i++) {
    navbar_options[i].addEventListener('click', () => {
        if (document.getElementById(selected_navbar_option)){
            document.getElementById(selected_navbar_option).classList.remove('navbar-option-selected')
        }
        selected_navbar_option = navbar_options[i].id
        document.getElementById(selected_navbar_option).classList.add('navbar-option-selected')
    })
}

// Navbar modals

// Add vehicle modal
const add_vehicle_modal = document.getElementById('add-vehicle-modal')
const add_vehicle_open_btn = document.getElementById('add-vehicle-open-btn')
const add_vehicle_close_btn = document.getElementById('add-vehicle-close-btn')

add_vehicle_open_btn.addEventListener('click', () => {
    add_vehicle_modal.style.display = 'block'
    document.getElementById('modal-bg-overlay').style.display = 'block'
})

add_vehicle_close_btn.addEventListener('click', () => {
    add_vehicle_modal.style.display = 'none'
    document.getElementById('add-vehicle-open-btn').classList.remove('navbar-option-selected')
    document.getElementById('modal-bg-overlay').style.display = 'none'
})