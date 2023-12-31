# Flights and Search Service

## Project Setup
# Database Design
![Database-Design](https://github.com/BibekRegmi9/FlightAndSearchService/assets/47585371/87ebdb43-d300-4cbb-bbf6-d88ff5a7cdf0)



- clone the project 
- Run `npm install` on the same path as your root directory to downloaded the project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of JSON

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

- To migrate the model, execute the below command.
`npx sequelize db:migrate`
  


# DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


# Other Microservices
- Authentication Service ![Github](https://github.com/BibekRegmi9/AuthenticationService)
- Booking Service ![Github](https://github.com/BibekRegmi9/BookingService)
- Reminder Service ![Github](https://github.com/BibekRegmi9/ReminderService)
- API Gateway ![Github](https://github.com/BibekRegmi9/ApiGateway)










