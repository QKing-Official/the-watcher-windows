# The Watcher
> An uptime monitor built in SolidJS. Batteries Included

Default dashboard credentials:
- Username: `admin`
- Password: `admin` \
You can access the dashboard at `/dash`. \
Change the default credentials immediately

## Features
Supported Methods:
- HTTP(s)
- Host Ping
- TCP
- Server-Side Agent
- Push to URL
- MongoDB
## Running the monitor

Install packages

```bash
  npm i
```

Run the Monitor (dev)

```bash
  node dev.js
```

Run the Monitor (production)

```bash
  node prod.js
```

To specify a port for it to run on do
```bash
  PORT=1234 node dev.js # or prod.js
```
