// @flow
import * as React from 'react'
import ProductsContainer from '../ProductsContainer'
import FieldContainer from '../FieldContainer'
import CartContainer from '../CartContainer'

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
    <hr />
    <FieldContainer />
  </div>
)

export default App
