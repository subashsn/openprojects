The backend is powered by Node.js, MongoDB.

Instructions:
Modify the credentials in "./config" folder
To Install necessary dependencies "npm install"
To Start the application "npm start"
By default the application will run at "http://localhost:2222" 

//Changes needed in frontend:

1.Signup is 2 step, 1 Access code check (call to /check?accesscode=XYZ, returns plaintext 1(True),0(False)), then signup(Send Access token again as hidden field).

2.Add toggle open for new work, in profile page(default True) GET /update/profile?freetowork=1 [AJAX]

3.'/' takes to login.html, have New user? and redirect to /signup

INFORMATION:
An idea can be in the following stages
Idea:
Waiting (Nobody)
    Approved (Notify users with skills,owner)
        Inprogress  (Notify interesred,owner)
            Completed (Notify participants,owner)
            Terminated (Notify participants,owner)
        Denied (Notify interested,owner)
    Rejected (Notify owner)
    
User preference is a number(1(Extreme) to 4(Boring))

Emails Sent to:
    All notifications, if subscribed
    
Notifications:
    Change of linked project status
    New/Edited project with skill just added

Feeds (User lined to change,change)
    Any added/edited projects
    Change of any project state
    
