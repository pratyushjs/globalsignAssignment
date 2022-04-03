import React, { useLayoutEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { TYPES_SIDE_DRAWER } from "../utils/constants";
import IndividualPost from "./IndividualPost";
import IndividualProfile from "./IndividualProfile";
import RightPanel from "./RightPanel";
const RightDrawer = ({
  isOpen,
  onOpen,
  onClose,
  selectedUserId,
  determinedSideDrawer,
  setDeterminedSideDrawer,
  profileData
}) => {
  useLayoutEffect(() => {
    if (determinedSideDrawer === TYPES_SIDE_DRAWER.POST) {
    } else if (determinedSideDrawer === TYPES_SIDE_DRAWER.PROFILE) {
    }
  }, []);
  const btnRef = React.useRef();

  const determineType = () => {
    if (determinedSideDrawer === TYPES_SIDE_DRAWER.POST) {
      return (
        <IndividualPost
          onClose={onClose}
          setDeterminedSideDrawer={setDeterminedSideDrawer}
          userId={selectedUserId}
          profileData={profileData}
        />
      );
    }
    if (determinedSideDrawer === TYPES_SIDE_DRAWER.PROFILE) {
      return (
        <IndividualProfile
          onClose={onClose}
          setDeterminedSideDrawer={setDeterminedSideDrawer}
          profileData={profileData}
        />
      );
    }
  };
  // console.log(selectedUserId)
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        id={'rightDrawer'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody style={{display:'flex'}}>
            {determineType()}
            <RightPanel setDeterminedSideDrawer={setDeterminedSideDrawer} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default RightDrawer;
