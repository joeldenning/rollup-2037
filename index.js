/* this import works with webpack even though rxjs does the following:
 * module.exports = {Observable: ...}
 *
 * See https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js#L12376-L12380 for more details.
 */
import {Observable} from 'rx'

Observable
  .just('hi')
  .subscribe(val => {
    console.log('val', val)
  })
