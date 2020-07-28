
// Async func call to get listed students repos: name, repo-name, date-last-pushed.
const getRepo = async (students) => {
    try {
        // loops over student list and makes a request for each one using: username, repo-name
        for(let i = 0; i < students.length; i++) {
            // figure out why params object wasn't working.
            const { data } = await axios.get(`https://api.github.com/repos/${students[i].username}/${students[i].repo}`);
            // this data needs to be pushed to DB and give a green square if dates match.
            console.log(`${data.owner.login} committed to ${data.name} at ${data.pushed_at}`);
        }
    } catch(err) {
        console.log(err.message);
    }
};

getRepo(students);

// STUDENT LIST. Name isn't used but for organization.
students = [{
    "name": "Jonathan Recod",
    "username": "jrecod",
    "repo": "JonBootcampSolutions"
},{
    "name": "Todd Claxton",
    "username": "toddclaxton",
    "repo": "PDXCodeGuildLabSolutions"
},{
    "name": "Zachary McBride",
    "username": "mcbridz",
    "repo": "MountainGoatPDXCodeGuild"
},{
    "name": "Connor Langston",
    "username": "clock442",
    "repo": "PDXCodeGuildLabsubitals"
}];

