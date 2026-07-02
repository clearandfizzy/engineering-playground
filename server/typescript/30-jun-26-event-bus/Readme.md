Running the following command will demonstrate the event bus design pattern.
```npm run eventbus:demo```

This shows how you can subscribe to a specific event, with multiple ways to handle observing the event.

For instance, you can subscribe to the "user.created" event twice. When the event is observed, both subscriptions 
will fire and run their custom logic.

