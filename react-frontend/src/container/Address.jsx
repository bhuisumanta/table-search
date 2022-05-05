import React, { Profiler } from "react";
import TextHighlight from "../common/TextHighlight";

function Address({ data, schema, qLength }) {
  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    // Aggregate or log render timings...
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
  }
  return (
    <>
    <Profiler id="Navigation" onRender={onRenderCallback}>
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
      </Profiler>
    </>
  );
}

export default Address;
