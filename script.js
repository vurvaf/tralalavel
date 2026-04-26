// ========== 1. ПЕЧАТАЮЩИЙСЯ ЗАГОЛОВОК ==========
const text = 'Где отдохнуть этим летом?';
let i = 0;
const speed = 80;
const typewriterEl = document.getElementById('typewriter');

function typeWriter() {
    if (i < text.length) {
        typewriterEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// ========== 2. ТАБЫ ==========
function setupTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    contents.forEach(c => c.style.display = 'none');
    document.querySelector('.tab-content.active').style.display = 'block';

    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.style.display = 'none');
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).style.display = 'block';
        });
    });
}

// ========== 3. ГАЛЕРЕЯ ==========
function setupGalleries() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const prevBtn = card.querySelector('.gallery-prev');
        const nextBtn = card.querySelector('.gallery-next');
        const images = card.querySelectorAll('.gallery-img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });
        }
    });
}

// ========== 4. ПРОГРЕСС-БАР ==========
function setupProgress() {
    const slider = document.getElementById('progressSlider');
    const progressBar = document.getElementById('progressBar');
    const progressValue = document.getElementById('progressValue');

    slider.addEventListener('input', () => {
        const val = slider.value;
        progressBar.style.width = val + '%';
        progressValue.textContent = val;
    });
}

// ========== 5. ЧЕК-ЛИСТ ==========
function setupChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const completedTasksEl = document.getElementById('completedTasks');
    const totalTasksEl = document.getElementById('totalTasks');

    totalTasksEl.textContent = checkboxes.length;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateChecklistProgress);
    });

    function updateChecklistProgress() {
        const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
        completedTasksEl.textContent = checked;
    }
}

// ========== ЗАПУСК ==========
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    setupTabs();
    setupGalleries();
    setupProgress();
    setupChecklist();
});