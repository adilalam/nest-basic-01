##### create nest cli project
nest new di

###### start the application 
npx ts-node-dev src/main.ts

###### for generate module 
nest generate module Messages

###### for generate controller (--flat means dont create extra folder called controller)
nest generate controller messages/messages --flat
