/**
 * responsible for calling the appropriate functon to make the OAuth call
 * using AJAX call
 * @author Sandeep G
 * @since 20160913
 */
var oauth = {

    /**
     * All constants goes here
     */
    params: {
        accessUrl : ''//access url where you would request for token
    },

    /**
     * Fetch out the token
     */
    getToken: function () {
        if (params.token) {
            return params.token;
        }
        else {
            return false;
        }
    },

    /**
     * set the token
     */
    authenticate: function (clientId, clientSecretId, scope) {
        var deferred = jQuery.ajax({
            url: this.params.accessUrl,
            method: 'POST',
            dataType: 'text',
            data: {
                scope: scope,
                client_id: clientId,
                client_secret: clientSecretId,
                grant_type: 'client_credentials'
            },
            headers: {
                'Accept': 'application/json, application/x-www-form-urlencoded',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            complete: function (xhr, data) {
                console.warn(data);
                //called when complete
            }
        });
        return deferred.promise();
    }
}
