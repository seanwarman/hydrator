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
$ npx webpack watch
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

# TODO

The **client.bundle.js** file currently includes the whole app, it'd be nice if
we could split it into the relevant code for the route. I've tried splitting
the bundles per route but we can't use exports in the client side code which
makes the implementation overly complicated.

You can use code-splitting for this in webpack. Something to look into later I
think.

1. Install Pinia and get it working across the server and client (keep in mind
   how they'll link together, do we need websockets?).
2. Install a db, probably inside a container, are subscriptions possible? I
   know you can't with MYSQL, but maybe Mongo or some other db can.
