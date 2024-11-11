let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slider-content');
    const totalSlides = slides.children.length;
    const slideWidth = slides.children[0].offsetWidth - 75; // Thêm khoảng cách giữa các mục

    // Cập nhật currentIndex theo hướng người dùng trượt
    currentIndex += direction;

    // Kiểm tra currentIndex và điều chỉnh nếu cần
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Quay lại cuối nếu vượt quá đầu
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Quay lại đầu nếu vượt quá cuối
    }

    // Nếu hướng đi là tới (direction === 1) và currentIndex là cuối cùng
    // thì kiểm tra để quay lại đầu ngay lập tức
    if (direction === 1 && currentIndex === 0) {
        slides.style.transition = 'none'; // Tắt hiệu ứng chuyển động
        currentIndex = 0; // Đặt currentIndex về đầu
    } else {
        slides.style.transition = 'transform 0.3s ease'; // Bật lại hiệu ứng chuyển động
    }

    // Thiết lập chuyển động trượt
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Di chuyển slider
}

// Hàm tự động di chuyển thanh trượt mỗi 3 giây
function autoMoveSlide() {
    setInterval(() => {
        moveSlide(1); // Di chuyển sang ảnh tiếp theo
    }, 1500); // Cập nhật sau mỗi 3 giây
}

// Gọi hàm autoMoveSlide khi trang web load
autoMoveSlide();
//menu mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
    } else {
        mobileMenu.classList.add('open');
    }
}
