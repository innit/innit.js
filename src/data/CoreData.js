import {Inject} from '../di/index'
import {Test} from './test'

@Inject(Test)
export class CoreData {

    constructor(test){
        console.log(test)
    }

    readConfig(){
       // console.log(this.config || 'Nada');
    }


}

export var _moc = new CoreData('$moc');