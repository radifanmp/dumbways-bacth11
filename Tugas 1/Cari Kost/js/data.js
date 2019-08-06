

    const houses = [{

        name: 'Rumah Bang Haji',
        address: 'Jalan Kaliurang no 34 Yogyakarta',
        longtitude: -7.808348,
        latitude: 110.423268,
        price: 'Rp. 200.000',
        cover: 'https://id-rpfs.pgimgs.com/listing/16267193/UPHO.91001965.C400X300/Rumah-Cluster-Sutera-NaradaAlam-Sutera-Tangerang-Selatan-Indonesia.jpg'
    },

    {

        name: 'Rumah Bang Mamen',
        address: 'Jalan Kaliurang no 38 Yogyakarta',
        longtitude: -7.809352,
        latitude: 110.433272,
        price: 'Rp. 250.000',
        cover: 'https://i.pinimg.com/originals/96/78/5a/96785a4f7affaadeeeda0ac6adc43eff.jpg'
    },

    {

        name: 'Rumah Bang Jon',
        address: 'Jalan Kaliurang no 40 Yogyakarta',
        longtitude: -7.816203,
        latitude: 110.426395,
        price: 'Rp. 300.000',
        cover: 'https://media.bizj.us/view/img/10900134/a-37*750xx4512-2538-0-235.jpg'
    },

    {

        name: 'Rumah Bang Midun',
        address: 'Jalan Kaliurang no 31 Yogyakarta',
        longtitude: -7.802677,
        latitude: 110.428712,
        price: 'Rp. 150.000',
        cover: 'https://cache.desktopnexus.com/thumbseg/2006/2006020-bigthumbnail.jpg'
    },

    {

        name: 'Rumah Bang Lasik',
        address: 'Jalan Kaliurang no 38 Yogyakarta',
        longtitude: -7.809602,
        latitude: 110.427597,
        price: 'Rp. 150.000',
        cover: 'https://www.technocrazed.com/wp-content/uploads/2015/12/Home-Wallpaper-7.jpg'
    },

    {
        
        name: 'Rumah Bang Cool',
        address: 'Jalan Kaliurang no 47 Yogyakarta',
        longtitude: -7.812254,
        latitude:  110.428670,
        price: 'Rp. 275.000',
        cover: 'https://www.wallpaperup.com/uploads/wallpapers/2014/12/07/543647/59730345dff7c179a63ec5fa8d7fb38c-700.jpg'
    }, 

    {
    
        name: 'Rumah Bang Mamat',
        address: 'Jalan Kaliurang no 37 Yogyakarta',
        longtitude: -7.810534,
        latitude:  110.426398,
        price: 'Rp. 200.000',
        cover: 'https://images7.alphacoders.com/341/341714.jpg'
    },    
    
    {
    
        name: 'Rumah Bang Omat',
        address: 'Jalan Kaliurang no 33 Yogyakarta',
        longtitude: -7.805288,
        latitude: 110.425368,
        price: 'Rp. 245.000',
        cover: 'https://cdn.homesthetics.net/wp-content/uploads/2014/06/Dream-Cottages-for-Your-Holiday-Inspiration-homesthetics-5.jpg'
    },  
    
    {
    
        name: 'Rumah Bang Jamet',
        address: 'Jalan Kaliurang no 49 Yogyakarta',
        longtitude: -7.806319,
        latitude:  110.429069,
        price: 'Rp. 275.000',
        cover: 'https://i.pinimg.com/originals/87/f5/17/87f517013780d0541c7f99c6fa00b89e.jpg'
    }, 
        
    {
        
        name: 'Rumah Bang Cooler',
        address: 'Jalan Kaliurang no 46 Yogyakarta',
        longtitude: -7.813863,
        latitude: 110.425205,
        price: 'Rp. 300.000',
        cover: 'https://wallup.net/wp-content/uploads/2018/09/25/593816-house-modern-winter-snow-trees-building-architecture.jpg'
    },

    {
        
        name: 'Rumah Neng Kime',
        address: 'Jalan Kaliurang no 86 Yogyakarta',
        longtitude: -7.814065,
        latitude:  110.431846,
        price: 'Rp. 320.000',
        cover: 'https://wallpaperbro.com/img/531157.jpg'
    },

    
    {
        
        name: 'Rumah Neng Popy',
        address: 'Jalan Kaliurang no 87 Yogyakarta',
        longtitude: -7.814702,
        latitude:   110.429592,
        price: 'Rp. 320.000',
        cover: 'http://creativeq.co/wp-content/uploads/2019/04/country-cottage-wallpaper.jpg'
    },

    {
        
        name: 'Rumah Neng Wulan',
        address: 'Jalan Kaliurang no 86 Yogyakarta',
        longtitude: -7.816817,
        latitude:   110.429292,
        price: 'Rp. 340.000',
        cover: 'http://creativeq.co/wp-content/uploads/2019/04/country-cottage-wallpaper.jpg'
    },

    {
        
        name: 'Rumah Neng Ega',
        address: 'Jalan Kaliurang no 85 Yogyakarta',
        longtitude: -7.805875,
        latitude:   110.437494,
        price: 'Rp. 240.000',
        cover: 'https://images.wallpaperscraft.com/image/house_grass_bridge_country_10935_1920x1200.jpg'
    },    
];

let card = document.getElementById('list');
for (let i=0; i < houses.length; i++){

// console.log(houses[i].price);
card.innerHTML += 
' <div class="col s6" > <div class="card" style="border-radius: 15px;"> <div class="card-image"> <img src="'+ houses[i].cover +'" style="height: 200px; border-radius: 15px;"> <span class="card-title"> <a class="btn-small halfway-fab waves-effect waves-light green" style="position: absolute; margin-left: 190px; width:105px; border-radius: 15px;"> '+ 
houses[i].price +' </a></span> </div> <br> <div class="card-content" style="height: 150px;"> <p style="font-size: 10px; color:gray;">'+ 
houses[i].name +'</p><p>'+ 
houses[i].address +'</p><br> <div class="col s1" style="margin-right:5px; border-style: ridge; background-color: white; color:gray; border-radius: 15px; display:block; width: 80px; font-size: 11px; text-align: center;">Kawalerka</div> <div class="col s1" style="border-style: ridge; background-color: white; color:gray; border-radius: 15px; display:block; width: 50px; font-size: 11px; text-align: center;">34m<sup>2</sup></div> </div></div></div>';

}

var map = L.map('mapid').setView([-7.808344, 110.423264], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

for (let i=0; i <= houses.length; i++){

L.marker([houses[i].longtitude, houses[i].latitude]).addTo(map)
    .bindPopup('<img src="'+ houses[i].cover +'" style="width:200px; height:200px; border-radius: 15px;"> <a class="btn-small halfway-fab waves-effect waves-light green" style="position: absolute; margin-top: 130px; margin-left:38px; width:125px; border-radius: 15px; color:white;"> '+ 
        houses[i].price +' </a><div class="card-content" style="width:200px; height:120px;"> <p style="font-size: 10px; color:gray;">'+ 
        houses[i].name +'</p><p>'+ 
        houses[i].address +'</p><br> <div class="col s1" style="margin-right:5px; border-style: ridge; background-color: white; color:gray; border-radius: 15px; display:block; width: 80px; font-size: 11px; text-align: center;">Kawalerka</div> <div class="col s1" style="border-style: ridge; background-color: white; color:gray; border-radius: 15px; display:block; width: 50px; font-size: 11px; text-align: center;">34m<sup>2</sup></div>')
    .openPopup();

}
