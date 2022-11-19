const { Observable } = Rx;
const { tap, share } = RxOperators;  

const observable = new Observable((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)

    // setTimeout(() => {
    //   subscriber.next(4)  
    // }, 500)

}).pipe(
    tap(value => console.log('From tap:', value)),
    share()     // share operator is going turn it into an actual multicast operator
)

observable.subscribe(
    (value) => console.log('Next value', value), 
    (err) => console.error('BAD THING!!!', err.message),
    () => console.log('COMPLETE')
)

observable.subscribe(
    (value) => console.log('From the second subscribe', value)
)

new Observable(() => { })

/*  // Unicast Observables
const { Observable } = Rx;
const { tap } = RxOperators;

const observable = new Observable((subscriber) => {
    // throw the value 1 into our pipeline
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    // marks the observable as complete, no more values will come out
    subscriber.complete()
    // emit an error, no more values come out
    subscriber.error(new Error('jfskdghlfs'))

}).pipe(
    tap(value => console.log('From tap:', value))
)

observable.subscribe(
    (value) => console.log('Next value', value),
    (err) => console.error('BAD THING!!!', err.message),
    () => console.log('COMPLETE')
)

observable.subscribe(
    (value) => console.log('From the second subscribe', value)
)

new Observable(() => {})
*/

/*
const { Observable } = Rx;

const observable = new Observable((subscriber) => {
    // throw the value 1 into our pipeline
    subscriber.next(1)
    // emit an error, no more values come out
    subscriber.error(new Error('jfskdghlfs'))
    // marks the observable as complete, no more values will come out
    subscriber.complete()
})

observable.subscribe({
    next(value) {
        console.log('Got a value', value);
    },
    complete() {
        console.log('Observable is complete. Dont expect any more values');
    },
    error(err) {
        console.log('BAD THING', err.message);
    }
})

// Only here, because this tools requires it
observable;

*/


/*
const { fromEvent } = Rx;
const { map, pluck } = RxOperators;

const input = document.createElement('input')
const container = document.querySelector('.container')
container.appendChild(input)

const observable = fromEvent(input, 'input')
    .pipe(
        // map(event => event.target.value),
        pluck('target', 'value'),
        map(value => parseInt(value)),
        map(value => {
            if (isNaN(value)) {
                throw new Error('You must enter a number')
            }
            return value
        })
)

// Observer - то, что мы передаем в функцию subscribe()
observable.subscribe({
    next(value) {
        console.log(`Your value is ${value}`)
    },
    error(err) {
        console.error('BAD THING HAPPEN', err.message)
    }
})
*/
 

/*
const input = document.querySelector('input')
input.addEventListener('input', (event) => {
    let text = event.target.value
    text = parseInt(text)

    if (isNaN(text)) {
        throw new Error('You must enter a number')
    }

    logValue(text)
})

const logValue = (value) => {
  console.log(`Your value: ${value}`);
}  
*/