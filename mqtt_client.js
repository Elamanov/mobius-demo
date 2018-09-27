import * as mqtt from 'async-mqtt';

import conf from './conf';
import {amqpConnect, queue} from "./amqp_connection";

const client = mqtt.connect(`mqtt://localhost`);
conf.sub.forEach(e => client.subscribe(e));
client.on('message', control);

async function control(topic, message) {
    console.log(message);
    const bulbNumber = topic.charAt(topic.indexOf('bulb') + 4);
    const temp = JSON.parse(Buffer.from(message).toString());
    const data = temp.pc['m2m:sgn'].nev.rep['m2m:cin'].con;

    amqpConnect().then(channel => {
        channel.sendToQueue(queue, new Buffer(bulbNumber.toString() + data));
    });
}
export default client;