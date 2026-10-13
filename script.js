// ==========================================
// 1. DATASET SAMPLE (20 DATA EACH)
// ==========================================

const dataset1 = [
    { nim: "25210114", nama: "Aris Mujas Fernanda", nilai: 88, organisasi: "Ya", kehadiran: 92 },
    { nim: "25210440", nama: "Fifian Putri Azhari", nilai: 76, organisasi: "Ya", kehadiran: 85 },
    { nim: "25210159", nama: "Zalfa Sharfina Syifa", nilai: 91, organisasi: "Tidak", kehadiran: 88 },
    { nim: "25210041", nama: "Ariandika Putra", nilai: 86, organisasi: "Tidak", kehadiran: 80 },
    { nim: "25210485", nama: "Hafizh Ash Shiddiqy", nilai: 84, organisasi: "Ya", kehadiran: 90 },
    { nim: "25210109", nama: "Mohammad Aqmal", nilai: 90, organisasi: "Ya", kehadiran: 90 },
    { nim: "25210137", nama: "Padillah", nilai: 90, organisasi: "Ya", kehadiran: 88 },
    { nim: "25210297", nama: "Sakinah", nilai: 88, organisasi: "Ya", kehadiran: 85 },
    { nim: "25210386", nama: "Niswatul Khaira", nilai: 85, organisasi: "Tidak", kehadiran: 82 },
    { nim: "25210010", nama: "Budi Santoso", nilai: 79, organisasi: "Ya", kehadiran: 95 },
    { nim: "25210011", nama: "Citra Dewi", nilai: 92, organisasi: "Ya", kehadiran: 78 },
    { nim: "25210012", nama: "Dian Wahyudi", nilai: 81, organisasi: "Tidak", kehadiran: 89 },
    { nim: "25210013", nama: "Eka Prasetya", nilai: 68, organisasi: "Ya", kehadiran: 80 },
    { nim: "25210014", nama: "Fajar Ramadan", nilai: 87, organisasi: "Tidak", kehadiran: 91 },
    { nim: "25210015", nama: "Gilang Utama", nilai: 94, organisasi: "Ya", kehadiran: 96 },
    { nim: "25210016", nama: "Hana Nabila", nilai: 75, organisasi: "Ya", kehadiran: 84 },
    { nim: "25210017", nama: "Irfan Mauludi", nilai: 83, organisasi: "Tidak", kehadiran: 77 },
    { nim: "25210018", nama: "Joko Subagyo", nilai: 89, organisasi: "Ya", kehadiran: 85 },
    { nim: "25210019", nama: "Kartika Sari", nilai: 90, organisasi: "Tidak", kehadiran: 93 },
    { nim: "25210020", nama: "Lukman Hakim", nilai: 72, organisasi: "Ya", kehadiran: 81 }
];

const dataset2 = [
    { nim: "PRD-001", nama: "Laptop Asus ROG", nilai: 92, organisasi: "Ya", kehadiran: 95 },
    { nim: "PRD-002", nama: "Smartphone Samsung S23", nilai: 88, organisasi: "Ya", kehadiran: 90 },
    { nim: "PRD-003", nama: "Keyboard Mechanical", nilai: 78, organisasi: "Ya", kehadiran: 85 },
    { nim: "PRD-004", nama: "Monitor LG UltraWide", nilai: 85, organisasi: "Tidak", kehadiran: 80 },
    { nim: "PRD-005", nama: "Mouse Wireless Logitech", nilai: 65, organisasi: "Ya", kehadiran: 75 },
    { nim: "PRD-006", nama: "Headset Gaming HyperX", nilai: 90, organisasi: "Ya", kehadiran: 88 },
    { nim: "PRD-007", nama: "Webcam HD Logitech", nilai: 81, organisasi: "Tidak", kehadiran: 82 },
    { nim: "PRD-008", nama: "RAM DDR4 16GB", nilai: 89, organisasi: "Ya", kehadiran: 92 },
    { nim: "PRD-009", nama: "SSD NVMe 1TB", nilai: 95, organisasi: "Ya", kehadiran: 96 },
    { nim: "PRD-010", nama: "Power Supply 650W", nilai: 74, organisasi: "Tidak", kehadiran: 79 },
    { nim: "PRD-011", nama: "VGA RTX 4060", nilai: 96, organisasi: "Ya", kehadiran: 90 },
    { nim: "PRD-012", nama: "Processor Intel i7", nilai: 91, organisasi: "Ya", kehadiran: 88 },
    { nim: "PRD-013", nama: "Motherboard B550", nilai: 82, organisasi: "Tidak", kehadiran: 84 },
    { nim: "PRD-014", nama: "Cooler Master Fan", nilai: 77, organisasi: "Ya", kehadiran: 70 },
    { nim: "PRD-015", nama: "Chair Gaming Secretlab", nilai: 89, organisasi: "Ya", kehadiran: 91 },
    { nim: "PRD-016", nama: "Deskpad RGB", nilai: 60, organisasi: "Tidak", kehadiran: 65 },
    { nim: "PRD-017", nama: "Microphone Condenser", nilai: 84, organisasi: "Ya", kehadiran: 86 },
    { nim: "PRD-018", nama: "External HDD 2TB", nilai: 79, organisasi: "Tidak", kehadiran: 80 },
    { nim: "PRD-019", nama: "USB Flashdrive 64GB", nilai: 70, organisasi: "Ya", kehadiran: 75 },
    { nim: "PRD-020", nama: "Router Wifi 6", nilai: 86, organisasi: "Ya", kehadiran: 89 }
];

let currentDatasetKey = localStorage.getItem("setclassify_ds_key") || "ds1";
let students = JSON.parse(localStorage.getItem("setclassify_students")) || [...dataset1];

let currentPieMode = 2;
let lastPieUnionResult = [];
let lastExecutedOpResult = [];
let lastExecutedOpName = "";

let calcHistory = JSON.parse(localStorage.getItem("setclassify_history")) || [];


// ==========================================
// 2. SIDEBAR TOGGLE (COLLAPSE / EXPAND)
// ==========================================

let isSidebarCollapsed = localStorage.getItem("setclassify_sidebar_collapsed") === "true";

function updateSidebarUI() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");
    const toggleBtn = document.getElementById("sidebarToggleBtn");

    if (!sidebar || !mainContent) return;

    if (isSidebarCollapsed) {
        sidebar.classList.add("collapsed");
        mainContent.classList.add("sidebar-collapsed");
        if (toggleBtn) toggleBtn.textContent = "▶";
    } else {
        sidebar.classList.remove("collapsed");
        mainContent.classList.remove("sidebar-collapsed");
        if (toggleBtn) toggleBtn.textContent = "◀";
    }
}

function toggleSidebar() {
    isSidebarCollapsed = !isSidebarCollapsed;
    localStorage.setItem("setclassify_sidebar_collapsed", isSidebarCollapsed);
    updateSidebarUI();
}

window.toggleSidebar = toggleSidebar;


// ==========================================
// 3. THEME MODE (LIGHT / DARK)
// ==========================================

let currentTheme = localStorage.getItem("setclassify_theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

function updateThemeUI() {
    const icon = document.getElementById("themeIcon");
    const text = document.getElementById("themeText");
    if (currentTheme === "dark") {
        if (icon) icon.textContent = "☀️";
        if (text) text.textContent = "Mode Terang";
    } else {
        if (icon) icon.textContent = "🌙";
        if (text) text.textContent = "Mode Gelap";
    }
}

function toggleTheme() {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("setclassify_theme", currentTheme);
    updateThemeUI();
}

window.toggleTheme = toggleTheme;


// ==========================================
// 4. CUSTOM POINTER MOUSE EFFECT
// ==========================================

const cursorDot = document.getElementById("cursorDot");
const cursorOutline = document.getElementById("cursorOutline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
    }

    if (cursorOutline) {
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});


// ==========================================
// 5. NAVIGASI HALAMAN
// ==========================================

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        const page = item.dataset.page;
        showPage(page);
    });
});

function showPage(page) {
    document.querySelectorAll(".page").forEach(section => {
        section.classList.remove("active");
    });

    const selected = document.getElementById(page);
    if (selected) {
        selected.classList.add("active");
    }

    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.dataset.page === page) {
            item.classList.add("active");
        }
    });

    const titles = {
        dashboard: "Dashboard",
        data: currentDatasetKey === "ds1" ? "Data Mahasiswa" : "Data Produk & Toko",
        sets: "Himpunan & Operasi",
        venn: "Diagram Venn",
        pie: "Inklusi – Eksklusi (PIE)",
        history: "Riwayat Kalkulasi",
        guide: "Panduan Penggunaan",
        about: "Tentang Aplikasi"
    };

    document.getElementById("pageTitle").textContent = titles[page] || "SetClassify";
    if (page === "history") renderHistory();
    updateAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.showPage = showPage;


// ==========================================
// 6. SWITCH DATASET & STORAGE
// ==========================================

function switchDataset() {
    const select = document.getElementById("datasetSelect");
    if (!select) return;

    currentDatasetKey = select.value;
    localStorage.setItem("setclassify_ds_key", currentDatasetKey);

    if (currentDatasetKey === "ds1") {
        students = [...dataset1];
    } else {
        students = [...dataset2];
    }

    saveData();
    updateAll();
}

window.switchDataset = switchDataset;

function saveData() {
    localStorage.setItem("setclassify_students", JSON.stringify(students));
}


// ==========================================
// 7. LOGIKA KRITERIA HIMPUNAN
// ==========================================

function inA(student) { return Number(student.nilai) >= 80; }
function inB(student) { return student.organisasi === "Ya"; }
function inC(student) { return Number(student.kehadiran) >= 80; }

function getU() { return students; }
function getA() { return students.filter(inA); }
function getB() { return students.filter(inB); }
function getC() { return students.filter(inC); }

function getSetByName(name) {
    if (name === "U") return getU();
    if (name === "A") return getA();
    if (name === "B") return getB();
    if (name === "C") return getC();
    return [];
}

function uniqueStudents(array) {
    const map = new Map();
    array.forEach(s => map.set(s.nim, s));
    return [...map.values()];
}

function union(A, B) { return uniqueStudents([...A, ...B]); }
function intersection(A, B) { return A.filter(a => B.some(b => b.nim === a.nim)); }
function difference(A, B) { return A.filter(a => !B.some(b => b.nim === a.nim)); }
function complement(A) { return students.filter(s => !A.some(a => a.nim === s.nim)); }
function symDifference(A, B) {
    const u = union(A, B);
    const i = intersection(A, B);
    return u.filter(x => !i.some(y => y.nim === x.nim));
}


// ==========================================
// 8. RENDER DEFINISI DATASET
// ==========================================

function renderDatasetDef() {
    const isDs1 = currentDatasetKey === "ds1";
    const recordCountEl = document.getElementById("defRecordCount");
    if (recordCountEl) {
        recordCountEl.textContent = `${students.length} Record Terdaftar`;
    }

    const attrListEl = document.getElementById("defAttrList");
    if (attrListEl) {
        if (isDs1) {
            attrListEl.innerHTML = `
                <li><b>NIM:</b> Nomor Induk Mahasiswa unik sebagai penanda identitas elemen semesta.</li>
                <li><b>Nama:</b> Nama lengkap mahasiswa.</li>
                <li><b>Nilai:</b> Skala numerik (0–100) evaluasi hasil akademik.</li>
                <li><b>Organisasi:</b> Status keaktifan kegiatan ekstrakurikuler (<code>Ya</code> / <code>Tidak</code>).</li>
                <li><b>Kehadiran:</b> Persentase kehadiran perkuliahan (0–100%).</li>
            `;
        } else {
            attrListEl.innerHTML = `
                <li><b>ID Produk:</b> Kode unik barang sebagai penanda identitas elemen semesta.</li>
                <li><b>Nama Produk:</b> Nama lengkap produk atau item elektronik toko.</li>
                <li><b>Performa:</b> Skala numerik (0–100) evaluasi kualitas & daya saing produk.</li>
                <li><b>Diskon Toko:</b> Status ketersediaan promo diskon (<code>Ya</code> / <code>Tidak</code>).</li>
                <li><b>Stok Barang:</b> Persentase ketersediaan unit stok barang (0–100%).</li>
            `;
        }
    }

    const rulesBoxEl = document.getElementById("defRulesBox");
    if (rulesBoxEl) {
        if (isDs1) {
            rulesBoxEl.innerHTML = `
                <div class="def-rule-row">
                    <span class="rule-label rule-a">Himpunan A (Nilai Tinggi):</span>
                    <span class="rule-code">Nilai ≥ 80</span>
                </div>
                <div class="def-rule-row">
                    <span class="rule-label rule-b">Himpunan B (Aktif Organisasi):</span>
                    <span class="rule-code">Organisasi === 'Ya'</span>
                </div>
                <div class="def-rule-row">
                    <span class="rule-label rule-c">Himpunan C (Kehadiran Tinggi):</span>
                    <span class="rule-code">Kehadiran ≥ 80%</span>
                </div>
            `;
        } else {
            rulesBoxEl.innerHTML = `
                <div class="def-rule-row">
                    <span class="rule-label rule-a">Himpunan A (Performa Tinggi):</span>
                    <span class="rule-code">Performa ≥ 80</span>
                </div>
                <div class="def-rule-row">
                    <span class="rule-label rule-b">Himpunan B (Diskon Toko):</span>
                    <span class="rule-code">Diskon === 'Ya'</span>
                </div>
                <div class="def-rule-row">
                    <span class="rule-label rule-c">Himpunan C (Stok Cukup):</span>
                    <span class="rule-code">Stok ≥ 80%</span>
                </div>
            `;
        }
    }
}


// ==========================================
// 9. RENDER TABEL & STATS
// ==========================================

function renderTable() {
    const table = document.getElementById("studentTable");
    if (!table) return;

    const search = document.getElementById("search")?.value.toLowerCase() || "";
    const filtered = students.filter(s =>
        s.nama.toLowerCase().includes(search) || s.nim.toLowerCase().includes(search)
    );

    table.innerHTML = "";

    if (filtered.length === 0) {
        table.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:30px">Data tidak ditemukan.</td></tr>`;
        return;
    }

    filtered.forEach((student, index) => {
        const sets = ["U"];
        if (inA(student)) sets.push("A");
        if (inB(student)) sets.push("B");
        if (inC(student)) sets.push("C");

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.nim}</td>
            <td><b>${student.nama}</b></td>
            <td>${student.nilai}</td>
            <td>${student.organisasi}</td>
            <td>${student.kehadiran}%</td>
            <td><span class="set-badge">${sets.join(", ")}</span></td>
            <td><button class="delete-btn" onclick="deleteStudent('${student.nim}')">Hapus</button></td>
        `;
        table.appendChild(row);
    });
}

window.renderTable = renderTable;

function updateStats() {
    const elTotal = document.getElementById("totalStudents");
    const elA = document.getElementById("totalA");
    const elB = document.getElementById("totalB");
    const elC = document.getElementById("totalC");

    if (elTotal) elTotal.textContent = students.length;
    if (elA) elA.textContent = getA().length;
    if (elB) elB.textContent = getB().length;
    if (elC) elC.textContent = getC().length;
}

function renderSetList(elementId, data) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = "";

    if (data.length === 0) {
        element.innerHTML = "<p style='color:var(--muted);font-size:12px'>Tidak ada anggota.</p>";
        return;
    }

    data.forEach(s => {
        const div = document.createElement("div");
        div.className = "member";
        div.innerHTML = `<b>${s.nama}</b><small>${s.nim}</small>`;
        element.appendChild(div);
    });
}

function renderSets() {
    const U = getU(), A = getA(), B = getB(), C = getC();

    document.getElementById("setUCount").textContent = `${U.length} data`;
    document.getElementById("setACount").textContent = `${A.length} data`;
    document.getElementById("setBCount").textContent = `${B.length} data`;
    document.getElementById("setCCount").textContent = `${C.length} data`;

    renderSetList("setUList", U);
    renderSetList("setAList", A);
    renderSetList("setBList", B);
    renderSetList("setCList", C);
}


// ==========================================
// 10. OPERASI HIMPUNAN INTERAKTIF & HISTORY
// ==========================================

function getSetLabel(name) {
    const isDs1 = currentDatasetKey === "ds1";
    if (name === "U") return "Semesta U (Seluruh Data)";
    if (name === "A") return isDs1 ? "Himpunan A (Nilai Tinggi)" : "Himpunan A (Performa Tinggi)";
    if (name === "B") return isDs1 ? "Himpunan B (Aktif Organisasi)" : "Himpunan B (Diskon Toko)";
    if (name === "C") return isDs1 ? "Himpunan C (Kehadiran Tinggi)" : "Himpunan C (Stok Cukup)";
    return name;
}

function updateOpDropdownLabels() {
    const select1 = document.getElementById("opSet1Select");
    const select2 = document.getElementById("opSet2Select");

    if (select1) {
        const val1 = select1.value;
        select1.innerHTML = `
            <option value="A" ${val1 === "A" ? "selected" : ""}>${getSetLabel("A")}</option>
            <option value="B" ${val1 === "B" ? "selected" : ""}>${getSetLabel("B")}</option>
            <option value="C" ${val1 === "C" ? "selected" : ""}>${getSetLabel("C")}</option>
        `;
    }

    if (select2) {
        const val2 = select2.value;
        select2.innerHTML = `
            <option value="A" ${val2 === "A" ? "selected" : ""}>${getSetLabel("A")}</option>
            <option value="B" ${val2 === "B" ? "selected" : ""}>${getSetLabel("B")}</option>
            <option value="C" ${val2 === "C" ? "selected" : ""}>${getSetLabel("C")}</option>
        `;
    }
}

function handleOpTypeChange() {
    const opType = document.getElementById("opTypeSelect").value;
    const g1 = document.getElementById("opSet1Group");
    const g2 = document.getElementById("opSet2Group");

    if (opType === "complement") {
        g1.style.display = "block";
        g2.style.display = "none";
        document.getElementById("opSet1Label").textContent = "Himpunan Target";
    } else if (opType === "union3" || opType === "intersect3") {
        g1.style.display = "none";
        g2.style.display = "none";
    } else {
        g1.style.display = "block";
        g2.style.display = "block";
        document.getElementById("opSet1Label").textContent = "Himpunan Pertama";
        document.getElementById("opSet2Label").textContent = "Himpunan Kedua";
    }

    updateOpHint();
}

window.handleOpTypeChange = handleOpTypeChange;

function updateOpHint() {
    const opType = document.getElementById("opTypeSelect").value;
    const set1 = document.getElementById("opSet1Select")?.value || "A";
    const set2 = document.getElementById("opSet2Select")?.value || "B";

    const hintEl = document.getElementById("opFormulaHint");
    if (!hintEl) return;

    if (opType === "complement") {
        hintEl.innerHTML = `Komplemen dihitung terhadap Semesta U: <b>${set1}ᶜ = {x ∈ U | x ∉ ${set1}}</b>`;
    } else if (opType === "union") {
        hintEl.innerHTML = `Gabungan elemen dua himpunan: <b>${set1} ∪ ${set2} = {x | x ∈ ${set1} ∨ x ∈ ${set2}}</b>`;
    } else if (opType === "intersection") {
        hintEl.innerHTML = `Irisan elemen yang ada di kedua himpunan: <b>${set1} ∩ ${set2} = {x | x ∈ ${set1} ∧ x ∈ ${set2}}</b>`;
    } else if (opType === "difference") {
        hintEl.innerHTML = `Selisih elemen di ${set1} tapi tidak di ${set2}: <b>${set1} − ${set2} = {x | x ∈ ${set1} ∧ x ∉ ${set2}}</b>`;
    } else if (opType === "sym_difference") {
        hintEl.innerHTML = `Beda Simetris (Union dikurangi Intersection): <b>${set1} ⊕ ${set2} = (${set1} ∪ ${set2}) − (${set1} ∩ ${set2})</b>`;
    } else if (opType === "union3") {
        hintEl.innerHTML = `Gabungan seluruh elemen 3 himpunan: <b>A ∪ B ∪ C = {x | x ∈ A ∨ x ∈ B ∨ x ∈ C}</b>`;
    } else if (opType === "intersect3") {
        hintEl.innerHTML = `Irisan elemen yang ada di ketiga himpunan: <b>A ∩ B ∩ C = {x | x ∈ A ∧ x ∈ B ∧ x ∈ C}</b>`;
    }
}

window.updateOpHint = updateOpHint;

function executeSetOperation() {
    const opType = document.getElementById("opTypeSelect").value;
    const s1Name = document.getElementById("opSet1Select")?.value || "A";
    const s2Name = document.getElementById("opSet2Select")?.value || "B";

    const s1 = getSetByName(s1Name);
    const s2 = getSetByName(s2Name);

    let res = [];
    let symbolTitle = "";
    let subDesc = "";

    if (opType === "complement") {
        res = complement(s1);
        symbolTitle = `${s1Name}ᶜ`;
        subDesc = `Complement — anggota Semesta U yang tidak ada di ${s1Name}`;
    } else if (opType === "union") {
        res = union(s1, s2);
        symbolTitle = `${s1Name} ∪ ${s2Name}`;
        subDesc = `Union — gabungan seluruh anggota ${s1Name} dan ${s2Name}`;
    } else if (opType === "intersection") {
        res = intersection(s1, s2);
        symbolTitle = `${s1Name} ∩ ${s2Name}`;
        subDesc = `Intersection — anggota yang ada di ${s1Name} sekaligus di ${s2Name}`;
    } else if (opType === "difference") {
        res = difference(s1, s2);
        symbolTitle = `${s1Name} − ${s2Name}`;
        subDesc = `Difference — anggota ${s1Name} yang tidak ada di ${s2Name}`;
    } else if (opType === "sym_difference") {
        res = symDifference(s1, s2);
        symbolTitle = `${s1Name} ⊕ ${s2Name}`;
        subDesc = `Symmetric Difference — anggota yang ada di salah satu ${s1Name} atau ${s2Name}, tapi tidak di keduanya`;
    } else if (opType === "union3") {
        res = uniqueStudents([...getA(), ...getB(), ...getC()]);
        symbolTitle = `A ∪ B ∪ C`;
        subDesc = `Union 3 Himpunan — gabungan seluruh anggota A, B, dan C`;
    } else if (opType === "intersect3") {
        res = intersection(intersection(getA(), getB()), getC());
        symbolTitle = `A ∩ B ∩ C`;
        subDesc = `Intersection 3 Himpunan — anggota yang memenuhi A, B, sekaligus C`;
    }

    lastExecutedOpResult = res;
    lastExecutedOpName = symbolTitle;

    addHistoryItem(`Operasi Himpunan: ${symbolTitle}`, `${res.length} elemen ditemukan (${subDesc})`);

    const semestaLen = students.length;
    const count = res.length;
    const pct = semestaLen > 0 ? ((count / semestaLen) * 100).toFixed(1) : 0;

    document.getElementById("opResTitle").textContent = symbolTitle;
    document.getElementById("opResSubtitle").textContent = subDesc;
    document.getElementById("opResPercentBadge").textContent = `${count} elemen (${pct}% Semesta)`;

    const membersBox = document.getElementById("opResultMembersBox");
    membersBox.innerHTML = "";

    if (count === 0) {
        membersBox.innerHTML = `<div class="op-empty-msg">Himpunan Kosong (Ø) — Tidak ada elemen yang memenuhi syarat operasi.</div>`;
        return;
    }

    const grid = document.createElement("div");
    grid.className = "op-member-tags";

    res.forEach(item => {
        const tag = document.createElement("div");
        tag.className = "op-tag-item";
        tag.innerHTML = `
            <span class="tag-name">${item.nama}</span>
            <span class="tag-id">${item.nim}</span>
        `;
        grid.appendChild(tag);
    });

    membersBox.appendChild(grid);
}

window.executeSetOperation = executeSetOperation;

function quickOperation(op) {
    showPage("sets");
    const opSelect = document.getElementById("opTypeSelect");
    if (opSelect) {
        if (op === "union") opSelect.value = "union";
        if (op === "intersection") opSelect.value = "intersection";
        if (op === "difference") opSelect.value = "difference";
        if (op === "complement") opSelect.value = "complement";
        handleOpTypeChange();
        executeSetOperation();
    }
}

window.quickOperation = quickOperation;

function copyOpResult() {
    if (!lastExecutedOpResult || lastExecutedOpResult.length === 0) {
        alert("Tidak ada hasil elemen untuk disalin.");
        return;
    }

    const text = `${lastExecutedOpName} (${lastExecutedOpResult.length} elemen):\n` +
        lastExecutedOpResult.map(s => `- ${s.nama} (${s.nim})`).join("\n");

    navigator.clipboard.writeText(text).then(() => {
        alert("Hasil operasi berhasil disalin ke clipboard!");
    }).catch(() => {
        alert("Gagal menyalin teks.");
    });
}

window.copyOpResult = copyOpResult;

function exportOpResultCSV() {
    if (!lastExecutedOpResult || lastExecutedOpResult.length === 0) {
        alert("Data hasil operasi kosong!");
        return;
    }

    let csv = `data:text/csv;charset=utf-8,No,ID/NIM,Nama,Atribut 1,Atribut 2,Atribut 3\n`;
    lastExecutedOpResult.forEach((s, i) => {
        csv += `${i + 1},"${s.nim}","${s.nama}",${s.nilai},"${s.organisasi}",${s.kehadiran}%\n`;
    });

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = `hasil_operasi_${lastExecutedOpName.replace(/[^a-zA-Z0-9]/g, "_")}.csv`;
    link.click();
}

window.exportOpResultCSV = exportOpResultCSV;

function resetOpResult() {
    document.getElementById("opTypeSelect").value = "complement";
    document.getElementById("opSet1Select").value = "A";
    document.getElementById("opSet2Select").value = "B";
    handleOpTypeChange();
    executeSetOperation();
}

window.resetOpResult = resetOpResult;


// ==========================================
// 11. DIAGRAM VENN
// ==========================================

function updateVenn() {
    const U = getU(), A = getA(), B = getB(), C = getC();
    document.getElementById("vennU").textContent = U.length;
    document.getElementById("vennA").textContent = A.length;
    document.getElementById("vennB").textContent = B.length;
    document.getElementById("vennC").textContent = C.length;
    document.getElementById("vennAB").textContent = intersection(A, B).length;
    document.getElementById("vennAC").textContent = intersection(A, C).length;
    document.getElementById("vennBC").textContent = intersection(B, C).length;
    document.getElementById("vennABC").textContent = intersection(intersection(A, B), C).length;
}


// ==========================================
// 12. KALKULATOR PIE & HISTORY
// ==========================================

function switchPieMode(mode) {
    currentPieMode = mode;
    document.getElementById("btnPie2").classList.toggle("active", mode === 2);
    document.getElementById("btnPie3").classList.toggle("active", mode === 3);

    document.getElementById("pieForm2").style.display = mode === 2 ? "grid" : "none";
    document.getElementById("pieForm3").style.display = mode === 3 ? "grid" : "none";

    runPieCalculator();
}

window.switchPieMode = switchPieMode;

function runPieCalculator() {
    document.getElementById("pieSemestaHeader").textContent = students.length;
    document.getElementById("pieSemestaFooter").textContent = `Semesta U: ${students.length} Record`;

    if (currentPieMode === 2) {
        calculatePie2();
    } else {
        calculatePie3();
    }
}

window.runPieCalculator = runPieCalculator;

function calculatePie2() {
    const nameA = document.getElementById("pieSelA2").value;
    const nameB = document.getElementById("pieSelB2").value;

    const setA = getSetByName(nameA);
    const setB = getSetByName(nameB);

    const nA = setA.length, nB = setB.length;
    const nAB = intersection(setA, setB).length;

    const unionRes = union(setA, setB);
    const totalPie = nA + nB - nAB;
    lastPieUnionResult = unionRes;

    const labelUnion = `|${nameA} ∪ ${nameB}|`;
    document.getElementById("pieResultTitle").textContent = `PIE 2 Himpunan (${labelUnion})`;
    document.getElementById("pieResultTag").textContent = `${labelUnion} = ${totalPie}`;
    document.getElementById("pieFormulaText").textContent = `${labelUnion} = |${nameA}| + |${nameB}| − |${nameA} ∩ ${nameB}|`;

    document.getElementById("pieStepsList").innerHTML = `
        <div class="pie-step-item"><span>1. Kardinalitas Himpunan ${nameA} (|${nameA}|)</span><b>${nA} Elemen</b></div>
        <div class="pie-step-item"><span>2. Kardinalitas Himpunan ${nameB} (|${nameB}|)</span><b>${nB} Elemen</b></div>
        <div class="pie-step-item"><span>3. Kardinalitas Irisan (|${nameA} ∩ ${nameB}|) [Dikurangi]</span><b style="color:#ef4444;">− ${nAB} Elemen</b></div>
        <div class="pie-step-item pie-step-final"><span>Hasil Akhir: ${nA} + ${nB} − ${nAB}</span><b style="color:var(--primary);">${totalPie} Elemen</b></div>
    `;

    addHistoryItem(`Kalkulator PIE 2 Himpunan (${labelUnion})`, `Hasil Kardinalitas = ${totalPie} elemen`);
    renderPieMembers(labelUnion, unionRes);
}

function calculatePie3() {
    const nameA = document.getElementById("pieSelA3").value;
    const nameB = document.getElementById("pieSelB3").value;
    const nameC = document.getElementById("pieSelC3").value;

    const setA = getSetByName(nameA), setB = getSetByName(nameB), setC = getSetByName(nameC);

    const nA = setA.length, nB = setB.length, nC = setC.length;
    const nAB = intersection(setA, setB).length;
    const nAC = intersection(setA, setC).length;
    const nBC = intersection(setB, setC).length;
    const nABC = intersection(intersection(setA, setB), setC).length;

    const unionRes = uniqueStudents([...setA, ...setB, ...setC]);
    const totalPie = nA + nB + nC - nAB - nAC - nBC + nABC;
    lastPieUnionResult = unionRes;

    const labelUnion = `|${nameA} ∪ ${nameB} ∪ ${nameC}|`;
    document.getElementById("pieResultTitle").textContent = `PIE 3 Himpunan (${labelUnion})`;
    document.getElementById("pieResultTag").textContent = `${labelUnion} = ${totalPie}`;
    document.getElementById("pieFormulaText").textContent = 
        `${labelUnion} = |${nameA}| + |${nameB}| + |${nameC}| − |${nameA}∩${nameB}| − |${nameA}∩${nameC}| − |${nameB}∩${nameC}| + |${nameA}∩${nameB}∩${nameC}|`;

    document.getElementById("pieStepsList").innerHTML = `
        <div class="pie-step-item"><span>1. Kardinalitas (|${nameA}| + |${nameB}| + |${nameC}|)</span><b>${nA} + ${nB} + ${nC} Elemen</b></div>
        <div class="pie-step-item"><span>2. Pengurangan Irisan (− |${nameA}∩${nameB}| − |${nameA}∩${nameC}| − |${nameB}∩${nameC}|)</span><b style="color:#ef4444;">− ${nAB} − ${nAC} − ${nBC} Elemen</b></div>
        <div class="pie-step-item"><span>3. Penambahan Irisan 3 Himpunan (+ |${nameA}∩${nameB}∩${nameC}|)</span><b>+ ${nABC} Elemen</b></div>
        <div class="pie-step-item pie-step-final"><span>Hasil Akhir</span><b style="color:var(--primary);">${totalPie} Elemen</b></div>
    `;

    addHistoryItem(`Kalkulator PIE 3 Himpunan (${labelUnion})`, `Hasil Kardinalitas = ${totalPie} elemen`);
    renderPieMembers(labelUnion, unionRes);
}

function renderPieMembers(label, list) {
    document.getElementById("pieMembersHeading").textContent = `Anggota Gabungan ${label}`;
    const container = document.getElementById("pieMembersRows");
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `<div style="padding:20px; text-align:center; color:var(--muted);">Tidak ada anggota gabungan.</div>`;
        return;
    }

    list.forEach((student, index) => {
        const item = document.createElement("div");
        item.className = "pie-member-row";
        item.innerHTML = `
            <div class="pie-num">${index + 1}</div>
            <div class="pie-info">
                <b>${student.nama}</b>
                <small>ID: ${student.nim} | Atribut: ${student.nilai}</small>
            </div>
            <span class="pie-badge-val">${student.nilai}</span>
        `;
        container.appendChild(item);
    });
}

function exportPieCSV() {
    if (!lastPieUnionResult.length) return alert("Data kosong!");

    let csv = "data:text/csv;charset=utf-8,No,ID/NIM,Nama,Atribut 1,Atribut 2,Atribut 3\n";
    lastPieUnionResult.forEach((s, i) => {
        csv += `${i + 1},"${s.nim}","${s.nama}",${s.nilai},"${s.organisasi}",${s.kehadiran}%\n`;
    });

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "hasil_pie_setclassify.csv";
    link.click();
}

window.exportPieCSV = exportPieCSV;


// ==========================================
// 13. RIWAYAT KALKULASI (HISTORY)
// ==========================================

function addHistoryItem(action, detail) {
    const timestamp = new Date().toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    calcHistory.unshift({ timestamp, action, detail });
    if (calcHistory.length > 30) calcHistory.pop();
    localStorage.setItem("setclassify_history", JSON.stringify(calcHistory));
}

function renderHistory() {
    const container = document.getElementById("historyContainer");
    if (!container) return;

    if (calcHistory.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--muted);">Belum ada riwayat kalkulasi pada sesi ini. Lakukan operasi himpunan atau PIE untuk mencatat log.</div>`;
        return;
    }

    container.innerHTML = "";
    calcHistory.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "history-item-row";
        div.innerHTML = `
            <div class="history-badge">#${calcHistory.length - index}</div>
            <div class="history-content">
                <b>${item.action}</b>
                <p>${item.detail}</p>
                <small>🕒 ${item.timestamp}</small>
            </div>
        `;
        container.appendChild(div);
    });
}

function clearHistory() {
    if (!confirm("Hapus seluruh riwayat kalkulasi?")) return;
    calcHistory = [];
    localStorage.removeItem("setclassify_history");
    renderHistory();
}

window.clearHistory = clearHistory;


// ==========================================
// 14. EKSPOR LAPORAN PDF (PRINT)
// ==========================================

function exportPDFReport() {
    window.print();
}

window.exportPDFReport = exportPDFReport;


// ==========================================
// 15. KELOLA DATA & INITIALIZE
// ==========================================

function deleteStudent(nim) {
    if (!confirm("Hapus data ini?")) return;
    students = students.filter(s => s.nim !== nim);
    saveData();
    updateAll();
}

window.deleteStudent = deleteStudent;

function openModal() { document.getElementById("modal").classList.add("show"); }
window.openModal = openModal;

function closeModal() {
    document.getElementById("modal").classList.remove("show");
    document.getElementById("studentForm").reset();
}
window.closeModal = closeModal;

document.getElementById("studentForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const nim = document.getElementById("nim").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const nilai = Number(document.getElementById("nilai").value);
    const organisasi = document.getElementById("organisasi").value;
    const kehadiran = Number(document.getElementById("kehadiran").value);

    if (students.some(s => s.nim === nim)) return alert("ID/NIM sudah terdaftar.");

    students.push({ nim, nama, nilai, organisasi, kehadiran });
    saveData();
    closeModal();
    updateAll();
    showPage("data");
});

function resetData() {
    if (!confirm("Kembalikan data ke data awal?")) return;
    students = currentDatasetKey === "ds1" ? [...dataset1] : [...dataset2];
    saveData();
    updateAll();
}

window.resetData = resetData;

function updateAll() {
    const isDs1 = currentDatasetKey === "ds1";
    document.getElementById("dataPageHeading").textContent = isDs1 ? "Data Mahasiswa" : "Data Produk & Toko";
    
    document.getElementById("critATitle").textContent = isDs1 ? "Nilai Tinggi" : "Performa Tinggi";
    document.getElementById("critADesc").textContent = isDs1 ? "Nilai ≥ 80" : "Performa ≥ 80";
    document.getElementById("critBTitle").textContent = isDs1 ? "Aktif Organisasi" : "Diskon Toko";
    document.getElementById("critBDesc").textContent = isDs1 ? "Mengikuti organisasi" : "Memiliki diskon Ya";
    document.getElementById("critCTitle").textContent = isDs1 ? "Kehadiran Baik" : "Stok Cukup";
    document.getElementById("critCDesc").textContent = isDs1 ? "Kehadiran ≥ 80%" : "Stok ≥ 80";

    document.getElementById("setADescText").textContent = isDs1 ? "Nilai ≥ 80" : "Performa ≥ 80";
    document.getElementById("setBDescText").textContent = isDs1 ? "Aktif organisasi" : "Diskon Ya";
    document.getElementById("setCDescText").textContent = isDs1 ? "Kehadiran ≥ 80%" : "Stok ≥ 80";

    updateOpDropdownLabels();
    renderDatasetDef();
    renderTable();
    renderSets();
    updateStats();
    updateVenn();
    runPieCalculator();
    handleOpTypeChange();
    executeSetOperation();

    const select = document.getElementById("datasetSelect");
    if (select) select.value = currentDatasetKey;
}

document.getElementById("modal")?.addEventListener("click", function(e) {
    if (e.target === this) closeModal();
});

// Inisialisasi awal saat DOM siap
document.addEventListener("DOMContentLoaded", function () {
    updateSidebarUI();
    updateThemeUI();
    updateAll();
});