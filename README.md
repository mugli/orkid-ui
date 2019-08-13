# orkid-ui

[![NPM version](https://img.shields.io/npm/v/orkid-ui.svg)](https://www.npmjs.com/package/orkid-ui)
![Build Status](https://img.shields.io/circleci/build/github/mugli/orkid-ui/master?token=f78af6f8cfd2fae3da889804cb09d0620495a8f8)
![Dependencies](https://img.shields.io/david/mugli/orkid-ui.svg?style=flat)
![Dev Dependencies](https://img.shields.io/david/dev/mugli/orkid-ui.svg?style=flat)
![License](https://img.shields.io/npm/l/orkid-ui?style=flat)

Dashboard to monitor and manage [Orkid task queue](https://github.com/mugli/orkid-node).

![screenshot](https://raw.githubusercontent.com/mugli/orkid-ui/master/screenshot.png)

## Running in Production

TODO: Add docker image and docker-compose.yml files

## Development

### Start API Server

Start `orkid-api` as described here: https://github.com/mugli/orkid-api#development

### Start Orkid UI in dev mode

```
npm run dev
```

## Author

- Mehdi Hasan Khan ([@MehdiHK](https://twitter.com/MehdiHK))

## License

MIT

---

### Related Projects

- [orkid-node](https://github.com/mugli/orkid-node): Reliable and modern Redis based task queue for Node.js. Use this to produce and consume jobs.
- [orkid-api](https://github.com/mugli/orkid-api): GraphQL API to monitor and manage Orkid task queue (used internally by orkid-ui).
