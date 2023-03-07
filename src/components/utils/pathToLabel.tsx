import * as _ from "lodash";

export function pathToLabel(path: String) {
  return _.chain(path).split("/").last().capitalize().value();
}
