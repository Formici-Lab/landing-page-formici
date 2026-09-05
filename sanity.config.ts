"use client";

/**
 * Configuration for the embedded Sanity Studio, mounted at `/studio`.
 * Team members sign in with Google/GitHub (auth handled entirely by Sanity)
 * and manage articles from your own domain.
 */
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
