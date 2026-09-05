import { Course } from "../domain/model";
import { courseJS } from "./courses/js";
import { courseReact } from "./courses/react";
import { courseSCSS } from "./courses/scss";
import { courseTS } from "./courses/ts";
import { courseVue } from "./courses/vue";

export const courses: Course[] = [
  courseReact,
  courseVue,
  courseTS,
  courseSCSS,
  courseJS,
];
