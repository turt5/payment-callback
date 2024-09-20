// Check the URL for status query parameter
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');


    if (status === 'failure') {
        // Redirect to the failure page
        window.location.href = 'failure.html';
    } else if (status === 'success') {
        // Redirect to the success page
        window.location.href = 'success.html';
    } else if (status === 'cancel') {
        // Redirect to the cancelled page
        window.location.href = 'cancelled.html';
    }
};
