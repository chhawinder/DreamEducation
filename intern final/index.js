




// var words = ['Welcome To DirectionEducare', 'Another Phrase', 'You can add more phrases here'],
//     i = 0,
//     j = 0,
//     forwards = true,
//     speed = 70;

// var wordflick = function () {
//   setInterval(function () {
//     var word = words[i];
//     var displayWord = word.substring(0, j);

//     if (forwards) {
//       j++;
//       if (j > word.length) {
//         forwards = false;
//         setTimeout(function () {
//           forwards = true;
//           i = (i + 1) % words.length;
//         }, 1000); // Delay before switching to the next word
//       }
//     } else {
//       j--;
//       if (j === 0) {
//         forwards = true;
//       }
//     }

//     document.getElementById('text').textContent = displayWord; // Update the text inside the <h2> element
//   }, speed);
// };

// window.addEventListener('load', function () {
//   wordflick();
// });




const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text: 'Working with Direction Educare Pvt. Ltd. has been an amazing experience. Its not often that you come across a company that is both consistently responsive and incredibly professional. Their services and product development exemplified how we intended our material to be represented. The attention to detail was superb. They are really inventive and entertaining! Working with Direction Educare has been a pleasure, and we intend to continue doing so in the future.'
    },
    {
        name: 'June Cha',
        position: 'Softwere Engr',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Im quite impressed with the breadth and depth of Direction Educares expertise. From publishing to developing high-quality content, the Direction Educare team met tight deadlines while providing the finest content experience. The excellent project management staff and support offered were outstanding.'
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: 'Loved the output result from the application'
    }
    
]

let idx = 1

function upadteTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(upadteTestimonial, 5000)

const nextTestimonialButton = document.getElementById('testimonial');


nextTestimonialButton.addEventListener('click', upadteTestimonial);


// cards
document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.getElementById('unique-card-container');

  const jsonData = [
    {
      title: 'K12 Service Provider​',
      content: 'Direction Educare provides efficient e-learning services with designing, developing, editing, and assessing optimised e-learning content services for K12 educational institutions, publishing houses and EdTech companies.',
    },
    {
      title: 'Higher Level Education​',
      content: 'Direction Educare delivers outstanding e-learning services and creates or modifies content for higher-grade education. Our team is empowered with teachers, copyeditors, and proofreaders who have years of industry experience.',
    },
    {
      title: 'Corporate Learning​',
      content: 'Direction Educare, one of the best e-learning solutions providers, provides skill-based training programs and develops content for various academic subjects, technologies, and customized topics suggested by our corporate clients.',
    },
    {
      title: 'SEO based Content Creation​',
      content: 'SEO writing involves SEO content writers who have experience and knowledge of keyword that can help to your website to improve rank. We are delivering blogs to education, marketing, management, healthcare and finance industry.',
    },
    {
      title: 'Live Tutoring / Live Doubt Solving​',
      content: 'Direction Educare, one of the leading content development company, provides all kinds of online tutoring services, which can be text-based, video-based, or audio-based. Our experienced online tutors explain concepts with clarity and with the help of examples to make the lessons more interactive.',
    },
    {
      title: 'Video Creation​',
      content: 'Direction Educare delivers academic content in form of videos also. We develop video lectures, video solutions and animated videos in form of 2D and 3D.',
    },
    {
      title: 'Curriculum Development​',
      content: 'Direction Educare has an efficient team of curriculum planners who adhere to the common core standards and design a curriculum framework as per the grade level. We are the best curriculum development companies and have a team of innovative and out-of-the-box thinking curriculum designers. innovative ways to impart education.',
    },
    {
      title: 'Books Writing​',
      content: 'Our team can develops the books for all streams of k12, JEE, NEET, NDA, SSC, Banking and all other Indian competitive exams.',
    },
    {
      title: 'Translation​',
      content: 'Direction Educare provides translation services for education industry. We have expertise in English, Hindi and all Indian regional languages.',
    },
    // Add more data objects for additional cards
  ];

  // Function to create a card element
  function createUniqueCard(data) {
    const card = document.createElement('div');
    card.classList.add('unique-card');
    card.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.content}</p>
    `;
    cardContainer.appendChild(card);
  }

  // Create three rows with three cards in each row
  for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.classList.add('unique-learning-row');

    for (let j = 0; j < 3; j++) {
      if (jsonData.length > 0) {
        createUniqueCard(jsonData.shift());
      }
    }

    cardContainer.appendChild(row);
  }
  const cards = document.querySelectorAll('.unique-card');

    const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

    cards.forEach((card) => {
        cardObserver.observe(card);
    });



    
});





//funtion for animating numbers
document.addEventListener('DOMContentLoaded', function () {
    function animateNumber(elementId, finalValue, duration) {
        const element = document.getElementById(elementId);
        const interval = 10;
        const step = (finalValue / duration) * interval;
        let current = 0;

        function updateNumber() {
            current += step;
            if (current >= finalValue) {
                current = finalValue;
            }
            element.textContent = Math.round(current);
            if (current < finalValue) {
                requestAnimationFrame(updateNumber);
            }
        }

        updateNumber();
    }

    animateNumber('number1', 100, 2000);
    animateNumber('number2', 250, 2500);
    animateNumber('number3', 50, 1500);
});










//my team

document.addEventListener('DOMContentLoaded', () => {
  const teamContainer = document.getElementById('team-container');

  fetch('team-data.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((member) => {
        const card = createTeamCard(member);
        teamContainer.appendChild(card);
      });
    });

  function createTeamCard(member) {
    const card = document.createElement('div');
    card.classList.add('team-card');

    const profilePic = document.createElement('div');
    profilePic.classList.add('profile-pic');
    const image = document.createElement('img');
    image.src = member.image;
    profilePic.appendChild(image);
    card.appendChild(profilePic);

    const info = document.createElement('div');
    info.classList.add('team-card-info');

    const name = document.createElement('h3');
    name.textContent = member.name;
    info.appendChild(name);

    const position = document.createElement('p');
    position.textContent = member.position;
    info.appendChild(position);

    const description = document.createElement('p');
    description.textContent = member.description;
    info.appendChild(description);

    card.appendChild(info);

    return card;
  }
});



