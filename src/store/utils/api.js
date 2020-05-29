import axios from 'axios';
import {urlOpenEd, urlTratify} from './url';

export function callApiOpenEd( endpoint, method, body ) {
    return axios({
        method: method ? method : "GET",
        url: `${urlOpenEd}`,
        data: body ? body : "",
    }).catch( err => {
        console.log(err);
    });
}
export function callApiTraitify( endpoint, method, body ) {
    return axios({
        method: method ? method : "GET",
        url: `${urlTratify}`,
        data: body ? body : "",
    }).catch( err => {
        console.log(err);
    });
}