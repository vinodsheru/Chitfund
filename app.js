/* ============================================
   KUMAR CHITS - Application Logic
   ============================================ */

// ===== STATE =====
let state = {
    chits: [],
    members: [],
    settings: {
        orgName: 'Kumar Chits',
        organizerName: 'Kumar',
        contact: '+91 98765 43210'
    }
};

// ===== DEMO DATA =====
function getDemoData() {
    const chits = [
        {
            id: 'chit_1',
            name: '10K Monthly Chit',
            value: 10000,
            monthly: 1200,
            memberCount: 10,
            monthCount: 10,
            startNotLift: 1000,
            monthlyDecrease: 100,
            liftAmount: 9000,
            createdAt: Date.now() - 86400000 * 30
        },
        {
            id: 'chit_2',
            name: '15K Premium Chit',
            value: 15000,
            monthly: 1750,
            memberCount: 10,
            monthCount: 10,
            startNotLift: 1500,
            monthlyDecrease: 150,
            liftAmount: 13500,
            createdAt: Date.now() - 86400000 * 25
        },
        {
            id: 'chit_3',
            name: '25K Gold Chit',
            value: 25000,
            monthly: 3000,
            memberCount: 10,
            monthCount: 10,
            startNotLift: 2500,
            monthlyDecrease: 250,
            liftAmount: 22500,
            createdAt: Date.now() - 86400000 * 20
        },
        {
            id: 'chit_4',
            name: '1 Lakh Diamond Chit',
            value: 100000,
            monthly: 10000,
            memberCount: 10,
            monthCount: 10,
            startNotLift: 10000,
            monthlyDecrease: 1000,
            liftAmount: 90000,
            createdAt: Date.now() - 86400000 * 15
        },
        {
            id: 'chit_5',
            name: '5 Lakh Platinum Chit',
            value: 500000,
            monthly: 50000,
            memberCount: 10,
            monthCount: 10,
            startNotLift: 50000,
            monthlyDecrease: 5000,
            liftAmount: 450000,
            createdAt: Date.now() - 86400000 * 10
        }
    ];

    const members = [
        { id: 'mem_1', name: 'Rajesh Kumar', phone: '9876543210', chitId: 'chit_1', liftMonth: 3, createdAt: Date.now() - 86400000 * 28 },
        { id: 'mem_2', name: 'Priya Sharma', phone: '9876543211', chitId: 'chit_1', liftMonth: 5, createdAt: Date.now() - 86400000 * 27 },
        { id: 'mem_3', name: 'Amit Patel', phone: '9876543212', chitId: 'chit_2', liftMonth: 2, createdAt: Date.now() - 86400000 * 26 },
        { id: 'mem_4', name: 'Sunita Reddy', phone: '9876543213', chitId: 'chit_2', liftMonth: null, createdAt: Date.now() - 86400000 * 25 },
        { id: 'mem_5', name: 'Venkatesh Iyer', phone: '9876543214', chitId: 'chit_3', liftMonth: 1, createdAt: Date.now() - 86400000 * 24 },
        { id: 'mem_6', name: 'Lakshmi Devi', phone: '9876543215', chitId: 'chit_3', liftMonth: 4, createdAt: Date.now() - 86400000 * 23 },
        { id: 'mem_7', name: 'Suresh Babu', phone: '9876543216', chitId: 'chit_4', liftMonth: null, createdAt: Date.now() - 86400000 * 22 },
        { id: 'mem_8', name: 'Anitha Kumari', phone: '9876543217', chitId: 'chit_4', liftMonth: 6, createdAt: Date.now() - 86400000 * 21 },
        { id: 'mem_9', name: 'Ramesh Naidu', phone: '9876543218', chitId: 'chit_5', liftMonth: null, createdAt: Date.now() - 86400000 * 20 },
        { id: 'mem_10', name: 'Kavitha Rao', phone: '9876543219', chitId: 'chit_5', liftMonth: 2, createdAt: Date.now() - 86400000 * 19 },
        { id: 'mem_11', name: 'Ganesh Prasad', phone: '9876543220', chitId: 'chit_1', liftMonth: 7, createdAt: Date.now() - 86400000 * 18 },
        { id: 'mem_12', name: 'Meena Kumari', phone: '9876543221', chitId: 'chit_2', liftMonth: null, createdAt: Date.now() - 86400000 * 17 },
        { id: 'mem_13', name: 'Srinivas Murthy', phone: '9876543222', chitId: 'chit_3', liftMonth: 8, createdAt: Date.now() - 86400000 * 16 },
        { id: 'mem_14', name: 'Padma Priya', phone: '9876543223', chitId: 'chit_4', liftMonth: 3, createdAt: Date.now() - 86400000 * 15 },
        { id: 'mem_15', name: 'Ravi Shankar', phone: '9876543224', chitId: 'chit_5', liftMonth: null, createdAt: Date.now() - 86400000 * 14 },
        { id: 'mem_16', name: 'Deepa Lakshmi', phone: '9876543225', chitId: 'chit_1', liftMonth: null, createdAt: Date.now() - 86400000 * 13 },
        { id: 'mem_17', name: 'Nagesh Rao', phone: '9876543226', chitId: 'chit_3', liftMonth: 6, createdAt: Date.now() - 86400000 * 12 },
        { id: 'mem_18', name: 'Saroja Devi', phone: '9876543227', chitId: 'chit_2', liftMonth: 9, createdAt: Date.now() - 86400000 * 11 },
        { id: 'mem_19', name: 'Vijay Kumar', phone: '9876543228', chitId: 'chit_4', liftMonth: null, createdAt: Date.now() - 86400000 * 10 },
        { id: 'mem_20', name: 'Bharathi Devi', phone: '9876543229', chitId: 'chit_5', liftMonth: 5, createdAt: Date.now() - 86400000 * 9 }
    ];

    return { chits, members };
}

// ===== LOCAL STORAGE =====
function saveLocal() {
    try {
        localStorage.setItem('kumarChits_chits', JSON.stringify(state.chits));
        localStorage.setItem('kumarChits_members', JSON.stringify(state.members));
        localStorage.setItem('kumarChits_settings', JSON.stringify(state.settings));
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

function loadLocal() {
    try {
        const chits = localStorage.getItem('kumarChits_chits');
        const members = localStorage.getItem('kumarChits_members');
        const settings = localStorage.getItem('kumarChits_settings');

        if (chits) state.chits = JSON.parse(chits);
        if (members) state.members = JSON.parse(members);
        if (settings) state.settings = JSON.parse(settings);

        // If no data, load demo
        if (!chits || state.chits.length === 0) {
            const demo = getDemoData();
            state.chits = demo.chits;
            state.members = demo.members;
            saveLocal();
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        const demo = getDemoData();
        state.chits = demo.chits;
        state.members = demo.members;
        saveLocal();
    }
}

// ===== UTILITY FUNCTIONS =====
function generateId(prefix) {
    return prefix + '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
}

function formatCurrency(amount) {
    if (amount >= 10000000) return '₹' + (amount / 10000000).toFixed(1) + ' Cr';
    if (amount >= 100000) return '₹' + (amount / 100000).toFixed(1) + ' L';
    if (amount >= 1000) return '₹' + amount.toLocaleString('en-IN');
    return '₹' + amount;
}

function formatCurrencyFull(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
}

function getChitById(id) {
    return state.chits.find(c => c.id === id);
}

function getMemberById(id) {
    return state.members.find(m => m.id === id);
}

function getMembersByChitId(chitId) {
    return state.members.filter(m => m.chitId === chitId);
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const icons = {
        success: '<i class="fas fa-check-circle text-green-500 text-lg"></i>',
        error: '<i class="fas fa-times-circle text-red-500 text-lg"></i>',
        info: '<i class="fas fa-info-circle text-blue-500 text-lg"></i>'
    };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${icons[type] || icons.info}<span class="text-gray-700 font-medium">${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(30px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== NAVIGATION =====
let currentSection = 'dashboard';

function navigateTo(section) {
    currentSection = section;
    // Hide all sections
    document.querySelectorAll('.section-content').forEach(el => el.classList.add('hidden'));
    // Show target
    const target = document.getElementById('section-' + section);
    if (target) target.classList.remove('hidden');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.section === section);
    });

    // Update page title
    const titles = {
        dashboard: { title: 'Dashboard', subtitle: 'Overview of your chit fund operations' },
        chits: { title: 'Chit Schemes', subtitle: 'Manage all your chit fund schemes' },
        members: { title: 'Members', subtitle: 'Manage member enrollments and details' },
        downloads: { title: 'Downloads', subtitle: 'Download cards, posters and export data' },
        settings: { title: 'Settings', subtitle: 'Configure your organization preferences' }
    };
    const t = titles[section] || titles.dashboard;
    document.getElementById('pageTitle').textContent = t.title;
    document.getElementById('pageSubtitle').textContent = t.subtitle;

    // Refresh section data
    if (section === 'dashboard') renderDashboard();
    if (section === 'chits') renderChits();
    if (section === 'members') renderMembers();
    if (section === 'downloads') renderDownloads();
    if (section === 'settings') renderSettings();

    // Close sidebar on mobile
    closeSidebar();
    return false;
}

// ===== SIDEBAR TOGGLE =====
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

function closeSidebar() {
    if (window.innerWidth < 1024) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

// ===== GLOBAL SEARCH =====
function handleGlobalSearch(query) {
    if (!query.trim()) return;
    const q = query.toLowerCase();
    // Check if matches chit
    const chitMatch = state.chits.some(c => c.name.toLowerCase().includes(q));
    const memberMatch = state.members.some(m => m.name.toLowerCase().includes(q) || m.phone.includes(q));

    if (memberMatch) {
        navigateTo('members');
        document.getElementById('searchMembers').value = query;
        renderMembers();
    } else if (chitMatch) {
        navigateTo('chits');
        document.getElementById('searchChits').value = query;
        renderChits();
    }
}

// ===== DASHBOARD =====
function renderDashboard() {
    // Stats
    const totalChits = state.chits.length;
    const totalMembers = state.members.length;
    const totalCollection = state.chits.reduce((sum, c) => sum + (c.value * c.memberCount), 0);
    const estimatedProfit = state.chits.reduce((sum, c) => {
        // Organizer profit = (monthly contribution * members * months) - (chit value * months)
        const totalIn = c.monthly * c.memberCount * c.monthCount;
        const totalOut = c.value * c.monthCount;
        return sum + (totalIn - totalOut);
    }, 0);

    document.getElementById('statTotalChits').textContent = totalChits;
    document.getElementById('statTotalMembers').textContent = totalMembers;
    document.getElementById('statTotalCollection').textContent = formatCurrency(totalCollection);
    document.getElementById('statEstimatedProfit').textContent = formatCurrency(Math.max(0, estimatedProfit));

    // Recent Chits
    const recentChits = [...state.chits].sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);
    const recentChitsEl = document.getElementById('recentChitsList');
    if (recentChits.length === 0) {
        recentChitsEl.innerHTML = '<p class="text-gray-400 text-sm text-center py-6">No chits yet</p>';
    } else {
        recentChitsEl.innerHTML = recentChits.map(c => {
            const memberCount = getMembersByChitId(c.id).length;
            return `
                <div class="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition cursor-pointer" onclick="navigateTo('chits')">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm">
                            ${c.name.charAt(0)}
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900 text-sm">${c.name}</p>
                            <p class="text-xs text-gray-500">${memberCount} members</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-gray-900 text-sm">${formatCurrencyFull(c.value)}</p>
                        <span class="badge badge-live"><i class="fas fa-circle text-[5px] mr-1"></i>LIVE</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Recent Members
    const recentMembers = [...state.members].sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);
    const recentMembersEl = document.getElementById('recentMembersList');
    if (recentMembers.length === 0) {
        recentMembersEl.innerHTML = '<p class="text-gray-400 text-sm text-center py-6">No members yet</p>';
    } else {
        recentMembersEl.innerHTML = recentMembers.map(m => {
            const chit = getChitById(m.chitId);
            const initials = m.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            return `
                <div class="flex items-center justify-between p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition cursor-pointer" onclick="navigateTo('members')">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                            ${initials}
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900 text-sm">${m.name}</p>
                            <p class="text-xs text-gray-500">${chit ? chit.name : 'N/A'}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-gray-600">${m.phone}</p>
                        ${m.liftMonth ? `<span class="badge badge-lifted">Month ${m.liftMonth}</span>` : '<span class="badge badge-pending">Pending</span>'}
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ===== CHIT MANAGEMENT =====
function renderChits() {
    const searchVal = document.getElementById('searchChits')?.value?.toLowerCase() || '';
    let filtered = state.chits;
    if (searchVal) {
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(searchVal) ||
            c.value.toString().includes(searchVal) ||
            c.monthly.toString().includes(searchVal)
        );
    }

    const grid = document.getElementById('chitsGrid');
    const noChits = document.getElementById('noChits');

    if (filtered.length === 0) {
        grid.innerHTML = '';
        grid.classList.add('hidden');
        noChits.classList.remove('hidden');
        return;
    }

    noChits.classList.add('hidden');
    grid.classList.remove('hidden');

    grid.innerHTML = filtered.map((c, idx) => {
        const memberCount = getMembersByChitId(c.id).length;
        return `
            <div class="chit-card animate-card" style="animation-delay: ${idx * 0.08}s">
                <div class="chit-card-header">
                    <div class="flex items-center justify-between relative z-10">
                        <div>
                            <h3 class="text-lg font-bold">${c.name}</h3>
                            <p class="text-green-100 text-sm mt-0.5">${c.memberCount} members · ${c.monthCount} months</p>
                        </div>
                        <span class="badge bg-white/20 text-white backdrop-blur-sm"><i class="fas fa-circle text-[5px] mr-1 text-green-300"></i>LIVE</span>
                    </div>
                </div>
                <div class="chit-card-body">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Chit Value</p>
                            <p class="text-lg font-bold text-gray-900">${formatCurrencyFull(c.value)}</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Monthly</p>
                            <p class="text-lg font-bold text-brand-600">${formatCurrencyFull(c.monthly)}</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Enrolled</p>
                            <p class="text-sm font-semibold text-gray-700">${memberCount} / ${c.memberCount}</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 font-medium uppercase tracking-wide">Lift Amount</p>
                            <p class="text-sm font-semibold text-gray-700">${c.liftAmount ? formatCurrencyFull(c.liftAmount) : 'N/A'}</p>
                        </div>
                    </div>
                </div>
                <div class="chit-card-footer">
                    <button onclick="editChit('${c.id}')" class="btn-secondary btn-sm flex-1" title="Edit">
                        <i class="fas fa-edit mr-1"></i>Edit
                    </button>
                    <button onclick="viewChitMembers('${c.id}')" class="btn-secondary btn-sm flex-1" title="Members">
                        <i class="fas fa-users mr-1"></i>Members
                    </button>
                    <button onclick="downloadPoster('${c.id}')" class="btn-secondary btn-sm flex-1 text-amber-700 border-amber-200 hover:bg-amber-50" title="Poster">
                        <i class="fas fa-image mr-1"></i>Poster
                    </button>
                    <button onclick="confirmDeleteChit('${c.id}')" class="btn-icon bg-red-50 text-red-500 hover:bg-red-100" title="Delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Chit Modal
function openChitModal(editId) {
    const modal = document.getElementById('chitModal');
    const form = document.getElementById('chitForm');
    form.reset();
    document.getElementById('chitEditId').value = '';

    if (editId) {
        const c = getChitById(editId);
        if (!c) return;
        document.getElementById('chitModalTitle').textContent = 'Edit Chit';
        document.getElementById('chitSubmitText').textContent = 'Update Chit';
        document.getElementById('chitEditId').value = c.id;
        document.getElementById('chitName').value = c.name;
        document.getElementById('chitValue').value = c.value;
        document.getElementById('chitMonthly').value = c.monthly;
        document.getElementById('chitMembers').value = c.memberCount;
        document.getElementById('chitMonths').value = c.monthCount;
        document.getElementById('chitStartNotLift').value = c.startNotLift || '';
        document.getElementById('chitMonthlyDecrease').value = c.monthlyDecrease || '';
        document.getElementById('chitLiftAmount').value = c.liftAmount || '';
    } else {
        document.getElementById('chitModalTitle').textContent = 'Create New Chit';
        document.getElementById('chitSubmitText').textContent = 'Create Chit';
    }
    modal.classList.remove('hidden');
}

function closeChitModal() {
    document.getElementById('chitModal').classList.add('hidden');
}

function handleChitSubmit(e) {
    e.preventDefault();
    const editId = document.getElementById('chitEditId').value;
    const data = {
        name: document.getElementById('chitName').value.trim(),
        value: Number(document.getElementById('chitValue').value),
        monthly: Number(document.getElementById('chitMonthly').value),
        memberCount: Number(document.getElementById('chitMembers').value),
        monthCount: Number(document.getElementById('chitMonths').value),
        startNotLift: Number(document.getElementById('chitStartNotLift').value) || 0,
        monthlyDecrease: Number(document.getElementById('chitMonthlyDecrease').value) || 0,
        liftAmount: Number(document.getElementById('chitLiftAmount').value) || 0
    };

    if (editId) {
        // Update
        const idx = state.chits.findIndex(c => c.id === editId);
        if (idx !== -1) {
            state.chits[idx] = { ...state.chits[idx], ...data };
            showToast('Chit updated successfully!');
        }
    } else {
        // Create
        state.chits.push({
            id: generateId('chit'),
            ...data,
            createdAt: Date.now()
        });
        showToast('Chit created successfully!');
    }

    saveLocal();
    closeChitModal();
    renderChits();
    renderDashboard();
}

function createChit() { openChitModal(); }
function editChit(id) { openChitModal(id); }

function confirmDeleteChit(id) {
    const c = getChitById(id);
    if (!c) return;
    const memberCount = getMembersByChitId(id).length;
    document.getElementById('confirmMessage').textContent =
        `Are you sure you want to delete "${c.name}"? ${memberCount > 0 ? `This will also affect ${memberCount} member(s) linked to this chit.` : 'This action cannot be undone.'}`;
    document.getElementById('confirmDeleteBtn').onclick = () => deleteChit(id);
    document.getElementById('confirmModal').classList.remove('hidden');
}

function deleteChit(id) {
    state.chits = state.chits.filter(c => c.id !== id);
    // Also remove members of this chit
    state.members = state.members.filter(m => m.chitId !== id);
    saveLocal();
    closeConfirmModal();
    renderChits();
    renderDashboard();
    showToast('Chit deleted successfully!', 'info');
}

// View Chit Members
function viewChitMembers(chitId) {
    const chit = getChitById(chitId);
    if (!chit) return;
    const members = getMembersByChitId(chitId);
    document.getElementById('chitMembersTitle').textContent = `Members – ${chit.name}`;
    const list = document.getElementById('chitMembersList');

    if (members.length === 0) {
        list.innerHTML = `
            <div class="text-center py-8">
                <i class="fas fa-users text-gray-300 text-3xl mb-3"></i>
                <p class="text-gray-400 text-sm">No members enrolled in this chit yet.</p>
                <button onclick="closeChitMembersModal(); navigateTo('members'); setTimeout(()=>openMemberModal(),300)" class="btn-primary btn-sm mt-3">
                    <i class="fas fa-user-plus mr-1"></i>Add Member
                </button>
            </div>
        `;
    } else {
        list.innerHTML = members.map((m, i) => {
            const initials = m.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            return `
                <div class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-xs">${initials}</div>
                        <div>
                            <p class="font-semibold text-gray-900 text-sm">${m.name}</p>
                            <p class="text-xs text-gray-500">${m.phone}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        ${m.liftMonth ? `<span class="badge badge-lifted">Lift: Month ${m.liftMonth}</span>` : '<span class="badge badge-pending">Pending</span>'}
                        <button onclick="downloadMemberCard('${m.id}')" class="btn-icon bg-brand-50 text-brand-600 hover:bg-brand-100" title="Download Card">
                            <i class="fas fa-download"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    document.getElementById('chitMembersModal').classList.remove('hidden');
}

function closeChitMembersModal() {
    document.getElementById('chitMembersModal').classList.add('hidden');
}

// ===== MEMBER MANAGEMENT =====
function renderMembers() {
    const searchVal = document.getElementById('searchMembers')?.value?.toLowerCase() || '';
    let filtered = state.members;
    if (searchVal) {
        filtered = filtered.filter(m => {
            const chit = getChitById(m.chitId);
            return m.name.toLowerCase().includes(searchVal) ||
                m.phone.includes(searchVal) ||
                (chit && chit.name.toLowerCase().includes(searchVal));
        });
    }

    const tbody = document.getElementById('membersTableBody');
    const noMembers = document.getElementById('noMembers');
    const tableCard = tbody.closest('.card');

    if (filtered.length === 0) {
        tbody.innerHTML = '';
        if (tableCard) tableCard.classList.add('hidden');
        noMembers.classList.remove('hidden');
        return;
    }

    noMembers.classList.add('hidden');
    if (tableCard) tableCard.classList.remove('hidden');

    tbody.innerHTML = filtered.map((m, idx) => {
        const chit = getChitById(m.chitId);
        const initials = m.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        const statusBadge = m.liftMonth
            ? `<span class="badge badge-lifted"><i class="fas fa-arrow-up text-[8px] mr-1"></i>Lifted</span>`
            : `<span class="badge badge-pending">Pending</span>`;
        return `
            <tr class="animate-card" style="animation-delay: ${idx * 0.03}s">
                <td class="px-5 py-3.5 text-sm text-gray-500 font-medium">${idx + 1}</td>
                <td class="px-5 py-3.5">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0">${initials}</div>
                        <span class="font-semibold text-gray-900 text-sm">${m.name}</span>
                    </div>
                </td>
                <td class="px-5 py-3.5 text-sm text-gray-600">${m.phone}</td>
                <td class="px-5 py-3.5 text-sm text-gray-600 font-medium">${chit ? chit.name : '<span class="text-red-400">Deleted</span>'}</td>
                <td class="px-5 py-3.5 text-sm font-semibold text-gray-900">${chit ? formatCurrencyFull(chit.value) : 'N/A'}</td>
                <td class="px-5 py-3.5 text-sm">${m.liftMonth ? `<span class="font-semibold text-amber-700">Month ${m.liftMonth}</span>` : '<span class="text-gray-400">—</span>'}</td>
                <td class="px-5 py-3.5">${statusBadge}</td>
                <td class="px-5 py-3.5 text-right">
                    <div class="flex items-center justify-end gap-1">
                        <button onclick="downloadMemberCard('${m.id}')" class="btn-icon bg-brand-50 text-brand-600 hover:bg-brand-100" title="Download Card">
                            <i class="fas fa-id-card"></i>
                        </button>
                        <button onclick="downloadMemberTxt('${m.id}')" class="btn-icon bg-blue-50 text-blue-600 hover:bg-blue-100" title="Download Details">
                            <i class="fas fa-file-alt"></i>
                        </button>
                        <button onclick="editMember('${m.id}')" class="btn-icon bg-amber-50 text-amber-600 hover:bg-amber-100" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="confirmDeleteMember('${m.id}')" class="btn-icon bg-red-50 text-red-500 hover:bg-red-100" title="Delete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Member Modal
function openMemberModal(editId) {
    const modal = document.getElementById('memberModal');
    const form = document.getElementById('memberForm');
    form.reset();
    document.getElementById('memberEditId').value = '';

    // Populate chit dropdown
    const select = document.getElementById('memberChit');
    select.innerHTML = '<option value="">Choose a chit...</option>' +
        state.chits.map(c => `<option value="${c.id}">${c.name} (${formatCurrencyFull(c.value)})</option>`).join('');

    if (editId) {
        const m = getMemberById(editId);
        if (!m) return;
        document.getElementById('memberModalTitle').textContent = 'Edit Member';
        document.getElementById('memberSubmitText').textContent = 'Update Member';
        document.getElementById('memberEditId').value = m.id;
        document.getElementById('memberName').value = m.name;
        document.getElementById('memberPhone').value = m.phone;
        document.getElementById('memberChit').value = m.chitId;
        document.getElementById('memberLiftMonth').value = m.liftMonth || '';
    } else {
        document.getElementById('memberModalTitle').textContent = 'Add New Member';
        document.getElementById('memberSubmitText').textContent = 'Add Member';
    }
    modal.classList.remove('hidden');
}

function closeMemberModal() {
    document.getElementById('memberModal').classList.add('hidden');
}

function handleMemberSubmit(e) {
    e.preventDefault();
    const editId = document.getElementById('memberEditId').value;
    const data = {
        name: document.getElementById('memberName').value.trim(),
        phone: document.getElementById('memberPhone').value.trim(),
        chitId: document.getElementById('memberChit').value,
        liftMonth: Number(document.getElementById('memberLiftMonth').value) || null
    };

    if (!data.chitId) {
        showToast('Please select a chit!', 'error');
        return;
    }

    if (editId) {
        const idx = state.members.findIndex(m => m.id === editId);
        if (idx !== -1) {
            state.members[idx] = { ...state.members[idx], ...data };
            showToast('Member updated successfully!');
        }
    } else {
        state.members.push({
            id: generateId('mem'),
            ...data,
            createdAt: Date.now()
        });
        showToast('Member added successfully!');
    }

    saveLocal();
    closeMemberModal();
    renderMembers();
    renderDashboard();
}

function addMember() { openMemberModal(); }
function editMember(id) { openMemberModal(id); }

function confirmDeleteMember(id) {
    const m = getMemberById(id);
    if (!m) return;
    document.getElementById('confirmMessage').textContent =
        `Are you sure you want to delete member "${m.name}"? This action cannot be undone.`;
    document.getElementById('confirmDeleteBtn').onclick = () => deleteMember(id);
    document.getElementById('confirmModal').classList.remove('hidden');
}

function deleteMember(id) {
    state.members = state.members.filter(m => m.id !== id);
    saveLocal();
    closeConfirmModal();
    renderMembers();
    renderDashboard();
    showToast('Member deleted successfully!', 'info');
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.add('hidden');
}

// ===== DOWNLOAD: MEMBER CARD =====
function downloadMemberCard(memberId) {
    const m = getMemberById(memberId);
    if (!m) { showToast('Member not found!', 'error'); return; }
    const chit = getChitById(m.chitId);

    const container = document.getElementById('downloadCanvas');
    container.innerHTML = `
        <div class="member-card-template" id="memberCardRender">
            <div class="member-card-header">
                <div style="position:relative;z-index:1">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
                        <div style="width:44px;height:44px;border-radius:12px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">
                            <span style="font-size:20px">🪙</span>
                        </div>
                        <div>
                            <div style="font-size:20px;font-weight:800;letter-spacing:-0.5px">KUMAR CHITS</div>
                            <div style="font-size:11px;color:rgba(255,255,255,0.7);font-weight:500">Member Identity Card</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="member-card-body">
                <div class="member-card-row">
                    <span class="member-card-label">Member Name</span>
                    <span class="member-card-value">${m.name}</span>
                </div>
                <div class="member-card-row">
                    <span class="member-card-label">Phone</span>
                    <span class="member-card-value">${m.phone}</span>
                </div>
                <div class="member-card-row">
                    <span class="member-card-label">Chit Scheme</span>
                    <span class="member-card-value">${chit ? chit.name : 'N/A'}</span>
                </div>
                <div class="member-card-row">
                    <span class="member-card-label">Chit Value</span>
                    <span class="member-card-value" style="color:#059669">${chit ? formatCurrencyFull(chit.value) : 'N/A'}</span>
                </div>
                <div class="member-card-row">
                    <span class="member-card-label">Monthly Amount</span>
                    <span class="member-card-value">${chit ? formatCurrencyFull(chit.monthly) : 'N/A'}</span>
                </div>
                <div class="member-card-row">
                    <span class="member-card-label">Lift Month</span>
                    <span class="member-card-value">${m.liftMonth ? 'Month ' + m.liftMonth : 'Not Assigned'}</span>
                </div>
            </div>
            <div class="member-card-footer">
                ✦ KUMAR CHITS ORGANIZER SYSTEM ✦ | Contact: ${state.settings.contact}
            </div>
        </div>
    `;

    setTimeout(() => {
        const el = document.getElementById('memberCardRender');
        html2canvas(el, {
            scale: 2,
            backgroundColor: '#ffffff',
            useCORS: true,
            logging: false
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `KumarChits_Card_${m.name.replace(/\s+/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            container.innerHTML = '';
            showToast(`Member card downloaded for ${m.name}!`);
        }).catch(err => {
            console.error('Error generating card:', err);
            showToast('Error generating card. Please try again.', 'error');
            container.innerHTML = '';
        });
    }, 200);
}

// Download from Downloads page
function downloadSelectedMemberCard() {
    const id = document.getElementById('downloadMemberSelect').value;
    if (!id) { showToast('Please select a member!', 'error'); return; }
    downloadMemberCard(id);
}

// ===== DOWNLOAD: MEMBER TXT =====
function downloadMemberTxt(memberId) {
    const m = getMemberById(memberId);
    if (!m) return;
    const chit = getChitById(m.chitId);

    const content = `
╔════════════════════════════════════════════╗
║           KUMAR CHITS - MEMBER DETAILS     ║
╚════════════════════════════════════════════╝

  Member Name    : ${m.name}
  Phone Number   : ${m.phone}
  Chit Scheme    : ${chit ? chit.name : 'N/A'}
  Chit Value     : ${chit ? formatCurrencyFull(chit.value) : 'N/A'}
  Monthly Amount : ${chit ? formatCurrencyFull(chit.monthly) : 'N/A'}
  Lift Month     : ${m.liftMonth ? 'Month ' + m.liftMonth : 'Not Assigned'}
  Status         : ${m.liftMonth ? 'Lifted' : 'Pending'}

──────────────────────────────────────────────
  Organizer      : ${state.settings.organizerName}
  Contact        : ${state.settings.contact}
  Organization   : ${state.settings.orgName}
──────────────────────────────────────────────
  Generated on   : ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
╔════════════════════════════════════════════╗
║     Kumar Chits Organizer System v1.0      ║
╚════════════════════════════════════════════╝
`.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = `KumarChits_${m.name.replace(/\s+/g, '_')}_Details.txt`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
    showToast(`Details downloaded for ${m.name}!`);
}

// ===== DOWNLOAD: CHIT POSTER =====
function downloadPoster(chitId) {
    const c = getChitById(chitId);
    if (!c) { showToast('Chit not found!', 'error'); return; }

    // Build poster rows
    let rows = '';
    let notLiftAmt = c.startNotLift || Math.round(c.value * 0.1);
    const decrease = c.monthlyDecrease || Math.round(notLiftAmt / c.monthCount);
    const liftAmt = c.liftAmount || (c.value - notLiftAmt);

    for (let month = 1; month <= c.monthCount; month++) {
        const currentNotLift = Math.max(0, notLiftAmt - (decrease * (month - 1)));
        const currentLift = c.value - currentNotLift;
        const payment = c.monthly;
        rows += `
            <tr>
                <td style="font-weight:700;color:#166534">${month}</td>
                <td>${formatCurrencyFull(currentNotLift)}</td>
                <td style="color:#b45309;font-weight:600">${formatCurrencyFull(currentLift)}</td>
                <td style="font-weight:700;color:#059669">${formatCurrencyFull(payment)}</td>
            </tr>
        `;
    }

    const container = document.getElementById('downloadCanvas');
    container.innerHTML = `
        <div class="poster-template" id="posterRender">
            <div class="poster-header">
                <div style="position:relative;z-index:1">
                    <div style="font-size:12px;letter-spacing:2px;opacity:0.7;margin-bottom:4px">★ TRUSTED CHIT FUND ★</div>
                    <div style="font-size:28px;font-weight:900;letter-spacing:1px">KUMAR CHITS</div>
                    <div style="font-size:13px;margin-top:6px;opacity:0.85">${c.name} — ${formatCurrencyFull(c.value)}</div>
                    <div style="font-size:11px;margin-top:4px;opacity:0.65">Members: ${c.memberCount} | Duration: ${c.monthCount} Months | Monthly: ${formatCurrencyFull(c.monthly)}</div>
                </div>
            </div>
            <div class="poster-body">
                <table class="poster-table">
                    <thead>
                        <tr>
                            <th style="border-radius:6px 0 0 0">Month</th>
                            <th>Not Lift Amount</th>
                            <th>If Lift Amount</th>
                            <th style="border-radius:0 6px 0 0">Payment / Month</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
            <div class="poster-footer">
                ✦ ${state.settings.orgName.toUpperCase()} ✦ | Organizer: ${state.settings.organizerName} | Contact: ${state.settings.contact}<br>
                <span style="font-size:10px;opacity:0.7">Join with trust. Grow with us.</span>
            </div>
        </div>
    `;

    setTimeout(() => {
        const el = document.getElementById('posterRender');
        html2canvas(el, {
            scale: 2,
            backgroundColor: null,
            useCORS: true,
            logging: false
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `KumarChits_Poster_${c.name.replace(/\s+/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            container.innerHTML = '';
            showToast(`Poster downloaded for ${c.name}!`);
        }).catch(err => {
            console.error('Error generating poster:', err);
            showToast('Error generating poster.', 'error');
            container.innerHTML = '';
        });
    }, 200);
}

// Download from Downloads page
function downloadSelectedPoster() {
    const id = document.getElementById('downloadPosterSelect').value;
    if (!id) { showToast('Please select a chit!', 'error'); return; }
    downloadPoster(id);
}

// ===== EXPORT CSV =====
function exportCSV() {
    if (state.members.length === 0) {
        showToast('No members to export!', 'error');
        return;
    }

    const headers = ['#', 'Member Name', 'Phone', 'Chit Name', 'Chit Value', 'Monthly Amount', 'Lift Month', 'Status'];
    const rows = state.members.map((m, i) => {
        const chit = getChitById(m.chitId);
        return [
            i + 1,
            m.name,
            m.phone,
            chit ? chit.name : 'N/A',
            chit ? chit.value : 'N/A',
            chit ? chit.monthly : 'N/A',
            m.liftMonth || 'Pending',
            m.liftMonth ? 'Lifted' : 'Pending'
        ];
    });

    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
        csv += row.map(val => `"${val}"`).join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.download = `KumarChits_Members_${new Date().toISOString().slice(0, 10)}.csv`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
    showToast(`CSV exported with ${state.members.length} members!`);
}

// ===== DOWNLOADS PAGE =====
function renderDownloads() {
    // Populate member select
    const memberSelect = document.getElementById('downloadMemberSelect');
    memberSelect.innerHTML = '<option value="">Select a member...</option>' +
        state.members.map(m => {
            const chit = getChitById(m.chitId);
            return `<option value="${m.id}">${m.name}${chit ? ' (' + chit.name + ')' : ''}</option>`;
        }).join('');

    // Populate poster select
    const posterSelect = document.getElementById('downloadPosterSelect');
    posterSelect.innerHTML = '<option value="">Select a chit...</option>' +
        state.chits.map(c => `<option value="${c.id}">${c.name} (${formatCurrencyFull(c.value)})</option>`).join('');

    // CSV count
    document.getElementById('csvMemberCount').textContent = state.members.length;
}

// ===== SETTINGS =====
function renderSettings() {
    document.getElementById('settingsOrgName').value = state.settings.orgName;
    document.getElementById('settingsOrganizerName').value = state.settings.organizerName;
    document.getElementById('settingsContact').value = state.settings.contact;
}

function saveSettings() {
    state.settings.orgName = document.getElementById('settingsOrgName').value.trim();
    state.settings.organizerName = document.getElementById('settingsOrganizerName').value.trim();
    state.settings.contact = document.getElementById('settingsContact').value.trim();
    saveLocal();
    showToast('Settings saved successfully!');
}

function resetToDemo() {
    if (confirm('This will reset all data to demo values. Continue?')) {
        const demo = getDemoData();
        state.chits = demo.chits;
        state.members = demo.members;
        state.settings = { orgName: 'Kumar Chits', organizerName: 'Kumar', contact: '+91 98765 43210' };
        saveLocal();
        navigateTo(currentSection);
        showToast('Data reset to demo values!', 'info');
    }
}

function clearAllData() {
    if (confirm('This will permanently delete ALL data. Are you sure?')) {
        state.chits = [];
        state.members = [];
        saveLocal();
        navigateTo(currentSection);
        showToast('All data cleared!', 'info');
    }
}

// ===== INITIALIZATION =====
function init() {
    loadLocal();
    renderDashboard();

    // Handle keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeChitModal();
            closeMemberModal();
            closeConfirmModal();
            closeChitMembersModal();
        }
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
            }
        });
    });
}

// Start
document.addEventListener('DOMContentLoaded', init);
