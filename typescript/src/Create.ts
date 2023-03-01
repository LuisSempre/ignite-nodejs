interface Course {
    name: string;
    duration: number;
    educator: string;
}

class Create {
    static execute: any
    execute({ duration, educator, name}: Course) {
        console.log(name, duration, educator)
    }
}

export default Create