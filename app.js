const addEmail = async () => {
    const user_email = document.getElementById('email').value;

    const url = 'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/';
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            revision: '2023-08-15',
            'content-type': 'application/json',
            Authorization: 'Bearer QWDCWM'
        },
        body: JSON.stringify({
            data: {
                type: 'profile-subscription-bulk-create-job',
                attributes: {
                    custom_source: 'Marketing Event',
                    profiles: {
                        data: [
                            {
                                type: 'profile',
                                id: '01GDDKASAP8TKDDA2GRZDSVP4H',
                                attributes: {
                                    email: user_email,
                                    subscriptions: { email: ['MARKETING'] }
                                }
                            }
                        ]
                    }
                },
                relationships: { list: { data: { type: 'list', id: 'Vxxe8Q' } } }
            }
        })
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addEmail();
});
