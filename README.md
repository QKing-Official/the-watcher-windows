# The Watcher
> An uptime monitor built in SolidJS made by Cyteon. This fork is for Windows based systems.

> Full credits to Cyteon, I only changed dev.js and prod.js

Default dashboard credentials:
- Username: `admin`
- Password: `admin` \
You can access the dashboard at `/dash`. \
Change the default credentials immediately

The Watcher runs on port 3000.
http://localhost:3000

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

