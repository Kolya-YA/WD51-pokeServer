# WBS WD51 Pokemon Server

## Description

This is a Pokemon server built using Node.js and Express.js. It provides API endpoints to retrieve information about Pokemon, such as getting all Pokemon, getting a specific Pokemon, getting a list of Pokemon types, and getting Pokemon of specific types.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

1. Install the dependencies:

```bash
npm install
```

## Usage

To start the server in development mode, run the following command:

```bash
npm run dev
```

The server by default will start running on `http://localhost:3001`.

To start the server in prodaction mode, run the following command:

```bash
npm start
```

## API Endpoints

### Pokemon base Routes

- `GET /api/v1/pokes`: Get all pokemons.
- `GET /api/v1/pokes/:id`: Get a specific pokemon.
- `GET /api/v1/pokes/types`: Get list of pokemon types.
- `GET /api/v1/pokes/types/:type`: Get pokemons of specific types.

### Fighter Routes

- `GET /api/v1/fighters/top`: Get all fighters.
- `POST /api/v1/fighters`: Create new fighter.
- `POST /api/v1/fighters/login`: Login fighter.
- `GET /api/v1/fighters`: Get all fighters. *only for logged users*
- `GET /api/v1/fighters/:id`: Get one fighter by ID. *only for logged users*
- `PUT /api/v1/fighters/:id`: Update one fighter by ID. *only for logged users*
- `DELETE /api/v1/fighters/:id`: Delete one fighter by ID. *only for logged users*

### Battles Routes

- `GET /api/v1/battles/`: Get last 10 battles.
- `GET /api/v1/battles/:userId`: Get battles for specific user *only for logged users*
- `POST /api/v1/battles/`: Create new battle and update user *only for logged users*

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
