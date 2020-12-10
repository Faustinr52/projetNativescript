exports.retourProfile = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('profile/vehicule/vehicule');
    // page.frame.goBack();
}

exports.valider = args => {
    const bouton = args.object;
    page = bouton.page;
    page.frame.navigate('profile/profile');
}