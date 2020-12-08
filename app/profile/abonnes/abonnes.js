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
    // page.frame.goBack();
}
exports.envoyeMessage = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('messagerie/conversation/conversation');
}