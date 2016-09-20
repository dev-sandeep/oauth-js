/**
 * This is just a demo js file to show how oauth library works
 * @author: Sandeep
 * @since: 20160920 
 */

(function(){

    function fetchAuthToken(clientId, clientSecretId) {
        var auth = oauth.authenticate(clientId, clientSecretId);

        auth.done(function (data) {
            console.warn(data);

            /* YOUR WORK STARTS HERE */
            data = JSON.parse(data);
            var token = data.access_token;

            console.warn("Token: "+token);
        });

        auth.fail(function () {
            console.error("Error in client Id or client secret Id");
        });
    }

    /**
     * click event for the explore button
     * @return {undefined}
     */
    getAccessToken = function () {
        var clientId = $('#client_id').val();
        var clientSecretId = $('#client_secret_id').val();

        if (!clientId || !clientSecretId) {
            console.error("Missing client id or client secret id");
        }
        else {
            /* get the authorization token[append to #auth_token] */
            fetchAuthToken(clientId, clientSecretId, scope);
        }

    };
}());