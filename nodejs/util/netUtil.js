import fetch from "node-fetch";

export const simpleFetchPostJsonPayload = (endpoint, jsonBody) => {
    fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: jsonBody
    })
        .then(async response => {
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP fetch statut : ${response.status}. details : ${errorText}`);
            }
            console.log('OK');
        })
        .catch(error => {
            console.error(`FAILED : ${error.message}`);
        });
}

export const fetchPostPayload = (endpoint, body) => {
    fetch(endpoint, {
        method: 'POST',
        body
    })
        .then(async response => {
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP fetch statut : ${response.status}. details : ${errorText}`);
            }
            console.log('OK');
        })
        .catch(error => {
            console.error(`FAILED : ${error.message}`);
        });
}