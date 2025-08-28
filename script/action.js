// header 
$('#header').load('include/header.html', function() {
  // gnb 버튼
const gnbBtn = document.querySelector('.gnb-btn');
const gnbNav = document.querySelector('.gnb-nav');
if (gnbBtn && gnbNav) {
  gnbBtn.addEventListener('click', () => {
    gnbBtn.classList.toggle('active');
    gnbNav.classList.toggle('open');

    // body 스크롤 막기
    document.body.classList.toggle('no-scroll', gnbNav.classList.contains('open'));
  });
}



  // menudp1 메뉴 클릭
  const menuItems = document.querySelectorAll('.menudp1 .menu-title');
  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const parentLi = item.closest('.menudp1');
      const submenu2 = parentLi.querySelector('.menudp2');
      if (!submenu2) return;

      parentLi.classList.toggle('active');

      if (submenu2.style.maxHeight && submenu2.style.maxHeight !== '0px') {
        submenu2.style.maxHeight = '0';
      } else {
        submenu2.style.maxHeight = submenu2.scrollHeight + 'px';
      }

      // menudp1 전체 높이 자동 조절
      parentLi.style.height = parentLi.scrollHeight + 'px';
    });
  });

  // menudp2 button.more 클릭 → menudp3 슬라이드 (하나만 열리게)
  const subMoreBtns = document.querySelectorAll('.menudp2 .more');
  subMoreBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      const parentLi = btn.closest('li');
      const submenu3 = parentLi.querySelector('.menudp3');
      if (!submenu3) return;

      // 같은 menudp2 안 다른 menudp3 닫기
      parentLi.parentElement.querySelectorAll('.menudp3').forEach(other => {
        if (other !== submenu3) other.style.maxHeight = '0';
      });

      // 토글
      submenu3.style.maxHeight = (!submenu3.style.maxHeight || submenu3.style.maxHeight === '0px') ? submenu3.scrollHeight + 'px' : '0';

      // menudp1 전체 높이 다시 계산
      const menudp1 = btn.closest('.menudp1');
      menudp1.style.height = menudp1.scrollHeight + 'px';
    });
  });
});

// main-slide
$('#main-slide').load('include/main_slide.html');

// footer
$('footer').load('include/footer.html');