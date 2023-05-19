var container=document.getElementById("container");
        var but=container.getElementsByClassName("but");
        var demo=document.getElementById("demo");
        var after=document.getElementsByClassName("after");
        for (var i=0; i < but.length ; i=i+1) {

            but[i].addEventListener("click", function() {
                if (after.length>0) {
                  after[0].classList.remove("after");
                }
                this.classList.add("after");
            } );
    
        }