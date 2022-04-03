// This file is intentionally blank
// Use this file to add JavaScript to your project

// Brightness toggle
$(function() {
    $('#darkmode-toggle-event').on("change", function() {
        if ($(this).prop('checked')) {
            document.body.className = "bg-dark text-white";
        } else {
            document.body.className = "bg-white text-dark";
        }
    })
})