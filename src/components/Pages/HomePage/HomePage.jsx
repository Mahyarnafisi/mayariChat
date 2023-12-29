import React from "react";
import Styles from "./HomePage.module.css";
import { Button } from "@nextui-org/react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={Styles.homePage}>
      <h2 className="font-bold">Welcome to</h2>
      <h1 className="font-bold text-2xl mb-4">MayariChat</h1>

      <Card className=" text-white bg-gray-800 w-[26rem]  ">
        <CardHeader className="p-4 ">
          <h1 className="font-bold text-xl ">Login:</h1>
        </CardHeader>
        <Divider className="bg-gray-700" />
        <CardBody className="p-4">
          <p>Only authorized user can login to this app. please login here and enjoy.</p>
        </CardBody>
        <Divider className="bg-gray-700" />
        <CardFooter className="p-4">
          <Button
            onClick={() => {
              navigate("../chat");
            }}
            className="w-full text-md font-bold "
            color="primary"
            variant="solid"
            endContent={<ArrowForwardIosRoundedIcon />}
          >
            Login here
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default HomePage;
