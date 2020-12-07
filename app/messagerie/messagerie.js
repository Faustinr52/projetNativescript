exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('profile/parametres/parametres');
    // page.frame.goBack();
}
exports.envoyerMessage = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('messagerie/conversation/conversation');
    // page.frame.goBack();
}