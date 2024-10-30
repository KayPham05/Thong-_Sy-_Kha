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
const guideData = [
    {
        images: [
            "imgIndex_2/phone1.png",
            "imgIndex_2/phone2.png",
            "imgIndex_2/phone3.png",
            "imgIndex_2/phone4.png",
            "imgIndex_2/phone5.png"
        ],
        steps: [
            "Tại màn hình chính, chọn tính năng 'Chuyển tiền - MoMo liền'",
            "Chọn chuyển tiền 'Đến Ví MoMo'",
            "Chọn người nhận",
            "Nhập số tiền, lời nhắn và thêm sticker, hình nền để bày tỏ cảm xúc",
            "Chọn 'Nguồn tiền' & 'Xác nhận' để hoàn tất chuyển tiền"
        ]
    },
    {
        images: [
            "imgIndex_2/phone6.png",
            "imgIndex_2/phone7.png",
            "imgIndex_2/phone8.png",
            "imgIndex_2/phone9.png"
        ],
        steps: [
            "Tại màn hình chính MoMo, chọn biểu tượng 'Chuyển tiền Ngân hàng'",
            "Chọn Ngân hàng và nhập số tài khoản hoặc chọn người cần chuyển",
            "Nhập số tiền cần chuyển > Chọn 'Tiếp tục'",
            "Chọn nguồn tiền bất kỳ > Kiểm tra và bấm 'Xác nhận' là hoàn tất giao dịch"
        ]
    }
];
let currentGuideIndex = 0; // Chỉ số container hiện tại
let currentStep = 0; // Chỉ số bước hiện tại trong container

function updateContent() {
    const guide = guideData[currentGuideIndex];
    const imageElement = document.getElementById("phoneImage");

    // Cập nhật ảnh dựa trên bước hiện tại
    imageElement.src = guide.images[currentStep];

    // Cập nhật nội dung các bước
    const stepsList = document.querySelector('.guide-content ol');
    stepsList.innerHTML = guide.steps.map((step, index) => `
        <li onclick="showStep(${index})" class="${index === currentStep ? 'active-step-text' : ''}">
            <div class="step">
                <span class="step-number">${index + 1}</span>
                <p class="step-text">${step}</p>
            </div>
        </li>
    `).join('');
}

function showStep(stepIndex) {
    currentStep = stepIndex;
    updateContent();
}

function nextStep() {
    currentStep = (currentStep + 1) % guideData[currentGuideIndex].images.length;
    updateContent();
}

function prevStep() {
    currentStep = (currentStep - 1 + guideData[currentGuideIndex].images.length) % guideData[currentGuideIndex].images.length;
    updateContent();
}
function showContainer(index) {
    currentGuideIndex = index;
    currentStep = 0; // Đặt lại bước về 0 khi chuyển container

    // Ẩn tất cả các container và hiển thị container được chọn
    document.querySelectorAll('.content-container').forEach((container, idx) => {
        container.style.display = idx === index ? 'flex' : 'none';
    });

    // Cập nhật nút active
    document.querySelectorAll('.guide-nav-btn').forEach((btn, btnIndex) => {
        btn.classList.toggle('active', btnIndex === index);
    });

    // Cập nhật nội dung của container mới
    updateContent();
}

// Mặc định hiển thị container đầu tiên
document.addEventListener("DOMContentLoaded", () => {
    showContainer(0);
});
