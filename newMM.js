// Lấy overlay
var overlay = document.getElementById("popupOverlay");

// Lấy tất cả các popup
var modals = document.querySelectorAll(".popup-modal");

// Lấy tất cả các thẻ và gán sự kiện click cho từng thẻ
var promoCards = document.querySelectorAll(".promo-card");
promoCards.forEach(function(card, index) {
    card.addEventListener("click", function() {
        // Mở modal tương ứng với thẻ được bấm
        var modal = document.getElementById("promoPopup" + (index + 1));
        modal.classList.add("show"); // Thêm lớp show để hiển thị popup
        overlay.classList.add("show"); // Hiển thị overlay
    });
});

// Lấy tất cả các nút đóng và gán sự kiện để đóng popup
var closeBtns = document.querySelectorAll(".close-btn");
closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Đóng popup tương ứng
        var modal = btn.closest(".popup-modal");
        modal.classList.remove("show"); // Xóa lớp show để đóng popup
        overlay.classList.remove("show"); // Ẩn overlay
    });
});

var closeBtns = document.querySelectorAll(".btn-close");
closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Đóng popup tương ứng
        var modal = btn.closest(".popup-modal");
        modal.classList.remove("show"); // Xóa lớp show để đóng popup

        // Ẩn overlay sau khi đóng popup
        overlay.classList.remove("show"); // Ẩn overlay
    });
})

// Đóng popup và overlay khi người dùng click ra ngoài popup
overlay.onclick = function() {
    modals.forEach(function(modal) {
        modal.classList.remove("show"); // Xóa lớp show để đóng tất cả popup
    });
    overlay.classList.remove("show"); // Ẩn overlay
}

document.querySelectorAll('.popup-image').forEach(image => {
    image.addEventListener('click', function() {
        const fullImageModal = document.createElement('div');
        fullImageModal.className = 'full-image-modal';
        fullImageModal.innerHTML = `
            <span class="close-full-image">&times;</span>
            <img src="${this.src}" alt="Full image" class="full-image">
        `;
        document.body.appendChild(fullImageModal);

        // Đóng modal khi nhấn vào biểu tượng đóng
        fullImageModal.querySelector('.close-full-image').addEventListener('click', () => {
            document.body.removeChild(fullImageModal);
        });
        
        // Đóng modal khi nhấn vào bên ngoài ảnh
        fullImageModal.addEventListener('click', (event) => {
            if (event.target === fullImageModal) {
                document.body.removeChild(fullImageModal);
            }
        });
    });
});

// Hàm tính toán khoảng thời gian
function timeSince(date) {
    let now = new Date();
    let seconds = Math.floor((now - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
        return interval === 1 ? "1 năm trước" : interval + " năm trước";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval === 1 ? "1 tháng trước" : interval + " tháng trước";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval === 1 ? "1 ngày trước" : interval + " ngày trước";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval === 1 ? "1 giờ trước" : interval + " giờ trước";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval === 1 ? "1 phút trước" : interval + " phút trước";
    }
    return "vừa xong";
}

// Hàm để cập nhật tất cả các thời gian promo-time
function updatePromoTimes() {
    const promoTimes = document.querySelectorAll('.promo-time');
    promoTimes.forEach(function(promoTime) {
        let promoDate = promoTime.getAttribute('data-time');
        promoTime.textContent = timeSince(promoDate);
    });
}

// Cập nhật thời gian khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    updatePromoTimes();
});
