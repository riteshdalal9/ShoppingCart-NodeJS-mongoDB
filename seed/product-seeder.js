var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true });


var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/SWBF2_box.jpeg/220px-SWBF2_box.jpeg',
        title: 'Star Wars Video Game',
        description: 'Awesome Game!!!',
        price: 45   
    }),

    new Product({
        imagePath: 'https://www.mobygames.com/images/covers/l/311013-titanfall-xbox-360-front-cover.jpg',
        title: 'TitanFall Video Game',
        description: 'Costly for such a stupid game',
        price: 25  
    }),

    new Product({
        imagePath: 'https://www.mobygames.com/images/covers/l/349827-james-cameron-s-avatar-the-game-nintendo-ds-front-cover.jpg',
        title: 'Avatar The Game',
        description: 'Grahics are super awesome!!!',
        price: 31  
    }),

    new Product({
        imagePath: 'https://www.mobygames.com/images/covers/l/310953-assassin-s-creed-brotherhood-xbox-360-front-cover.jpg',
        title: 'Assassins Creed Brotherhood',
        description: 'Difficult than the previous version',
        price: 31  
    }),

    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg',
        title: 'World of Warcraft',
        description: 'Most addictive game in the history of mankind',
        price: 31  
    }),

    new Product({
        imagePath: 'https://minecraft.net/static/pages/img/index-hero-og.088fb7996b03.jpg',
        title: 'Minecraft',
        description: 'Best selling indie game of all time',
        price: 99  
    })


];

var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}  
 
function exit(){
    mongoose.disconnect();
}