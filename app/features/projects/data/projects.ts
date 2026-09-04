import { Project } from "../domain/model";

import { expanseCalculator } from "./projects/expense-calculator";
import { travelEstimator } from "./projects/travel-estimator";
import { fiveInALine } from "./projects/five-in-a-line";
import { justDance } from "./projects/just-dance";
import { theOverlookDisplay } from "./projects/the-overlook-display";
import { toDoList } from "./projects/to-do-list";
import { reactRiddle } from "./projects/react-riddle";
import { rgbHexConverter } from "./projects/rgb-hex-converter";
import { queryUsers } from "./projects/query-users";
import { queryPictures } from "./projects/query-pictures";
import { dailyDiv } from "./projects/daily-div";
import { headlessAstro } from "./projects/headless-astro";
import { taskManagementApp } from "./projects/task-management-app";
import { gymTracker } from "./projects/gym-tracker";
import { stockTracker } from "./projects/stock-tracker";

export const projects: Project[] = [
  stockTracker,
  gymTracker,
  taskManagementApp,
  headlessAstro,
  dailyDiv,
  queryPictures,
  queryUsers,
  reactRiddle,
  fiveInALine,
  theOverlookDisplay,
  toDoList,
  travelEstimator,
  justDance,
  rgbHexConverter,
  expanseCalculator,
];
