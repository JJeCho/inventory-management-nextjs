
# Inventory Management Backend

## Overview

This is the backend of a full-stack Inventory Management Application. The backend is responsible for handling all the business logic, data storage, and API endpoints that power the frontend.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: A minimalist web framework for creating RESTful APIs.
- **TypeScript**: For type-safe backend development.
- **Prisma**: Next-generation ORM for database management.
- **PostgreSQL**: A powerful, open-source relational database system.
- **AWS**: Various services including EC2, S3, RDS for cloud deployment.

## Features

- **RESTful API**: Provides endpoints for managing products, users, sales, and expenses.
- **TO DO: Authentication**: Secure user authentication and authorization using JWT.
- **Database Management**: Prisma ORM integrated with PostgreSQL for efficient data operations.
- **TODO: Cloud Storage**: AWS S3 for storing product images and other assets.
- **Scalability**: Built with scalability in mind, leveraging AWS services for deployment.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL

### Installation

1. Navigate to the backend directory:
   ```bash
   cd inventory_backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the PostgreSQL database and Prisma:
   ```bash
   npx prisma migrate dev
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. The API will be available at `http://localhost:5000`.

## Deployment

The backend can be deployed using AWS services such as EC2 and RDS.

## Technical Skills Demonstrated

- **REST API Development**: Creating scalable and efficient APIs using Express.js.
- **Database Management**: Designing and interacting with relational databases using Prisma and PostgreSQL.
- **TODO: Cloud Deployment**: Leveraging AWS services for deploying and scaling the backend.
- **TODO: Authentication and Security**: Implementing JWT for secure authentication and data protection.

## License

This project is licensed under the MIT License.
