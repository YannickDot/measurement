# Measurement

<!--
[![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11] -->

📏  -  A nice measurement API for JavaScript (inspired from the new Foundation framework in Swift 3)


### Features
- works with any framework
- built for speed
- no deps!
- immutable by design

### Installation
```sh
$ npm install measurement-js --save
```

## Usage
```js
import {Measurement, UnitMass, UnitDuration} from 'measurement'

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
```

## API
### myWeight = Measurement(value, unit)
Initialize a new measurement object named 'myWeight' with a Unit and a Value.

### myWeight.convertTo(newUnit)
Creates a new measurment object whose value is the value of myWeight in myWeight's unit converted to the new unit passed as parameter

### volumeOne.equals(volumeTwo)
Compares two measurements that represent the same type of metric (eg. Mass, Volume, Duration, etc.)


## Supported metrics
* Mass (as `UnitMass`)
* Volume (as `UnitVolume`)
* Duration (as `UnitDuration`)


## Tests
```sh
$ npm test
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
