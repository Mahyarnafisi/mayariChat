import React from "react";
import Styles from "./HomePage.module.css";
import { Button } from "@nextui-org/react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={Styles.homePage}>
      <div className="mb-6 scale-150">
        <ViewInArOutlinedIcon />
      </div>

      <h1 className="font-bold text-2xl mb-20 font-mono">MayariChat</h1>

      <Card className=" text-white bg-gray-800 w-[26rem] ">
        <CardHeader className="p-4 ">
          <h1 className="font-bold text-xl ">Login:</h1>
        </CardHeader>
        <Divider className="bg-gray-700" />
        <CardBody className="p-4 text-gray-200">
          <p>Only authorized user can login to this app. please login here and enjoy.</p>
        </CardBody>
        <Divider className="bg-gray-700" />
        <CardFooter className="py-4 ">
          <Button
            onClick={() => {
              navigate("../chat");
            }}
            className="w-full text-md font-bold rounded-small"
            color="secondary"
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
