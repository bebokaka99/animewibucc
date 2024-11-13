// Khởi tạo chỉ số cho thanh_truot
let currentIndex = 0;

// Hàm di chuyển thanh_truot
function moveSlide(direction) {
    const slides = document.querySelector('.thanh_truot-content');
    if (!slides) return; // Nếu không tìm thấy thanh_truot, thoát khỏi hàm

    const totalSlides = slides.children.length;
    const slideWidth = slides.children[0].offsetWidth - 75;

    // Cập nhật chỉ số hiện tại
    currentIndex += direction;

    // Đảm bảo chỉ số không vượt quá phạm vi
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Di chuyển slide
    slides.style.transition = 'transform 0.3s ease';
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Tự động di chuyển thanh_truot mỗi 1.5 giây
function autoSlide() {
    setInterval(() => moveSlide(1), 1500);
}
// Tự động chạy thanh_truot khi trang tải
document.addEventListener('DOMContentLoaded', autoSlide);
// Lấy các phần tử
const hamburgerMenu = document.querySelector('.menu_ba_gach');
const sideMenu = document.getElementById('menu_ben');
const closeBtn = document.getElementById('nut_dong');

// Mở menu khi nhấn vào nút menu_ba_gach
hamburgerMenu.addEventListener('click', () => {
    // Kiểm tra nếu menu đang mở
    if (sideMenu.classList.contains('open')) {
        // Đóng menu
        sideMenu.classList.remove('open');
        document.body.style.overflow = ''; // Bật lại cuộn trang
    } else {
        // Mở menu
        sideMenu.classList.add('open');
        document.body.style.overflow = 'hidden'; // Tắt cuộn trang
    }
});

// Đóng menu khi nhấn vào nút đóng
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    document.body.style.overflow = ''; // Bật lại cuộn trang sau khi đóng menu
});
// Đóng menu khi nhấn vào bên ngoài menu
document.addEventListener('click', (event) => {
    // Kiểm tra nếu nhấn vào ngoài menu và menu đang mở
    if (!sideMenu.contains(event.target) && !hamburgerMenu.contains(event.target) && sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
        document.body.style.overflow = ''; // Bật lại cuộn trang
    }
});

// Lấy tất cả các mục có class 'chuyen_menu'
const toggleMenus = document.querySelectorAll('.chuyen_menu');

toggleMenus.forEach((menu) => {
    menu.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Lấy ID của menu_phu từ thuộc tính 'data-target'
        const targetId = menu.getAttribute('data-target');
        const subMenu = document.getElementById(targetId);

        // Kiểm tra nếu menu_phu đang mở, đóng nó lại
        if (subMenu.classList.contains('open')) {
            subMenu.classList.remove('open');
        } else {
            // Đóng tất cả các menu_phu khác trước khi mở menu_phu mới
            document.querySelectorAll('.menu_phu').forEach((sm) => sm.classList.remove('open'));
            subMenu.classList.add('open');
        }
    });
});
