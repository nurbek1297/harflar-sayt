const input = document.getElementById('matn')
const btn = document.getElementById('umumiy')
const btn1 = document.getElementById('unli')
const btn2 = document.getElementById('undosh')
const harf1 = document.getElementById('harf1')
const harf = document.getElementById('hamma')
const harf2 = document.getElementById('harf')



function change() {
    let matn = input.value
    let harflarSoni = 0;
    for (let i = 0; i < matn.length; i++) {
        let belgi = matn[i];

        if (/[a-zA-Zʻʼo‘O‘GʻGʻIʻIʻNʻNʻUʻUʻgʻgʻiʻiʻnʻnʻuʻuʻ]/.test(belgi)) {
            harflarSoni++;
        }
    }
    harf.textContent = harflarSoni
}

btn.addEventListener('click', change)


function change1() {

    let matn = input.value
    let unliHarflarSoni = 0;


    const unliHarflar = ['a', 'e', 'i', 'o', 'u', 'o‘', 'oʻ', 'a', 'e', 'i', 'o', 'u', 'ʻo', 'ʻa', 'ʻi', 'ʻu', 'ʻe', 'ʻy'];



    for (let i = 0; i < matn.length; i++) {
        let belgi = matn[i];


        let kichikBelgi = belgi.toLowerCase();

        if (unliHarflar.includes(kichikBelgi)) {
            unliHarflarSoni++;
        }

        if (i + 1 < matn.length) {
            let ikkiBelgili = (belgi + matn[i + 1]).toLowerCase();
            if (unliHarflar.includes(ikkiBelgili)) {
                unliHarflarSoni++;
                i++;
            }
        }
    }

    harf1.textContent = unliHarflarSoni
    return unliHarflarSoni

}

btn1.addEventListener('click', change1)


function change2() {
    let matn = input.value
    let undoshHarflarSoni = 0;

    const unliHarflar = ['a', 'e', 'i', 'o', 'u', 'y', 'o‘', 'oʻ'];

    for (let i = 0; i < matn.length; i++) {
        let belgi = matn[i];

        let kichikBelgi = belgi.toLowerCase();

        let ikkiBelgiliUnliTopildi = false;
        if (i + 1 < matn.length) {
            let ikkiBelgili = (kichikBelgi + matn[i + 1].toLowerCase());
            if (unliHarflar.includes(ikkiBelgili)) {
                ikkiBelgiliUnliTopildi = true;
                i++;
            }
        }


        if (!ikkiBelgiliUnliTopildi) {
            if (/[a-zʻʼgʻqʻhʻyʻ]/.test(kichikBelgi)) {
                if (!unliHarflar.includes(kichikBelgi)) {
                    undoshHarflarSoni++;
                }
            }
        }
    }


    harf2.textContent = undoshHarflarSoni


}

btn2.addEventListener('click', change2)


