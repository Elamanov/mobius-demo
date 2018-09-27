const conf = {};
const cse = {};
const ae = {};
const cnt_arr = [];
const sub_arr = [];
conf.useprotocol = 'http'; // select one for 'http' or 'mqtt' or 'coap' or 'ws'

// build cse
cse.host        = 'localhost';
cse.port        = '7579';
cse.name        = 'Mobius';
cse.id          = '/Mobius2';
cse.mqttport    = '1883';
cse.wsport      = '7577';

// build ae
ae.name         = 'room1';

ae.id           = ae.name;

ae.parent       = '/' + cse.name;
ae.appid        = ae.name + '_appid';
ae.port         = '9727';
ae.bodytype     = 'json'; // select 'json' or 'xml' or 'cbor'
ae.tasport      = '3105';

conf.usesecure  = 'disable';

if(conf.usesecure === 'enable') {
    cse.mqttport = '8883';
}

conf.cse = cse;
conf.ae = ae;
conf.cnt = cnt_arr;
conf.sub = ['/oneM2M/req/Mobius2/bulb1_control/json',
    '/oneM2M/req/Mobius2/bulb2_control/json',
    '/oneM2M/req/Mobius2/bulb3_control/json'];

export default conf;