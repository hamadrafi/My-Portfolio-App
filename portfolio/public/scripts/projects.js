document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth < 768;
    const wrappers = document.querySelectorAll('.video-wrapper');
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.getElementById('closeModal');

    wrappers.forEach(wrapper => {
        const img   = wrapper.querySelector('.poster-img');
        const video = wrapper.querySelector('.project-video');
        let loaded = false;

        const loadAndPlay = () => {
            if (!loaded) {
                const src = video.getAttribute('data-src');
                video.src = src;
                loaded = true;
            }
            img.style.opacity = '0';
            wrapper.querySelector('.play-icon-overlay').style.opacity = '0';
            video.style.opacity = '1';
            video.play().catch(() => {});
        };

        const reset = () => {
            video.pause();
            img.style.opacity = '1';
            wrapper.querySelector('.play-icon-overlay').style.opacity = '1';
            video.style.opacity = '0';
        };

        if (!isMobile) {
            wrapper.addEventListener('mouseenter', loadAndPlay);
            wrapper.addEventListener('mouseleave', reset);
        } else {
            wrapper.addEventListener('click', () => {
                if (!loaded) {
                    const src = video.getAttribute('data-src');
                    modalVideo.src = src;
                    loaded = true;
                } else {
                    modalVideo.src = video.src;
                }
                modal.classList.add('open');
                modalVideo.play();
                modal.setAttribute('aria-hidden', 'false');
            });
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        modalVideo.pause();
        modalVideo.src = '';
        modal.setAttribute('aria-hidden', 'true');
    });
    
    modal.addEventListener('click', e => {
        if (e.target === modal) closeBtn.click();
    });
});
