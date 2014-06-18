import {Injector} from 'di/index';
import {Kitchen} from './kitchen';
import {MockHeater} from './mock_heater';


function main() {
  var injector = new Injector([MockHeater]);
  var kitchen = injector.get(Kitchen);

  kitchen.makeBreakfast();
}

main();


