window.load = slide(1);
var bgNumber = 1;
function slide(n){
    var allBgs = 7;
    document.getElementById("imagemProduto").style.backgroundImage = "url(./img/produto"+n+".png)";
    botoes(n, allBgs);
    bgNumber=n;
}
function anterior(){
    if(bgNumber>1){
        bgNumber--;
        slide(bgNumber);
    }
}
function proximo(){
    if(bgNumber<7){
        bgNumber++;
        slide(bgNumber);
    }
}
function botoes(n, m){
    document.getElementById("botoes").innerHTML = "";
    for(a=1;a<=m;a++){
        if(a==n){
            document.getElementById("botoes").innerHTML += "<li1 class=selected onclick=slide("+a+")></li>";
        }else{
            document.getElementById("botoes").innerHTML += "<li1 onclick=slide("+a+")></li1>";
        }
    }
}