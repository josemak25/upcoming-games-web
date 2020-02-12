import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa'
import Trendings from "./trendings";
import { Container } from "./styles";
import TopRated from "./topRated";
import Arrival from "./arrival";
import Genre from "./genre";

function TabComponent() {
  const [state, setState] = useState({
    tabIndex: 0
  });

  const { tabIndex } = state;
  return (
    <Container>
      <Tabs
        className="tabs"
        selectedIndex={tabIndex}
        onSelect={tabIndex => setState({ ...state, tabIndex })}
      >
        <TabList className="tab-nav-contain">
          <Tab className={`item ${tabIndex === 0 ? "active" : null}`}>
            Trending
          </Tab>
          <Tab className={`item ${tabIndex === 1 ? "active" : null}`}>
            Top Rated
          </Tab>
          <Tab className={`item ${tabIndex === 2 ? "active" : null}`}>
            New Arrivals
          </Tab>
          <Tab className={`item dropdown ${tabIndex === 3 ? "active" : null}`}>
            Genre <FaAngleDown className="icon" />
            <Row className="drop-item">
              <Col sm={3}>
                <Tab>tab 1</Tab>
              </Col>
            </Row>
          </Tab>
        </TabList>
        <TabPanel className={tabIndex === 0 ? "animate" : null}>
          <Trendings />
        </TabPanel>
        <TabPanel className={tabIndex === 1 ? "animate" : null}>
          <TopRated />
        </TabPanel>
        <TabPanel className={tabIndex === 2 ? "animate" : null}>
          <Arrival />
        </TabPanel>

        <TabPanel className={tabIndex === 3 ? "animate" : null}>
          <Genre />
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default TabComponent;
