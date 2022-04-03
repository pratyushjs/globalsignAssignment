import axios from "axios";
import React, { useLayoutEffect } from "react";
import { Input, FormLabel, Stack, Avatar } from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
let post = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
];
const IndividualProfile = ({
  userId,
  onClose,
  setDeterminedSideDrawer,
  profileData,
}) => {
  const address =
    profileData?.address?.street +
    ", " +
    profileData?.address?.city +
    ", " +
    profileData?.address?.suite +
    ", " +
    profileData?.address?.zipcode;
  return (
    <>
      <div className="IndividualProfile">
        <div className="IndividualProfile__Header">
          <div className="IndividualProfile__Header__Title">
            <h3>Profile</h3>
            <CloseIcon
              onClick={onClose}
              boxSize={"10px"}
              style={{ marginTop: "7px" }}
            />
          </div>
          <div className="IndividualProfile__UserDetails">
            <Avatar name={profileData.name} />
            {/* <div className="IndividualProfile__UserDetails__Avatar">AW</div> */}
            <div className="IndividualProfile__UserDetails__Username">
             {profileData.username} 
            </div>
            <div className="IndividualProfile__UserDetails__Name">
             {profileData.name} 
            </div>
          </div>
        </div>
        <Stack spacing={5} padding={"10px 15px"}>
          <FormLabel htmlFor="email" style={{ margin: "0 0 0 0" }}>
            Email <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            placeholder="default placeholder"
            id="email"
            type="email"
            isDisabled
            style={{ margin: "0 0 10px 0" }}
            value={profileData?.email}
          />
          <FormLabel htmlFor="address" style={{ margin: "0 0 0 0" }}>
            Address
          </FormLabel>
          <Input
            placeholder="default placeholder"
            id="address"
            type="text"
            isDisabled
            style={{ margin: "0 0 10px 0" }}
            value={address}
          />
          <FormLabel htmlFor="mobile" style={{ margin: "0 0 0 0" }}>
            Phone
          </FormLabel>
          <Input
            placeholder="default placeholder"
            id="mobile"
            type="text"
            isDisabled
            style={{ margin: "0 0 10px 0" }}
            value={profileData?.phone}
          />
          <FormLabel htmlFor="website" style={{ margin: "0 0 0 0" }}>
            Website
          </FormLabel>
          <Input
            placeholder="default placeholder"
            id="website"
            type="text"
            isDisabled
            style={{ margin: "0 0 10px 0" }}
            value={profileData?.website}
          />
          <FormLabel htmlFor="email" style={{ margin: "0 0 0 0" }}>
            Company Name
          </FormLabel>
          <Input
            placeholder="default placeholder"
            id="companyname"
            type="text"
            isDisabled
            style={{ margin: "0 0 10px 0" }}
            value={profileData?.company?.name}
          />
        </Stack>
      </div>
    </>
  );
};

export default IndividualProfile;
