// Module to filter a list from text input
export default function filterList(ulID, inputID) {
    function filterListListener() {
        // Declare variables
        let input = document.getElementById(inputID);
        let filter = input.value.toUpperCase();
        let ul = document.getElementById(ulID);
        let lis = ul.getElementsByTagName('li');
        lis = [...lis];

        // Loop through all list items, and hide those who don't match the search query
        lis.forEach(function(li) {
            let a = li.getElementsByClassName('beer-name')[0];
            let txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        });
    }

    document.addEventListener('keyup', function(event) {
        event.preventDefault();
        filterListListener();
    });
}
