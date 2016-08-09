import {Measurement, UnitMass, UnitDuration} from './src'

const weightKilograms = Measurement(75.0, UnitMass.kilograms)
const pomodoroMinutes = Measurement(25.0, UnitDuration.minutes)

const weightPounds = weightKilograms.convertTo(UnitMass.pounds)
weightPounds.toString()
// => 165.34683151378331lbs
console.log(weightPounds.toString());

const pomodoroDays =  pomodoroMinutes.convertTo(UnitDuration.seconds)
pomodoroDays.toString()
// => 1500s
console.log(pomodoroDays.toString())

const t0 = Measurement(60.0, UnitDuration.minutes)
const t1 = Measurement(1.0, UnitDuration.hours)

console.log(t1.equals(t0));
t1.equals(t0)
// => true
