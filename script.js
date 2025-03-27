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

document.addEventListener("DOMContentLoaded", function () {
    let weaponCount = 1; // Tracks the number of weapons
    const weaponList = document.getElementById("weapon-list"); 
    const addWeaponBtn = document.getElementById("add-weapon");

    function createWeaponElement(number) {
        // Create weapon container
        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add("modal-subcontainer");

        // Create section title
        const weaponTitle = document.createElement("h3");
        weaponTitle.classList.add("modal-section-title");
        weaponTitle.textContent = `Weapon ${number}`;

        // Create Name field
        const nameDiv = document.createElement("div");
        const nameLabel = document.createElement("label");
        nameLabel.classList.add("modal-form-label");
        nameLabel.setAttribute("for", `weapon-name-${number}`);
        nameLabel.textContent = "Name: ";
        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("id", `weapon-name-${number}`);
        nameDiv.appendChild(nameLabel);
        nameDiv.appendChild(nameInput);

        // Create Caliber field
        const caliberDiv = document.createElement("div");
        const caliberLabel = document.createElement("label");
        caliberLabel.classList.add("modal-form-label");
        caliberLabel.setAttribute("for", `weapon-caliber-${number}`);
        caliberLabel.textContent = "Caliber (mm): ";
        const caliberInput = document.createElement("input");
        caliberInput.setAttribute("type", "number");
        caliberInput.setAttribute("id", `weapon-caliber-${number}`);
        caliberInput.setAttribute("class", `form-number-entry`);
        caliberDiv.appendChild(caliberLabel);
        caliberDiv.appendChild(caliberInput);

        // Create Amount field
        const amountDiv = document.createElement("div");
        const amountLabel = document.createElement("label");
        amountLabel.classList.add("modal-form-label");
        amountLabel.setAttribute("for", `weapon-amount-${number}`);
        amountLabel.textContent = "Amount: ";
        const amountInput = document.createElement("input");
        amountInput.setAttribute("type", "text");
        amountInput.setAttribute("id", `weapon-amount-${number}`);
        amountInput.setAttribute("class", `form-number-entry`);
        amountDiv.appendChild(amountLabel);
        amountDiv.appendChild(amountInput);

        // Create Ammo Count field
        const ammoDiv = document.createElement("div");
        const ammoLabel = document.createElement("label");
        ammoLabel.classList.add("modal-form-label");
        ammoLabel.setAttribute("for", `weapon-ammo-count-${number}`);
        ammoLabel.textContent = "Ammunition count: ";
        const ammoInput = document.createElement("input");
        ammoInput.setAttribute("type", "text");
        ammoInput.setAttribute("id", `weapon-ammo-count-${number}`);
        ammoInput.setAttribute("class", `form-number-entry`);
        ammoDiv.appendChild(ammoLabel);
        ammoDiv.appendChild(ammoInput);

        // Create Remove Button
        const removeBtn = document.createElement("button");
        removeBtn.setAttribute("type", "button");
        removeBtn.classList.add("remove-weapon");
        removeBtn.innerHTML = "🗙";
        removeBtn.addEventListener("click", function () {
            removeWeapon(weaponDiv);
        });

        // Append elements to the weapon div
        weaponDiv.appendChild(weaponTitle);
        weaponDiv.appendChild(nameDiv);
        weaponDiv.appendChild(caliberDiv);
        weaponDiv.appendChild(amountDiv);
        weaponDiv.appendChild(ammoDiv);
        weaponDiv.appendChild(removeBtn);

        return weaponDiv;
    }

    addWeaponBtn.addEventListener("click", function () {
        weaponCount++; // Increment weapon count
        const newWeapon = createWeaponElement(weaponCount);
        weaponList.appendChild(newWeapon);
    });

    function removeWeapon(weaponElement) {
        weaponElement.remove(); // Remove the element

        // Renumber remaining weapons
        const weaponEntries = weaponList.getElementsByClassName("modal-subcontainer");
        weaponCount = 0; // Reset count
        Array.from(weaponEntries).forEach((weapon, index) => {
            weaponCount++;
            weapon.querySelector("h3").textContent = `Weapon ${weaponCount}`;
            weapon.querySelector("label[for^='weapon-name']").setAttribute("for", `weapon-name-${weaponCount}`);
            weapon.querySelector("input[id^='weapon-name']").setAttribute("id", `weapon-name-${weaponCount}`);
            weapon.querySelector("label[for^='weapon-caliber']").setAttribute("for", `weapon-caliber-${weaponCount}`);
            weapon.querySelector("input[id^='weapon-caliber']").setAttribute("id", `weapon-caliber-${weaponCount}`);
            weapon.querySelector("label[for^='weapon-amount']").setAttribute("for", `weapon-amount-${weaponCount}`);
            weapon.querySelector("input[id^='weapon-amount']").setAttribute("id", `weapon-amount-${weaponCount}`);
            weapon.querySelector("label[for^='weapon-ammo-count']").setAttribute("for", `weapon-ammo-count-${weaponCount}`);
            weapon.querySelector("input[id^='weapon-ammo-count']").setAttribute("id", `weapon-ammo-count-${weaponCount}`);
        });
    }

    // Enable removal of the first weapon
    document.querySelector(".remove-weapon").addEventListener("click", function () {
        removeWeapon(this.parentElement);
    });
})