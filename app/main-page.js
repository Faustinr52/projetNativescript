
const createViewModel = require("./main-view-model").createViewModel;

exports.onTap1 = args => {
  const bouton = args.object;
  const page = bouton.page;
  page.frame.navigate('connexion/connexion');
}
exports.onTap2 = args => {
  const bouton = args.object;
  const page = bouton.page;
  page.frame.navigate('inscription/inscription');
}
