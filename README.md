# About

An example repository to show how SuperTokens are used with a Fastify web application

## How to use this project

You can use this project as an authentication backend API for your application.
It is based on:
- Fastify web framework
- SuperTokens as the authentication provider (SasS and their Node.js SDK and Fastify plugin)

### Install dependencies

To get this project up and running you need to clone it and install its dependencies:

```bash
npm install
```

### Get API keys and configuration from SuperTokens website

Go to [SuperTokens](https://supertokens.com) website and create an account.
Once you have an account, you can create an application there and get the API keys and configuration details
required to setup the authentication system.

### Setup environment variables

Copy the  `.env-sample` file to `.env`, and then fill in the environment variables.
When you commit changes to this repository, make sure you do not commit the `.env` file. It is already in the `.gitignore` file.

The environment variables should make sense as they are self explanatory and mostly from SuperTokens dashboard/settings page.

Other configuration items like the URLs and base paths are depending on how you set things up, mostly with regards to your 
frontend which serves the authentication pages:

```
SUPERTOKENS_WEBSITE_DOMAIN="http://localhost:3000"
SUPERTOKENS_WEBSITE_BASE_PATH="/auth"
CORS_ORIGIN_URL="http://localhost:3000"
```

The above means that the frontend is served at `http://localhost:3000` and the authentication pages such as the login, and sign up forms
are available at `http://localhost:3000/auth`.

For the backend, *this repository*, which servers as the authentication API, the base path is `/auth` and the domain is `http://localhost:3001`,
as is specified in the following environment variables:

```
SUPERTOKENS_API_DOMAIN="http://localhost:3001"
SUPERTOKENS_API_BASE_PATH="/auth"
```

## Debugging

If you want to debug the SuperTokens part of the code, which is
mostly what makes up this backend authentication service, it is
useful to start the server with the relevant symbols for `DEBUG=`.

There's already a run-script for that for your convenience:

```bash
npm run start:debug
```

## How to run the project with Docker

### Build the Docker image

This project provides a production-grade `Dockerfile` for you to use.

To build the Docker image, run the following command:

```bash
docker build -t fastify-supertokens-example .
```

### Run the Docker image

To run the Docker image, run the following command:

```bash
docker run --rm -p 3001:3001 fastify-supertokens-example
```

# Author

Liran Tal <liran.tal@gmail.com>
