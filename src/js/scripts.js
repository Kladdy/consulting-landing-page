// This file is intentionally blank
// Use this file to add JavaScript to your project

// Brightness toggle
// $(function() {
//     $('#darkmode-toggle-event').on("change", function() {
//         if ($(this).prop('checked')) {
//             document.body.className = "bg-dark text-white";
//         } else {
//             document.body.className = "bg-white text-dark";
//         }
//     })
// })

// // Function to check if element is fully in view
// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// // // Function to check if element is partly in viewport NOT FINISHED
// // function isScrolledIntoView(elem, fraction) {
// //     var docViewTop = $(window).scrollTop();

// //     var elemTop = $(elem).offset().top;
// //     var elemHeight = $(elem).height()

// //     return (elemTop >= docViewTop));
// // }

// let amount_of_animated_areas_boxes = 0;
// let handled_areas_boxes = [false, false, false]

// $(window).on("scroll", function () {
//     if (handled_areas_boxes.includes(false)) {
//         $('.areas-boxes').each(function (idx, value) {
//             if (handled_areas_boxes[idx] == false && isScrolledIntoView(this) === true) {
//                 handled_areas_boxes[idx] = true

//                 const animation_class_to_use = (idx + 1 - amount_of_animated_areas_boxes).toString()

//                 $(this).addClass('areas-boxes-animation' + animation_class_to_use);

//                 console.log('areas-boxes-animation' + animation_class_to_use)

//                 setTimeout(() => {
//                     amount_of_animated_areas_boxes += 1;
//                 }, 1000);
//             }
//         });
//     }
// });

// // Can also use  $() instead of $(document).ready()
// // $(function () {
// //     $('.areas-boxes').each(function (value, idx) {
// //         if (isScrolledIntoView(this) === true) {
// //             console.log(value)
// //             console.log(idx)
// //             console.log($(this))

// //             console.log(amount_of_animated_areas_boxes)
// //             $(this).addClass('areas-boxes-animation1');
// //             setTimeout(() => {
// //                 amount_of_animated_areas_boxes += 1;
// //                 console.log(amount_of_animated_areas_boxes)
// //             }, 1000);

// //         }
// //     });
// // });

