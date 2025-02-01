# Boardllo Backend

Boardllo is a Trello clone that provides a robust backend to manage boards, lists, and cards. This README provides an overview of the backend features and setup instructions.

## Features

- **User Authentication**: Secure user authentication and authorization.
- **Board Management**: Create, update, delete, and retrieve boards.
- **List Management**: Manage lists within boards, including creating, updating, and deleting lists.
- **Card Management**: Handle cards within lists, including creating, updating, deleting, and moving cards between lists.
- **Activity Logs**: Track user activities and changes within boards.
- **Real-time Updates**: Real-time updates using WebSockets for a seamless user experience.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/boardllo-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd boardllo-backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Server

Start the development server:
```sh
npm run dev
```

### API Endpoints

- **User Routes**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Login a user

- **Board Routes**
  - `GET /api/boards` - Get all boards
  - `POST /api/boards` - Create a new board
  - `GET /api/boards/:id` - Get a specific board
  - `PUT /api/boards/:id` - Update a board
  - `DELETE /api/boards/:id` - Delete a board

- **List Routes**
  - `POST /api/boards/:boardId/lists` - Create a new list in a board
  - `PUT /api/boards/:boardId/lists/:listId` - Update a list
  - `DELETE /api/boards/:boardId/lists/:listId` - Delete a list

- **Card Routes**
  - `POST /api/boards/:boardId/lists/:listId/cards` - Create a new card in a list
  - `PUT /api/boards/:boardId/lists/:listId/cards/:cardId` - Update a card
  - `DELETE /api/boards/:boardId/lists/:listId/cards/:cardId` - Delete a card

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
