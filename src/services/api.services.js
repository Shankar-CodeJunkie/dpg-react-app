import axios from 'axios';

const API_DOMAIN = 'http://localhost:3000'

export function loginByCred(formData) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: API_DOMAIN + '/login/cred',
            data: {
                "clusterUrl": formData.cluster_url, //"https://api.amocpdev.os.fyre.ibm.com:6443",
                "username": formData.username, //"kubeadmin",
                "password": formData.password //"sLhMi-UuL3P-QUdy7-mipB"
            },
        }).then(res => {
            if (res.data && res.data.status && res.data.status==='Success') {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(error => {
            reject({error});
        })
    })
}

export function loginByToken(formData) {
    return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: API_DOMAIN + '/login/cred',
            data: {
                "clusterUrl": formData.cluster_url, //"https://api.amocpdev.os.fyre.ibm.com:6443",
                "token": formData.token //umtIY8j5JxR4epPhdgQYLjgghmZRIq6NtgyjQoXx69
            },
        }).then(res => {
            if (res.data && res.data.status && res.data.status==='Success') {
                resolve(res.data)
            } else {
                reject(res.data)
            }
        }).catch(error => {
            reject({error});
        })
    })
}