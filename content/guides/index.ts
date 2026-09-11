import type { Guide } from "@/content/types";
import rutAvdragForStadning2026 from "./rut-avdrag-for-stadning-2026";
import vadKostarFlyttstadning from "./vad-kostar-flyttstadning";
import vadIngarIFlyttstadning from "./vad-ingar-i-flyttstadning";
import flyttstadningChecklista from "./flyttstadning-checklista";
import vadKostarHemstadning from "./vad-kostar-hemstadning";
import vadIngarIHemstadning from "./vad-ingar-i-hemstadning";
import fonsterputsPris from "./fonsterputs-pris";
import hurOftaPutsaFonster from "./hur-ofta-putsa-fonster";
import storstadningChecklista from "./storstadning-checklista";
import kontorsstadningPris from "./kontorsstadning-pris";
import byggstadningPris from "./byggstadning-pris";
import visningsstadningPris from "./visningsstadning-pris";
import hackklippningPris from "./hackklippning-pris";
import grasklippningPris from "./grasklippning-pris";
import dodsboStadningGuide from "./dodsbo-stadning-guide";
import miljovanligStadning from "./miljovanlig-stadning";

/**
 * 16 informational guides targeting high-volume, low-difficulty national
 * keywords (rut avdrag 2026, vad kostar flyttstädning, ...). They feed
 * top-of-funnel traffic and link down into the service hubs and the
 * service × ort landing pages. One file per guide keeps each article easy
 * to edit on its own.
 */
export const GUIDES: Guide[] = [
  rutAvdragForStadning2026,
  vadKostarFlyttstadning,
  vadIngarIFlyttstadning,
  flyttstadningChecklista,
  vadKostarHemstadning,
  vadIngarIHemstadning,
  fonsterputsPris,
  hurOftaPutsaFonster,
  storstadningChecklista,
  kontorsstadningPris,
  byggstadningPris,
  visningsstadningPris,
  hackklippningPris,
  grasklippningPris,
  dodsboStadningGuide,
  miljovanligStadning,
];

export const GUIDE_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);
