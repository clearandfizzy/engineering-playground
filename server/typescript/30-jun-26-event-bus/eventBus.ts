export type EventMap = {
	"user.created": { id: string; name: string; };
	"order.completed": { orderId: string; total: number; };
	"feature.enabled": { feature: string; };
};

class EventBus<TEvents> {
	private subscriptions: Array<{
		event: keyof TEvents;
		handler: (payload: any) => void;
	}> = [];

	public subscribe<K extends keyof TEvents>(event: K, handler: (payload: TEvents[K]) => void): void {
		this.subscriptions.push({event, handler});
	}

	public publish<K extends keyof TEvents>(event: K, payload: TEvents[K]): void {
		const events = this.subscriptions.filter((item) => item.event === event);

		events.forEach((item) => {
			item.handler(payload);
		})
	}

	public unsubscribe<K extends keyof TEvents>(event: K, handler: (payload: TEvents[K]) => void): void {
		this.subscriptions = this.subscriptions.filter((item) => {
			return (item.event !== event || item.handler !== handler )
		} );
	}

}

export default EventBus;