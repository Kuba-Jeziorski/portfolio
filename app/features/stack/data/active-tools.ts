import { Tool } from "../domain/model";

import { toolCSS } from "./tools/css";
import { toolHTML } from "./tools/html";
import { toolReact } from "./tools/react";
import { toolSCSS } from "./tools/scss";
import { toolJS } from "./tools/js";
import { toolTS } from "./tools/ts";
import { toolTanStack } from "./tools/tan-stack";
import { toolRHF } from "./tools/react-hook-form";
import { toolRouter } from "./tools/react-router";
import { toolTailwind } from "./tools/tailwind";
import { toolWordpress } from "./tools/wordpress";
import { toolMUI } from "./tools/material-ul";
import { toolWebflow } from "./tools/webflow";
import { toolGit } from "./tools/git";
import { toolFigma } from "./tools/figma";
import { toolCursor } from "./tools/cursor";
import { toolChatGPT } from "./tools/chat-gpt";
import { toolGemini } from "./tools/gemini";
import { toolVite } from "./tools/vite";

export const activeTools: Tool[] = [
  toolReact,
  toolTS,
  toolTanStack,
  toolRHF,
  toolRouter,
  toolTailwind,
  toolVite,
  toolMUI,
  toolJS,
  toolHTML,
  toolCSS,
  toolSCSS,
  toolWordpress,
  toolWebflow,
  toolGit,
  toolFigma,
  toolCursor,
  toolChatGPT,
  toolGemini,
];
