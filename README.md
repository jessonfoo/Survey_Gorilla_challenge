Survey_Gorilla_challenge
========================

##TEAM:  FINGERS
  Michael
  Michelle
  Gary
  Jesson
  Andrew

##PROJECT:  SURVEY BROCCOLI

###Our team’s custom take on Survey Gorilla…

To access the site, a user must first sign-up to create an account, and then log in.

From there, they can either choose to complete a survey, or create a new survey.

Our application allows a user to create surveys which contain any variety of questions, and those questions contain multiple choice options.  

These surveys can then be taken by multiple users, with the option for the creator to view all survey results for those that they have created.

On the back-end, we’ve used six different tables to store data for the application:

####USERS
ID
USERNAME
EMAIL
PASSWORD
TIMESTAMPS

####SURVEYS
ID
NAME
CREATED_BY
TIMESTAMPS

####USER_SURVEYS (Join Table)
USER_ID (Creator)
SURVEY_ID
QUESTIONS
ID
QUESTION
TIMESTAMPS

####CHOICES
ID
CHOICE
TIMESTAMPTS

####TAKENS
USER_ID (Taker)
SURVEY_ID
TIMESTAMPS

####SURVEY_RESULTS
CHOICE
SURVEY_ID
QUESTION_ID
TIMESTAMPS

We’re using AJAX throughout our one-page application to retrieve information and render views with limited need to refresh the page.  

We’re using sessions to determine which information is appropriate to display to the user, as well as limit logged-in users’ ability to take a survey more than once.

On the front-end, we’ve utilized SASS to work in conjunction with our CSS.  We’ve also used JavaScript event handlers to interact with the user.
