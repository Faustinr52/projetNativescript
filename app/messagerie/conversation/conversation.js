var pseudo,message;

exports.envoyer = (args) => {
    const button = args.object
    page = button.page
    message = page.getViewById("message");
    pseudo = page.getViewById("pseudo");
    if(message.text.length == 0 || pseudo.text.length == 0){
        alert('Veuillez complètez les deux champs');
    }else{
        alert('Message envoyé');
    }
}