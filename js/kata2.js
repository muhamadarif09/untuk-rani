let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const texts = [
    "Assalamualaikum ran", 
    "hehehehe", 
    "hello mother*******", 
    "mother dari anak2ku nanti maksudnya xixixi😜✌️",
    "aku cuma ingin kamu tau",
    'dari banyaknya artikel dan buku yang pernah aku baca, aku masih saja salah dalam membaca. Kaya kamu chat aku "selamat pagi" ehh aku malah baca "aku sayang kamu"🌹💕',
    "bzzzzzzz ngga⚡⚡",
    'kamu pasti ga percaya ya? "alah bullshit", itu kan isi pikiranmu😏',
    "jujur awalnya aku juga ga percaya kenapa aku kaya gini, tapi setelah kupikir 10 hari 20 malam 31 jam 55 menit 10.5 detik...",
    "akhirnya aku sadar kalo aku gila",
    ""

];

function showText(index) {
    let textElement = slides[index].querySelector('.text');
    textElement.innerHTML = '';
    textElement.style.opacity = 1;
    let text = texts[index].split('');
    text.forEach((char, i) => {
        setTimeout(() => {
            textElement.innerHTML += char;
        }, i * 100);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
    showText(slideIndex);
}

showText(slideIndex);
