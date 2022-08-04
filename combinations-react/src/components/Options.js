import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Options() {

/*     const buttonComb = document.getElementById('button-comb');

    buttonComb.addEventListener('click', () => {
    alert('holaa!');
    buttonComb.style.color = "red";
  }); */


  return (
    <>
    <div className="options">
        <NavLink to='/combination' exact><button id="button-comb">Combination</button></NavLink>
        <NavLink to='/permutation' exact><button>Permutation</button></NavLink>
        <NavLink to='variation' exact><button>Variation</button></NavLink>
    </div>
    </>
  )
}
