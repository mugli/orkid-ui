#!/usr/bin/env node

const semver = require('semver');
const pkg = require('../package.json');

const pkgVer = pkg.version;
const apiVer = semver.valid(semver.coerce(pkg.dependencies['orkid-api']));

const sPkgVer = semver.parse(pkgVer);
const sApiVer = semver.parse(apiVer);

const diff = semver.diff(pkgVer, apiVer);

if (sPkgVer.major > 0 || sApiVer.major > 0) {
  if (diff === 'major') {
    console.error('API and UI differ in major version range, expecting same major version in both.', {
      pkgVer,
      apiVer,
      diff
    });
    process.exit(1);
  }
} else {
  if (diff === 'minor') {
    console.error('API and UI differ in minor version range, expecting same minor version in both.', {
      pkgVer,
      apiVer,
      diff
    });
    process.exit(1);
  }
}
