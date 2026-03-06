* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #68ea66 0%, #5ddcb4 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
} 

.container {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    width: 400px;
    animation: slideIn 0.5s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.container h2 {
    color: #333;
    margin-bottom: 30px;
    text-align: center;
    font-size: 28px;
}

.container h2 i {
    color: #52d00e;
    margin-right: 10px;
}

.input-group {
    margin-bottom: 25px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-weight: 500;
    font-size: 16px;
}

.input-group input {
    width: 100%;
    padding: 15px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
    outline: none;
}

.input-group input:focus {
    border-color: #41d95d;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input-group input::placeholder {
    color: #aaa;
}

.btn-cek {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #59d43d 0%, #49c3aa 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.btn-cek:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(51, 212, 80, 0.4);
}
 
.btn-cek:active {
    transform: translateY(0);
}

.btn-cek i {
    font-size: 20px;
}

.info {
    margin-top: 20px;
    padding: 15px;
    background: #f8f9ff;
    border-radius: 10px;
    border-left: 4px solid #7eef78;
}

.info p {
    color: #666;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.info p:before {
    content: '\f05a';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    color: #3fe044;
}
 
/* Container Notifikasi */
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
}

/* Style Notifikasi */
.notification {
    background: white;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 10px;
    box-shadow: 0 10px 30px rgba(247, 247, 247, 0.2);
    display: flex;
    align-items: center;
    gap: 12px;
    animation: notifSlideIn 0.5s ease forwards;
    position: relative;
    overflow: hidden;
    border-left: 4px solid;
}
 
@keyframes notifSlideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes notifSlideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.notification.slide-out {
    animation: notifSlideOut 0.5s ease forwards;
}

.notification i {
    font-size: 24px;
}

.notification-content {
    flex: 1;
}

.notification-title {
    font-weight: 600;
    margin-bottom: 4px;
    font-size: 16px;
}

.notification-message {
    color: #666;
    font-size: 14px;
}

.notification-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    transform-origin: left;
}

.notification-progress-bar {
    height: 100%;
    width: 100%;
    transform-origin: left;
    animation: progress 3s linear forwards;
}

@keyframes progress {
    from {
        transform: scaleX(1);
    }
    to {
        transform: scaleX(0);
    }
}

 
.notification.success {
    border-left-color: #67bf7c;
    background: #f0fff4;
}

.notification.success i {
    color: #28a745;
}

.notification.success .notification-progress-bar {
    background: #28a745;
}

.notification.error {
    border-left-color: #dc3545;
    background: #fff5f5;
}

.notification.error i {
    color: #dc3545;
}

.notification.error .notification-progress-bar {
    background: #dc3545;
}

.notification.warning {
    border-left-color: #ffc107;
    background: #fff9e6;
}

.notification.warning i {
    color: #ffc107;
}

.notification.warning .notification-progress-bar {
    background: #ffc107;
}

.notification.info {
    border-left-color: #91c67d;
    background: #e6f7ff;
}
  
.notification.info i {
    color: #e12a2a;
}

.notification.info .notification-progress-bar {
    background: #31db17;
}

.notification-close {
    cursor: pointer;
    color: #999;
    font-size: 14px;
    transition: color 0.3s ease;
    background: none;
    border: none;
    padding: 5px;
}

.notification-close:hover {
    color: #333;
}

@media (max-width: 768px) {
    .container {
        width: 90%;
        padding: 30px 20px;
    }
    
    .notification-container {
        max-width: 90%;
        left: 20px;
        right: 20px;
    }
}
