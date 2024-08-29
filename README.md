THE TASK
So, you are to create a service for that platform that does this:
Note: Developers will need your API documentation.
INSTRUCTIONS


Program a background process that automatically creates 500 new unique Autobots every
hour in a background.
Each Autobot should have 10 new posts also created for them upon their (the Autobot's)
creation
Each new post should have 10 new comments
Use jsonplaceholder.typicode.com to generate the Autobots(Users), Post and Comments.
Make sure no 2 Autobots have the same Post title

Create an API endpoint that allows developers to pull:
Autobots
An Autobot’s posts
And post comments
Make sure no developer can make more than 5 requests per minute and each request can
only return 10 data results per request
