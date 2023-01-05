'use strict';

const runner = require('./shared/ni.a8753743.cjs');
require('path');
require('readline');
require('events');
require('node:buffer');
require('node:path');
require('node:child_process');
require('node:process');
require('child_process');
require('fs');
require('node:url');
require('os');
require('node:os');
require('assert');
require('buffer');
require('stream');
require('util');
require('node:fs');
require('tty');

runner.runCli(
  (agent, _, hasLock) => runner.parseNi(agent, ["--frozen-if-present"], hasLock),
  { autoInstall: true }
);
