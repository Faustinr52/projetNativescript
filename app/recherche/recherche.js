exports.onTap = args => {
    const bouton = args.object;
    const page = bouton.page;
    // alert('page resulat');
    page.frame.navigate('recherche/resultat/resultat');
  }