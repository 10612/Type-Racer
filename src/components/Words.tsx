import React, { useState } from "react";

interface Props {
  textArray: string[];
}

function Words({textArray}: Props) {
  const textToType = textArray.slice(0, 30).join(" ");

  return <p id="textToType">{textToType}</p>;
}

export default Words;