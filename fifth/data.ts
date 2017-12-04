import { GpsListener } from './gps';
import { Capacitor } from './cap';
import {
    Device,
    PI
} from './cls';

PI

let dv: Device = new Device()
dv.mnf(`IN`)
dv.mnf()
dv.addCaps({ csNm: true })
dv.addCaps({ csDt: {
    prog : `ts`,
    unt : `codekul`
} })

let cp = new Capacitor()
cp.cpNm = `codekul`

dv.newCap(cp)
dv.otherResi(1,2,3,5,9)
dv.otherResi()
dv.otherResi(1)

let gpLs : GpsListener = new Capacitor()

let gpLs1 : GpsListener = {
    type : 'network',
    rage : () => 50
}

let myObj : any = {
    type : '',
    rage : () => 50
}

gpLs1 = myObj

dv.capGps( gpLs )
dv.capGps( gpLs1 )
dv.capGps( {
    type : 'nor',
    rage : () => 50
})