import {expect} from 'chai';
import {Measurement, UnitMass, UnitDuration, UnitVolume} from '../src/index.js'

describe('#measurement', function() {
    it('should create a mesurement object', function() {
        const weight = new Measurement(75.0, UnitMass.kilograms)
        expect(weight.toString()).to.equal('75kg');
    });

    it('should convert kilograms to pounds', function() {
        const weightInKg = new Measurement(75.0, UnitMass.kilograms)
        const weightInPounds = weightInKg.convertTo(UnitMass.pounds)
        expect(weightInPounds.toString()).to.equal('165.34683151378331lbs');
    });

    it('should assess if 60min equals to 1h', function() {
        const t0 = new Measurement(60.0, UnitDuration.minutes)
        const t1 = new Measurement(1.0, UnitDuration.hours)
        expect(t0.equals(t1)).to.equal(true);
    });
});
