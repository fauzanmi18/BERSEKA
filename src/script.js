const hamburger = document.querySelector('#hamburger')
const bottomNav = document.querySelector('#bottom-nav')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('animate-pulse')
    bottomNav.classList.toggle('hidden')
})

//toggle bottom nav
const moreBtn = document.querySelector('#more-button')
const more = document.querySelector('#more')
moreBtn.addEventListener('click', () => {
    more.classList.toggle('hidden')
})

//active menu navbar
document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll('.font-circular-circular');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
             // Hapus kelas aktif dari semua item
             menuItems.forEach(function (menuItem) {
                menuItem.classList.remove('border-b-2', 'border-b-primary', 'opacity-50');
            });

            // Tambahkan kelas aktif ke item yang diklik
            item.classList.add('border-b-2', 'border-b-primary');

            menuItems.forEach(function (menuItem) {
                if (menuItem !== item) {
                    menuItem.classList.add('opacity-50');
                }
            });
        });

        item.addEventListener('mouseover', function () {
            item.classList.add('hover:border-b-2', 'hover:border-b-primary', 'hover:text-primary');
        });

        item.addEventListener('mouseout', function () {
            item.classList.remove('hover:border-b-2', 'hover:border-b-primary', 'hover:text-primary');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('.nav-bottom-menu');

    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Hapus kelas aktif dari semua item
            menuItems.forEach(function (menuItem) {
               menuItem.classList.remove('opacity-50');
           });

           // Tambahkan kelas aktif ke item yang diklik
           item.classList.add('opacity-100');

           menuItems.forEach(function (menuItem) {
               if (menuItem !== item) {
                   menuItem.classList.add('opacity-50');
               }
           });
       });

       item.addEventListener('mouseover', function () {
           item.classList.add('hover:opacity-100');
       });

       item.addEventListener('mouseout', function () {
           item.classList.remove('hover:opacity-100');
       });
    });
});