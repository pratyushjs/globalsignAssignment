import React from "react";
import { TYPES_SIDE_DRAWER } from "../utils/constants";

const RightPanel = ({ setDeterminedSideDrawer }) => {
  const changeDrawerType = (type) => {
    
    setDeterminedSideDrawer(type);
  };

  return (
    <div className="RightPanel">
      <div
        className="RightPanel__item"
        onClick={() => changeDrawerType(TYPES_SIDE_DRAWER.PROFILE)}
      >
        Profile
      </div>
      <div
        className="RightPanel__item"
        onClick={() => changeDrawerType(TYPES_SIDE_DRAWER.POST)}
      >
        Post
      </div>
    </div>
  );
};

export default RightPanel;
