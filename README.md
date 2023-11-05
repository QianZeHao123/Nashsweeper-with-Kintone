# Hack Kintone with Nashsweeper
## 0x00 Introduction
Nash equilibrium is a core concept of game theory. This project shows a playful introduction of Nash equilibrium and designs a game named Nashsweeper, which is a game designed to find the pure strategy. <br>
Meanwhile, Nashsweeper is extremely lightweight and can even be deployed on edge devices. If your Raspberry Pi, Nvidia Jetson, or even a WiFi router has Docker and Git installed, it only takes two lines of code to get it up and running!<br>
#### Inspiration
During Durhack, I originally intended to develop a hardware hacking device based on [Kintone (https://kintone.dev/en/)](https://kintone.dev/en/). However, upon arrival, I found that only MCUs were provided /(ㄒoㄒ)/~~. My recent game project features exceptionally complex data structures (front-end data fetching, front-end state management, back-end game data generation, game record databases, etc.). While browsing the tech stack recommendations mentioned in the MLH email from the event sponsors, I discovered that Kintone's form-based, low-code drag-and-drop development was incredibly straightforward. So I thought, why not use it for the game's backend database design?

#### How we built it
* Client-end: Vue.js (A web front-end like React), Axios, Pinia.
* Server-end: Python Flask and Numpy (for game data gerating).
* Middleware: Node.js Express Framework for getting data from Client-end and submit them to Kintone.
* Deployment: Docker container and docker-compose for a easier CI/CD

#### Challenges we ran into
Due to my use of a frontend framework for client development instead of traditional HTML, CSS, and JS, I encountered CORS errors in the browser when getting/posting data to the Kintone service, which took me a considerable amount of time to troubleshoot.

#### Accomplishments that we're proud of and What we learned
I implemented a middleware server using Node.js to act as a bridge between the client and Kintone service, which solved the CORS issue in the browser. Additionally, I utilized LLM to assist with coding during the project development, significantly boosting development efficiency.

#### What's next for Hack Kintone with Nashsweeper
I plan to expand Nashsweeper's database based on Kintone, enabling it to record more game information. At the same time, I will set up reasonable data read configurations to reduce data retrieval times.


## 0x01 How to use?
### In dev mode
* If you want to run this project, you should start the backend service firstly by changing your terminal path to [nashsweeper-banckend](./nashsweeper-backend/) and reading the [readme file](nashsweeper-backend/README.md) carefully. Then you should run the frontend service by changing your disk to [nashsweeper-front](./nashsweeper-front/) and follow the [readme file](nashsweeper-front/README.md) step by step.
* What deserves your attention most is that both the backend and frontend services ports cannot be taken by other applications, or you won't be able to run it correctly.
### In Docker Micro-service mode
**This instruction only applies to Linux!!!**
* STEP 1: Make sure you have installed docker in advance. If you didn't, just run the following command:

```shell
# if you use curl
curl -fsSL https://get.docker.com/ | sh
# or wget
wget -O- https://get.docker.com/ | sh
```
* STEP 2: Make sure you have **docker-compose**, **git** installed

```shell
sudo apt install docker-compose git
```
* STEP 3: Git this repository and change disk to the repository

```shell
git clone https://github.com/QianZeHao123/Nashsweeper-with-Kintone.git
cd path/to/Nashsweeper-with-Kintone
```
* STEP 4: Edit the profile for frontend to backend

```shell
# edit the two belowing profile 
# nashsweeper/nashsweeper-client/BackendServerInfo.json
{
    "backendIP": "http://127.0.0.1:5000/",
    "nodebridgeIP": "http://127.0.0.1:3000/",
    # change the backendIP from 127.0.0.1:5000 to your IP address
    # For example: In my home, my device IP is 192.168.1.104
    # and my backend port is 5000
    # so backendIP is: "backendIP": "http://192.168.1.104:5000/",
    "backendName":"Server Name",
    "backendOS":"Server OS",
    "backendCapacity":"Server Cap"
}
```
* STEP 5: Build the images of nashsweeper

```shell
sudo docker-compose build
```
* STEP 6: Run the containers

```shell
sudo docker-compose up -d
```
* STEP 7: Stop nashsweeper

```shell
sudo docker-compose down
```
