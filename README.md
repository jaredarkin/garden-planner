# Garden Planner

## User Stories
### MVP
- Create a garden plot
- Specify length and width of garden plot
- Add a plant to garden
- Remove a plant from garden
- View information about plant
- See a picture of the plant
- View list of all plants
- Search through list of plants
- See a list of recent plants added without having to search again
- Name my garden

### Additions
- Add and remove groundcover, walkways, borders to garden
- Filter search by category (plant, groundcover, walkway, border)
- Filter search by plant detail (spacing, sun requirements, vegetable, perennial, etc)
- Reorder items already added to garden
- Drag and drop items from list to garden
- Place items anywhere in garden (e.g. not in orderly fashion)

### User Authentication Stories
- Create an account
- Login and logout of account
- Save a garden layout to my account
- Save multiple layouts to my account
- Edit/update an existing garden
- Remove a garden from my account


## Technology Used and Why
- MEAN stack
- MongoDB and Mongoose
  - Allows for use of a flexible, non-relational database
  - Plan to have only a few data points for MVP, but gradually adding more
  - Will not need relational db for users: plan to store plants selected as an array/object in user definition
- Angular
  - Allows for dynamically rendered views and partial views
  - Allows for repeatable custom directives, e.g. plant element
- Isotope Jquery plugin
  - Dynamic search and filter plugin
- Jquery UI plugin
  - Allows for drag and drop functionality
