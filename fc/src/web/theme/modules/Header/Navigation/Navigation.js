import React from "react";

import EnhanceNavigation from "./EnhanceNavigation";
import NavigationQuery from "./NavigationQuery.gql";

import { CartModal } from "../../Cart";
import Button from "theme/ui/atoms/Button";
import IconWithLabel from "theme/ui/molecules/IconWithLabel";

const Navigation = ({ categories }) => {
  return (
    <nav>
      {categories && categories.map(category => category.name)}
      <CartModal>
        {openCart => (
          <Button type="invisible" onClick={openCart}>
            <IconWithLabel icon="cart">Cart</IconWithLabel>
          </Button>
        )}
      </CartModal>
    </nav>
  );
};

export default EnhanceNavigation({ NavigationQuery })(Navigation);
