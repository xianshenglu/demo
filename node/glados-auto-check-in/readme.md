# GLADOS.ROCKS AUTO CHECK IN

Help you to auto check in in [glados.rocks](https://glados.rocks/console).

## Usage

### Envs

- `ROBOT_EMAIL_USERNAME`
- `ROBOT_EMAIL_PASSWORD`
- `GLADOS_SESSION`
- `CHECK_IN_INTERVAL`

### Start

```shell
npm i 
# set your above env s
npm run start
```

**You need to replace the cookie after the previous one expires.**

### Keep the process running in the background in linux

1. run the command
2. Press `ctrl` + `Z`
3. 
```shell
bg
disown %1
```
### Todo

- [ ] auto update session.