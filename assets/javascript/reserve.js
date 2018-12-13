$(".submit").on("click", function() {
    var newReservation = {
        customerName: $("#reserve_name").val().trim(),
        phone: $("#reserve_phone").val().trim(),
        email: $("#reserve_email").val().trim(),
        uniqueID: $("#reserve_uniqueID").val().trim()
    }
    console.log(newReservation);

    var currentURL = window.location.origin;

	    $.post(currentURL + "/api/tables", newReservation,
	    function(data){

	    	// If a table is available... tell user they are booked.
	    	if(data == true){
	    		alert("Your reservation is confirmed. You get a table")
	    	}

	    	// If a table is available... tell user they on the waiting list.
	    	if(data == false){
	    		alert("Sorry, but you made the waitlist!")
	    	}

	    	// Clear the form when submitting
    		$('#reserve_name').val("");
			$('#reserve_phone').val("");
			$('#reserve_email').val("");
			$('#reserve_uniqueID').val("");

	    });

return false;

});