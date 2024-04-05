var nav = document.querySelector('#nav');
var right = nav.querySelector('.right');
var loginlog = right.querySelectorAll('span');
var loginbox = document.querySelector('#loginbox');
var yearbox = document.querySelector('#yearbox');

loginlog[0].onclick = function () {
    loginbox.classList.add('show');
}

loginlog[1].onclick = function () {
    loginbox.classList.add('show');
}

var closelog1 = loginbox.querySelector('.close');
closelog1.onclick = function () {
    loginbox.classList.remove('show');
}
var closelog2 = yearbox.querySelector('.close');
closelog2.onclick = function () {
    yearbox.classList.remove('show');
}
var year = document.querySelector('.year');
year.onclick = function () {
    yearbox.classList.add('show');
}