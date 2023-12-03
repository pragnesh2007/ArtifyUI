//Art1_Picasso: price_1Nw9YoEQLsa2XJpCPrsjuhLp
//Art2_MonaLIsa:price_1Nw9afEQLsa2XJpCiLFFm9M3
//Art3__:price_1Nw9bWEQLsa2XJpCCTTf5rWO
import reactPic from '../src/images/astronaut...jpeg';
import reactPic2 from '../src/images/monalisa.png';
import reactPic3 from '../src/images/halloweenskull.jpeg';
import reactPic4 from '../src/images/vintagecar.jpeg';
import reactPic5 from '../src/images/traveller.jpeg';
import reactPic6 from '../src/images/rockart.jpeg';
import reactPic7 from '../src/images/leaningtower.jpeg';
import reactPic8 from '../src/images/cave.jpeg';
import reactPic9 from '../src/images/abandoned.jpeg';


const productsArray = [
    {
        id: "price_1NxJCQEQLsa2XJpC91MziFUA",
        title: "Leaning Tower",
        price: 8.99,
        image: reactPic7,
    },
    {
        id: "price_1Nw9afEQLsa2XJpCiLFFm9M3",
        title: "MonaLisa",
        price: 9.99,
        image: reactPic2,
        
        
    },
    {
        id: "price_1Nw9bWEQLsa2XJpCCTTf5rWO",
        title: "Halloween Skull",
        price: 39.99,
        image:reactPic3,
   
    },
    {
        id: "price_1NxJ3mEQLsa2XJpCwqM2wlMW",
        title: "VintageCar",
        price: 12.00,
        image: reactPic4,
    },
    {
        id: "price_1NxJ97EQLsa2XJpCigIYQNvi",
        title: "Solo-Traveller",
        price: 4.50,
        image: reactPic5,
    },
    {
        id: "price_1NxJAvEQLsa2XJpCwvINqLiJ",
        title: "RockArt",
        price: 13.99,
        image: reactPic6,
    },
    {
        id: "price_1Nw9YoEQLsa2XJpCPrsjuhLp",
        title: "Astronaut",
        price: 4.99,
        image: reactPic,
        
    },
   
    {
        id: "price_1NxJDSEQLsa2XJpCCLfbdbD1",
        title: "Cave",
        price: 6.99,
        image: reactPic8,
    },
    {
        id: "price_1NxJEqEQLsa2XJpC0nYZa0Pi",
        title: "Abandoned",
        price: 2.99,
        image: reactPic9,
    },


];
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData };
