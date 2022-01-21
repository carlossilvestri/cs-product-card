# cs-product-card package
## Author:  Carlos Silvestri


## Ejemplo para usarlo:
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "cs-product-card";
```
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
```
