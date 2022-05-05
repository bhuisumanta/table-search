import React from "react";
import TextHighlight from "../common/TextHighlight";

function Address({ data, schema, qLength }) {
  return (
    <>
      <div>
        <small className="text-secondary">
          <strong>lat</strong>:{" "}
          <TextHighlight
            text={data?.geo?.lat}
            hIndex={schema?.geo?.lat}
            hLength={qLength}
          />
        </small>
      </div>
      <div>
        <small className="text-secondary">
          <strong>lng</strong>:{" "}
          <TextHighlight
            text={data?.geo?.lng}
            hIndex={schema?.geo?.lng}
            hLength={qLength}
          />
        </small>
      </div>
    </>
  );
}

export default Address;
