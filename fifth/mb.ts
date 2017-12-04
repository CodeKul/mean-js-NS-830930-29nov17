import { Capacitor } from './cap';
import { Device } from './cls';
export class Mobile extends Device {

    constructor() {
        super(100)
    }

    newCap(cp : Capacitor) {
        super.newCap(cp)    
    }
}