import React from "react";
import TextHighlight from "../common/TextHighlight";

function Company({ data, schema, qLength }) {
  return (
    <>
      <p>
        <TextHighlight
          text={data.name}
          hIndex={schema?.name}
          hLength={qLength}
        />
      </p>
      <div>
        <small className="text-secondary">
          <strong>Phrase</strong>:{" "}
          <TextHighlight
            text={data.catchPhrase}
            hIndex={schema?.catchPhrase}
            hLength={qLength}
          />
        </small>
      </div>
      <div>
        <small className="text-secondary">
          <strong>BS</strong>:{" "}
          <TextHighlight text={data.bs} hIndex={schema?.bs} hLength={qLength} />
        </small>
      </div>
    </>
  );
}

export default Company;
