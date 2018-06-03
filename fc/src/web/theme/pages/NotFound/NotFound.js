import React from "react";
import { H1 } from "theme/ui/atoms/Typography/Heading";
import Paragraph from "theme/ui/atoms/Typography/Paragraph";
import Link from "theme/ui/atoms/Typography/Link";
import "./NotFound.scss";

export default () => (
  <div className="not-found">
    <H1>Oops! We have not found what you wanted</H1>
    <Paragraph>Houston, we have a code 404…</Paragraph>

    <Paragraph>
      Bring me <Link to="/">back to the safety zone</Link>
    </Paragraph>
  </div>
);
