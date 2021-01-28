function showMessage(message){
    document.getElementById('message').textContent = message;
    if(document.getElementById('message') != null){
        return true;
    }else
    return false;
}