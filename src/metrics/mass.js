// @flow
const TYPE_MASS = "Mass"

export const UnitMass = {
  milligrams : {coef: 10**-3, __unit: 'mg', __type: TYPE_MASS },
  grams : {coef: 10**0, __unit: 'g', __type: TYPE_MASS },
  kilograms : {coef: 10**3, __unit: 'kg', __type: TYPE_MASS},
  tons : {coef: 10**6, __unit: 't', __type: TYPE_MASS},
  pounds : {coef: 453.592, __unit: 'lbs', __type: TYPE_MASS},
  ounces : {coef: 28.3495, __unit: 'lbs', __type: TYPE_MASS},
  stone : {coef: 6350.29, __unit: 'st', __type: TYPE_MASS}
}
