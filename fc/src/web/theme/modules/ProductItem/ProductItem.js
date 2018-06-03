import React, { Fragment } from "react";
import ProductPrice from "theme/ui/molecules/ProductPrice";
import createMediaUrlFromPath from "../../../utils/createMediaUrlFromPath";
import Link from "theme/ui/atoms/Typography/Link";
import Media from "theme/ui/organisms/Media";
import "./ProductItem.scss";

const ProductItem = ({ name, prices, sku, imageUrl }) => {
  return (
    <div className="product-item">
      <Media
        to={`product/${sku}`}
        media={<img src={createMediaUrlFromPath(imageUrl)} alt={name} />}
        renderDetails={() => (
          <Fragment>
            <Link to={`product/${sku}`} type="reversed">
              <span className="product-item__details">{name}</span>
            </Link>
            <ProductPrice prices={prices} />
          </Fragment>
        )}
      />
    </div>
  );
};

export default ProductItem;
