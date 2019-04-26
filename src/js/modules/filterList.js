// Module to filter a list from text input
// Classname is the class of the items you wish to filter
// inputID is the id of the input you want to filter from
export default function filterList(className, inputID) {
    function filterListListener() {
        // Declare variables
        let input = document.getElementById(inputID);

        if (input) {
            let filter = input.value.toUpperCase();
            let elements = document.getElementsByClassName(className);
            if (elements) {
                elements = [...elements];

                // Loop through all list items, and hide those who don't match the search query
                elements.forEach(function(element) {
                    let txtValue = element.textContent || element.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        element.style.display = '';
                    } else {
                        element.style.display = 'none';
                    }
                });
            }
        }
    }

    document.addEventListener('keyup', function(event) {
        event.preventDefault();
        filterListListener();
    });
}
