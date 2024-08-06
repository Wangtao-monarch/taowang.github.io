document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        startDanmu();
    }
});

function startDanmu() {
    const danmuContainer = document.getElementById('danmu-container');
    const messages = [
        "Welcome to my website!",
        "Check out my latest blog post!",
        "My research focuses on AI and machine learning.",
        "Contact me for collaborations.",
        "Stay tuned for more updates!"
    ];

    messages.forEach((message, index) => {
        const danmu = document.createElement('div');
        danmu.classList.add('danmu');
        danmu.textContent = message;
        danmu.style.top = `${index * 20}px`; // 让每条弹幕显示在不同的高度
        danmuContainer.appendChild(danmu);
    });
}
