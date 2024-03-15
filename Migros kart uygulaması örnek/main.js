
let mesaj = 
`
Migros'a hoşgeldiniz.
Money kartınız var mı?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 15
    },
    {
        urunIsmi : "Yumurta",
        fiyat : 100
    },
    {
        urunIsmi : "Kuşbaşı",
        fiyat : 350
    }
]

let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    //Money kartı vardır
    let isim = prompt("Lütfen isim giriniz");
    let soyisim = prompt("Lütfen soyisim giriniz");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    odenecekTutar = musteri.hesapla();

   alert(
    `Müşteri Bilgileri : ${isim} ${soyisim}
    Ödenecek Tutar : ${odenecekTutar}
   `);

}else{
    const musteri = new Musteri(null,null,sonuc,urunler)
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar :${odenecekTutar}`)

}