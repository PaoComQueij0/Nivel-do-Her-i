function Confirmar() {

    var n = document.getElementById('Nome')
    var nome = String (n.value)
    var x = document.getElementById('XPTexto')
    var XP = Number (x.value)
    var nivel = ''
    var area = document.getElementById ('Area')
    var res = document.getElementById ('Res')
    var confirm = true

 
   


    if (XP == 0) {

        alert('Insira uma quantia de XP')
    

    } else if (XP < 1000) {

        nivel = 'Ferro'
        res.innerText = (`O Herói de nome ${nome} está no nível de ${nivel}`)
        area.style.backgroundColor =  'rgb(94, 14, 14)'


    } else if (XP > 1001 && XP < 2000) {

        nivel = 'Bronze'
        res.innerText = (`O Herói de nome ${nome} está no nível de ${nivel}`)
        area.style.backgroundColor =  'rgb(161, 59, 0)'
        
       
    } else if (XP > 2001 && XP < 5000) {

        nivel = 'Prata'
        res.innerText = (`O Herói de nome ${nome} está no nível de ${nivel}`)
        area.style.backgroundColor = 'rgb(158, 153, 151)' 


    } else if (XP > 5001 && XP < 7000) {

        nivel = 'Ouro'
        res.innerText = (`O Herói de nome ${nome} está no nível de ${nivel}`)
        area.style.backgroundColor = 'rgb(255, 217, 0)'


    } else if (XP > 7001 && XP < 8000) {

        nivel = 'Platina'
        res.innerText = (`O Herói de nome ${nome} está no nível de ${nivel}`)
        area.style.backgroundColor = 'rgb(5, 161, 233)'


    } else if (XP > 8001 && XP < 9000) {

        nivel = 'Ascendente'
        res.innerText = (`O Herói de nome ${nome} está no nível de ${nivel}`)
        area.style.backgroundColor = 'rgb(148 , 6, 6)'


    } else if (XP > 9001 && XP < 10000) {
   
        nivel = 'Imortal'
        res.innerText = (`O Herói de nome ${nome} está no nível de ${nivel}`)
        area.style.backgroundColor = 'rgb(114, 3, 114)'


    } else if (XP > 10001) {

        nivel = 'Radiante'
        res.innerText = (`O Herói de nome ${nome} está no nível de ${nivel}`)
        area.style.backgroundColor = 'rgb(224, 208, 134)'

    }

    
/* O Herói de nome ${nome} está no nível de ${nivel}`*/
} 

