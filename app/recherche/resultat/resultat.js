exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.addCss("#groupe {background-color: white}");
    page.addCss("#profil {background-color: green}");
}
exports.changeCouleur = args => {
    const button = args.object
    const page = button.page
    // alert('button clicked');
    page.addCss("#groupe {background-color: green}");
    page.addCss("#profil {background-color: white}");
    // page.frame.navigate('messagerie/conversation/conversation');
    // page.frame.goBack();
}