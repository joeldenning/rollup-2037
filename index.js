import rx from 'rx'

rx.Observable
  .just('hi')
  .subscribe(val => {
    console.log('val', val)
  })
