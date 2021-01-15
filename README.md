# social-media

## Description :page_with_curl:

This application features an API for a social network using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the express and  mongoose packages,  a JavaScript date library of your choice used or the native JavaScript `Date` object to format timestamps.

## Images :camera_flash:

The following image shows the web application's appearance:

![Screenshot](public/images/Screenshot.png)

 walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met:

The following animations show application's API routes being tested in Insomnia Core.
The first animation shows GET routes to return all users and all thoughts being tested in Insomnia Core:

![Demo 01](./Assets/18-nosql-homework-demo-01.gif)

The second animation shows GET routes to return a single user and a single thought being tested in Insomnia Core:

![Demo 02](./Assets/18-nosql-homework-demo-02.gif)

The third animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia Core:

![Demo 03](./Assets/18-nosql-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia Core.

The final animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia Core:

![Homework Demo 04](./Assets/18-nosql-homework-demo-04.gif)

This walkthrough video should also show the POST and DELETE routes for reactions to thoughts being tested in Insomnia Core:

## Technology Used :label: 

* express
* mongoose
* javascript
* node

## Resources Used :wrench: 

* [Express](https://www.npmjs.com/package/express)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [mongoose validation](https://mongoosejs.com/docs/validation.html)
* [understanding virtuals](https://futurestud.io/tutorials/understanding-virtuals-in-mongoose)
* [mongoose connection](https://mongoosejs.com/docs/connections.html#options)
* [mongoose queries](https://mongoosejs.com/docs/queries.html)
* [Validations](https://mongoosejs.com/docs/validation.html) or on [String Validators](https://mongoosejs.com/docs/schematypes.html#string-validators)
* [express-session](https://www.npmjs.com/package/express-session)
* [emoji-cheat-sheet:for readme](https://github.com/ikatyang/emoji-cheat-sheet)

## Installation :electric_plug:
* ` npm install mongoose`
* `npm i mongoose-unique-validator`
* `npm install --save-dev validator` 
* run `npm start` at the root of the directory to connect to the server

## Contribution :heavy_plus_sign: 

Contributions, issues and feature requests are welcome. 
Check out [issues page](https://github.com/MarynaPR/tech-blog/issues). 
Give :star: if you found this project useful. 

### Questions :question: 
Feel free to contact me with any questions via email :e-mail: pryadkamaryna@gmail.com. 
  
If you'd like to see my other projects, please visit my :octocat: 
[GitHub](https://github.com/MarynaPR?tab=repositories)


## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Getting Started

Use the following guidelines to set up your models and API routes:

### Models

**User**
**Thought**
**Reaction**
**Schema Settings**
### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

**BONUS**: Remove a user's associated thoughts when deleted

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.


