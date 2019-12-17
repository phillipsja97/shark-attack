const students = [
  {
    id: 'student1',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
    image1: 'https://img.pngio.com/computer-icons-fishing-clip-art-simple-lines-png-download-1600-simple-fish-png-black-and-white-900_900.jpg',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student5',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student6',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: true,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student9',
    firstName: 'Gabriel',
    lastName: 'Seals',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
    image1: 'https://www.seekclipart.com/clipng/middle/137-1370312_marine-fish-clipart-golden-fish-fish-icon-in.png',
    image2: 'https://f0.pngfuel.com/png/879/801/black-and-white-skull-skull-and-crossbones-skull-and-bones-skull-and-bones-png-clip-art-thumbnail.png',
  },
];

const getStudents = () => students;

const livingStudents = () => {
  const liveStudents = students.filter((x) => x.isDead === false);
  return liveStudents;
};

const theDeadStudents = () => {
  const deadStudents = students.filter((x) => x.isDead === true);
  return deadStudents;
};

const followTheLight = (studentId) => {
  const studentIndex = students.findIndex((student) => student.id === studentId);
  students[studentIndex].isDead = true;
};

export default {
  getStudents,
  livingStudents,
  theDeadStudents,
  followTheLight,
};
