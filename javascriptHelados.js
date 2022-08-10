dineroJuan = prompt ("cuanto dinero tienes, Juan?");
dineroPedro = prompt ("cuanto dinero tienes, Pedro?");
dineroSantiago = prompt ("cuanto dinero tienes, Santiago?");

dineroJuan = parseInt(dineroJuan);

if (dineroJuan >= 1 && dineroJuan < 2)
{
alert ("puedes comprarte uno de nata");
alert ("puedes comprarte uno de nata y te sobran " + (dineroJuan -1.5));
}

else if (dineroPedro >= 2 && dineroPedro < 3)
{
alert ("puedes comprarte uno de chocolate");
alert ("puedes comprarte uno de Chocolate " + (dineroPedro -2.3));
}

else if (dineroSantiago >= 3)
{
alert ("puedes comprarte uno de limon");
alert ("puedes comprarte uno de limon " + (dineroSantiago -3.4));
}

else {
    alert("vas a morir de hambre");
}