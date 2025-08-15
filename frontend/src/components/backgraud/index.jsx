import { Video } from "./styles";
import meuVideo from "../../assets/novo2.mp4";

function TopBackgraud() {
  return (
    <Video autoPlay loop muted>
      <source src={meuVideo} type="video/mp4" />
    </Video>
  );
}

export default TopBackgraud;
