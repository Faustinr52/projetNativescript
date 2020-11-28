exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('home-page');
    // page.frame.goBack();
}
exports.onTap2 = args => {
    const bouton = args.object;
    const page = bouton.page;
    page.frame.navigate('connexion/connexion');
}