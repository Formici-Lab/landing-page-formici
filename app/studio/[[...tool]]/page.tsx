/**
 * Embedded Sanity Studio route: /studio
 *
 * All /studio/* paths are handled client-side by the Studio component.
 */
import { NextStudio } from "next-sanity/studio";

import config from "../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
