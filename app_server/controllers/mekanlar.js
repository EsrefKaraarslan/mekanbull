const anaSayfa= function(req, res) {
    res.render('anaSayfa', {
        "baslik": "Anasayfa",
        "sayfaBaslik":{
            "siteAd":"MekanBul",
            "slogan":"Civardaki Mekanları Keşfet!"
        },
        "mekanlar": [
            {
                "ad":"Starbucks",
                "adres":"Centrum Garden AVM",
                "puan":"4",
                "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
                "mesafe":"10km"
            }
            ,
            {
                "ad":"Gloria Jeans",
                "adres":"Sdü Doğu Kampüsü",
                "puan":"3",
                "imkanlar":["Kahve","Çay","Pasta"],
                "mesafe":"5km"
            }
        ]
    }
    );
}

const mekanBilgisi= function(req, res) {
    res.render('mekanBilgisi',
        {
            "baslik": "Mekan Bilgisi",
            "mekanBaslik": "Starbucks",
            "mekanDetay": {
                "ad": "Starbucks",
                "adres": "Centrum Garden AVM",
                "puan": "4",
                "imkanlar": ["Dünya Kaehveleri", "Kekler", "Pastalar"],
                "koordinatlar": {
                    "enlem": "37.7",
                    "boylam": "30.5"
                },
                "saatler": [
                    {  
                        "gunler": "Pazartesi-Cuma",
                        "acilis": "9:00",
                        "kapanis": "23:00",
                        "kapali": false
                    },
                    {
                        "gunler": "Cumartesi-Pazar",
                        "acilis": "10:00",
                        "kapanis": "22:00",
                        "kapali": false
                    }
                ],
                "yorumlar": [
                    {
                        "yorumYapan": "Eşref Karaarslan",
                        "puan": "5",
                        "tarih": "24 Ekim 2024",
                        "yorumMetni": "Kahveler iyi."
                    }
                ]
            }

        });
}
const yorumEkle= function(req, res) {
    res.render('yorumEkle', {'title': 'Yorum ekle'});
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}