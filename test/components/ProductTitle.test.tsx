import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostrar correctamente el componente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title={'Custom Prop'} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
    console.log(wrapper.toJSON());
  });

  test('Debe de mostrar el componente con el nombre del producto.', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1} children={() => <ProductTitle />} />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
