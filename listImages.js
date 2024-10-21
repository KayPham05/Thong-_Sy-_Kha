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

function hiennd(n) {
    // Lấy tất cả các phần tử có class "nd-content" và ẩn chúng
    var contents = document.querySelectorAll('.nd-content');
    contents.forEach(function(content) {
        content.classList.remove('active'); // Ẩn tất cả nội dung
    });

    // Hiển thị phần tử có id tương ứng với tham số n
    var selectedContent = document.getElementById(n);
    selectedContent.classList.add('active'); // Hiển thị phần tử đó
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
   // luôn hiển thị trang đầu
    // Hàm này sẽ chạy khi trang được tải
    window.onload = function() {
        // Tự động click vào tab đầu tiên "Momo đề xuất"
        tabClick('Momo đề xuất');
    }

    // Thông mới làm
     // Hàm tabClick để hiển thị nội dung tab
function tabClick(tabName) {
    // Ẩn tất cả các nội dung của tab
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Hiển thị nội dung của tab được chọn
    let selectedTabContent = document.getElementById(tabName);
    if (selectedTabContent) {
        selectedTabContent.style.display = 'block';
    }

    // Loại bỏ class 'active' khỏi tất cả các tab
    let tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Thêm class 'active' cho tab được chọn
    let selectedTab = Array.from(tabs).find(tab => tab.innerText.includes(tabName));
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}
function toggleImage(imageId) {
    // Ẩn tất cả hình ảnh
    var images = document.querySelectorAll('.hidden-image');
    images.forEach(function(image) {
        image.style.display = 'none';
    });

    // Hiển thị hình ảnh được chọn
    var img = document.getElementById(imageId);
    if (img) {
        img.style.display = 'block';
    } else {
        console.warn(`Hình ảnh với ID ${imageId} không được tìm thấy.`);
    }

    // Cập nhật phong cách tab đang hoạt động
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.classList.remove('active'); // Xóa lớp active khỏi tất cả các mục
    });
    
    var activeItem = document.querySelector(`.nav-item[onclick*='${imageId}']`);
    if (activeItem) {
        activeItem.classList.add('active'); // Thêm lớp active cho mục đã nhấp
    }
}

function activateFirstSubTab(subTabId, imageId) {
    // Hiển thị hình ảnh của tab con đầu tiên
    toggleImage(imageId); // Hiển thị hình ảnh của tab con đầu tiên
}

// Hàm tự động kích hoạt tab đầu tiên khi trang được tải
function autoActivateTab(tabId, imageId) {
    var tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.style.display = 'block'; // Hiển thị tab đầu tiên
    }
    toggleImage(imageId); // Hiển thị hình ảnh đầu tiên trong tab đó
}

// Hàm xử lý nhấp vào tab chính
function handleTabClick(tabId, imageId) {
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(content) {
        content.style.display = 'none'; // Ẩn tất cả tab
    });

    var activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block'; // Hiển thị tab đang nhấp
        activateFirstSubTab(tabId, imageId); // Kích hoạt hình ảnh đầu tiên của tab con
    }
}

// Gọi hàm tự động khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    autoActivateTab('Momo đề xuất', 'hiddenImage'); // Thay 'hiddenImage' bằng ID của hình ảnh đầu tiên bạn muốn hiển thị
});

