window.controller = (() => {
    "use strict";

    var listElement = $('#list-container');
    var cardElement = $('#card-container');

    function showList() {
        listElement.show();
        cardElement.hide();
    }

    function showDetails() {
        listElement.hide();
        cardElement.show();
    }

    function createRow(el) {
        return $('<tr></tr>').attr('data-id', el.id)
            .append('<td><img src="' + el.avatar_url + '"/></td>')
            .append('<td>' + el.login + '</td>');
    }

    function drawDetails(account) {
        var backButton = $('<button></button>').text('Back')
            .addClass('btn btn-default')
            .click(showList);

        var login = $('<div></div>').text(account.login);
        var externalLink = $('<a/>').attr('href', account.html_url).text('Show more...');

        cardElement.empty();

        cardElement.append(backButton, login, externalLink);

        showDetails();
    }

    function drawTableHeader(table) {
        var tableHeader = $(
            '<thead>' +
            '	<tr>' +
            '		<th>Avatar</th>' +
            '		<th>Login</th>' +
            '	</tr>' +
            '</thead>');

        table.append(tableHeader);
    }

    function drawList(list) {
        var table = $('<table class="table"></table>').addClass('table-striped table-hover');

        drawTableHeader(table);

        var tableBody = $('<tbody></tbody>').click(event => {
            var id = +$(event.toElement).closest('tr').attr('data-id');
            var account = accountsService.getAccountsList().find(a => a.id === id);
            drawDetails(account);
        });
        table.append(tableBody);

        tableBody.append(list.map(createRow));

        listElement.append(table);
    }

    return {
        drawList: drawList
    }
})()