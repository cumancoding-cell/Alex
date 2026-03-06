const kondisi = document.getElementById("kondisi");
const masukkanText = document.getElementById("masukkanText");
const notificationContainer = document.getElementById("notificationContainer");


function showNotification(type, title, message, duration = 10) {
   
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    
   
    let icon = "";
    switch(type) {
        case "success":
            icon = "fa-check-circle";
            break;
        case "error":
            icon = "fa-exclamation-circle";
            break;
        case "warning":
            icon = "fa-exclamation-triangle";
            break;
        case "info":
            icon = "fa-info-circle";
            break;
        default:
            icon = "fa-bell";
    }
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
        <div class="notification-progress">
            <div class="notification-progress-bar"></div>
        </div>
    `;
    
    notificationContainer.appendChild(notification);
    
    const progressBar = notification.querySelector(".notification-progress-bar");
    progressBar.style.animation = `progress ${duration/1000}s linear forwards`;
    
    function removeNotification() {
        notification.classList.add("slide-out");
        setTimeout(() => {
            notification.remove();
        }, 500);
    }
    
    const timeoutId = setTimeout(removeNotification, duration);
    
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
        clearTimeout(timeoutId);
        removeNotification();
    });
    
   
    notification.addEventListener("mouseenter", () => {
        progressBar.style.animationPlayState = "paused";
        clearTimeout(timeoutId);
    });
    
    notification.addEventListener("mouseleave", () => {
        progressBar.style.animationPlayState = "running";
        setTimeout(removeNotification, duration);
    });
}


kondisi.addEventListener("click", function() {
  
    const inputValue = masukkanText.value.trim();
    
  
    if (inputValue === "") {
        showNotification(
            "error", 
            "Error!", 
            "Eror.",
            4000
        );
        return;
    }
    
    
    const angka = Number(inputValue);
    
 
    if (isNaN(angka)) {
        showNotification(
            "error", 
            "Error!", 
            "Eror!",
            4000
        );
        return;
    }

    if (angka === 5) {
        showNotification(
            "success", 
            "Selamat Datang!", 
            "Anda berhasil masuk dengan angka 5. Selamat datang di aplikasi!",
            5000
        );
    } 
    else if (angka === 1) {
        showNotification(
            "info", 
            "Informasi", 
            "Nomor anda adalah 1. Terima kasih telah menggunakan aplikasi kami.",
            4000
        );
    }
     else if (angka === 2) {
        showNotification(
            "info", 
            "Informasi", 
            "Nomor anda adalah 2. Terima kasih telah menggunakan aplikasi kami.",
            4000
        );
    }
     else if (angka === 3) {
        showNotification(
            "info", 
            "Informasi", 
            "Nomor anda adalah 3. Terima kasih telah menggunakan aplikasi kami.",
            4000
        );
    }
     else if (angka === 4) {
        showNotification(
            "info", 
            "Informasi", 
            "Nomor anda adalah 4. Terima kasih telah menggunakan aplikasi kami.",
            4000
        );
    }
    else if (angka < 0 ) {
        showNotification(
            "warning", 
            "Peringatan!", 
            `Anda memasukkan angka negatif: ${angka}. Harap masukkan angka positif.`,
            5000
        );
    }
    else if (angka > 10) {
        showNotification(
            "warning", 
            "Angka Besar", 
            `Anda memasukkan angka ${angka} yang cukup besar.`,
            4000
        );
    }
    else {
        showNotification(
            "info", 
            "Angka Lain", 
            `Anda memasukkan angka: ${angka}. Coba masukkan angka 1 Sampai 5 untuk notifikasi berbeda.`,
            5000
        );
    }
    

    masukkanText.value = "";
    masukkanText.focus();
});


masukkanText.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        kondisi.click();
    }
});

window.addEventListener("load", function() {
    setTimeout(() => {
        showNotification(
            "info", 
            "Selamat Datang!", 
            "Silakan masukkan angka 1 Sampai 5 untuk mencoba notifikasi.",
            5000
        );
    }, 1000);
});

function clearAllNotifications() {
    const notifications = document.querySelectorAll(".notification");
    notifications.forEach(notification => {
        notification.classList.add("slide-out");
        setTimeout(() => {
            notification.remove();
        }, 500);
    });
}


