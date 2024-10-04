console.log(document.cookie)//please read harry notes as well as searc on the google
document.cookie="name=YogeshIngole12345"
document.cookie="name2=harry1234"
document.cookie="name=harry"
let key=prompt("Enter Your Key")
let value=prompt("Eneter your value")
document.cookie=`${encodeURIComponent(key) }=${encodeURIComponentvalue(value)}`