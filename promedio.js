const lista1 = [100,200,300,500];



function media(lista){
    //let suma = 0;

    //for (let i = 0; i < lista1.length; i++){
    //    suma = suma + lista1[i];
    //};

    const suma = lista.reduce(
        
        function (sum = 0, elem)
        {
            return sum + elem;
        }
    ); 

    promedio = suma/lista.length;

    return promedio 
}


