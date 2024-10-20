const listImage = document.querySelector('.list-images'); // The container for the images
const imgs = document.querySelectorAll('.list-images img'); // All images in the slider
const btnLeft = document.querySelector('.btn-left'); // Previous button
const btnRight = document.querySelector('.btn-right'); // Next button

let current = 0; // Current image index
const length = imgs.length; // Total number of images

// Function to reload the slider and update the position
function reloadSlider() {
    let width = imgs[0].offsetWidth; // Width of each image
    listImage.style.transform = `translateX(${-width * current}px)`; // Move the slider
    document.querySelector('.active1').classList.remove('active1');
    document.querySelector('.index-item-'+ current).classList.add('active1')
}

// Next button click event
btnRight.onclick = function () {
    if (current + 1 >= length) {
        current = 0;
    } else {
        current++;
    }
    reloadSlider();
}

// Previous button click event
btnLeft.onclick = function () {
    if (current - 1 < 0) {
        current = length - 1;
    } else {
        current--;
    }
    reloadSlider();
}

// Automatic sliding every 4 seconds
// let refreshSlide = setInterval(() => {
//     btnRight.click(); // Simulate the "next" button being clicked
// }, 4000);

// Initial call to set the slider position
reloadSlider();
// thong làm
//=====cua sy=========
function show(contentId){
    //an noi dung
    var content = document.getElementsByClassName('noi-dung');
    for(var i=0;i<content.length;i++){
        content[i].classList.remove('active2');
        //hienthi
        var contentToShow= document.getElementById(contentId);
        contentToShow.classList.add('active2');
    }

}
function showContent(contentId) {
    // Ẩn tất cả các nội dung
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // Hiển thị nội dung tương ứng với nút đã bấm
    var contentToShow = document.getElementById(contentId);
    contentToShow.classList.add('active');  
}
// thông mới làm
function scrollTabs(direction) {
    const tabsContainer = document.getElementById('tabs');
    const scrollAmount = 150; // Đặt khoảng cách cuộn mỗi lần nhấn mũi tên
    tabsContainer.scrollLeft += direction * scrollAmount;
}

// Định nghĩa hàm tabClick
function tabClick(tabName) {
    // Lấy tất cả các tab content
    const tabContents = document.querySelectorAll('.tab-content');

    // Ẩn tất cả các tab content
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Hiện tab content tương ứng với tab được nhấp
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}

// Khởi tạo tab đầu tiên được hiển thị
document.addEventListener('DOMContentLoaded', () => {
    tabClick('Momo đề xuất'); // Hiện tab mặc định
});

function toggleImage(id) {
    var imageDiv = document.getElementById(id);
    var allImages = document.querySelectorAll('.hidden-image');
    allImages.forEach(function(img) {
        if (img !== imageDiv) {
            img.style.display = 'none';
        }
    });
    if (imageDiv.style.display === "none" || imageDiv.style.display === "") {
        imageDiv.style.display = "block";
    } else {
        imageDiv.style.display = "none";
    }
}
    // cái này dùng để click vào sẽ đổi màu
    const tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa 'active' từ tất cả các tab
            tabItems.forEach(tab => tab.classList.remove('active'));

            // Thêm 'active' vào tab được chọn
            this.classList.add('active');
        });
    });


