exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('profile/profile');
    // page.frame.goBack();
}
exports.messagerie = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('messagerie/messagerie');
    // alert('hello');
    // page.frame.goBack();
}
exports.parametre = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('profile/parametres/parametres');
    // alert('parameter page');
    // page.frame.goBack();
}