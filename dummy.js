const User = require('./models/user');
const Club = require('./models/club');
const Activity = require('./models/activity');
const Notification = require('./models/notification');

async function dummyData(){


    // await Club.insertMany([
    //     {name:"Artificial Intelligance Club",image:"club-1.jpg",about:"Our club aims to ensure that students are in touch with artificial intelligence and equipped in the field of artificial intelligence. For this purpose, we organize interviews, trainings and conferences every year with our professors who are currently interested in artificial intelligence and experts in business life. It aims to guide you on where to start and how to proceed in artificial intelligence, with the guidance of experienced members within the club.",
    //     president:"Ahmet Yılmaz",vicePresident:"Mehmet Şimşek",email:"aiclub@uskudar.edu.tr",category:"Technology"},

    //     {name:"Ballroom Dancing Club",image:"club-2.jpg",about:"The Ballroom Dancing Club offers a vibrant space for members to learn and refine their dance skills while fostering a sense of elegance and camaraderie through various dance forms like waltz, salsa, and tango.",
    //     president:"Derya Özdemir",vicePresident:"Ayşe Demir",email:"dancingclub@uskudar.edu.tr",category:"Entertainment"},

    //     {name:"Engineering Society Club",image:"club-3.jpg",about:"The Engineering Society brings together aspiring engineers to collaborate on projects, share knowledge, and explore innovative solutions to real-world problems, fostering a culture of curiosity, creativity, and excellence in engineering.",
    //     president:"Burak Aktaş",vicePresident:"Elif Aksoy",email:"engineeringclub@uskudar.edu.tr",category:"Science"},

    //     {name:"Engineering and Technology Club",image:"club-4.jpg",about:"The Engineering and Technology Club provides a hands-on learning experience for members to delve into the world of mechanics, robotics, and technology, fostering practical skills, problem-solving abilities, and innovation.",
    //     president:"Cemal Öztürk",vicePresident:"Ahmet Yıldırım",email:"engineeringclub@uskudar.edu.tr",category:"Technology"},

    //     {name:"Sciences Club",image:"club-5.jpg",about:"The Sciences Club serves as a hub for students passionate about science to engage in discussions, conduct experiments, and explore various branches of science, fostering curiosity, inquiry, and scientific literacy.",
    //     president:"Sevim Aydın",vicePresident:"Nilüfer Güneş",email:"scienceclub@uskudar.edu.tr",category:"Science"},

    //     {name:"Gastronomy Club",image:"club-6.jpg",about:"The Gastronomy Club celebrates the art and science of food, offering members the opportunity to explore different cuisines, culinary techniques, and food cultures through cooking workshops, tastings, and food-related events.",
    //     president:"Serkan Özkan",vicePresident:"Sevgi Yıldız",email:"gastronomyclub@uskudar.edu.tr",category:"Entertainment"},

    //     {name:"Turkish Music Club",image:"club-7.jpg",about:"The Turkish Music Club celebrates the rich musical heritage of Turkey, offering members the opportunity to learn and perform traditional Turkish music instruments, songs, and dances, fostering cultural appreciation and artistic expression.",
    //     president:"Tolga Kaya",vicePresident:"",email:"musicclub@uskudar.edu.tr",category:"Entertainment"},

    //     {name:"Chess Club",image:"club-8.jpg",about:"The Chess Club provides an opportunity for members to indulge in strategic thinking, improve their chess skills, and participate in friendly competitions, promoting critical thinking, concentration, and sportsmanship.",
    //     president:"Barış Şahin",vicePresident:"Zeynep Kaya",email:"chessclub@uskudar.edu.tr",category:"Entertainment"},

    //     {name:"Drama Club",image:"club-9.jpg",about:"The Drama Club offers a creative outlet for students to express themselves through acting, directing, and stagecraft, fostering teamwork, confidence, and a love for the performing arts.",
    //     president:"İrem Yılmaz",vicePresident:"Hasan Arslan",email:"dramaclub@uskudar.edu.tr",category:"Entertainment"},

    //     {name:"Folklore Club",image:"club-10.jpg",about:"The Folklore Club invites members on a journey to explore the diverse tapestry of global traditions, myths, and legends, offering a space to share stories, music, dances, and rituals from different cultures, fostering a deep appreciation for our shared human heritage and promoting cross-cultural understanding and unity.",
    //     president:"Melis Eren",vicePresident:"Mustafa Çelik",email:"folkloreclub@uskudar.edu.tr",category:"Entertainment"},

    // ])



    // await Activity.insertMany([
    //     {name:"AI Challange",image:"activity-1.jpg",about:"Participation in external AI competitions and encouraging members to hone their skills and compete on a global scale.", 
    //     date:"18.05.2024 - 13:00",place:"Central Campus - Nermin Tarhan Conference Hall",club:"6644534ea95ea67c4e8fbff8",category:"Technology"},

    //     {name:"AI Tutorials",image:"activity-2.jpg",about:"Tutorials on popular AI frameworks and tools like TensorFlow, PyTorch, or scikit-learn, catering to both beginners and advanced members", 
    //     date:"22.05.2024 - 15:00",place:"Çarşı Campus - Emir Nebi Conference Hall",club:"6644534ea95ea67c4e8fbff8",category:"Technology"},

    //     {name:"AI Demos and Showcase",image:"activity-3.jpg",about:"Interactive demos showcasing AI applications developed by club members, ranging from image recognition and natural language processing to autonomous systems and chatbots.", 
    //     date:"12.05.2024 - 13:00",place:"Central Campus - Nermin Tarhan Conference Hall",club:"6644534ea95ea67c4e8fbff8",category:"Technology"},

    //     {name:"AI Research Discussion",image:"activity-4.jpg",about:"Discussions on recent advancements and breakthroughs in the field of artificial intelligence, including topics like deep learning, reinforcement learning, and AI ethics.",
    //     date:"07.06.2024 - 16:00",place:"Central Campus - Ayhan Songar Conference Hall",club:"6644534ea95ea67c4e8fbff8",category:"Technology"},

    //     {name:"Dance Class", image:"bl3.jpg", date:"18.05.2024 - 15:30", about:"Experience the grace and rhythm of ballroom dancing at our exclusive event, Ballroom Beats. Join us now!", 
    //     place:"Central Campus A-227",club:"6644534ea95ea67c4e8fbff9",category:"Entertainment"},

    //     {name:"Choreography Workshops", image:"bl1.jpg", date:"28.05.2024 - 11:30", about:"Join us for an exhilarating journey into the world of dance creativity at our Choreography Workshops! Whether you're a seasoned dancer or just starting out, this event is designed to inspire and empower you to unleash your artistic potential.", 
    //     place:"Central Campus A-227",club:"6644534ea95ea67c4e8fbff9",category:"Entertainment"},

    //     {name:"Dance Competition", image:"bl2.jpg", date:"18.05.2024 - 13:30", about:"Calling all dancers to the dance floor for an electrifying showdown of talent, skill, and passion at our Dance Competition! Get ready to dazzle the audience, impress the judges, and take your place among the stars of the ballroom. Showcase your expertise in a variety of ballroom dance styles, including Waltz, Tango, Foxtrot, Cha-Cha, and more!", 
    //     place:"Central Campus A-227",club:"6644534ea95ea67c4e8fbff9",category:"Entertainment"},

    //     {name:"Strategy Workshops", image:"c2.jpg", date:"24.05.2024 - 13:00", about:" For an enlightening exploration of strategic principles and tactics at our Strategy Workshops! Whether you're a seasoned strategist or new to the world of strategic thinking, this event offers valuable insights and practical tools to enhance your decision-making skills.Gain a deeper understanding of strategic concepts and frameworks essential for success in various domains, including business, gaming, and everyday life.", 
    //     place:"Central Campus A-332",club:"6644534ea95ea67c4e8fbfff",category:"Entertainment"},

    //     {name:"Chess Puzzles", image:"c1.jpg", date:"25.05.2024 - 13:00", about:"Prepare to embark on an exhilarating journey into the world of chess mastery at our Chess Puzzles event! Whether you're a seasoned grandmaster or a novice enthusiast, this event offers a thrilling opportunity to sharpen your tactical acumen and expand your chess repertoire. Delve into a diverse array of chess puzzles designed to test your tactical skills, pattern recognition, and strategic thinking.", 
    //     place:"Central Campus A-332",club:"6644534ea95ea67c4e8fbfff",category:"Entertainment"},

    //     {name:"Script Writing Workshops", image:"d2.jpg", date:"19.05.2024 - 11:30", about:"Join us for an immersive exploration of the art and craft of script writing at our Script Writing Workshops! Whether you're an aspiring playwright or a seasoned storyteller, this event offers invaluable insights and practical techniques to help you bring your creative visions to life on the page.Don't miss this opportunity to hone your craft, connect with fellow writers, and embark on a transformative journey of self-expression through script writing. Join us at Script Writing Workshops and unlock the power of storytelling to captivate and inspire audiences.", 
    //     place:"Central Campus A-333",club:"6644534ea95ea67c4e8fc000",category:"Entertainment"},

    //     {name:"Acting Exercises", image:"d3.jpg", date:"29.05.2024 - 14:30", about:"Step into the spotlight and unleash your creative potential at our Acting Exercises event! Whether you're a seasoned performer or new to the stage, this event offers a supportive and dynamic environment to stretch your acting muscles, experiment with new techniques, and hone your craft.Dive deep into the minds and motivations of your characters as you explore a variety of acting exercises designed to enhance emotional depth, authenticity, and believability in your performances.", 
    //     place:"Central Campus A-333",club:"6644534ea95ea67c4e8fc000",category:"Entertainment"},

    //     {name:"costume creation session", image:"d1.jpg", date:"23.05.2024 - 17:30", about:"A hands-on exploration of the art of costume design at our Costume Creation Session! Whether you're a seasoned seamstress or new to the world of costume crafting, this event offers a fun and collaborative opportunity to unleash your creativity and transform your theatrical visions into stunning reality.Roll up your sleeves and dive into the world of costume construction with guidance from experienced instructors and fellow participants. Learn essential sewing techniques, fabric manipulation methods, and embellishment strategies to bring your designs to life with style and flair.", 
    //     place:"Central Campus A-333",club:"6644534ea95ea67c4e8fc000",category:"Entertainment"},

    //     {name:"Coding Workshop", image:"es2.jpg", date:"22.05.2024 - 14:00", about:"an immersive dive into the world of coding at our Coding Workshop! Whether you're a budding programmer or a seasoned developer, this event offers a dynamic and supportive environment to enhance your coding skills, tackle real-world challenges, and unleash your creativity in the digital realm. Apply your newfound knowledge and skills to real-world projects and coding challenges designed to simulate the experience of working in a professional engineering environment. Collaborate with fellow participants, share ideas, and tackle complex problems together.", 
    //     place:"Central Campus A-223",club:"6644534ea95ea67c4e8fbffa",category:"Science"},

    //     {name:"Design Challenge", image:"es1.jpg", date:"13.05.2024 - 12:00", about:"Get ready to unleash your creativity and problem-solving prowess at our Design Challenge event! Whether you're a seasoned designer or just starting out, this event offers an exciting opportunity to push the boundaries of innovation, collaborate with like-minded individuals, and showcase your design skills to the world. Explore real-world problems and challenges facing society today, and brainstorm innovative solutions that leverage engineering principles and design thinking. Identify opportunities for positive change and make a difference in your community and beyond.", 
    //     place:"Central Campus A-223",club:"6644534ea95ea67c4e8fbffa",category:"Science"},

    //     {name:"Traditional Folk Dance", image:"f1.jpg", date:"22.05.2024 - 16:00", about:"Step into a world of vibrant rhythms, captivating melodies, and rich cultural traditions at our Traditional Folk Dance Celebration! Join us for an enchanting evening of music, dance, and community as we pay homage to the diverse tapestry of folkloric heritage from around the globe. Be mesmerized by captivating performances from our talented dancers, musicians, and vocalists, who will bring the spirit and energy of folk traditions to life on stage.", 
    //     place:"Central Campus B-238",club:"6644534ea95ea67c4e8fc001",category:"Entertainment"},

    //     {name:"Cooking Classes", image:"g2.jpg", date:"25.05.2024 - 12:00", about:"Embark on a delicious journey into the world of culinary arts with our Cooking Classes! Whether you're a novice in the kitchen or a seasoned chef, join us for a hands-on culinary experience that will ignite your passion for cooking, expand your culinary repertoire, and tantalize your taste buds with flavors from around the world. Roll up your sleeves, don your apron, and get ready to get cooking! Put your newfound skills to the test as you prepare delicious recipes alongside fellow food enthusiasts in a fun and interactive learning environment.", 
    //     place:"Central Campus B-342",club:"6644534ea95ea67c4e8fbffd",category:"Entertainment"},

    //     {name:"Food Tasting Event", image:"g1.jpg", date:"03.06.2024 - 16:00", about:"Join us for an unforgettable culinary experience at our Food Tasting Event! Indulge your senses and tantalize your taste buds with a delectable array of dishes prepared by our talented chefs, showcasing the finest flavors and ingredients from around the world. Treat yourself to an exquisite selection of gourmet dishes, artisanal cheeses, charcuterie, desserts, and more, carefully curated to delight even the most discerning palate.", 
    //     place:"Central Campus B-342",club:"6644534ea95ea67c4e8fbffd",category:"Entertainment"},

    //     {name:"DIY Electronics Workshop", image:"etc2.jpg", date:"25.05.2024 - 12:00", about:"An electrifying journey into the world of do-it-yourself electronics at our DIY Electronics Workshop! Whether you're a seasoned tinkerer or new to the world of circuits and soldering, this event offers a hands-on learning experience that will empower you to bring your electronic dreams to life. Don't miss this opportunity to unleash your creativity, expand your skills, and join a vibrant community of makers and innovators at the DIY Electronics Workshop! Whether you're a hobbyist, student, or professional, this event promises to be an exciting and rewarding experience for all who attend.", 
    //     place:"Central Campus Lab-342",club:"6644534ea95ea67c4e8fbffb",category:"Technology"},

    //     {name:"Tech Talk", image:"etc1.jpg", date:"15.05.2024 - 15:00", about:"Join us for an engaging discussion and exploration of the fascinating intersection between mechanics and technology at our Tech Talk event! Whether you're a mechanical enthusiast, a tech aficionado, or simply curious about the ways in which these two disciplines intersect, this event offers insights, inspiration, and opportunities for learning and collaboration. Hear from industry experts and thought leaders who will share their perspectives and experiences at the forefront of the intersection between mechanics and technology. Gain valuable insights into emerging trends, best practices, and opportunities for career development in this dynamic and interdisciplinary field.", 
    //     place:"Central Campus - Nermin Tarhan Conference Hall",club:"6644534ea95ea67c4e8fbffb",category:"Technology"},

    //     {name:"Scientific Experiments", image:"sc2.jpg", date:"25.05.2024 - 14:00", about:"Roll up your sleeves and dive into a variety of hands-on experiments covering a range of scientific disciplines, including biology, chemistry, physics, and more. Explore the principles of scientific inquiry, observe natural phenomena, and conduct experiments that will deepen your understanding of the world around you. Visit interactive stations and exhibits showcasing cutting-edge research, innovative technologies, and fascinating scientific discoveries.", 
    //     place:"Central Campus Lab-223",club:"6644534ea95ea67c4e8fbffc",category:"Science"},

    //     {name:"Debates On Current Scientific Issues", image:"sc1.jpg", date:"06.06.2024 - 13:00", about:"Join us for a thought-provoking exploration of current scientific issues and debates at our Debates on Current Scientific Issues event! Whether you're passionate about science, technology, or the environment, this event offers a platform for lively discussion, critical thinking, and intellectual exchange on topics that shape our world and our future. Explore a diverse range of topics and issues at the intersection of science, technology, society, and ethics. From climate change and genetic engineering to artificial intelligence and space exploration, there's no shortage of compelling issues to debate and discuss.", 
    //     place:"Central Campus Lab-223",club:"6644534ea95ea67c4e8fbffc",category:"Science"},

    //     {name:"Saz and Ney Class", image:"tm3.jpg", date:"28.05.2024 - 14:00", about:"Embark on a musical journey into the rich traditions of Turkish music with our Saz and Ney Class! Whether you're a beginner eager to learn the basics or an experienced musician seeking to refine your skills, this class offers a unique opportunity to immerse yourself in the enchanting sounds of the saz and ney, two iconic instruments that have shaped the musical landscape of Turkey for centuries. Showcase your newfound skills and talents in performance opportunities offered through our Turkish Music Club.",
    //     place:"Central Campus - Nermin Tarhan Conference Hall",club:"6644534ea95ea67c4e8fbffe",category:"Entertainment"},

    //     {name:"Turkish Music Concert", image:"tm2.jpg", date:"18.05.2024 - 18:00", about:"Experience the magic of Turkish music come to life at our Turkish Music Concert! Join us for an enchanting evening of melodies, rhythms, and poetry that capture the rich tapestry of musical traditions from across Turkey, performed by talented musicians and vocalists from our Turkish Music Club.Lose yourself in the mesmerizing harmonies and lyrical poetry of Turkish vocal music, as our talented vocalists weave tales of love, longing, and nostalgia through their soul-stirring performances. Let the melodies of Turkish folk songs and classical compositions fill your heart with joy and inspiration.", 
    //     place:"Central Campus - Nermin Tarhan Conference Hall",club:"6644534ea95ea67c4e8fbffe",category:"Entertainment"},

    //     {name:"Songwriting session", image:"tm1.jpg", date:"03.06.2024 - 16:00", about:"Unlock your potential as a songwriter and storyteller at our Songwriting Session! Join us for a collaborative and inspiring workshop where you'll learn the art and craft of songwriting from experienced musicians and lyricists, and have the opportunity to create your own original songs inspired by the rich traditions of Turkish music. Dive deep into the art of lyric writing with guided exercises and prompts designed to inspire and challenge you to find your unique voice as a songwriter.", 
    //     place:"Central Campus - Nermin Tarhan Conference Hall",club:"6644534ea95ea67c4e8fbffe",category:"Entertainment"}

    // ])



    // await User.insertMany([
    //     {name:"Fatma Güneş",email:"sks@uskudar.edu.tr",password:"123",auth:"Admin",club:"664453626b51df045acc8b23"},
    //     {name:"Ahmet Yılmaz",email:"aiclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fbff8"},
    //     {name:"Derya Özdemir",email:"danceclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fbff9"},
    //     {name:"Barış Şahin",email:"chessclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fbfff"},
    //     {name:"İrem Yılmaz",email:"dramaclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fc000"},
    //     {name:"Burak Aktaş",email:"engineeringclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fbffa"},
    //     {name:"Melis Eren",email:"folkloreclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fc001"},
    //     {name:"Serkan Özkan",email:"gastronomyclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fbffd"},
    //     {name:"Cemal Öztürk",email:"etclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fbffb"},
    //     {name:"Sevim Aydın",email:"sciencesclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fbffc"},
    //     {name:"Tolga Kaya",email:"musicclub@uskudar.edu.tr",password:"123",auth:"Club Manager",club:"6644534ea95ea67c4e8fbffe"},
    //     {name:"Feride Şahin",email:"feride.sahin@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200209321",department:"Software Engineering",grade:4},
    //     {name:"Mehmet Yılmaz",email:"mehmet.yılmaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"220218003",department:"Computer Engineering",grade:1},
    //     {name:"Ayşe Kaya",email:"ayse.kaya@.st.uskudar.edu.tr",password:"123",auth:"Student", id:"200269123",department:"Bioengineering",grade:3},
    //     {name:"Emir Öztürk",email:"emin.ozturk@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200209342",department:"Electrical-Electronics Engineering",grade:2},
    //     {name:"Zeynep Arslan",email:"zeynep.arslan@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200259353",department:"Forensic Science ",grade:2},
    //     {name:"Ali Demir",email:"ali.demir@st.uskudar.edu.tr",password:"123",auth:"Student", id:"220209381",department:"Industrial Engineering",grade:1},
    //     {name:"Ayda Yılmaz",email:"ayda.yilmaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"220249356",department:"Industrial Engineering",grade:1},
    //     {name:"Mustafa Çelik",email:"mustafa.celik@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200209545",department:"Chemical Engineering ",grade:4},
    //     {name:"Esra Kocaman",email:"esra.kocaman@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200219785",department:"Computer Engineering",grade:3},
    //     {name:"Aydın Çebi",email:"aydin.cebi@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210219116",department:"Computer Engineering",grade:2},
    //     {name:"Muzaffer Galip",email:"muzaffer.galip@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210219002",department:"Computer Engineering",grade:2},
    //     {name:"Efe Öz",email:"efe.oz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210209374",department:"Computer Engineering",grade:2},
    //     {name:"Sıla Erdoğan",email:"sila.erdogan@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190219015",department:"Computer Engineering",grade:4},
    //     {name:"Kıymet Öztürk",email:"kiymet.ozturk@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190219356",department:"Computer Engineering",grade:4},
    //     {name:"Mehmet Şimşek",email:"mehmet.simsek@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200209543",department:"Software Engineering",grade:3},
    //     {name:"Ayşe Demir",email:"ayse.demir@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200209499",department:"Software Engineering",grade:3},
    //     {name:"Zeynep Kaya",email:"zeynep.kaya@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190229016",department:"Chemical Engineering",grade:4},
    //     {name:"Hasan Arslan",email:"hasan.arslan@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200209224",department:"Software Engineering",grade:3},
    //     {name:"Elif Aksoy",email:"elif.aksoy@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190219543",department:"Chemical Engineering",grade:4},
    //     {name:"Mustafa Çelik",email:"mustafa.celik@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200209008",department:" Engineering",grade:3},
    //     {name:"Sevgi Yıldız",email:"sevgi.yildiz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190239126",department:"Electrical-Electronics Engineering",grade:4},
    //     {name:"Ahmet Yıldırım",email:"ahmet.yildirim@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190209256",department:"Software Engineering",grade:4},
    //     {name:"Nilüfer Güneş",email:"nilufer.gunes@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200229108",department:"Chemical Engineering",grade:3},
    //     {name:"Emre Korkmaz",email:"emre.korkmaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190239138",department:"Electrical-Electronics Engineering",grade:4},
    //     {name:"Ayşe Kır",email:"ayse.kir@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200219055",department:"Computer Engineering",grade:3},
    //     {name:"Nevin Ölmez",email:"nevin.olmez@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210229244",department:"Chemical Engineering",grade:2},
    //     {name:"Bahri Saki",email:"bahri.saki@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200239854",department:"Electrical-Electronics Engineering",grade:3},
    //     {name:"Mehmet Almaz",email:"mehmet.almaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210229221",department:"Chemical Engineering",grade:2},
    //     {name:"Saniye Özkan",email:"saniye.ozkan@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190209182",department:"Software Engineering",grade:4},
    //     {name:"Kader Yıldız",email:"kader.yildiz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210239009",department:"Electrical-Electronics Engineering",grade:2},
    //     {name:"Alihan Kırdar",email:"alihan.kirdar@st.uskudar.edu.tr",password:"123",auth:"Student", id:"220209101",department:"Software Engineering",grade:1},
    //     {name:"Necip Kalmaz",email:"necip.kalmaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200229616",department:"Chemical Engineering",grade:3},
    //     {name:"Ahmet Baysan",email:"ahmet.baysan@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210209238",department:"Software Engineering",grade:2},
    //     {name:"Kadir İhsanoğlu",email:"kadir.ihsanoglu@st.uskudar.edu.tr",password:"123",auth:"Student", id:"220229277",department:"Chemical Engineering",grade:1},
    //     {name:"Sıla Kırılmaz",email:"sila.kirilmaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200239432",department:"Electrical-Electronics Engineering",grade:3},
    //     {name:"Pelin Korkusuz",email:"pelin.korkusuz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190229944",department:"Chemical Engineering",grade:4},
    //     {name:"Fadime Yol",email:"fadime.yol@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190269074",department:"Bioengineering Engineering",grade:4},
    //     {name:"Jale Kılıç",email:"jale.kilic@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200209771",department:"Software Engineering",grade:3},
    //     {name:"Aydoğan Sönmez",email:"aydogan.sonmez@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210269001",department:"Bioengineering Engineering",grade:2},
    //     {name:"İhsan Yıldırım",email:"ihsan.yildirim@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210259211",department:"Industrial Engineering",grade:2},
    //     {name:"Mahmut Karaca",email:"mahmut.karaca@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190219398",department:"Computer Engineering",grade:4},
    //     {name:"Benan Öz",email:"benan.oz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200259685",department:"Industrial Engineering",grade:3},
    //     {name:"Özge Nur",email:"ozge.nur@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200269436",department:"Bioengineering Engineering",grade:3},
    //     {name:"Baysal Yıkılmaz",email:"baysal.yikilmaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190239129",department:"Electrical-Electronics Engineering",grade:4},
    //     {name:"Enver Öztekin",email:"enver.oztekin@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210239940",department:"Electrical-Electronics Engineering",grade:2},
    //     {name:"Muhittin Soysal",email:"muhittin.soysal@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190219856",department:"Computer Engineering",grade:4},
    //     {name:"Özlem Özdil",email:"ozlem.ozdil@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200259271",department:"Industrial Engineering",grade:3},
    //     {name:"Zehra Kadimoğlu",email:"zehra.kadimoglu@st.uskudar.edu.tr",password:"123",auth:"Student", id:"200269515",department:"Bioengineering Engineering",grade:3},
    //     {name:"Kahraman Yılmaz",email:"kahraman.yilmaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"210259521",department:"Industrial Engineering",grade:2},
    //     {name:"Fatma Ahmaz",email:"fatma.ahmaz@st.uskudar.edu.tr",password:"123",auth:"Student", id:"190239431",department:"Electrical-Electronics Engineering",grade:4},
    // ])



    // await Club.insertMany([
    //     {name:"Admin",president:"Fatma Güneş",vicePresident:"Fatma Güneş",email:"sks@uskudar.edu.tr"}
    // ])
}

module.exports = dummyData;