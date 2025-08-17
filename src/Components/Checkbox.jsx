import React from 'react'
export function Checkbox(props) {
  return (
    <>
<div class="form-check">
  <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
  <label className="form-check-label" htmlFor="checkDefault">
    Default checkbox
  </label>
</div>
</>
  )
}
export default Checkbox