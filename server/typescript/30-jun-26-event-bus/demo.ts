// demo.ts
import EventBus, {EventMap} from "./eventBus";

const bus = new EventBus<EventMap>();

bus.subscribe("user.created", (payload) => {
	console.log('User Creation Observed: ' + payload.name);
});

bus.subscribe("user.created", (payload) => {
	console.log('User Created event observed a different handler UserId:' + payload.id);
});

bus.publish("user.created", {id: "123", name: "John Doe"});

bus.subscribe("order.completed", (payload) => {
	console.log(payload.orderId, payload.total);
});