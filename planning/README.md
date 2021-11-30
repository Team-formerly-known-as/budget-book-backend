# Budget Book

The Budget Book app allows users to easily create a monthly budget to better manage their finances. Our group considered a number of other projects beforehand but settled on Budget Book for its broad applicability (ie. Everyone handles money, everyone needs to budget).

As a team we produced our User Stories, React Architecture, Wireframes, and Time/Priority Matrix. Initially, Larry and Edgar handled the backend while Jules and Damon built the front-end. About midway through the project the four of us reconvened to workout issues in both areas bringing the project to completion.

## User Stories/React Architecture/Wireframes

Our users are people who want to have as much money left over at the end of the month as possible, allowing them to pursue and achieve their financial goals.

[User Stories](https://imgur.com/a/5GzMfe6)

[React Architecture](https://imgur.com/a/daGj45e)



### Wireframes

[Landing Page](https://res.cloudinary.com/deq09hmu3/image/upload/v1637361753/Portfolio/Project/Screen_Shot_2021-11-19_at_2.40.08_PM_j4oash.png)
[Budget Form](https://res.cloudinary.com/deq09hmu3/image/upload/v1637361740/Portfolio/Project/Screen_Shot_2021-11-19_at_2.40.12_PM_tf4wu0.png)
[Finished Budget](https://res.cloudinary.com/deq09hmu3/image/upload/v1637361755/Portfolio/Project/Screen_Shot_2021-11-19_at_2.40.16_PM_y3v3cs.png)

## Time/Priority Matrix (UPDATE WHEN COMPLETE)
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Backend initial set up | H | 1.5 | 1 |
| Create Expense.js model | H | 1.5 | 0.5 |
| Create User.js model | H | 1.5 | 0.5 |
| Create database directory | H | 2 | 0.25 |
| Create Controllers directory | H | 2 | 0.25 |
| Design site | H | 3 | 3 |
| React app set up | H | 1.5 | 0.5 |
| Create form | H | 1.5 | 3 |
| Create functionality (math) | H | 2.5 | 5 |
| Delete expense functionality | H | 2 | 10 |
| Edit expense functionality | H | 2 | 7.5 |
| Delete Budget functionality | L | 3 | n/a |
| Responsivness | H | 2 | 2 |
| Styling | H | 2 | 4 |
| Backend/Frontend connectivity | H | 3 | 5 |
| Total | H | 29 | 42.5 |

## Hurdles

One of the major hurdles our team overcame was integrating our user schema with our front-end interface. In particular we struggled to obtain and save the user's expense items and their amount to our backend database. This was resolved by creating useState's for both the item and it's cost and then applying those states to the appropriate keys within the schema. In hindsight it appears obvious but it was difficult to envision beforehand.

Towards the end of the first week we realized we did not delegate tasks as effectively as we could have. We probably could have accomplished more in less time had we done more solo/pair-programming.