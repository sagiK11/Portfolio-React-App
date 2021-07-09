import jobao from "../assets/images/jobao_logo.png"
import fitness_badge from "../assets/images/fit_logo.png"
import dreamcatcher from "../assets/images/d_logo.png"
import assembler from "../assets/images/assembler.png"
import academic_office from "../assets/images/academic_office.png"

export const projects = [
    {
        title: "Jobao",
        description: "A candidate's personal assistant with handling his job applications while he is at his journey of finding a new position.\n",
        image: jobao,
        tags: ["Android", "Kotlin", "Room", "Dagger 2"],
        code: "https://github.com/sagiK11/Jobao-Android",
        visit: "https://play.google.com/store/apps/details?id=com.sagikor.android.jobao&hl=en_US&gl=US",
        time: "2021",
        id: 0
    },
    {
        title: "Dreamcatcher by Hila",
        description: "Online shop for selling dreamcatchers and hand-made art for the instagram brand 'dreamcatcher_by_hila'.\n",
        image: dreamcatcher,
        tags: ["React.JS", "Redux", "Firebase"],
        code: "https://github.com/sagiK11/Dreamcatcher-React-App",
        visit: "https://hiladream.co.il/",
        time: "2020",
        id: 1
    },
    {
        title: "Fitness Badge",
        description: "An app to calculate and keep track of student's results digitally at their physical exams substituting pen and paper.\n",
        image: fitness_badge,
        tags: ["Android", "Java", "Firebase"],
        code: "https://github.com/sagiK11/Fitness-Badge-Android",
        visit: "https://play.google.com/store/apps/details?id=com.sagikor.android.fitracker&hl=en_US",
        time: "2018",
        id: 2
    },
    { // with the intention of helping students manage their university's assignments
        title: "Academic Office",
        description: "An eco system for students to manage their univeristy's tests and assignemnts as well as sharing ideas with each other.\n",
        image: academic_office,
        tags: ["Java", "JavaFx", "Postgre/SQL"],
        code: "https://github.com/sagiK11/Academic-Office-JavaFX-App",
        visit: "https://github.com/sagiK11/Academic-Office-JavaFX-App",
        time: "2019",
        id: 3
    },
    {
        title: "Assembler",
        description: "Command line app that takes as input assembly language text files and outputs machine code files (object files).\n",
        image: assembler,
        tags: ["C", "Linux"],
        code: "https://github.com/sagiK11/Assembly-Compiler-Course-Project",
        visit: "https://github.com/sagiK11/Assembly-Compiler-Course-Project",
        time: "2018",
        id: 4
    }
]