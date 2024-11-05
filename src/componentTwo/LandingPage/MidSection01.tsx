import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  // define props here
}

const MidSection01: React.FC<Props> = () => {
  return (
    <div className="bg-white mt-10 text-black">
      <span
        className="text-center mx-auto flex justify-center pt-10 text-2xl"
        style={{ color: "#8383E6" }}
      >
        WHY WISE HASH
      </span>
      <div className="flex px-3 sm:px-0 flex-col md:flex-row gap-4 justify-center mt-10 mb-3 w-11/12 max-w-screen-xl mx-auto">
        <div
          className="md:w-2/5 p-10 pt-14 pb-14 rounded-lg"
          style={{ backgroundColor: "#D8F3DC" }}
        >
          <h1 className="text-2xl">Connect with</h1>
          <h1 className="text-2xl">Transparency</h1>
          <p className="mt-5 font-thin">
            Gain unparalleled visibility into every stage of the supply chain. From production to distribution, Wise Hash ensures transparency and trust through blockchain.
          </p>
        </div>

        <div
          className="md:w-3/5 p-10 pt-14 pb-14 rounded-lg"
          style={{ backgroundColor: "#D7D7FF" }}
        >
          <h1 className="text-2xl">Easily Track and</h1>
          <h1 className="text-2xl">Verify Products</h1>
          <p className="mt-5 font-thin">
            Avoid counterfeits and verify product origins effortlessly. Wise Hash enables real-time tracking and verification of all goods across the supply chain.
          </p>
        </div>
      </div>

      <div className="flex px-3 sm:px-0 md:flex-row flex-col gap-4 justify-center mb-14 w-11/12 max-w-screen-xl mx-auto">
        <div
          className="md:w-3/5 p-10 pt-14 pb-14 rounded-lg"
          style={{ backgroundColor: "#FFF2F1" }}
        >
          <h1 className="text-2xl">Empower Your</h1>
          <h1 className="text-2xl">Supply Chain</h1>
          <p className="mt-5 font-thin">
            Make informed decisions with full visibility. Wise Hash’s blockchain technology provides actionable insights to optimize your supply chain operations.
          </p>
        </div>

        <div
          className="md:w-2/5 p-10 pt-14 pb-14 rounded-lg"
          style={{ backgroundColor: "#F6FFB5" }}
        >
          <h1 className="text-2xl">Operate with</h1>
          <h1 className="text-2xl">Confidence</h1>
          <p className="mt-5 font-thin">
            Ensure quality and compliance at every stage. Wise Hash’s blockchain-backed transparency means you can move forward knowing your standards are met.
          </p>
        </div>
      </div>

      <div className="bg-white flex flex-col py-10 gap-4">
        <div className="w-11/12 max-w-screen-xl mx-auto">
          <span
            className="text-center flex pt-10 text-sm mb-2 md:text-base"
            style={{ color: "#8383E6" }}
          >
            WE GUARANTEE
          </span>
          <div className="flex flex-col font-bold text-4xl">
            <span>Reliable data,</span>
            <span>Real-time visibility</span>
          </div>
          <div className="flex flex-col font-light max-w-2xl my-4">
            All suppliers and products in the Wise Hash system are thoroughly verified and tracked, ensuring a seamless experience and building trust among all stakeholders.
          </div>

          <Link to={"/get-started"}>
            <button
              className="placer-button bg-black py-3 mb-3 mt-2 rounded-lg font-extrabold outline "
              style={{
                width: "220px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              Explore Wise Hash
            </button>
          </Link>

          <div className="flex flex-col sm:flex-row gap-10 mb-14 mt-8">
            <Card
              sx={{ maxWidth: 700, backgroundColor: "black", color: "white" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={require("../../images/image-5.jpg")}
                  alt="Product Transparency"
                />
                <CardContent>
                  <span className="font-bold text-2xl">
                    Agricultural Products
                  </span>
                  <span className="block font-light text-sm mt-3">
                    Verified from farm to table
                  </span>
                  <span>Ensuring quality and trust</span>
                </CardContent>
              </CardActionArea>
              <CardActions className="">
                <Link to={"/login"}>
                  <button
                    className="ml-2 placer-button bg-white py-3 mb-3 rounded-lg font-extrabold outline "
                    style={{ width: "115px", color: "black" }}
                  >
                    Learn more
                  </button>
                </Link>
              </CardActions>
            </Card>
            <Card
              sx={{ maxWidth: 700, backgroundColor: "black", color: "white" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={require("../../images/image-4.jpg")}
                  alt="Pharmaceutical Tracking"
                />
                <CardContent>
                  <span className="font-bold text-2xl block">
                    Pharmaceuticals
                  </span>
                  <span className="block font-light text-sm mt-3">
                    Safety through transparency
                  </span>
                  <span>End-to-end product tracking</span>
                </CardContent>
              </CardActionArea>
              <CardActions className="">
                <Link to={"/login"}>
                  <button
                    className="ml-2 placer-button bg-white py-3 mb-3 rounded-lg font-extrabold outline "
                    style={{ width: "115px", color: "black" }}
                  >
                    Learn more
                  </button>
                </Link>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSection01;
