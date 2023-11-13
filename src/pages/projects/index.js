import Image from "next/image";
import Nav from "../components/nav";
import Footer from "../components/footer";
import BraveBlossomsCard from "./projectCards/bravebrossoms";
import ChiscordCard from "./projectCards/chiscord";
import PartyBuddy from "./projectCards/partybuddy";
import WeatherAppCard from "./projectCards/weatherAppCard";
import Styles from "../../styles/projects/projectTop.module.scss";

export default function Main() {
  return (
    <>
      <Nav tempActive="topnav-home" />
      <main className={Styles.projectTop}>
        <WeatherAppCard />
        <PartyBuddy />
        <ChiscordCard />
        <BraveBlossomsCard />
      </main>
      <Footer />
    </>
  );
}
