import { type Creator, ProductCreatorA, ProductCreatorB } from './factory-method'

function clientCode (creator: Creator): void {
  // ...
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  )
  console.log(creator.someOperation())
  // ...
}

console.log('App: Launched with the ConcreteCreator1.')
clientCode(new ProductCreatorA())
console.log('')

console.log('App: Launched with the ConcreteCreator2.')
clientCode(new ProductCreatorB())
