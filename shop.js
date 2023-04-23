let catalogOfGoods = {
    1: {
        id: 1,
        name: "n1",
        description: "d1",
        sizes: "s1",
        price: 100,
        available: true, 
    },
    2: {
        id: 2,
        name: "n2",
        description: "d2",
        sizes: "s2",
        price: 300,
        available: true, 
    },
    3: {
        id: 3,
        name: "n3",
        description: "d3",
        sizes: "s3",
        price: 500,
        available: true, 
    },
    4: {
        id: 4,
        name: "n4",
        description: "d4",
        sizes: "s4",
        price: 700,
        available: false, 
    },
    5: {
        id: 5,
        name: "n5",
        description: "d5",
        sizes: "s5",
        price: 150,
        available: true, 
    },

};

let shopingCard = [
    {
        good: catalogOfGoods[2],
        amount: 10,
    },
    {
        good: catalogOfGoods[4],
        amount: 5,
    },
];


function addGoodToShopingCard(goodId, amount) {
    let goodAdded = {
        good: catalogOfGoods[goodId],
        amount: amount
    };
    shopingCard.push(goodAdded);
};


function deleteGoodFromShopingCard(goodId) {
    for (let i = 0; i < shopingCard.length; i++) {
        if (shopingCard[i].good.id === goodId) {
            shopingCard.splice(i, i);
        };
    };
};


function clearShopingCard() {
    shopingCard = [];
};


function totalAmountSumm() {
    let total = {
        totalAmount: 0,
        totalSumm: 0,
    };

    for (let i = 0; i < shopingCard.length; i++) {
        total.totalAmount += shopingCard[i].amount;
        total.totalSumm += shopingCard[i].good.price * shopingCard[i].amount; 
    };

    return total;
};


addGoodToShopingCard(3, 10);
deleteGoodFromShopingCard(4);
clearShopingCard();
addGoodToShopingCard(5, 10);
console.log(totalAmountSumm());
