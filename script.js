//this is countries autocomplete javascript code change it according to your need
function getvalue() {
    var x = document.getElementById("input").value;
    document.getElementById("demo").innerHTML = "you presssed "+str;   
}
    var input = document.getElementById("input");
    input.focus();
    var str = "";
//change this countries array according to need
    var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola",
    "Bahamas","Bahrain","Bangladesh","Barbados","Bavaria*","Belarus",'Belgium',
    'Gabon','Gambia', 'Georgia', 'Germany','Ghana','Iceland',
    'India','Indonesia','Iran','Iraq'];
     var match = [];
    var cursor = 0;
    input.addEventListener("keydown",event=>{

        //input for country name
        inputtext(event);

        //comparing cuntry name
        compare(str,match);

        //forming list for html
        makelist(match,event);
        match.splice(0,match.length);
    })

    function compare(str,match){
        var len = str.length;
        countries.forEach(e=>{
            if(e.toLocaleLowerCase().indexOf(str.toLocaleLowerCase()) != -1){
                var n = e.toLocaleLowerCase().indexOf(str.toLocaleLowerCase());
                match.push(e);
            }
        })
        return match;
    }   
    function inputtext(event) {
        if(event.key!="Backspace"){
            if(event.keyCode>64 && event.keyCode<91)
                str = str + event.key;
        }
        else
        str = str.slice(0,str.length-1);
        
        return str;
    }
    function makelist(match,event) {
        //clearing previous list
        var ul = document.getElementById("list");
        while (ul.hasChildNodes()) {
                ul.removeChild(ul.firstChild);
            }
        
        if (event.keyCode==13) {
            
            input.value = match[cur];
            
        }
        else if (event.keyCode==40) {
            if(cur<match.length)cur++;
        }else if (event.keyCode==38) {
            if(cur>0)cur--;
        }
        console.log(cur);
        //adding matching countries to list
        for (let i = 0; i < match.length; i++) {
            var li = document.createElement("li");
            var text = document.createTextNode(match[i]+" ");
            li.appendChild(text);
            ul.appendChild(li);
            li.style.listStyle = "none";
            if (i==cur) {
                li.style.backgroundColor = "#bdb7b7";//active list 
            }
        }
       
    }
    function blurList() {
        var ul = document.getElementById("list");
        while (ul.hasChildNodes()) {
                ul.removeChild(ul.firstChild);
            }
        cur = 0;
    }
