# Installation

This project uses docker, so to run this project you need to start the docker and run the following command

```bash
docker-compose up
```

it will expose port `:3000`

## APIs

Base URL: `http://localhost:3000/v1`
| endpoint | description | type |
|---|---|---|
| `/auth/add-user/` | Create new user | POST |
| `/auth/login/` | Login with username and password | POST |
|`/users/` | Get all users, without login (just to see users and their ids) | GET |
|`/user/:userId/make-admin/`| Give the user admin role (just for testing permissions) | PUT |
|`/product/`|Add new product| POST |
|`/products/`|Get all products | GET |
|`/product/:productId/`|Get single product| GET |
|`/product/:productId/`| Update product | PUT |
|`/product/:productId/`| Delete Product | DELETE |

## Features

- There are 2 roles Admin and User
- Admin can perform **_CRUD_** operations on products
- Admin can see the `created_by` field of product(s)
- Users can just see product(s) but not their `created_by` field
- Login works on JWT
- Permissions are hardcoded in `/misc/permissions.js` can be made dynamic (according to project requirement), so that it can be changed from the dashboard
- roles are hardcoded, **_0_** = User and **_1_** = Admin
