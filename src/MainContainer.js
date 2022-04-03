import axios from "axios";
import React, { useEffect, useState, useLayoutEffect } from "react";
import RightDrawer from "./components/RightDrawer";
import UsersTable from "./components/UsersTable";
import { useDisclosure } from "@chakra-ui/react";
const MainContainer = () => {
  
  const [determinedSideDrawer, setDeterminedSideDrawer] = useState();
  const [selectedUserId, setSelectedUserId] = useState();
  const [profileData, setProfileData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  
  const receiveMessageFromIframe = (msg) => {
    // console.log(msg);
    const { data } = msg;
    // console.log(data);
    if (data?.value?.drawerType && data?.value?.userData) {
      const { drawerType, userData } = data?.value;
      handleSideDrawer(drawerType, userData);
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("message", receiveMessageFromIframe, true);
  }, []);
  useEffect(() => {
    if (!isOpen) {
      setSelectedUserId("");
      setProfileData({});
    }
  }, [isOpen]);
  const handleSideDrawer = (drawerType, data) => {
    onOpen();
    // console.log(drawerType, data, data?.id);
    setDeterminedSideDrawer(drawerType);
    if (data?.id) {
      setSelectedUserId(data.id);
    }
    if (data) {
      setProfileData({ ...data });
    }
  };


  return (
    <div>
      <div className="Table__Container">
        {/* <UsersTable  handleSideDrawer={handleSideDrawer} /> */}
        <iframe
          src="http://globalsignin-iframe.surge.sh"
          // src='http://localhost:3001/'
          title="table"
          style={{ width: "80vw", height: "100vh", margin: "auto" }}
        ></iframe>
      </div>
      <RightDrawer
        {...{
          isOpen,
          onOpen,
          onClose,
          determinedSideDrawer,
          setDeterminedSideDrawer,
          selectedUserId,
          profileData,
        }}
      />
    </div>
  );
};

export default MainContainer;
