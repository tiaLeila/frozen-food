import React from 'react';

const Emoji = ({ symbol, label, className, style }) => (
    <span
        className={className}
        role="img"
        aria-label={ label ? label : "" }
        aria-hidden={ label ? "false" : "true" }
        style={style}
    >
        {symbol}
    </span>
);
export default Emoji;