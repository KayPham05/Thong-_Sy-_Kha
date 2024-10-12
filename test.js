// Lắng nghe sự kiện nhấn vào card-popup-trigger
document.querySelector('.card-popup-trigger').addEventListener('click', function() {
    document.getElementById("popupModal").style.display = "block";
});

// Đóng popup khi nhấn vào dấu "X" hoặc khu vực bên ngoài
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById("popupModal").style.display = "none";
});
