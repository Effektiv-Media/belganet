/**
 * Every internal URL is built here so a structural change (like the move
 * from /landningssidor/{service}-{ort} to /tjanster/{service}/{ort}) is a
 * one-file edit instead of a hunt through template strings.
 */

export const servicesIndexPath = () => "/tjanster";
export const servicePath = (serviceSlug: string) => `/tjanster/${serviceSlug}`;
export const lpPath = (serviceSlug: string, ortSlug: string) =>
  `/tjanster/${serviceSlug}/${ortSlug}`;

export const orterIndexPath = () => "/omraden";
export const ortPath = (ortSlug: string) => `/omraden/${ortSlug}`;

export const guidesIndexPath = () => "/guider";
export const guidePath = (guideSlug: string) => `/guider/${guideSlug}`;
