Create a single Express-based app that serves two separate, unrelated pieces of functionality.

In-memory stack (LIFO):

The first piece of functionality is an in-memory stack (LIFO).  This portion of the application should have two endpoints:
an endpoint to add an item to the stack
an endpoint to return the top item of the stack
requesting an item from the stack should also remove that item from the top of the stack
This process should be in-memory, so you don't need to worry about persisting the stack across restarts of the application.

Example requests: 
Add "Hello" to stack
Add "World" to stack
Get item from stack
"World" would be returned
Add "Again" to stack
Get item from stack
"Again" would be returned
Get item from stack
"Hello" would be returned

In-memory key-value store with TTL:

The second piece of functionality is an in-memory key-value store that supports TTLs on the keys.
Your interface should support:
adding a key to the store
setting a TTL should be optional to the client when adding the key
getting the value for a key
this should respect the TTL for the key if provided
deleting the value stored for a given key

For example:
Set "name" to "John"
Get "name"
This returns John
Get "age"
This returns an empty value
Set "name" to "Larry" with a TTL of 30 seconds
Get "name" (within 30 seconds of the set)
This returns "Larry"
Get "name" (more than 30 seconds after the set)
This returns an empty value
