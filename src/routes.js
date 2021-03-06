import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ScheduleToday from './components/ScheduleToday';

export default (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/scheduletoday" component={ScheduleToday} />
      </Switch>
  );
