# PCR : mobile-app

## Installation

1. Copy .env.dist as .env
2. in .env change _**REACT_NATIVE_PACKAGER_HOSTNAME**_ variable as your local ip
3. launch the container : docker-compose up -d
4. `source bash_aliases.sh` to load aliases (linux / OS X terminal)
5. First usage : run `yarn install`

## Aliases

- `yarn`: run `yarn` into the container
- `expo`: run `expo` into the container
- `prettier-check`: launch a prettier check (used in CI)
- `prettier-write`: fix prettier issues

## Troubleshooting

### If your local ip change after the `docker-compose up -d` command

If you change your local ip on .env you need to do :

1. `docker-compose down`
2. if not done : change your ip on .env
3. `docker-compose up -d`
4. `source bash_aliases.sh`
5. `expo start`
