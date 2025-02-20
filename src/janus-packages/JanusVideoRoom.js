import React, { useRef, useState, useEffect } from 'react';
import Janus from '../utils/janus';

const JanusVideoRoom = ({ children, janus, roomId }) => {
    useEffect(() => {
        if(janus){
            
        }
    }, [janus])
    return (
        <div className="janus-video-room">
        {Array.isArray(children) && children.length > 0 ? (
          children
            .filter(Boolean) // ✅ Remove falsy values like null, undefined, false
            .map((child, i) => child ? React.cloneElement(child, { janus, key: i }) : null)
        ) : (
          children ? React.cloneElement(children, { janus }) : null
        )}
      </div>
    );
}

export default JanusVideoRoom