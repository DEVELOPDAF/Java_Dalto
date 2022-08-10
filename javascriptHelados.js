dineroCliente1 = prompt ("cuanto dinero tienes, cliente1?");
dineroCliente2 = prompt ("cuanto dinero tienes, cliente2?");
dineroCliente3 = prompt ("cuanto dinero tienes, cliente3?");

dineroCliente1 = parseInt(dineroCliente1);

if (dineroCliente1 >= 1 && dineroCliente1 < 2)
{
alert ("puedes comprarte uno de nata");
}

else if (dineroCliente2 >= 2 && dineroCliente2 < 3)
{
alert ("puedes comprarte uno de chocolate");
}

else if (dineroCliente3 >= 3)
{
alert ("puedes comprarte uno de limon");
}

else {
    alert("vas a morir de hambre");
}