import $ from 'jquery';

const pgh1 = $('<p>').text('Holberton Dashboard');
const pgh2 = $('<p>').text('Dashboard data for the students');
const pgh3 = $('<p>').text('Copyright - Holberton School');

$('body').append(pgh1, pgh2, pgh3);