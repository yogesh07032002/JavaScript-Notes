function loadScript(src,callback){//see on google
    let script=document.createElement("Script");
    script.src=src;
    script.onload=function(){
        console.log("Loaded script with SRC:"+src)
        callback(null ,src);
    }
    script.onerror=function(){
        console.log("Error loading script with src"+src)
        callback(new Error("SRC got some error"))
    }


    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error)
    }
    alert("HELLO"+src)
}
function gm(error, src){
    if(error){
        console.log(error)
        sendEmergencyMessageTOCEO();
        return
    }
    alert("Hgm"+src)
}

loadScript("any link on bootstrap",hello)