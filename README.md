# KANBAN_BOARD_MERN-STACK

this project is for the kanban board project, the user can add a board, and inside it can add tasks to the lists like backlog, in Progress, todo and done, and can delete task card or can delete all the board with all its tasks with drop drap feature to change cards places between the lists.I coded this project using **_HTML5, SCSS, ECMA6, React, Node.js, Express.js ,Javascript, MongoDb and Mongoose._**

## Board Model:

- Add a board
- Find all cards by a board slug(board name)
- Delete a board with every task has the same boardId

## Task Model:

- Add a task
- Delete tasks by the task slug (task name)

### You can find Postman Collection in this [link](https://github.com/RaoufSEZAR/KANBAN_BOARD_MERN-STACK/blob/main/RastTaskProject.postman_collection.json)

## To try this project in your machine

after cloning the project add DB by adding .env file to api file and write this:

```
MONGO_URL=mongodb://localhost:27017/YOUR_DATABASE_NAME
PORT=5000
```

and inside api file in the same path write this in the terminal:

```
npm install
npm start
```

and this message will show in terminal after connecting successfuly to db: \***\*connected to db sccessfully\*\***
after that open client file and in the same path write this in the terminal:

```
npm install
npm start
```

### then the default Browser will open in port 3000 like: \***\*http://localhost:3000/*** and the project will be ready to use as this screens:

![screencapture-localhost-3000-flower-2021-12-29-17_13_04](https://user-images.githubusercontent.com/64332249/147675236-e721c001-dc61-4f26-9e1b-b7551aad2684.png)
![screencapture-localhost-3000-2021-12-27-19_36_01](https://user-images.githubusercontent.com/64332249/147675238-a37c8c9e-3ba1-4e0b-aaf2-5f33056d20ad.png)
![screencapture-localhost-3000-2021-12-27-19_36_28](https://user-images.githubusercontent.com/64332249/147675240-bc6278e6-3ac4-4232-a1ce-562f2ae05ef7.png)
![screencapture-localhost-3000-2021-12-27-19_37_49](https://user-images.githubusercontent.com/64332249/147675242-423328cf-080d-4517-9701-33d81dc9b41a.png)
![screencapture-localhost-3000-2021-12-29-17_11_39](https://user-images.githubusercontent.com/64332249/147675244-07e78341-1d9e-4585-afde-7743e38007ef.png)
![screencapture-localhost-3000-2021-12-29-17_14_34](https://user-images.githubusercontent.com/64332249/147675248-9eeae497-9cad-4dd8-bd2c-dd05f23dd06f.png)
![screencapture-localhost-3000-cro-team-2021-12-29-17_19_03](https://user-images.githubusercontent.com/64332249/147675250-4fc29992-9030-4c99-b6a7-d93a981a36b2.png)
![screencapture-localhost-3000-cro-team-2021-12-29-17_19_21](https://user-images.githubusercontent.com/64332249/147675259-84373177-e5b9-4b67-8e1b-54324e8623c3.png)
![screencapture-localhost-3000-cro-team-2021-12-29-17_22_58](https://user-images.githubusercontent.com/64332249/147675263-385ffd87-7b56-4da4-902a-06975d5497e4.png)
![screencapture-localhost-3000-cro-team-2021-12-29-17_29_26](https://user-images.githubusercontent.com/64332249/147675267-b792506e-7827-431b-901f-d3bd6796571b.png)
![screencapture-localhost-3000-cro-team-2021-12-29-17_33_04](https://user-images.githubusercontent.com/64332249/147675268-3036dc23-de42-469e-a92b-79e88c9cc4c7.png)

![screencapture-localhost-3000-cro-team-2021-12-29-17_33_38](https://user-images.githubusercontent.com/64332249/147675275-e212ab75-c310-4c13-b8d3-9e35554b852d.png)
![screencapture-localhost-3000-cro-team-2021-12-29-17_33_48](https://user-images.githubusercontent.com/64332249/147675277-99f73276-d1bd-47db-bd06-52dc0c56095e.png)
![screencapture-localhost-3000-cro-team-2021-12-29-17_33_20](https://user-images.githubusercontent.com/64332249/147675272-ff2f7628-1c17-44bc-977b-f4f247603cca.png)
