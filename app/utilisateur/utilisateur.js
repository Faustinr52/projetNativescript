exports.onTap = args => {
    const button = args.object
    const page = button.page
    page.frame.navigate('profile/profile');
    // page.frame.goBack();
}