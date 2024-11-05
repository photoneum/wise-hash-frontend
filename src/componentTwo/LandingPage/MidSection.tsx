import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  // define props here
}

const MidSection: React.FC<Props> = () => {
  const [carUser, setCarUser] = useState(false);

  const handleCarUser = () => {
    setCarUser(!carUser);
  };

  return (
    <div className="bg-white text-black pt-20 pb-10">
      <div className="md:flex items-center justify-between w-11/12 2xl:w-10/12 max-w-screen-xl mx-auto">
        <div className="text-center md:text-left">
          <span
            style={{ color: "#8383E6" }}
            className="text-center text-sm md:text-base"
          >
            OUR PRODUCTS
          </span>
          <h2 className="font-bold text-3xl lg:text-4xl">
            Building Trust, One Block at a Time
          </h2>
        </div>
        <div className="flex items-center max-w-xs mx-auto md:mx-0 bg-[#F3F3F3] p-1 rounded-lg mt-10 md:mt-0">
          <button
            onClick={handleCarUser}
            className={`placer-button rounded-lg font-bold text-sm py-2.5 ${
              carUser ? "car-user-active" : "car-user-inactive"
            }`}
          >
            Producers
          </button>
          <button
            onClick={handleCarUser}
            className={`placer-button rounded-lg font-bold outline-none text-sm py-2.5 ${
              !carUser ? "car-user-active" : "car-user-inactive"
            }`}
          >
            End Consumers
          </button>
        </div>
      </div>

      <div className="flex gap-10 mx-auto max-w-screen-xl mt-10">
        {carUser ? (
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Card
              sx={{ maxWidth: 700, backgroundColor: "black", color: "white" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={require("../../images/image-1.jpg")}
                  alt="Blockchain Marketplace"
                />
                <CardContent style={{ position: "relative", bottom: "30px" }}>
                  <img
                    style={{ backgroundColor: "#E5FFEE" }}
                    src={require("../../asset/images/blackCarIcon.png")}
                    alt="Blockchain Icon"
                    className="p-5 rounded-lg mb-4"
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    Transparent Marketplace
                  </Typography>
                  <Typography variant="body2">
                    Wise Hash offers a secure and transparent marketplace that tracks goods from producers to end consumers using blockchain. Every step, from manufacturing to delivery, is verified to ensure authenticity and reliability.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="relative bottom-5">
                <Link
                  to={"/login"}
                  className="ml-3 "
                  style={{ color: "#DEFA0F" }}
                >
                  Learn more
                </Link>
              </CardActions>
            </Card>
            <Card
              sx={{ maxWidth: 700, backgroundColor: "black", color: "white" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={require("../../images/image-2.jpg")}
                  alt="Customer Service Icon"
                />
                <CardContent>
                  <img
                    style={{ backgroundColor: "#D6D6FF" }}
                    src={require("../../asset/images/Ellipse 124.png")}
                    alt="Service Icon"
                    className="p-4 rounded-lg mb-4"
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    Dedicated Support
                  </Typography>
                  <Typography variant="body2">
                    Our team is available to guide and assist throughout the entire supply chain process. We provide support for producers using our system, from initial setup to ongoing logistics.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to={"/login"}
                  className="ml-3 mb-5"
                  style={{ color: "#DEFA0F" }}
                >
                  Learn more
                </Link>
              </CardActions>
            </Card>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <Card
              sx={{ maxWidth: 700, backgroundColor: "black", color: "white" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={require("../../asset/images/guyThumbsUp.png")}
                  alt="End Consumers Verification"
                />
                <CardContent>
                  <img
                    style={{ backgroundColor: "#E5FFEE" }}
                    src={require("../../asset/images/greencheck.png")}
                    alt="Verification Icon"
                    className="p-5 rounded-lg mb-4"
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    Verified Sources
                  </Typography>
                  <Typography variant="body2">
                    Every product on Wise Hash is verified, ensuring consumers receive goods with full traceability back to the source. This helps build trust, giving consumers confidence in product origins and quality.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="relative bottom-5">
                <Link
                  to={"/login"}
                  className="ml-3 "
                  style={{ color: "#DEFA0F" }}
                >
                  Learn more
                </Link>
              </CardActions>
            </Card>
            <Card
              sx={{ maxWidth: 700, backgroundColor: "black", color: "white" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={require("../../images/image-3.jpg")}
                  alt="Quality Assurance"
                />
                <CardContent>
                  <img
                    style={{ backgroundColor: "#FDF0D5" }}
                    src={require("../../asset/images/yellow ellipse.png")}
                    alt="Assurance Icon"
                    className="p-4 rounded-lg mb-4"
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    Quality Assurance
                  </Typography>
                  <Typography variant="body2">
                    At Wise Hash, we ensure all products meet high-quality standards through verified inspections and blockchain-based records, giving end consumers peace of mind.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to={"/login"}
                  className="ml-3 mb-5"
                  style={{ color: "#DEFA0F" }}
                >
                  Learn more
                </Link>
              </CardActions>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default MidSection;
