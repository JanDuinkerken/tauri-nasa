import React from "react";
import axios from "axios";

export default class Image extends React.Component {
  //   state = {
  //       images: [
  //         {
  //           date: "2022-07-24",
  //           explanation:
  //             "Many details of Saturn appear clearly in infrared light.  Bands of clouds show great structure, including long stretching storms.  Also quite striking in infrared is the unusual hexagonal cloud pattern surrounding Saturn's North Pole.  Each side of the dark hexagon spans roughly the width of our Earth. The hexagon's existence was not predicted, and its origin and likely stability remains a topic of research.  Saturn's famous rings circle the planet and cast shadows below the equator. The featured image was taken by the robotic Cassini spacecraft in 2014 in several infrared colors.  In 2017 September, the Cassini mission was brought to a dramatic conclusion when the spacecraft was  directed to dive into ringed giant.    Explore Your Universe: Random APOD Generator",
  //           hdurl:
  //             "https://apod.nasa.gov/apod/image/2207/SaturnIR_CassiniKakitsev_1024.jpg",
  //           media_type: "image",
  //           service_version: "v1",
  //           title: "Saturn in Infrared from Cassini",
  //           url: "https://apod.nasa.gov/apod/image/2207/SaturnIR_CassiniKakitsev_960.jpg",
  //         },
  //       ],
  //     };

  state = { images: [] };

  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=j1olzkeVhqrJ9bVs8YFXdzvDA9UHra1gby38KhLR&count=1`
      )
      .then((res) => {
        const data = res.data;
        this.setState({images: data});
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render_images() {
    const { images } = this.state;
    return images.map((image) => (
      <p key={image.date}>
        <img className="w-80" src={image.hdurl} alt={image.explanation}></img>
      </p>
    ));
  }

  render() {
    return <div>{this.render_images()}</div>;
  }
}
