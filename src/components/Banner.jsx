import bannerBackgroundImage from "../assets/banner.png";
import { Button, Carousel } from "antd";
export default function Banner() {
  const bannerSliderOneStyle = {
    height: "560px",
    color: "#fff",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${bannerBackgroundImage})`,
  };
  const bannerSliderTwoStyle = {
    height: "560px",
    color: "#fff",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url("https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=600")`,
  };

  const bannerSliderThreeStyle = {
    height: "560px",
    color: "#fff",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url("https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600")`,
  };
  return (
    <Carousel autoplay speed={1500} dotPosition="top">
      <div>
        <div
          style={bannerSliderOneStyle}
          className="flex justify-center items-center"
        >
          <div className="text-center space-y-3">
            <h1 className="font-rancho text-5xl">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="font-raleway">
              It&rsquo;s coffee time - Sip & Savor - Relaxation in every sip!
              Get the nostalgia back!! Your companion of every moment!!! <br />
              Enjoy the beautiful moments and make them memorable.
            </p>
            <a href="#products">
              <Button
                type="primary"
                className="rounded-none font-raleway bg-primary text-white"
              >
                EXPLORE NOW
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          style={bannerSliderTwoStyle}
          className="flex justify-center items-center"
        >
          <div className="text-center space-y-3">
            <h1 className="font-rancho text-5xl">
              let&rsquo;s have a coffee expand your time deliciously.
            </h1>
            <p className="font-raleway">
              It&rsquo;s coffee time - Sip & Savor - Relaxation in every sip!
              Get the nostalgia back!! Your companion of every moment!!! <br />
              Enjoy the beautiful moments and make them memorable.
            </p>
            <a href="#products">
              <Button
                type="primary"
                className="rounded-none font-raleway bg-primary text-white"
              >
                EXPLORE NOW
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          style={bannerSliderThreeStyle}
          className="flex justify-center items-center"
        >
          <div className="text-center space-y-3">
            <h1 className="font-rancho text-5xl">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="font-raleway">
              It&rsquo;s coffee time - Sip & Savor - Relaxation in every sip!
              Get the nostalgia back!! Your companion of every moment!!! <br />
              Enjoy the beautiful moments and make them memorable.
            </p>
            <a href="#products">
              <Button
                type="primary"
                className="rounded-none font-raleway bg-primary text-white"
              >
                EXPLORE NOW
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
