import conf from '../conf';
const request = require('request-promise-native');

export async function createAe(ae) {
    const options = {
        method: 'POST',
        uri: `http://localhost:${conf.cse.port}${conf.ae.parent}?rcn=3`,
        headers: {
            'Content-Type': 'application/vnd.onem2m-res+json; ty=2;',
            'Accept': 'application/json',
            'X-M2M-RI': conf.cse.id,
            'X-M2M-Origin': ae.appid
        },
        body: {
            'api': ae.appid,
            'rn': ae.name,
            'rr': true
        },
        json: true
    };

    // const res = await request(options);
    // console.log(res);
    request(options).then(res => {
        console.log(res);
    }).catch(e =>{
        console.error(e.message);
    })

}
