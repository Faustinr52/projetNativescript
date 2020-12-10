var marque, modele, chevaux, cv, dpt; 

exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('home-page');
    // page.frame.goBack();
}
exports.ajoutVehicule = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('profile/vehicule/vehicule');
    // page.frame.goBack();
}
exports.valider = args => {
    const button = args.object
    const page = button.page
    marque = page.getViewById("marque").text;
    modele = page.getViewById("modele").text;
    chevaux = page.getViewById("chevaux").text;
    cv = page.getViewById("cv").text;
    dpt = page.getViewById("dpt").text;

    if (marque.length == 0 && modele.length == 0 && chevaux.length == 0 && cv.length == 0 && dpt.length == 0) {
        alert("Veuillez remplir tous les champs pour au moins 1 véhicule pour finaliser votre inscription");
    } else {
        page.frame.navigate('utilisateur/utilisateur');
    }

    // page.frame.goBack();
}