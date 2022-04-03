/*!
* Start Bootstrap - Landing Page v6.0.4 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
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