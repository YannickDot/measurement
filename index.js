import {Measurement, UnitMass, UnitDuration} from './src'

const weight = Measurement(75.0, UnitMass.kilograms)
const pomodoro = Measurement(25.0, UnitDuration.minutes)

weight.convertTo(UnitMass.pounds)
// =>

pomodoro.convertTo(UnitDuration.days)
// =>

const t0 = Measurement(60.0, UnitDuration.minutes)
const t1 = Measurement(1.0, UnitDuration.hours)

t1.equals(t2)
