## Github Web Application Tool

## Description
### This is a tool being built for instructors/TA's to make daily duties of keeping track of students progress, as well as checking student commits

## INSTRUCTIONS
### - TA/INSTRUCTOR must use Postman to make any changes to students, or to create them.
### - Cron job makes a request to github API at 12AM everynight, and adds there last commit pushed to the Student's commit array.

## IDEA'S
### - Should I keep it simple and just use postman to make POST requests for adding students? I can leave instructions on README for use.

## CURRENTLY WORKING TODO
### - An admin auth needs to be added for easier adding of students. - One shared login the TA/Instructors use.

## TODO's
### - For sorting the students by className, there needs to be a check that sees if there is a change in classname, and create an hr
### - Figure out regex/datetime, that checks to see if commit was made on that same day, if it is, turn it green, if its old, turn it red.
### - Add a counter to the schema that keeps track of how many red or green dates they have. 

## FINISHED
### - Cron job done, set to run at 12:00am everyday - fix up code, update date www to not make that call anymore.
### - 07/30 FIGURE OUT STATE ISSUE - Trying to map prop being passed from parent, component is mapping before data is loaded.
### - Figure out how to split the tables by class name. - Use something like orderBy, it should atleast group them by their given Class name
### - Figure out loading while the async is being processed.




### STUDENTS DB
CLASS GOAT
students = [{
    "name": "Jonathan Recod",
    "username": "jrecod",
    "repo": "https://github.com/jrecod/JonBootcampSolutions"
},{
    "name": "Todd Claxton",
    "username": "toddclaxton",
    "repo": "https://github.com/toddclaxton/PDXCodeGuildLabSolutions"
},{
    "name": "Zachary McBride",
    "username": "mcbridz",
    "repo": "https://github.com/mcbridz/MountainGoatPDXCodeGuild"
},{
    "name": "Connor Langston",
    "username": "clock442",
    "repo": "https://github.com/clock442/PDXCodeGuildLabsubitals"
}]

CLASS 2020-02-24-full-stack-night
students = [{
    "name": "Lynn Nguyen",
    "username": "nguyenl1",
    "repo": "evening_class"
},
{
    "name": "Joey Nadeau",
    "username": "Dantes-Shade",
    "repo": "Code_Guild"
},
{
    "name": "Justin Hamiliton",
    "username": "503Hicks",
    "repo": "code_guild"
},
{
    "name": "Stephen Simonson",
    "username": "BubbaHotepp",
    "repo": "code_guild"
}
]