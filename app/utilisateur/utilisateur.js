exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('profile/parametres/parametres');
    // page.frame.goBack();
}
exports.messagerie = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('messagerie/messagerie');
}
exports.parametre = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('recherche/recherche');
}
exports.deconnexion = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('main-page');
}