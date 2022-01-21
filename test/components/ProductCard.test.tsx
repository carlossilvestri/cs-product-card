import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/products';
const { act } = renderer;

describe('ProductCard', () => {
  test('Debe de mostrar correctamente el componente con el titulo personalizado', () => {
    const wrapper = renderer.create(
    <ProductCard product={product1} children={() => <h1>Product Card</h1>} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1} children={
          ({count, increaseBy}) => (
            <>
              <h1>Product Card</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)} ></button>
            </>
          )} 
        />
      );
      let tree = wrapper.toJSON();
      act(() => {
        (tree as any).children[2].props.onClick();
      })
      tree = wrapper.toJSON();
      expect((tree as any).children[1].children[0]).toBe('1');
  });
  

});
