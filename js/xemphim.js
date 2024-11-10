// Lấy tất cả các liên kết có class "episode-link"
const episodeLinks = document.querySelectorAll('.episode-link');

// Lấy URL hiện tại của trang
const currentUrl = window.location.href;  // Dùng window.location.href để lấy toàn bộ URL

// Lặp qua tất cả các liên kết để kiểm tra nếu liên kết nào khớp với URL hiện tại
episodeLinks.forEach(link => {
    // Kiểm tra nếu href của tập phim khớp với URL hiện tại
    if (currentUrl.includes(link.getAttribute('href'))) {
        link.classList.add('active'); // Thêm lớp active cho tập phim hiện tại
    }
});
