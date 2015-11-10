window.accountsService = (() => {
    "use strict";

    var accountsList = [];
    function fetchItems() {
        var url = "https://api.github.com/users";

        return $.ajax(url).then(response => {
            accountsList = response;
            return response;
        })
    }

    return {
        fetchItems: fetchItems,
        getAccountsList: () => accountsList
    };
})();