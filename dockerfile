# ----------------------------------------------------------------------
# This file has been created and is maintained by ONLYTUNES.UK
#               _       _                                _    
#              | |     | |                              | |  
#    ___  _ __ | |_   _| |_ _   _ _ __   ___  ___  _   _| | __
#   / _ \| '_ \| | | | | __| | | | '_ \ / _ \/ __|| | | | |/ /
#  | (_) | | | | | |_| | |_| |_| | | | |  __/\__ \| |_| |   < 
#   \___/|_| |_|_|\__, |\__|\__,_|_| |_|\___||___(_)__,_|_|\_\
#                  __/ |                                      
#                 |___/ 
# https://onlytunes.uk
# ----------------------------------------------------------------------

FROM ubuntu:20.04

# Set main working directory for docker container
WORKDIR /usr/src/app

# Work around for TZ data
ENV TZ=Europe/London
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Update package list
RUN apt update -y
RUN apt upgrade -y

# Install curl for NodeJS installation
RUN apt install curl -y

# NodeJS setup and install
RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh -y
RUN apt install nodejs -y

# Copy package file across to install deps
COPY package.json .

# install deps
RUN npm i

# Copy all bot files across to work dir
COPY . .

# Run the main file and see what breaks
CMD [ "node", "shard.js" ]

