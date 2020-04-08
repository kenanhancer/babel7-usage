import React from 'react';

import GreetingHelper from './greeting-helper';
import Greeting from './greeting';
import { Person } from './person';

import GreetingReactComponent from './react/greeting-react-component';
import app_defaultNamedExport from './app_defaultNamedExport';
import { group } from './app_NamedExport';
import logger from './consoleLogger';

const mainAsync = async () => {

    const element = <h1>Hello, world</h1>;

    const greetingReactComponent = <GreetingReactComponent name="Kenan" />

    const person = new Person({ firstName: "kenan", lastName: "hancer" });

    const greeting = new Greeting({ greetingHelper: new GreetingHelper() });

    const helloMessage = greeting.sayHello(person);

    console.log(helloMessage);

    const goodbyeMessage = greeting.sayGoodbye(person);

    console.log(goodbyeMessage);







    const isLogged = await logger.writeLogAsync('mainAsync is called.');

    console.log('--------------------');

    app_defaultNamedExport.group.showList();

    console.log('====================');

    group.showList();

    await logger.writeLogAsync('mainAsync is ending.');

};

mainAsync();