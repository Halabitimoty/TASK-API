# TASK API

### A simple API with... coming soon

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 📁 Collection: Auth

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

### End-point: Register

#### Method: POST

> ```
> http://localhost:PORT/v1/auth/register
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "fullname": "Test Test",
  "email": "Test@test.com",
  "password": "Test1234",
  "role": "admin",
  "profilepicture": "image.png"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Method: POST

> ```
> http://localhost:PORT/v1/auth/login
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "email": "Test@test.com",
  "password": "Test1234"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Forget Password

### Method: POST

> ```
> http://localhost:PORT/v1/auth/forgetpassword
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "email": "Test@test.com"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Reset Password

### Method: POST

> ```
> http://localhost:PORT/v1/auth/resetpassword
> ```

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "email": "Test@test.com"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Task

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Add Task

### Method: POST

> ```
> http://localhost:PORT/v1/task/create-task
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "title": "Task One Title",
  "description": "This is Task One Description",
  "published": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Task

### Method: PATCH

> ```
> http://localhost:PORT/v1/task/update-task/653ed3192d09329b9aab1370
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "title": "Task One Edit Title",
  "description": "This is Task One Edit Description",
  "published": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Users Task

### Method: GET

> ```
> http://localhost:PORT/v1/task/get-user-task
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Paginated Users Task

### Method: GET

> ```
> http://localhost:6000/v1/task/paginate-task/:page?/:limit?
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Tasks By ID

### Method: GET

> ```
> http://localhost:PORT/v1/task/paginate-task/
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Tasks

### Method: GET

> ```
> http://localhost:PORT/v1/task/get-all-task
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Task By ID

### Method: DELETE

> ```
> http://localhost:PORT/v1/task/delete-task-id/653ed3192d09329b9aab1370
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Body (**raw**)

```json
{
  "title": "Task One Delete Title",
  "description": "This is Task One Delete Description",
  "published": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# Role Based : Only Admin Can Perform Actions

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete All Users Task

### Method: DELETE

> ```
> http://localhost:6000/v1/task/delete-user-task-id/653f5c84c7e94dbe39f828a6
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete All Task

### Method: DELETE

> ```
> http://localhost:PORT/v1/task/delete-all-task
> ```

### Headers

| Content-Type  | Value |
| ------------- | ----- |
| Authorization |       |

### 🔑 Authentication bearer

| Param | value | Type   |
| ----- | ----- | ------ |
| token |       | string |

### Headers

| Content-Type | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

# MORE TO COME..., YOU CAN ALSO RUN TESTS...
