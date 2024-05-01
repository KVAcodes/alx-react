import "../css/main.css";
import $ from "jquery";
import _ from 'lodash';

let count = 1;
const pgh1 = $('<p>').text('Holberton Dashboard');
const pgh2 = $('<p>').text('Dashboard data for the students');
const bt1 = $('<button>').text('Click here to get started');
const pgh3 = $('<p>')
const pgh4 = $('<p>').text('Copyright - Holberton School');
const img1 = $('<div>')

function updateCounter() {
    // check if the p with id count is empty or containing a count,
    // if empty - add "1 clicks on the buttton"
    // if not empty - extract the count {first set of numbers until a whitespace is found}
    //              - then change the string to "{count+1} click on the button"
    if (pgh3.text() == "") {
        pgh3.text(`${count} clicks on the button`);
    } else {
        count = count + 1;
        pgh3.text(`${count} clicks on the button`);
    }
}

pgh3.attr('id', 'count')
img1.attr('id', 'logo')
$('body').append(pgh1, pgh2, bt1, pgh3, pgh4);

bt1.on('click', _.debounce(updateCounter, 500));
$('body').prepend(img1);