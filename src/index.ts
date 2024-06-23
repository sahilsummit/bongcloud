#!/usr/bin/env node

import { collectUserData, introToApp, handleModules, welcome } from "./appFunctions.js";

const bongcloudFlow = async () => {
  await welcome();
  await collectUserData();
  introToApp();
  await handleModules();  
}

await bongcloudFlow();
