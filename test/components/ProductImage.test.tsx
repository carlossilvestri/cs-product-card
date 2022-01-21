import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostrar correctamente el componente con la imagen personalizada', () => {
    const wrapper = renderer.create(
    <ProductImage img="https://hola.jpg" />
    
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  xtest('Debe de mostrar el componente con el nombre de la imagen del producto.', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2} children={() => <ProductImage />} />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
