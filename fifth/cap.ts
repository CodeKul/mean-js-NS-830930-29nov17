import { GpsListener } from './gps';

export class Capacitor implements GpsListener {
    private nm: string;
    private st: number;
    type = 'satellite'

    get cpNm() {
        return this.nm;
    }

    set cpNm(nm) {
        this.nm = nm;
    }

    rage(): number {
        return 20;
    }
}