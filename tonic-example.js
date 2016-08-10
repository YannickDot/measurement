const {Measurement, UnitMass, UnitDuration} = require("measurement-js")

const weightKilograms = Measurement(75.0, UnitMass.kilograms)
const pomodoroMinutes = Measurement(25.0, UnitDuration.minutes)

weightKilograms.toString()
// => 75kg

const weightPounds = weightKilograms.convertTo(UnitMass.pounds)
weightPounds.toString()
// => 165.34683151378331lbs


pomodoroMinutes.toString()
// => 25min

const pomodoroSeconds = pomodoroMinutes.convertTo(UnitDuration.seconds)
pomodoroSeconds.toString()
// => 1500s


const t0 = Measurement(60.0, UnitDuration.minutes)
const t1 = Measurement(1.0, UnitDuration.hours)

t1.equals(t0)
// => true
