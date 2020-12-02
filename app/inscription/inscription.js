var email;
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var mdp;
var confMpd;
exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.frame.goBack();
}
exports.onTap2 = args => {
    const bouton = args.object;
    const page = bouton.page;
    page.frame.navigate('connexion/connexion');
}
exports.inscription = (args) => {
    const button = args.object
    page = button.page
    email = page.getViewById("email").text;
    mdp = page.getViewById("mdp").text;
    confMpd = page.getViewById("confMdp").text;
    if (re.test(String(email).toLowerCase()) == false) {
        alert('email invalide');
    } else if (mdp != confMpd) {
        alert("Votre mot de passe ne correspond pas")
    } else {
        alert("l'inscription a éte envoyé");
    }
}