
let checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']")); 
let galleryGrid = document.getElementById("gallery-grid");  
for (const checkbox of checkboxes){
    galleryGrid.classList.add(checkbox.id);
} 


checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.addEventListener("change", () => filterCards());
}); 


function filterCards() {
    let checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
    let checked = Array.from(document.querySelectorAll("input[type='checkbox']:checked"));
    if (checked.length === 0) {
        for (const checkbox of checkboxes){
            galleryGrid.classList.add(checkbox.id);
        }
    } else {
        for (const checkbox of checkboxes){
            checkbox.checked ?
                galleryGrid.classList.add(checkbox.id) :
                galleryGrid.classList.remove(checkbox.id);
        }

    } 
} 


