import React from "react";
import axios from "axios";

export default class Image extends React.Component {
  // state = {
  //     images: [
  //       {
  //         date: "2022-07-24",
  //         explanation:
  //           "Many details of Saturn appear clearly in infrared light.  Bands of clouds show great structure, including long stretching storms.  Also quite striking in infrared is the unusual hexagonal cloud pattern surrounding Saturn's North Pole.  Each side of the dark hexagon spans roughly the width of our Earth. The hexagon's existence was not predicted, and its origin and likely stability remains a topic of research.  Saturn's famous rings circle the planet and cast shadows below the equator. The featured image was taken by the robotic Cassini spacecraft in 2014 in several infrared colors.  In 2017 September, the Cassini mission was brought to a dramatic conclusion when the spacecraft was  directed to dive into ringed giant.    Explore Your Universe: Random APOD Generator",
  //         hdurl:
  //           "https://apod.nasa.gov/apod/image/2207/SaturnIR_CassiniKakitsev_1024.jpg",
  //         media_type: "image",
  //         service_version: "v1",
  //         title: "Saturn in Infrared from Cassini",
  //         url: "https://apod.nasa.gov/apod/image/2207/SaturnIR_CassiniKakitsev_960.jpg",
  //       },
  //     ],
  //   };

  state = { images: [{hdurl: "loading_gif.gif", explanation:"Loading gif"}] };

  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=j1olzkeVhqrJ9bVs8YFXdzvDA9UHra1gby38KhLR&count=1`
      )
      .then((res) => {
        const data = res.data;
        this.setState({ images: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { images } = this.state;
    return (
      <div className="flex items-center justify w-screen max-w-screen h-screen max-h-screen">
        <div className="flex items-center justify-center w-screen h-screen max-h-screen max-w-screen m-15 p-15">
          <p>
            <img
              className="p-14 w-auto h-auto max-h-screen text-white"
              src={images[0].hdurl}
              alt={images[0].explanation}
            ></img>
          </p>
        </div>
        <div className="flex items-center justify-center w-screen">
          <button
            type="button"
            className=" bg-slate-400 text-white text-7xl leading-20 font-normal py-5 px-5 rounded-lg"
            onClick={() => window.location.reload(false)}
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }
}
