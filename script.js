function changeMessage() {
    const message = document.getElementById('welcomeMessage');
    message.textContent = 'Welcome to my dynamic website!';
}

// 加载 research.html 时的动态内容
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('research.html')) {
        loadResearchContent();
    }
});

function loadResearchContent() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'research-data.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const researchData = JSON.parse(xhr.responseText);
            const researchContent = document.getElementById('researchContent');
            let html = '';
            researchData.forEach(item => {
                html += `<h3>${item.title}</h3><p>${item.description}</p>`;
            });
            researchContent.innerHTML = html;
        } else {
            document.getElementById('researchContent').textContent = 'Failed to load research content.';
        }
    };
    xhr.send();
}

