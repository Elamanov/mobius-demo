import chanel, {queue} from './amqp_connection'

export function send(data) {
    chanel.sendToQueue(queue, new Buffer(data));
}
