document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const headerContainer = document.querySelector('header .container');
    
    // 创建汉堡菜单按钮
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    menuButton.style.display = 'none';
    
    // 添加样式
    menuButton.style.background = 'none';
    menuButton.style.border = 'none';
    menuButton.style.cursor = 'pointer';
    menuButton.style.padding = '10px';
    
    // 添加汉堡菜单按钮到DOM
    const nav = document.querySelector('nav');
    if (headerContainer && nav) {
        headerContainer.insertBefore(menuButton, nav);
        
        // 菜单切换功能
        menuButton.addEventListener('click', function() {
            const navUl = document.querySelector('nav ul');
            if (navUl) {
                navUl.classList.toggle('show');
            }
        });
    }
    
    // 响应式调整
    function handleResize() {
        const navUl = document.querySelector('nav ul');
        if (window.innerWidth <= 768) {
            if (menuButton) menuButton.style.display = 'block';
            if (navUl) navUl.classList.remove('show');
        } else {
            if (menuButton) menuButton.style.display = 'none';
            if (navUl) navUl.style.display = 'flex';
        }
    }
    
    // 初始调整
    handleResize();
    
    // 窗口大小变化时调整
    window.addEventListener('resize', handleResize);
});