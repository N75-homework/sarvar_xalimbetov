var ism = prompt("Ismingizni kiriting: ").toUpperCase();
var university = prompt(`${ism} qaysi OTM ni tanlaysiz:
1. TDIU
2. TDMI
3. MU`);

if (university == 1 || university.toUpperCase() === 'TDIU') {
    var score = prompt(`${ism} balingizni kiriting: `, 0) - 0

    if (score > 0 && score <= 119) {
        alert("Siz universitetga kirolmadiz")
    } else if (score > 120 && score <= 149) {
        alert("Siz universitetga kontrakt asosida kirdiz")
    } else if (score > 150) {
        alert("Siz universitetga grand asosida kirdiz")
    }
} else if (university == 2 || university.toUpperCase() === 'TDMI') {
    var score = prompt(`${ism} balingizni kiriting: `, 0) - 0

    if (score > 0 && score <= 99) {
        alert("Siz universitetga kirolmadiz")
    } else if (score > 100 && score <= 159) {
        alert("Siz universitetga kontrakt asosida kirdiz")
    } else if (score > 160) {
        alert("Siz universitetga grand asosida kirdiz")
    }
} else if (university === 3 || university.toUpperCase() === 'MU') {
    var score = prompt(`${ism} balingizni kiriting: `, 0) - 0

    if (score > 0 && score <= 167) {
        alert("Siz universitetga kirolmadiz")
    } else if (score > 167 && score <= 179) {
        alert("Siz universitetga kontrakt asosida kirdiz")
    } else if (score > 180) {
        alert("Siz universitetga grand asosida kirdiz")
    }
} else {
    var university = prompt(`${ism} qaysi OTM ni tanlaysiz:
1. TDIU
2. TDMI
3. MU`);
}