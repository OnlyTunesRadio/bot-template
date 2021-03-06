# Simple Bot Template

![Repo Size](https://img.shields.io/github/repo-size/OnlyTunesRadio/bot-template) ![Contributor Count](https://img.shields.io/github/contributors/OnlyTunesRadio/bot-template) ![Docker Pulls](https://img.shields.io/docker/pulls/onlytunes/bot-template) ![Docker Image Size (tag)](https://img.shields.io/docker/image-size/onlytunes/bot-template/latest) [![CI to Docker Hub](https://github.com/OnlyTunesRadio/bot-template/actions/workflows/build.yml/badge.svg)](https://github.com/OnlyTunesRadio/bot-template/actions/workflows/build.yml)

# Features
- MongoDB support
- Slash command support
- Auto welcome message on guild join
- Pre coded commands to make development faster
- Pre sharded bot ( for accurate user count and ease of guild growth )
- DockerFile for even quicker docker support our of the box



# Included Commands

- Info
```
- Dynamic Help command!
- Info command for bot stats
- Ping command for Message and Websocket latency
```

- Util
```
- About command for explaining the bot ( setup with a draft of the template )
- Dynamic invite command which genorates based on the bot ID and required permissions ( set in ENV )
- License command for explaining the lisence terms
```

# Want to test the prebuilt commands?
 You can do that by using our prebuilt docker image!
 [![dockeri.co](https://dockeri.co/image/onlytunes/bot-template)](https://hub.docker.com/r/onlytunes/bot-template)


# Quick start guide

1. Install [Git](https://git-scm.com/)
2. Install [Node.js](https://nodejs.org/)
3. Create a [Discord Application](https://discord.com/developers/applications) and get the bot token from there
4. Invite the bot using the link available in the OAuth2 page
5. Clone the repo using `git clone`
6. On the folder of the repo, use `npm install` to transfer the necessary packages.
7. Create a `.env` file with the following: 

    `DISCORD_TOKEN=` -  this is where you put your bot token obtained on 3.
    
    `PREFIX=` - a prefix like `!`

    `PERMISSIONS` - a permission integer from your [developer](https://discord.com/developers/applications) page for the bot

    `EXPERIMENTAL` - this must be either `yes` or `no` 

    `MONGOOSESTRING` - this can be left blank if mongoDB is not going to be used

8. Run the bot using `node shard.js` or `npm run start` ( If you want it to restart when you make a change use `npm run test` )

    You should see a `Ready!` message when the bot is ready to accept commands. You can try using `ping` for that.

9. You're done!

# Built With:

- [Discord.js](https://discord.js.org/) - The Discord Library
- [Node.js](https://nodejs.org/) - JavaScript Runtime
- [Docker](https://www.docker.com/) - Containerization Solution

# Contribute

Do you have any good idea? Do you wanna contribute in building new features? Look into the [Issues](https://github.com/COnlyTunesRadio/bot-template/issues) panel and check  our current stuff. Everyone is welcome to participate on the project.

Or jump into our discord server! We would love to see your ideas and hear how you have used this template!
[![Support Server](https://img.shields.io/discord/872219348624900096.svg?label=Discord&logo=Discord&colorB=7289da&style=for-the-badge)](https://discord.gg/WYCrkuHJ6X)


# Authors

- CaldeiraG
- Brayd ( OnlyTunes )

----


# License

MIT License

Copyright (c) 2021 OnlyTunesRadio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
