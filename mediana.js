const lista1 = [300,200,500,100];


const listSort = lista1.sort((a,b) => a-b);

const mitad = lista1.length/2;

function esPar(n)
{
    if (n % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function mediana(lista, mitad)
{
    var med;
    if (esPar(mitad))
    {
        med = (lista[mitad-1] + lista[mitad])/2;
    }
    else
    {
        med = lista[parseInt(mitad)];
    }
    return med;
}