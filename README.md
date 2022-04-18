# Hydrator

A Vue SSR app that can be used as a headless app as well. It's an experiment to
see how useable an app is if the server and client where sharing not only
template files but also a data source.

You use a single set of template (.vue) files and they're both server rendered
but also bundled for the client as well.

My plan is to add Pina to this app then have the state synced between the
client and server using websockets. This way we could even sync the server-side
state with a database to have a single source of truth for the entire stack.
