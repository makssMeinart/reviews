// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Changing Materials
const userName = document.querySelector("#author")
const userJob = document.querySelector("#job")
const userImg = document.querySelector("#person-img")
const userInfo = document.querySelector("#info")
// Btns
const prevUser = document.querySelector(".prev-btn")
const nextUser = document.querySelector(".next-btn")
const randomUser = document.querySelector(".random-btn")

let reviewNow = 0;

// Prev User
prevUser.addEventListener("click", () => {
  if(reviewNow === 0) reviewNow = reviews.length - 1
  else reviewNow--
  return replaceInfo(reviews[reviewNow])
})

// Next User
nextUser.addEventListener("click", () => {
  if(reviewNow >= reviews.length - 1) reviewNow = 0
  else reviewNow++
  return replaceInfo(reviews[reviewNow])
})

// Callback changes the info
function replaceInfo(review) {
  userName.innerText = review.name
  userJob.innerText = review.job
  userImg.setAttribute("src", `${review.img}`)
  userInfo.innerText = review.text
}

// The random user Func
randomUser.addEventListener("click", (e) => {
  const randomUser = Math.floor(Math.random() * reviews.length)
  return replaceInfo(reviews[randomUser])
})