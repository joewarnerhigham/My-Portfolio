

let hobbies = document.getElementById('hobbies');

let reveal_box = document.getElementById('hobbies_reveal');

let wrapper_ul = document.getElementById('wrapper-ul');

let joe_img = document.getElementById('img-joe');

reveal_box.addEventListener('mouseenter', function(){
    reveal_box.style.opacity='1';
    document.getElementById('hobby-h1').style.color='#BA3B46';
});

reveal_box.addEventListener('mouseleave', function(){
    reveal_box.style.opacity='0';
    document.getElementById('hobby-h1').style.color='';
});

joe_img.addEventListener('mouseenter', function(){
    wrapper_ul.style.opacity='1';
} );

joe_img.addEventListener('mouseleave', function(){
    wrapper_ul.style.opacity='0';
})

wrapper_ul.addEventListener('mouseenter', function(){
    wrapper_ul.style.opacity='1';
} );

wrapper_ul.addEventListener('mouseleave', function(){
    wrapper_ul.style.opacity='0';
})





