// this is just a fake module to simulate interacting with a server

// simulate the network request time...
const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  })

async function savePost(postData) {
  await sleep(1000)
  return { data: { post: postData } }
}

const greetings = ['Hello', 'Hi', 'Hey there', `What's up`, 'Howdy', `G'day`]

async function loadGreeting(subject) {
  return { data: { greeting: `${await fetchRandomGreeting()} ${subject}` } }
}

async function fetchRandomGreeting() {
  await sleep(1000)
  return greetings[Math.floor(Math.random() * greetings.length)]
}

// a fire-and-forget function to report errors
// for componentDidCatch
async function reportError() {
  await sleep(1000)
  return { success: true }
}

async function submitForm() {
  await sleep(1000)
  return { success: true }
}


// this is an actual fetch 
const getUser = async (id: number = 1) => {
  const response = await fetch(
    `https://api.fake-rest.refine.dev/users/${id}`
  );
  const result = await response.json();
  return result;
}


export { savePost, loadGreeting, reportError, submitForm, getUser }
