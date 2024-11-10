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

const guideData = [
    {
        images: [
            "img/phone1.png",
            "img/phone2.png",
            "img/phone3.png",
            "img/phone4.png",
            "img/phone5.png"
        ],
        steps: [
            "Tải ứng dụng miễn phí bằng cách tìm kiếm từ khóa “momo” trên App Store hoặc Google Play Store.",
            "Mở ứng dụng và nhập số điện thoại bạn muốn đăng ký MoMo.",
            "Một tin nhắn chứa mã xác thực sẽ gửi trực tiếp đến số điện thoại của bạn.",
            "Thiết lập mật khẩu để bảo vệ tài khoản MoMo của bạn gồm 6 chữ số và mật khẩu ở 2 ô phải hoàn toàn giống nhau.",
            "Sau khi tạo mật khẩu đăng nhập thành công, bạn nhập thông tin cá nhân theo yêu cầu và nhấn Xác Nhận để hoàn tất đăng ký."
        ]
    },
    {
        images: [
            "img/phone6.png",
            "img/phone7.png",
            "img/phone8.png",
            "img/phone9.png",
            "img/phone10.png",
            "img/phone11.png"
        ],
        steps: [
            "- Chọn 'Quản lý tài khoản' tại màn hình chính.* Bạn có thể liên kết cùng lúc nhiều ngân hàng trên tài khoản MoMo. ",
            "Nhấn 'Liên kết ngay'",
            "Chọn logo Ngân hàng",
            "Nhập thông tin chủ thẻ và nhấn 'Tiếp tục'",
            "Nhập mã xác thực OTP và nhấn 'Tiếp tục' để hoàn tất liên kết",
            "Liên kết thành công"
        ]
    },
    {
        images: [
            "img/phone12.png",
            "img/phone13.png",
            "img/phone14.png",
            "img/phone15.png",
            "img/phone16.png",
            "img/phone17.png"
        ],
        steps: [
            "Chọn 'Nạp tiền' từ màn hình chính của MoMo",
            "Nhập số tiền cần nạp và chọn nguồn tiền",
            "Xác nhận giao dịch",
            "Nhập mật khẩu để tiếp tục",
            "Nhập mã xác thực (nếu có) và hoàn tất giao dịch",
            "Giao dịch thành công"
        ]
    },
    // Thêm các mục guideData khác nếu cần
];

let currentGuideIndex = 0; // Lưu chỉ số của guide hiện tại
let currentStep = 0; // Lưu chỉ số bước hiện tại

// Hàm để hiển thị bước cụ thể
function showStep(stepIndex) {
    const imageElement = document.getElementById("phoneImage");
    const guide = guideData[currentGuideIndex];

    // Đảm bảo bước nằm trong phạm vi hợp lệ
    if (stepIndex >= 0 && stepIndex < guide.images.length) {
        // Xác định hướng trượt (lướt phải nếu stepIndex lớn hơn currentStep, ngược lại thì lướt trái)
        const direction = stepIndex > currentStep ? 'next' : 'prev';

        // Đặt vị trí ban đầu của ảnh để chuẩn bị trượt
        imageElement.style.transition = 'none'; // Xóa chuyển động tạm thời
        imageElement.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;

        // Đợi một chút rồi đổi `src` của ảnh để cập nhật ảnh mới
        setTimeout(() => {
            imageElement.src = guide.images[stepIndex];
            
            // Đợi trình duyệt cập nhật `src` của ảnh trước khi thêm chuyển động
            setTimeout(() => {
                imageElement.style.transition = 'transform 0.5s ease'; // Thêm chuyển động trở lại
                imageElement.style.transform = 'translateX(0)'; // Trượt ảnh vào vị trí trung tâm
            }, 20); // Đợi một chút trước khi thêm chuyển động để đảm bảo ảnh đã cập nhật
        }, 0);

        currentStep = stepIndex;

        // Cập nhật nội dung cho các bước
        document.querySelectorAll('.guide-content .step-text').forEach((text, index) => {
            text.textContent = guide.steps[index] || ""; // Cập nhật nội dung từng bước
        });
    }
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
}

// Hàm chuyển đổi giữa các guideData
function showContainer(index) {
    currentGuideIndex = index; // Cập nhật guide hiện tại
    currentStep = 0; // Đặt lại bước về 0
    showStep(currentStep);

    // Hiển thị các bước cho guide hiện tại
    const guideSteps = guideData[index].steps;
    const stepElements = document.querySelectorAll('.guide-content ol li');
    stepElements.forEach((step, idx) => {
        const stepText = step.querySelector('.step-text');
        if (guideSteps[idx]) {
            stepText.textContent = guideSteps[idx];
            step.style.display = ""; // Hiển thị step
        } else {
            step.style.display = "none"; // Ẩn step nếu không có nội dung
        }
    });

    // Cập nhật các nút điều hướng
    document.querySelectorAll('.guide-nav-btn').forEach((btn, btnIndex) => {
        btn.classList.toggle('active', btnIndex === index);
    });
}

function nextStep() {
    const guide = guideData[currentGuideIndex];
    const newIndex = (currentStep + 1) % guide.images.length;
    showStep(newIndex);
}

function prevStep() {
    const guide = guideData[currentGuideIndex];
    const newIndex = (currentStep - 1 + guide.images.length) % guide.images.length;
    showStep(newIndex);
}

// Khởi tạo mặc định
document.addEventListener("DOMContentLoaded", () => {
    showContainer(0); // Mặc định hiển thị guide đầu tiên
});

function toggleAnswer(element) {
    // Tìm phần tử cha của câu hỏi
    const faqItem = element.parentElement;
    // Thêm hoặc xóa class "active" để quản lý hiển thị
    faqItem.classList.toggle("active");
    // Hiển thị hoặc ẩn câu trả lời
    const answer = faqItem.querySelector(".faq-answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    // Đóng tất cả các câu hỏi khác nếu cần
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) item.classList.remove('active');
    });
    
}