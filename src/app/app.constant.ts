import { environment } from './../environments/environment';

export default(() => {
    return {
        host: window.location.origin,
        apiUrls: {
            // login resources
            register: environment.baseUrl + '/auth/register',
            login: environment.baseUrl + '/auth/sign_in',

            // task resources
            allTasks: environment.baseUrl + '/tasks/all',
            getTask: environment.baseUrl + '/tasks',
            saveTask: environment.baseUrl + '/tasks',
            updateTask: environment.baseUrl + '/tasks/update'

            // label resources
        }
    }
})();