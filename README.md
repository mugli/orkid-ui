# orkid-ui

[![NPM version](https://img.shields.io/npm/v/orkid-ui.svg)](https://www.npmjs.com/package/orkid-ui)
![Build Status](https://img.shields.io/circleci/build/github/mugli/orkid-ui/master?token=f78af6f8cfd2fae3da889804cb09d0620495a8f8)
![Dependencies](https://img.shields.io/david/mugli/orkid-ui.svg?style=flat)
![Dev Dependencies](https://img.shields.io/david/dev/mugli/orkid-ui.svg?style=flat)
![License](https://img.shields.io/npm/l/orkid-ui?style=flat)

Dashboard to monitor and manage [Orkid task queue](https://github.com/mugli/orkid-node).

![screenshot](https://raw.githubusercontent.com/mugli/orkid-ui/master/screenshot.png)

---

## Running locally

The simplest way to run orkid-ui is using `npx`.

```sh
npx orkid-ui
```

Open in browser: http://localhost:3000

- This will start orkid-ui in "non-production mode" (without basic authentication).
- It'll try to connect to redis-server on localhost.

You can change these behaviors using environmental variables ([see below for the full list of supported env variables](#available-environment-variables)). For example:

```sh
HTTP_PORT=1337 HTTP_USER=admin HTTP_PASSWORD="_your_military_grade_secret_password_" REDIS_HOST=127.0.0.1 npx orkid-ui
```

Open in browser: http://localhost:1337

This will start orkid-ui on port 1337 with HTTP Basic Auth protection and it'll connect to the specified `REDIS_HOST` instead of localhost.

> ❄️ However, while this may seem convenient, it'll not restart automatically if it crashes or system reboots. **The recommended approach is to use docker-compose to run orkid-ui in production.**

---

## Running with Docker

Docker images are available for orkid-ui on the Docker Hub: https://hub.docker.com/r/orkidio/orkid-ui

To start the container:

```sh
# use sudo if necessary
docker run --name orkid-ui -d --env "HTTP_USER=admin" --env "HTTP_PASSWORD=_your_secret_password_" --env "REDIS_HOST=192.168.0.105" -p 1337:3000 --rm orkidio/orkid-ui:<version>
```

Replace `<version>` in `orkidio/orkid-ui:<version>` with a proper orkid-ui docker image version. **It's always good practice to use a specific version on production**, although you can use `latest` as version too.

> 🙌 For a list of available orkid-ui docker image versions/tags, see here: https://hub.docker.com/r/orkidio/orkid-ui/tags

Now you can access orkid-ui on: http://localhost:1337 (or the host IP instead of localhost) with a username and password.

---

## Running with docker-compose (recommended for production)

It might be cumbersome to use all the cli flags properly with docker. `docker-compose` provides an easier way.

> **🤗 A sample `docker-compose.yml` file is provided here: https://github.com/mugli/orkid-ui/blob/master/docker-compose.yml**

Again, replace `<version>` in `orkidio/orkid-ui:<version>` with a proper orkid-ui docker image version.

### Common operations with docker-compose

#### 1. Starting orkid-ui

In the directory where `docker-compose.yml` is present:

```sh
# use sudo if necessary
docker-compose up -d
```

If you are using `sudo` and passing env vars from shell to the docker services (like `-HTTP_PASSWORD="$MYPASS"` under the `environment:` key in the yml file), you may need to start it like this:

```sh
# preserve existing environment variable
sudo -E docker-compose up -d
```

#### 2. Stopping orkid-ui

In the directory where `docker-compose.yml` is present:

```sh
# use sudo if necessary
docker-compose down
```

#### 3. See if orkid-ui is running

In the directory where `docker-compose.yml` is present:

```sh
# use sudo if necessary
docker-compose ps
```

#### 4. Viewing logs

In the directory where `docker-compose.yml` is present:

```sh
# use sudo if necessary
docker-compose logs
```

---

## Available Environment Variables

These env vars are available however you run orkid-ui.

**NODE_ENV**

> When set 'production', it'll ensure HTTP_USER, HTTP_PASSWORD and REDIS_HOST variables are set.

**HTTP_HOST**

> HTTP host/IP to listen to. Default is '0.0.0.0' to listen to all interfaces.

**HTTP_PORT**

> HTTP port to listen to. Default is 3000.

**HTTP_USER**

> User for HTTP Basic Authentication. Must be present when NODE_ENV is 'production'. Both user and password need to be present for HTTP Basic Authentication.

**HTTP_PASSWORD**

> Password for HTTP Basic Authentication. Must be present when NODE_ENV is 'production'. Both user and password need to be present for HTTP Basic Authentication.

**REDIS_HOST**

> Redis host to connect to, assuming orkid-node is connected to the same redis server.

> **Important! Redis server version must be >= 5 because we need streams support.**

**REDIS_PORT**

> Redis port to connect to. Default 6379.

---

## Development

### 1. Start redis-server locally

### 2. Start Orkid API Server

Start `orkid-api` as described here: https://github.com/mugli/orkid-api#development

### 3. Start Orkid UI in dev mode

```sh
npm run dev
```

---

## Maintainer

- Mehdi Hasan Khan (Twitter: [@MehdiHK](https://twitter.com/MehdiHK))

---

## License

MIT

---

### Related Projects

- [orkid-node](https://github.com/mugli/orkid-node): Reliable and modern Redis based task queue for Node.js. Use this to produce and consume jobs.
- [orkid-api](https://github.com/mugli/orkid-api): GraphQL API to monitor and manage Orkid task queue (used internally by orkid-ui).
