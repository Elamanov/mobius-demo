import * as mqtt from 'async-mqtt';

const topics = ['/oneM2M/req/Mobius2/bulb1_control_sub/json',
    '/oneM2M/req/Mobius2/bulb2_control/json',
    '/oneM2M/req/Mobius2/bulb3_control/json'];

const client = mqtt.connect("mqtt://localhost");
topics.forEach(e => client.subscribe(e));
client.on('message', doStuff);

async function doStuff(topic, message) {
    const temp = JSON.parse(Buffer.from(message).toString());
    console.log(temp);
}
export default client;