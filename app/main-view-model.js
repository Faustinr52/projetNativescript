const Observable = require("tns-core-modules/data/observable").Observable;

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
