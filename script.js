var responsive_btn = document.querySelector('.mobile_btn');
var side_bar = document.querySelector('.side_bar');
var active_nav = document.querySelectorAll('.nav');
var cursor1 = document.querySelector('.cursor1');
var cursor = document.querySelector('.cursor');
var bod = document.querySelector('body');
var btn = document.querySelector('.fa-ellipsis-vertical');
// Cursor style 
document.addEventListener('mousemove', (dets) => {
    cursor1.style.left = dets.x + 'px'
    cursor1.style.top = dets.y + 'px'
    cursor1.style.transition = '.2s'
    cursor.style.left = dets.x + 'px'
    cursor.style.top = dets.y + 'px'
    cursor.style.transition = ".3s"
})


// Nav bar style 
responsive_btn.addEventListener('click', function () {
    side_bar.classList.toggle('menu_active');
    btn.style.transform = ' rotateZ(88deg)'
})


// NavLink style 
active_nav.forEach(navlink => {

    // Custome cursor style with zoom effect
    navlink.addEventListener('mousemove', function () {
        cursor1.style.scale = 3;
        cursor1.style.backgroundColor = '#ee843979';
        cursor1.style.border = 'none';
        cursor.style.display = 'none'
    })

    navlink.addEventListener('mouseleave', function () {
        cursor1.style.scale = 1;
        cursor1.style.backgroundColor = 'transparent';
        cursor.style.display = 'flex'
        cursor1.style.border = '1px solid #CD7825';

    })
    // End Custome cursor style 

    navlink.addEventListener('click', function () {
        // active_nav.preventDefault()
        active_nav.forEach(link => {
            link.classList.remove('nav_active');
            this.classList.add('nav_active');
        })
    })
})

