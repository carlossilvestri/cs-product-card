import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  // img: "./coffee-mug.png",
};
const App = () => {
  return (
    <>
       <ProductCard
          product={product}
          initialValues={{
            count: 6,
            maxCount: 11,
          }}
        >
          {(args) => (
            <>
              <ProductImage
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle
                title={"Cafe personalizado"}
              />
              <ProductButtons />
              {/* <button onClick={reset}>Reset</button> */}
              <button onClick={args.reset}>Reset</button>
              <button onClick={() => args.increaseBy(-2)}>-2</button>
              {
                ( !args.isMaxCountReached && <button onClick={() => args.increaseBy(2)}>+2</button> )
              }
            </>
          )}
        </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
