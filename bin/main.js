import {Injector} from 'di';
import {Kitchen} from 'lib/kitchen-di/kitchen'
import {MockHeater} from 'lib/kitchen-di/mock_heater';
import {ConsoleReporter} from 'log/reporters/console';
import {Logger} from 'lib/log/reporters/console';
import {IOServer, RuntimeEnv} from 'src/io/server'



export function main(){



//    var injector = new Injector([]);
    var injector = new Injector([MockHeater]);

    var kitchen = injector.get(Kitchen);

    kitchen.makeBreakfast();




};
