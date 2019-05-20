'use strict';

import { IO, unsafeRun } from "waveguide/lib/io";

export function main(m: IO<never, void>): void {
  const interrupt = unsafeRun<never, void>((exit) => {
    console.log(`main exited with ${exit}...`);
  })(m);
  window.onunload = interrupt;
}
