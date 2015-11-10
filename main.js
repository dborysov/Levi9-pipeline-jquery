(() => {
    "use strict";

    window.accountsService.fetchItems().then(window.controller.drawList);
})();