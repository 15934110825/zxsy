function ajax(method, url, data, fnSucc, fnFaild){
    //1、创建Ajax实例
    try{
        var xhr=new XMLHttpRequest();
    }catch (e){
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(method.toUpperCase()=="POST"){
        xhr.open(method,url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }else if(method.toUpperCase()=="GET"){
        //2、连接服务器  打开和服务器的链接
        xhr.open(method,url+"?"+data,true);
        //3、发送
        xhr.send();
    }
    //4、接收数据
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                fnSucc(xhr.responseText);
            }else {
                if(fnFaild){
                    fnFaild();
                }
            }
        }
    }
}