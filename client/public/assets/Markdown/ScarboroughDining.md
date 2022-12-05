# Find Dining
#### July - August 2021
Dockerized Django backend, Angular frontend and Nginx reverse proxy to facilitate reproducible builds between development and production builds. Configured bridge network to allow proper reverse-proxy functionality between containers<br/><br/>

Created AWS EC2 instance for remote server with appropriate security groups for our deployment to run securely. Assigned Elsatic IP to keep instance at the same address over time making deployments simpler.<br/><br/>

Created framework for seeding databases with randomly generated data based on the Faker library, with an emphasis on making it easy to add and change seeding algorithm based on new database schemas.<br/><br/>

Implemented chunked file uploads to allow arbitrarily large file uploads for videos. Uploading to Google Media Storage to avoid filling small free storage space in EC2 instance<br/><br/>

Led Scrum process with Jira task board and automated reporting to keep track of team progress.