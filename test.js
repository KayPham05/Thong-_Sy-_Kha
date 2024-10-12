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
        
        // Hiển thị overlay
        overlay.style.display = "block";
    });
});

// Lấy tất cả các nút đóng và gán sự kiện để đóng popup
var closeBtns = document.querySelectorAll(".close-btn");
closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Đóng popup tương ứng
        var modal = btn.closest(".popup-modal");
        modal.classList.remove("show"); // Xóa lớp show để đóng popup

        // Ẩn overlay sau khi đóng popup
        overlay.style.display = "none";
    });
});

// Đóng popup và overlay khi người dùng click ra ngoài popup
overlay.onclick = function() {
    modals.forEach(function(modal) {
        modal.classList.remove("show"); // Xóa lớp show để đóng tất cả popup
    });
    overlay.style.display = "none"; // Ẩn overlay
}
