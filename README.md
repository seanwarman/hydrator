# Hydrator

A Vue SSR app that can be used as a headless app as well. It's an experiment to
see how useable an app is if the server and client where sharing not only
template files but also a data source.

You use a single set of template (.vue) files and they're both server rendered
but also bundled for the client as well.

My plan is to add Pina to this app then have the state synced between the
client and server using websockets. This way we could even sync the server-side
state with a database to have a single source of truth for the entire stack.

## Development

The app works by running two webpack configs, one for the client and the other
for the server. So start by running webpack:

```
$ npm run watch
```

This will build your bundle files into dist. A **server.bundle.js** and a
**client.bundle.js** 

Then to run the server do:

```
$ npm run dev
```

This actually runs by directly calling **dist/server.bundle.js**, which allows
us to develop using .vue files and whatever other nice tools we want to hook up
to webpack.

Then to allow auto-reloading do:

```
$ npm run browser
```

I know, I need to put this all into one command. Be patient with me.

# TODO

1. ~~Install Pinia and get it working across the server and client.~~
2. Investigate some websocket libraries, is there one that's made for this kind
   of thing?
   - There's an interesting socket lib called netflux, which intgerates sockets
     with flux to create a peer to peer network. It's dep but good for ideas:
     [netflux](https://github.com/coast-team/netflux)
3. ~~Get webpack to send different client initialisers depending on the route.~~
   - I managed this by using dynamic imports, webpack will code split every time
     it sees one.
   - It's also allowed me to use a single router.js file to define the app's
     routes. They don't yet accept args tho, could be something to think about,
     maybe possible using a global value (like nuxt does with $properties)
4. Install a db, probably inside a container, are subscriptions possible? I
   know you can't with MYSQL, but maybe Mongo or some other db can. Possibly
   just use waterline so you can plug in any db (if it's still a thing).
