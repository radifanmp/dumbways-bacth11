var imported = document.createElement('script');
imported.src = 'js/data.js';
document.head.appendChild(imported);


let card = document.getElementById('list');
for (let i=0; i < imported.length; i ++){

console.log(imported[i].price);

card.innerHTML += 
' <div class="col s6" > <div class="card" style="border-radius: 15px;"> <div class="card-image"> <img src="'+ imported[i].cover +'" style="height: 200px; border-radius: 15px;"> <span class="card-title"> <a class="btn-small halfway-fab waves-effect waves-light green" style="position: absolute; margin-left: 190px; width:100px; border-radius: 15px;">Rp. '+ 
imported[i].price +' </a></span> </div> <br> <div class="card-content" style="height: 150px;"> <p style="font-size: 10px; color:gray;">'+ 
imported[i].name +'</p><p>'+ 
imported[i].address +'</p><br> <div class="col s1" style="margin-right:5px; border-style: ridge; background-color: white; color:gray; border-radius: 15px; display:block; width: 80px; font-size: 11px; text-align: center;">Kawalerka</div> <div class="col s1" style="border-style: ridge; background-color: white; color:gray; border-radius: 15px; display:block; width: 50px; font-size: 11px; text-align: center;">34m<sup>2</sup></div> </div></div></div>';

}