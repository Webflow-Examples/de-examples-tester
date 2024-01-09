Flow

- I have a database with two tables - Users and Authorizations.
- Users have signed up with my App
- Authorizations are people who have authorized my app with Webflow.
- The common fields between tables are userId and Email
- When someone who has signed up with my App, authorizes webflow - the userId is updated in the Authorizations table

- To verify a user from my frontend webflow application, I get a JWT from Webflow's client side API
- I resolve that JWT with Webflow's backend API, and it gives me details such as:
  {
  "id": "545bbecb7bdd6769632504a7",
  "email": "some@email.com",
  "firstName": "Some",
  "lastName": "One"
  }

- I need to associate that id/email with my app user. How?
- How do I show them my App know's its them? "Hello, VicPlum! 👋🏾"


