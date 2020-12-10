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
        alert('Veuillez compléter les deux champs');
    }
    else if (re.test(String(email.text).toLowerCase()) === false) {
        alert('Votre adresse email est invalide');
    }
    else {
        page.frame.navigate('utilisateur/utilisateur');
    }
}
exports.oublieMdp = (args) => {
    const button = args.object
    page = button.page
    email = page.getViewById("email");
    if (re.test(String(email.text).toLowerCase()) == true) {
        alert('Nous vous avons envoyé un email. Consultez le pour réinitialiser votre mot de passe');
    } else {
        alert('Entrez votre adresse email dans le champs "email" puis cliquez de nouveau sur "mot de passe oublié"');
    }
}