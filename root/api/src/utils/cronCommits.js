const cron = require('node-cron');
const axios = require('axios');


const cronCommits = () => {
    cron.schedule('0 0 0 * * *', () => {
        const getStudents = async () => {
            try {
                // request to api to get students object
                const { data } = await axios.get(`http://localhost:5000/api/github/commits`, {
                    params: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET',
                        'Access-Control-Request-Headers': 'Content-Type'
                    }
                });
    
                const students = [];
                // loops over student object and makes a request for each one using: username, repo-name
                for(let i = 0; i < data.length; i++) {
                    // figure out why params object wasn't working.
                    const student = await axios.get(`https://api.github.com/repos/${data[i].username}/${data[i].repo}`);
                    // this data needs to be pushed to DB and give a green square if dates match.
                    // console.log(`${data.owner.login} committed to ${data.name} at ${data.pushed_at}`);
                    // console.log(student)
                    // console.log(data[i])
                    // console.log(student.data.updated_at)
                    const body = JSON.stringify({name: data[i].name, commit: student.data.updated_at})
                    await axios.put(`http://localhost:5000/api/github/create_commits`, body, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    // students.unshift({data: data[i], commits: [student.data.updated_at]});
                    students.unshift({data: data[i]});
                }
                // setStudents(students);
    
            } catch(err) {
                console.log(err.message);
            }
        };
    
        getStudents();
    });

};

module.exports = cronCommits