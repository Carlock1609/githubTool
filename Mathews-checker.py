import requests
import datetime

# https://stackoverflow.com/questions/9179828/github-api-retrieve-all-commits-for-all-branches-for-a-repo
# https://stackoverflow.com/questions/1060279/iterating-through-a-range-of-dates-in-python
# https://stackoverflow.com/questions/18795713/parse-and-format-the-date-from-the-github-api-in-python/18795714
# https://developer.github.com/v3/#rate-limiting
# https://developer.github.com/v3/#basic-authentication

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
# DONT FORGET TO DELETE USERNAME AND PASSWORD
github_auth = ('username', 'password')

beginning_date = datetime.date(2020, 7, 27)
end_date = datetime.date.today()

def date_range(start_date, end_date):
    for n in range(int((end_date - start_date).days)):
        yield start_date + datetime.timedelta(n)

for student in students:
    print(student['name'])
    commit_dates = set()
    # e.g. https://github.com/twitter/bootstrap -> https://api.github.com/repos/twbs/bootstrap/branches
    repo_url = student['repo'].replace('github.com', 'api.github.com/repos')
    branches_url = repo_url + '/branches'
    branches_response = requests.get(branches_url, auth=github_auth)
    branches = branches_response.json()
    for branch in branches:
        commits_url = repo_url + '/commits?per_page=100&sha=' + branch['commit']['sha']
        commits_response = requests.get(commits_url, auth=github_auth)
        commits = commits_response.json()
        for commit in commits:
            commit_date = datetime.datetime.strptime(commit['commit']['author']['date'], "%Y-%m-%dT%H:%M:%SZ").date()
            # print(commit['commit']['author'])
            # if commit['commit']['author']['name'] == student['username']:
            #     commit_dates.add(commit_date)
            commit_dates.add(commit_date)
    for date in date_range(beginning_date, end_date):
        if date in commit_dates:
            print('\t', date, '✓')            
        else:
            print('\t', date, '✗')
