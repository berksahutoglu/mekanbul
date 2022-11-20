var mongoose = require( 'mongoose' );

//var dbURI = 'mongodb://localhost/mekanbul'; 
var dbURI = "mongodb+srv://mekan32:1234@mekanbul.o6r1xmo.mongodb.net/mekanbul?retryWrites=true&w=majority";
mongoose.connect(dbURI);
mongoose.connection.on("connected", function () {

    console.log(dbURI + "adresindeki veritabanına bağlanıldı!\n");
});
mongoose.connection.on("error", function () {
    console.log("Bağlantı hatası\n");
});
mongoose.connection.on("disconnected", function(){
    console.log("Bağlantı kesildi!\n");
});

function kapat(msg, callback){
    mongoose.connection.close(function (){
        console.log(msg);
        callback();
    });
}
process.on("SIGINT", function (){
    kapat("Uygulama kapatıldı", function(){
        process.exit(0);
    });
})
mongoose.connection.on("conntected", function   (){
    console.log(dbURI + "   adresindeki veritabanının büyüklüğü \n");

});

mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası\n");

});
mongoose.connection.on("disconnected", function (){
    console.log("Bağlantı kesildi!\n");
});

require("./mekansema");