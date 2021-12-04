import React from "react";

function TextHighlight({ text, hIndex, hLength }) {
  /**
   * Return text with highlight markup
   * If there is any known highlight index (i.e. hIndex is a valid positive number)
   */
  if (!Number.isNaN(Number(hIndex)) && hIndex > -1) {
    // Split the text to wrap the middle highlight part in HTML markup
    const hStr = text.slice(hIndex, hIndex + hLength);
    const trailText = text.split(hStr);

    return (
      <span>
        {trailText[0]}
        <mark>{hStr}</mark>
        {trailText[1]}
      </span>
    );
  }

  // Return the raw text
  return <span>{text}</span>;
}

export default TextHighlight;
