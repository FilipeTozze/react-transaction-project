import React from "react";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";

import {
  Container,
  SignalInfo,
  Signal,
  Name,
  Wifi,
  Date,
  Battery,
  BatteryInfo,
} from "./styles";

function StatusBar({ name, date }) {
  return (
    <Container>
      <SignalInfo>
        <Signal>
          <FaSignal />
        </Signal>
        <Name>{name}</Name>
        <Wifi>
          <FaWifi />
        </Wifi>
      </SignalInfo>

      <Date>{date}</Date>
      <BatteryInfo>
        100% <Battery>
        <FaBatteryFull />
      </Battery>
      </BatteryInfo>
      
    </Container>
  );
}

export default StatusBar;
