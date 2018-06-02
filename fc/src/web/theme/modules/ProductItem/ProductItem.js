import React, { Fragment } from "react";
import ProductPrice from "theme/ui/molecules/ProductPrice";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import Link from "theme/ui/atoms/Typography/Link";
import Media from "theme/ui/organisms/Media";
import "./ProductItem.scss";

const ProductItem = ({ name, prices, sku, imageUrl }) => {
  return (
    <div class="product-item">
      <Link to={`product/${sku}`}>
        <Media
          to={`product/${sku}`}
          media={<img src={createMediaUrlFromPath(imageUrl)} alt={name} />}
          renderDetails={() => (
            <Fragment>
              <Link to={`product/${sku}`} type="reversed">
                {name}
              </Link>
              <ProductPrice prices={prices} />
            </Fragment>
          )}
        />
      </Link>
    </div>
  );
};

export default ProductItem;
