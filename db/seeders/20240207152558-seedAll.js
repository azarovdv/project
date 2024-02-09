const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          email: 'admin@admin',
          password: await bcrypt.hash('111', 10),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Types',
      [
        {
          name: 'Млекопитающие',
        },
        {
          name: 'Птицы',
        },
        {
          name: 'Рептилии',
        },
        {
          name: 'Земноводные',
        },
        {
          name: 'Рыбы',
        },
        {
          name: 'Членистоногие',
        },
        {
          name: 'Моллюски',
        },
        {
          name: 'Иглокожие',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Photos',
      [
        {
          path: '/img/лев_1.webp',
        },
        {
          path: '/photo/лев_2.jpg',
        },
        {
          path: '/photo/лев_3.jpg',
        },
        {
          path: '/photo/лев_2.webp',
        },
        {
          path: '/photo/слон_2.jpg',
        },
        {
          path: '/photo/слон_3.jpg',
        },
        {
          path: '/photo/лев_3.webp',
        },
        {
          path: '/photo/орел_2.jpg',
        },
        {
          path: '/photo/орел_3.jpg',
        },
        {
          path: '/img/слон_1.webp',
        },
        {
          path: '/photo/курица_2.jpg',
        },
        {
          path: '/photo/курица_3.png',
        },
        {
          path: '/photo/слон_2.webp',
        },
        {
          path: '/photo/красноухаяЧерепаха_2.jpg',
        },
        {
          path: '/photo/красноухаяЧерепаха_3.jpg',
        },
        {
          path: '/photo/слон_3.webp',
        },
        {
          path: '/photo/геккон_2.webp',
        },
        {
          path: '/photo/геккон_3.jpg',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Animals',
      [
        {
          name: 'Лев',
          body: 'ЛевЛевЛев',
          typeId: '1',
        },
        {
          name: 'Слон',
          body: 'СлонСлонСлонСлонСлон',
          typeId: '1',
        },
        {
          name: 'Орел',
          body: 'ОрелОрелОрелОрелОрел',
          typeId: '2',
        },
        {
          name: 'Курица',
          body: 'КурицаКурицаКурица',
          typeId: '2',
        },
        {
          name: 'Красноухая черепаха',
          body: 'Красноухая черепахаКрасноухая черепаха',
          typeId: '3',
        },
        {
          name: 'Геккон',
          body: 'ГекконГекконГекконГеккон',
          typeId: '3',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'PhotoAnimals',
      [
        {
          animalId: '1',
          photoId: '1',
        },
<<<<<<< HEAD
        {
          animalId: '1',
          photoId: '2',
        },
        {
          animalId: '1',
          photoId: '3',
        },
=======
>>>>>>> dev
        {
          animalId: '1',
          photoId: '2',
        },
<<<<<<< HEAD
        {
          animalId: '2',
          photoId: '5',
        },
        {
          animalId: '2',
          photoId: '6',
        },
=======
>>>>>>> dev
        {
          animalId: '1',
          photoId: '3',
        },
<<<<<<< HEAD
        {
          animalId: '3',
          photoId: '8',
        },
        {
          animalId: '3',
          photoId: '9',
        },
=======
>>>>>>> dev
        {
          animalId: '2',
          photoId: '4',
        },
<<<<<<< HEAD
        {
          animalId: '4',
          photoId: '11',
        },
        {
          animalId: '4',
          photoId: '12',
        },
=======
>>>>>>> dev
        {
          animalId: '2',
          photoId: '5',
        },
<<<<<<< HEAD
        {
          animalId: '5',
          photoId: '14',
        },
        {
          animalId: '5',
          photoId: '15',
        },
=======
>>>>>>> dev
        {
          animalId: '2',
          photoId: '6',
        },
        {
<<<<<<< HEAD
          animalId: '6',
          photoId: '17',
        },
        {
          animalId: '6',
          photoId: '18',}
=======
          animalId: '3',
          photoId: '7',
        },
        {
          animalId: '3',
          photoId: '8',
        },
        {
          animalId: '3',
          photoId: '9',
        },
        {
          animalId: '4',
          photoId: '10',
        },
        {
          animalId: '4',
          photoId: '11',
        },
        {
          animalId: '4',
          photoId: '12',
        },
        {
          animalId: '5',
          photoId: '13',
        },
        {
          animalId: '5',
          photoId: '14',
        },
        {
          animalId: '5',
          photoId: '15',
        },
        {
          animalId: '6',
          photoId: '16',
        },
        {
          animalId: '6',
          photoId: '18',
        },
>>>>>>> dev
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'MPInfos',
      [
        {
          title: 'Всем привет!',
          desc: 'Добро пожаловать в наш зоопарк.',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert('MPPhotos', [{
      path: '/photo/Приветствие.jpeg',
    }], {});

    await queryInterface.bulkInsert(
      'PriceDays',
      [
        {
          day: 'workDayAdults',
          price: '1000',
        },
        {
          day: 'workDayKids',
          price: '700',
        },
        {
          day: 'restDayAdults',
          price: '1500',
        },
        {
          day: 'restDayKids',
          price: '1200',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
