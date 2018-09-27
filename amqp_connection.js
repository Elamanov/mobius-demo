import * as amqp from 'amqplib';
export const queue = 'default';

export async function amqpConnect(){
    const conn = await amqp.connect('amqp://localhost');
    const ch = await conn.createChannel();
    ch.assertQueue(queue, {durable: false});
    return ch;
}