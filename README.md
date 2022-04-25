## INTRODUCTION
This is a beginner friendly guide to using nodejs and postgreSQL to build restful APIs

## FEATURES
- CRUD operations i.e Create, Read, Update, Delete

## REQUIREMENTS
- [Nodejs](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [PostgreSQL](https://postgresql.org/download/) is a powerful, open source object relational database system wih over 30 years of active development that has earned a reputation for reliability, feature robustness and performance
- [Postman](https://www.postman.com/downloads/) is an API client that makes it easy for developers to create, share, test and document APIs. This is done by allowing users to create and save simple and complex HTTP/s requests, as well as read their responses. The result - more efficient and less tedious work.
- [Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## ENDPOINTS
| HTTP Verbs | Endpoints | Action | Required |
| --- | --- | --- | --- |
| POST | /api/v1/user/register | Register a new user | req.body.username req.body.password req.body.email |
| GET | /api/v1/user/findAll | Get all users |  |
| GET | /api/v1/user/findOne | Get a single user | req.body.username |
| DELETE | /api/v1/user/delete | Delete a user | req.body.username |
| UPDATE | /api/v1/user/update/:id | Update a user | req.params.username |

## HOW TO USE
- Ensure you have nodejs, git, postgres and postman installed locally.
- clone this repository using `git clone https://github.com/alahirajeffrey/nodejs-postgres-crud-app.git`
- Navigate to project folder and install dependencies using `npm install`
- Create .env file and add environment variables using .env.sample as a guide
- Open terminal and type `npm run dev` to start server in development mode or `npm run start` to start server in production mode
- Use postman to test endpoints

## Author
[Alahira Jeffrey]((https://github.com/alahirajeffrey))

## LINCENSE
This project is available for use under the MIT License.

#### NB
This is just a test app so industry standards where not followed 
