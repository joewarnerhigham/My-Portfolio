

let hobbies = document.getElementById('hobbies');

let reveal_box = document.getElementById('hobbies_reveal');

hobbies.addEventListener('mouseenter', function(){
    reveal_box.style.opacity='1';
    document.getElementById('hobby-h1').style.color='#BA3B46';
});

hobbies.addEventListener('mouseleave', function(){
    reveal_box.style.opacity='0';
    document.getElementById('hobby-h1').style.color='';
});


