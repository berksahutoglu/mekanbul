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
        }
    ]
});


}
const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi', { title: 'Mekan Bilgisi' });
}
const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}