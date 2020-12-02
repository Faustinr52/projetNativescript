const view = require("tns-core-modules/ui/core/view");
var page;
var email;
var mdp;
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
exports.loaded = function (args) {
    page = args.object;
    label = page.getViewById("label");
};
exports.onTap = args => {
    const button = args.object
    page = button.page
    // page.frame.navigate('~/home/home-page');
    page.frame.goBack();
}
exports.onTap2 = args => {
    const bouton = args.object;
    page = bouton.page;
    page.frame.navigate('inscription/inscription');
}

exports.isValidEmail = args => {
    const button = args.object
    page = button.page
    email = page.getViewById("email");
    mdp = page.getViewById("mdp");
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.text.length == 0 || mdp.text.length == 0) {
        alert('Veuillez complètez les deux champs');
    }
    else if (re.test(String(email.text).toLowerCase()) === false) {
        alert('Votre adresse mail est invalide');
    }
    else {
        page.frame.navigate('profile/profile');
    }
}
exports.oublieMdp = (args) => {
    const button = args.object
    page = button.page
    email = page.getViewById("email");
    if (re.test(String(email.text).toLowerCase()) == true) {
        alert('Vous reçevrez un mail de réinitialisation de votre mdp');
    } else {
        alert('Veuillez entrez une adresse mail valide');
    }
}