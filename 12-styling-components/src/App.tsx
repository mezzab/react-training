import React from "react";

import "./style.css";

import VisitingCard from "./components/withGlobalStyleSheet/VisitingCard";
import InfoCard from "./components/withCssModules/InfoCard";
import GreetingCard from "./components/withInlineStyles/GreetingCard";
import WelcomeCard from "./components/withStyledComponents/WelcomeCard";

const App = () => {
  return (
    <div className="container">
      {/* Card using Global Style Sheet */}
      <VisitingCard name="Lionel" email="leo@messi.com" phone="1231231231" />
      {/* Card using CSS Modules */}
      <InfoCard name="Julian" email="spider@mail.com" phone="1234567890" />
      {/* Card using inline styles */}
      <GreetingCard name="Cristian" email="cromero@company.com" phone="9898989898" />
      {/* Card using styled-components */}
      <WelcomeCard name="Rodrigo" email="rodri@company.com" phone="8597863255" />
    </div>
  );
};

export default App;


