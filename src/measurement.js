class Measurement {
  constructor(value, unit) {
    this.value = unit.__truncated ? Math.trunc(value) : value
    this.unit = unit
  }

  convertTo(unit) {
    if(this.unit.__type !== unit.__type) {
      throw new Error(`A ${this.unit.__type} cannot be converted to a ${unit.__type}`)
    }
    let newValue = this.value * this.unit.coef / unit.coef
    return new Measurement(newValue, unit)
  }

  toString() {
    return `${this.value}${this.unit.__unit}`
  }

  [Symbol.toPrimitive](hint) {
      if (hint === 'string') {
          return `${this.value}${this.unit.__unit}`
      } else if (hint === 'number') {
          return this.value
      } else {
          return this.value
      }
  }

  equals(otherMeasurement) {
    return (
      otherMeasurement.value * otherMeasurement.unit.coef ===
      this.value * this.unit.coef
    )
  }
}

export function exposeFactory(...args) {
  return new Measurement(...args)
}

// const TYPE_TEMPERATURE = "Temperature"
// export const UnitTemperature = {
//   celcius : {coef: 10**0, __unit: '°C', __type: TYPE_TEMPERATURE },
//   fahrenheit : {coef: 60, __unit: '°F', __type: TYPE_TEMPERATURE },
//   kelvin : {coef: 60*60, __unit: '°K', __type: TYPE_TEMPERATURE },
// }
