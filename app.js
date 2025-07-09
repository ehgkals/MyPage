function smoothScrollTo(targetY, duration = 600) {
  const startY = window.scrollY;
  const changeY = targetY - startY;
  const startTime = performance.now();

  // easeInOutCubic 이징 함수 (빨라졌다가 느려짐)
  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startY + changeY * ease);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

// 메뉴 클릭 이벤트에 연결 예시
document.querySelectorAll('.navigation-bar-menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      // 요소의 top 위치
      const y = target.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(y, 700); // 원하는 시간(ms)으로 조절
    }
  });
});