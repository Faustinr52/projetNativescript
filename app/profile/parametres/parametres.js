exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('home-page');
    // page.frame.goBack();
}
exports.onTap2 = args => {
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
exports.membres = args => {
    const button = args.object
    const page = button.page
    // alert("vos abonnes");
    page.frame.navigate('profile/abonnes/abonnes');
    // page.frame.goBack();
    
}