import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar, Stack, Skeleton } from "@chakra-ui/react";
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
const IndividualPost = ({ userId, onClose,profileData }) => {
  const [loader, setLoader] = useState(true);
  const [isError, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    try {
      if (data) {
        setLoader(false);
        setPosts([...data]);
      }
    } catch (err) {
      setLoader(false);
      setError(true);
      console.dir(err);
    }
  }
  useEffect(() => {
    // console.log(userId)
    if(userId){

      fetchData();
    }
  }, [userId]);
  // console.log(posts);
  if (loader) {
    return (
      <Stack
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <Skeleton height="20px" w={"100%"} />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="280px" />
        <Skeleton height="280px" />
        <Skeleton height="280px" />
      </Stack>
    );
  }
  if(isError){
    <p style={{color:'red',margin:'auto',textAlign:'center'}}>Please refresh the page</p>
  }
  return (
    <>
      <div className="IndividualPost">
        <div className="IndividualPost__Header">
          <div className="IndividualPost__Header__Details">
            <h3>Post</h3>
            <div className="IndividualPost__UserDetails">
              <Avatar name={profileData?.name} />
              <div className="IndividualPost__UserDetails__Username">
               {profileData?.username}
              </div>
            </div>
          </div>
          <div className="IndividualPost__Header__Close">
            <CloseIcon
              onClick={onClose}
              boxSize={"10px"}
              style={{ marginTop: "7px" }}
            />
          </div>
        </div>

        {posts?.map((post, i) => {
          return (
            <div className="IndividualPost__Card" key={`ghgf${i}`}>
              <h4 className="IndividualPost__Card__title">{post.title}</h4>
              <div className="IndividualPost__Card__body">{post.body}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IndividualPost;
