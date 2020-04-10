
<!-- GITHUB API -->


GET /repos/:owner/:repo/commits
<!-- curl -i https://api.github.com/users/octocat/repos -->
properties to check out
- last-modified
- pushed_at


This gets this specific users github in JSON****
curl -i "https://api.github.com/users/Carlock1609/repos?type=owner"



HOW TO GET COMMIT COUNTS - URL EXAMPLES
https://developer.github.com/v3/repos/statistics/
https://developer.github.com/v3/repos/commits/


https://tylermcginnis.com/async-javascript-from-callbacks-to-promises-to-async-await/