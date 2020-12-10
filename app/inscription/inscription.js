var email;
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var mdp;
var confMpd;
var pseudo; 
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
    pseudo = page.getViewById("pseudo").text; 
    if (re.test(String(email).toLowerCase()) == false) {
        alert('Votre adresse email est invalide ou non renseignée');
    } else if (mdp != confMpd) {
        alert("Vos mots de passe ne sont pas identiques");
    } else if (pseudo.length == 0) {
        alert("Veuillez renseigner le champs Pseudo pour continuer");
    } else if (mdp.length == 0 || confMpd.length == 0) {
        alert("Veuillez renseigner les champs Mot de passe et Confirmation mot de passe");
    }
    else {
        // alert("l'inscription a éte envoyé");
        page.frame.navigate('profile/profile');
    }
}