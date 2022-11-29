var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', 
    {
    "baslik": 'Anasayfa',
    "sayfaBaslik":{
        "sitead":"MekanBul",
        "slogan":"Civardaki Mekanları Keşfet"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":"4",
            "adres":"Centrum Garden AVM ",
            "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
            "mesafe":"1km"    
        },
        {
            "ad":"Gloria Jeans",
            "puan":"5",
            "adres":"Centrum Garden AVM ",
            "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
            "mesafe":"1km" 
        }
    ]
});


}
const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi',
    {"baslik":"Mekan Bilgisi",
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"3", 
        "adres":"Centrum Garden",
        "saatler":[
            {
            "gunler":"Pazartesi-Cuma",
            "acilis":"9:00-23:00",
            "kapali":"false"
            },

            {
                "gunler":"Cumartesi-Pazar",
                "acilis":"8:00-22:00",
                "kapali":"false"
            }
            
        ],
        "imkanlar":["Kahve","Çay","Kek"],
        "koordinatlar":{
            "enlem":"37.83226584629666",
            "boylam":"30.524732239878013"
        },
        "yorumlar":[
            {
                "yorumYapan":"Asım Sinan Yüksel",
                "yorumMetni":"Berbaaaaaat",
                "tarih":"20 Ekim 2022",
                "puan":"1"
            },
            {
                "yorumYapan":"Berk",
                "yorumMetni":"Süper",
                "tarih":"20 Ekim 2022",
                "puan":"5"

            }

        ]
        }
    
    }
    )
    }
    
const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}