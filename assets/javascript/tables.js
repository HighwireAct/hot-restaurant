// OVERVIEW:
// 1. Grab arrays from api/waitlist and api/tables
// 2. Iterate through array in tables, creating divs to hold
//    the order number
// 3. Iterate through array in waitlist, do the same

// GET tables and store arrays in variables
let waitlist = [];
let tables = [];

/**
 * 
 * @param {string} targetElement - ID of element to render reservation to
 * @param {number} index - Order of reservation in the list
 * @param {string} name - Name of person or party making reservation
 */
function renderHTMLReservation(targetElement, index, name) {
    // Create HTML reservation element
    let reservation = $("div").attr("class", "well");

    let reserveHead = $("h2");
    reserveHead.text(` | ${name}`);

    let reserveNumber = $("span").attr("class", "label label-primary");
    reserveNumber.text(index);

    reserveHead.prepend(reserveNumber);
    reservation.append(reserveHead);
    $(`#${targetElement}`).append(reservation);
}

/**
 * Generates reservations elements from a list of objects
 * and appends them to a target element
 * @param {array} list - List to pull reservations from
 * @param {string} parentElement - ID of parent element to append list items to
 */
function generateReservationList(list, targetElement) {
    // Iterate through list and append HTML elements for each
    // object in the list
    for (let i = 1; i <= list.length; i++) {
        renderHTMLReservation(targetElement, i, list[i - 1].customerName)
    }
}