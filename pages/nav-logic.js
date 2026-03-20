// SISTEM DE ACCES
const lv = parseInt(localStorage.getItem('userLv') || 0);

// Am adăugat proprietatea 'i' pentru iconițe (Font Awesome)
const menu = [
    { n: 'Server Rules', url: 'server-rules.html', min: 0, i: 'fa-book' },
    { n: 'Admin Rules', url: 'admin-rules.html', min: 3, i: 'fa-gear' }, // Rotita
    { n: 'Helper Rules', url: 'helper-rules.html', min: 2, i: 'fa-shield-halved' }, // Scut
    { n: 'Leader Rules', url: 'leader-rules.html', min: 1, i: 'fa-users' }, // Oameni (potrivit pt lideri)
    { n: 'Admin Info', url: 'admin-info.html', min: 3, i: 'fa-gear' }, // Rotita
    { n: 'Helper Info', url: 'helper-info.html', min: 2, i: 'fa-shield-halved' }, // Scut
    { n: 'Leader Info', url: 'leader-info.html', min: 1, i: 'fa-users' } // Oameni
];

// Verificăm dacă userul are voie aici
const currentPage = window.location.pathname.split('/').pop();
const pageData = menu.find(m => m.url === currentPage);

if (pageData && lv < pageData.min) {
    alert("Acces restricționat pentru gradul tău!");
    window.location.href = '../index.html';
}

// Generăm Navbar-ul
const navContainer = document.getElementById('nav-links');
if (navContainer) {
    menu.forEach(m => {
        if (lv >= m.min) {
            const a = document.createElement('a');
            a.href = m.url;
            // Am schimbat innerText cu innerHTML pentru a permite iconița <i>
            a.innerHTML = `<i class="fa-solid ${m.i} mr-2"></i> ${m.n}`;
            a.className = `nav-item ${currentPage === m.url ? 'active' : ''}`;
            navContainer.appendChild(a);
        }
    });
}

function logout() {
    localStorage.clear();
    window.location.href = '../index.html';
}