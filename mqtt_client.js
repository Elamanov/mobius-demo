import * as mqtt from 'async-mqtt';

import conf from 'conf';

const client = mqtt.connect(`mqtt://${conf.cse.host}`);
conf.sub.forEach(e => client.subscribe(e));
client.on('message', doStuff);

async function doStuff(topic, message) {
    const temp = JSON.parse(Buffer.from(message).toString());
    console.log(temp);
}
export default client;