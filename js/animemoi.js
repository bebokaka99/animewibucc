const animeData = [
    { title: "Naruto", type: "series", season: "spring", genre: ["Action", "Adventure"], year: 2002 },
    { title: "One Piece", type: "series", season: "summer", genre: ["Action", "Adventure"], year: 1999 },
    { title: "Attack on Titan", type: "series", season: "winter", genre: ["Action", "Fantasy"], year: 2013 },
    // Thêm dữ liệu anime mẫu khác
];

function applyFilter() {
    const selectedType = document.querySelector('input[name="type"]:checked').value;
    const selectedSeason = document.querySelector('input[name="season"]:checked').value;
    const selectedYear = document.querySelector('input[name="year"]:checked').value;
    
    const selectedGenres = Array.from(document.querySelectorAll('#tuy_chon_the_loai input[type="checkbox"]:checked'))
                                .map(cb => cb.value);

    const filteredAnime = animeData.filter(anime => {
        return (selectedType === "all" || anime.type === selectedType) &&
               (selectedSeason === "all" || anime.season === selectedSeason) &&
               (selectedYear === "all" || anime.year == selectedYear) &&
               (selectedGenres.length === 0 || selectedGenres.every(genre => anime.genre.includes(genre)));
    });

    displayResults(filteredAnime);
}

function displayResults(animeList) {
    const animeResults = document.getElementById("animeResults");
    animeResults.innerHTML = "";
    animeList.forEach(anime => {
        const animeItem = document.createElement("div");
        animeItem.classList.add("anime-item");
        animeItem.innerText = anime.title;
        animeResults.appendChild(animeItem);
    });
}
document.getElementById('filterToggleBtn').addEventListener('click', function() {
    const filterContainer = document.getElementById('filterContainer');
    if (filterContainer.style.display === 'none' || filterContainer.style.display === '') {
        filterContainer.style.display = 'block';
    } else {
        filterContainer.style.display = 'none';
    }
});
function applyFilter() {
    // Xử lý logic lọc anime ở đây
    alert("Tính năng này đang được phát triển, xin lỗi vì bất tiện này!");
}
let currentPage = 1;
let totalPages = 10; // Tổng số trang
let pageGroupSize = 5; // Hiển thị 5 nút trang trên mỗi phân trang

// Render các nút phân trang
function renderPagination() {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    const pageInfo = document.getElementById('pageInfo');

    // Xác định các trang sẽ hiển thị (liên tiếp 5 trang)
    let startPage = Math.max(currentPage - 2, 1); // Trang bắt đầu là trang hiện tại trừ 2 (tối thiểu là 1)
    let endPage = Math.min(startPage + pageGroupSize - 1, totalPages); // Trang kết thúc là trang bắt đầu cộng 5 (tối đa là totalPages)

    // Nếu nhóm trang còn thiếu, điều chỉnh để đảm bảo hiển thị đủ 5 trang
    if (endPage - startPage < pageGroupSize - 1) {
        startPage = Math.max(endPage - pageGroupSize + 1, 1);
    }

    // Clear current page numbers
    pageNumbersContainer.innerHTML = '';

    // Render các nút trang (liên tiếp 5 nút)
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.onclick = () => goToPage(i);

        // Highlight the current page
        if (i === currentPage) {
            pageButton.classList.add('selected');
        }

        pageNumbersContainer.appendChild(pageButton);
    }

    // Update page info (ex: "Trang 1 của 10")
    pageInfo.textContent = `Trang ${currentPage} của ${totalPages}`;

    // Disable prev/next group buttons if on the first or last group
    document.getElementById('prevGroup').disabled = currentPage <= 1;
    document.getElementById('nextGroup').disabled = currentPage >= totalPages;
}

// Khi người dùng nhấn vào một số trang
function goToPage(page) {
    if (page < 1 || page > totalPages) return; // Ensure page is within range
    currentPage = page;

    // Điều hướng đến trang con (ví dụ page-1.html, page-2.html)
    window.location.href = `page-${page}.html`;

    // Hiển thị nội dung trang tương ứng
    renderPagination();
}

// Chuyển đến trang đầu
function goToFirstPage() {
    goToPage(1);
}

// Chuyển đến trang cuối
function goToLastPage() {
    goToPage(totalPages);
}

// Chuyển đến nhóm trang trước
function goToPrevGroup() {
    if (currentPage > 1) {
        currentPage--;
        renderPagination();
    }
}

// Chuyển đến nhóm trang sau
function goToNextGroup() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPagination();
    }
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
