const TYPE_DURATION = "Duration"

export const UnitDuration = {
  seconds : {coef: 10**0, __unit: 's', __type: TYPE_DURATION, __truncated: true },
  minutes : {coef: 60, __unit: 'min', __type: TYPE_DURATION, __truncated: true},
  hours : {coef: 60*60, __unit: 'h', __type: TYPE_DURATION, __truncated: true},
  days : {coef: 24*60*60, __unit: 'd', __type: TYPE_DURATION, __truncated: true},
}
