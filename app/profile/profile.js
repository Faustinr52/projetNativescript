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
    page.frame.navigate('utilisateur/utilisateur');
    // page.frame.goBack();
}