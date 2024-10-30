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

// 3buoc
      document.addEventListener('DOMContentLoaded', function() {
        // Lấy tất cả các phần tử có class là 'anhuongdan' và 'huondan'
        const anhuongdans = document.querySelectorAll('.anhuongdan');
        const huondans = document.querySelectorAll('.huondan');
    
        // Lặp qua từng phần tử trong 'anhuongdan'
        anhuongdans.forEach((anhuongdan, index) => {
            anhuongdan.addEventListener('click', function() {
                // Ẩn tất cả các 'huondan'
                huondans.forEach(huondan => {
                    huondan.style.display = 'none';
                });
    
                // Hiển thị 'huondan' tương ứng với 'anhuongdan' đã bấm
                huondans[index].style.display = 'block';
            });
        });
    });
// hienthi anh
document.addEventListener('DOMContentLoaded', function() {
    // Danh sách các ảnh trong trình chiếu
    const images = [
        'img/buoc2.jpg',
        'img/buoc1.jpg',
        'img/buoc5.jpg'
    ];
    
    let currentImageIndex = 0;
    const screen = document.getElementById('screen');

    // Hiển thị ảnh hiện tại
    function showImage(index) {
        screen.style.backgroundImage = `url('${images[index]}')`;
    }

    // Chuyển sang ảnh trước
    document.getElementById('prevBtn').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    // Chuyển sang ảnh tiếp theo
    document.getElementById('nextBtn').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    // Hiển thị ảnh đầu tiên khi tải trang
    showImage(currentImageIndex);
});

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
function openModal(){
    document.getElementById('ndcon1').style.display = 'block';
}
function closeModal(){
    document.getElementById('ndcon1').style.display='none';
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

//dich chuyen menu chuyển tiền
const menu = document.querySelector('.menuChuyenTien');
const footer = document.querySelector('.button-location')
// Thêm sự kiện lăn chuột
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Kiểm tra nếu cuộn trang xuống hơn 50px
        menu.style.top = '0';  // Di chuyển menu lên trên cùng
        footer.style.bottom = '0'
    } else {
        menu.style.top = '50px'; // Đưa menu về vị trí ban đầu
        footer.style.bottom = '-100px'
    }
});

//cai đặt phần chọn menu momo mới
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.navbar a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
            // Xóa lớp 'active-link' khỏi tất cả các menu links
            menuLinks.forEach(link => {
                link.classList.remove('active-momo');
            });

            // Thêm lớp 'active-link' vào mục menu được chọn
            this.classList.add('active-momo');
        });
    });
});

// popup QRSCAN

document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử popup
    const openPopupBtns = document.querySelectorAll('.open-popup-btn');
    const closeBtn = document.querySelector('.close-btn-new');
    const popupOverlay = document.getElementById('popupOverlayNew');
    const popupModal = document.getElementById('popupModalNew');

    // Mở popup khi nhấn nút
    openPopupBtns.forEach(button => {
        button.addEventListener('click', function () {
            popupOverlay.style.display = 'block';
            popupModal.style.display = 'block';
        });
    });

    // Đóng popup khi nhấn nút đóng
    closeBtn.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
        popupModal.style.display = 'none';
    });

    // Đóng popup khi click bên ngoài
    window.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
            popupModal.style.display = 'none';
        }
    });
});

// Phần Hướng dẩn chuyển tiền 
// Danh sách các ảnh và nội dung từng bước
const images = [
    "imgIndex_2/phone1.png",
    "imgIndex_2/phone2.png",
    "imgIndex_2/phone3.png",
    "imgIndex_2/phone4.png",
    "imgIndex_2/phone5.png"
];
document.addEventListener("DOMContentLoaded", function() {
    showStep(0); // Mặc định chọn Step 1 khi mở trang
});
let currentStep = 0;

function showStep(stepIndex) {
    const imageElement = document.getElementById("phoneImage");
    // Xác định hướng trượt
    const direction = stepIndex > currentStep ? 'next-btn' : 'prev-btn';

    // Đặt vị trí ban đầu của ảnh để chuẩn bị trượt
    imageElement.style.transition = 'none'; // Xóa chuyển động tạm thời
    imageElement.style.transform = `translateX(${direction === 'next-btn' ? '100%' : '-100%'})`;

    // Đợi một chút rồi đổi `src` của ảnh để cập nhật ảnh mới
    setTimeout(() => {
        imageElement.src = images[stepIndex];
        
        // Đợi trình duyệt cập nhật `src` của ảnh trước khi thêm chuyển động
        setTimeout(() => {
            imageElement.style.transition = 'transform 0.5s ease'; // Thêm chuyển động trở lại
            imageElement.style.transform = 'translateX(0)'; // Trượt ảnh vào vị trí trung tâm
        }, 20); // Đợi một chút trước khi thêm chuyển động để đảm bảo ảnh đã cập nhật
    }, 0);

    currentStep = stepIndex;

    // Cập nhật phần nội dung các bước bên cạnh
    document.querySelectorAll('.guide-content li').forEach((li, index) => {
        if (index === stepIndex) {
            li.classList.add('active-step');
        } else {
            li.classList.remove('active-step');
        }
    });

    // Cập nhật class cho các bước
    document.querySelectorAll('.guide-content li').forEach((li, index) => {
        if (index === stepIndex) {
            li.classList.add('active-step-text');
        } else {
            li.classList.remove('active-step-text');
        }
    });

    // Cập nhật ảnh dựa trên chỉ số bước
    document.getElementById("phoneImage").src = images[stepIndex];

    // Xóa kiểu chọn cho các bước khác và thêm class active-step cho bước hiện tại
    document.querySelectorAll('.guide-content li').forEach((li, index) => {
        if (index === stepIndex) {
            li.classList.add('active-step-text');
        } else {
            li.classList.remove('active-step-text');
        }
    });
}

function nextStep() {
    const newIndex = (currentStep + 1) % images.length;
    showStep(newIndex);
}

function prevStep() {
    const newIndex = (currentStep - 1 + images.length) % images.length;
    showStep(newIndex);
}

//hàm show ra các conatainer khác
function showContainer(index) {
    // Ẩn tất cả các container
    document.querySelectorAll('.content-container').forEach(container => {
        container.style.display = 'none';
        container.classList.remove('active');
    });

    // Hiển thị container được chọn
    const selectedContainer = document.getElementById(`container-${index}`);
    selectedContainer.style.display = 'flex';
    selectedContainer.classList.add('active');

    // Đặt tất cả các nút về trạng thái bình thường và làm nổi bật nút được chọn
    document.querySelectorAll('.guide-nav-btn').forEach((btn, btnIndex) => {
        if (btnIndex === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}