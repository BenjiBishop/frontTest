const URI = 'http://localhost:8000';

export default {
    async fetchUser() {
        try {
                const response = await fetch(URI + '/api/register');
                const responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}