import * as _ from "lodash";

export function pathToLabel(path: string) {
  return _.chain(path).split("/").last().capitalize().value();
}
