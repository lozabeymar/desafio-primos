formulario.addEventListener("submit", 
    function(event){
        event.preventDefault();
        let resultado=document.getElementById("resultado");
        let n=parseInt(document.getElementById("n").value);
        let c=0
        for (let i=1; i<=n; i++){
            if (n%i==0){
                c=c+1
            }
        }
        if (c==2){
            resultado.innerHTML=`<p>Tu número ${n} es primo</p>`
        }
        else{
            resultado.innerHTML=`<p>Tu numero ${n} no es primo</p>`
        }
});