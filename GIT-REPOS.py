import os

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

# Checks to see if directory exists - if it does, pull it - if it doesn't, clone it.
if os.path.isdir('./student_repos'):
    os.chdir('./student_repos')
    for student in students:
        os.system('git pull --allow-unrelated-histories')
else:
    os.mkdir('./student_repos')
    os.chdir('./student_repos')
    for student in students:
        os.system('git clone ' + student['repo'])