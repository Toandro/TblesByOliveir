function Lance(){
    document.getElementById('p1').innerHTML = '',
    
    x = 0,

    a = document.getElementById('table').value,

    b = document.getElementById('until').value,

           
    meth = function(){while(x<=b){
            document.getElementById('p0').innerHTML = "Voici les tables de multiplication par " + a + " : ";
            document.getElementById('p1').innerHTML += a + " x " + x + " = " + a*x + "<br>";        
            x++;
            document.getElementById('p1').style.border = '2px solid black';
            document.getElementById('p1').style.padding = '5px';
            document.getElementById('p1').style.backgroundColor = 'rgb(241, 206, 140)';
            document.getElementById('p1').style.fontSize = '108%';
			document.getElementById('p1').style.fontWeight = 'bold';
            document.getElementById('re').style.display = 'block'
        
        }};

    non = function(){
        document.getElementById('table').style.border = '2px solid red'       
        document.getElementById('p0').innerHTML = "Inserer un nombre à Multipliez !!!";
    };

    ju = function(){
        document.getElementById('until').style.border = '2px solid red'
        document.getElementById('p0').innerHTML = "Insérer un nombre à laquelle vous voulez arrêter"
    };

    vide = function(){
        document.getElementById('p0').innerHTML = "<span class=\"Red\">Les champs sont vide</span>"
    }
    
    if(a==''){
            non()
    }

    if(b==''){
        ju()
    }

    if(a=='' && b==''){
        vide()
    }

            
    else{
            meth()
    }
                  
    
}


let re = document.getElementById('re');

re.addEventListener('click', restore);

function restore(){
    location.reload();
}


//*Ity dia programme noforonin'i Olivier*//