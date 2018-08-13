# d-landing-p
A simple landing page

## Installation

```
$ yarn install # installing dependencies
$ yarn build
$ yarn watch-debug # watch mode node and typescript
```

##### Run with Docker
Simple run docker-compose
```
$ docker-compose up
```

### Testing

Unit and integation testing
```
$ yarn test # run jest tests

$ yarn test:watch # run watch mode
```

End to end testing with Cypress
```
$ yarn cypress:open # open cypress
$ yarn cypress run # running cypress
```

Checkout `npm scripts` for other commands.

## Installing Ansible
Using vagrant `hashicorp/precise64` vm box.
```
$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository ppa:ansible/ansible
$ sudo apt-get update
$ sudo apt-get install ansible
```

For more information:
https://www.ansible.com/resources/get-started

#### Author
Sheenan Tenepre
