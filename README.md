# Aider

Aider is a comprehensive platform designed for efficient emergency patient registration and management. With a user-friendly interface and robust backend, Aider ensures that medical facilities can manage emergency cases seamlessly. The platform includes features such as quick patient registration, an admin dashboard, and respondent alerts, all aimed at improving the efficiency of emergency response.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Quick Registration**: Streamlined form for rapid patient registration.
- **Admin Dashboard**: Comprehensive dashboard for managing patient data.
- **Respondent Alerts**: Notifications for respondents about new emergency cases.
- **Leave a Review**: Patients can leave feedback about their experience.
- **Dark Theme**: Aesthetic dark blue and orange theme for a modern look.
  
## Tech Stack

- **Frontend**: React.js, CSS (with 3D effects and animations)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Testing**: Axios


## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/aider.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd aider
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Set up environment variables**:
   - Create a `.env` file in the root directory and add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

5. **Run the application**:
    ```bash
    npm start
    ```

## Usage

- **Frontend**: Visit `http://localhost:3000` to access the application.
- **Backend**: The API is hosted on `http://localhost:5000`.

## API Endpoints

- **POST** `/api/reviews`: Submit a new review
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "review": "Great platform!"
    }
    ```

- **GET** `/api/reviews`: Fetch all reviews
  - Response:
    ```json
    [
      {
        "_id": "12345",
        "name": "John Doe",
        "review": "Great platform!",
        "createdAt": "2025-01-03T10:00:00.000Z"
      }
    ]
    ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For any queries or issues, please contact puneetupx@gmail.com or open an issue in the repository.
