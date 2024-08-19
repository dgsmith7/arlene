import { useState } from "react";
import Accordion from "./Accordion";
import ObjectivesData from "./ObjectivesData";
import ConstraintsData from "./ConstraintsData";
import KnownData from "./KnownData";
import TypeOptimizationData from "./TypeOptimizationData";
import AdditionalQuestionsData from "./AdditionalQuestionsData";
import DesiredSolutionData from "./DesiredSolutionData";
import GeneralInfoData from "./GeneralInfoData";
import NameData from "./NameData";

// eslint-disable-next-line react/prop-types
const OrgData = ({ onQueryChange }) => {
  const [accordions, setAccordion] = useState([
    {
      key: 0,
      title: "Name",
      data: <NameData />,
      isOpen: false,
    },
    {
      key: 1,
      title: "Objectives",
      data: <ObjectivesData />,
      isOpen: false,
    },
    {
      key: 2,
      title: "Constraints",
      data: <ConstraintsData />,
      isOpen: false,
    },
    {
      key: 3,
      title: "Known Relevant Data",
      data: <KnownData />,
      isOpen: false,
    },
    {
      key: 4,
      title: "Type of Optimization Request",
      data: <TypeOptimizationData />,
      isOpen: false,
    },
    {
      key: 5,
      title: "Additional Questions",
      data: <AdditionalQuestionsData />,
      isOpen: false,
    },
    {
      key: 6,
      title: "Desired Solution",
      data: <DesiredSolutionData />,
      isOpen: false,
    },
    {
      key: 7,
      title: "General Information",
      data: <GeneralInfoData />,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: accord.isOpen };
      }
    });
    setAccordion(updatedAccordions);
  };

  return (
    <div>
      <div className="p-5 mt-3 m-5 pb-10 shadow-lg">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default OrgData;
