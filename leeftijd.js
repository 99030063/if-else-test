var leeftijd=prompt('hoe oud ben je?');
if (leeftijd<21){
    if(leeftijd<18){ 
        if(leeftijd<16){
            alert('nope');
        }else{
            alert('eerste verdieping');
        }
    }else{
        alert('tweede verdieping');
    }
}else{
        alert('VIP verdieping');
}