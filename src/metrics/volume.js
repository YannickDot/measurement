// @flow
const TYPE_VOLUME = "Volume"

export const UnitVolume = {
  milliliters : {coef: 10**0, __unit: 'mL', __type: TYPE_VOLUME },
  liters : {coef: 10**3, __unit: 'L', __type: TYPE_VOLUME}
}
