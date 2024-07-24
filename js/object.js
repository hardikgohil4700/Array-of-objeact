// const StudantData = document.getElementById("StudantData");
let student = [{
    fristname: "Hardik",
    lastname: "Gohil",
    age: 17,
    gender: "male",
    address: {
        city: "surat",
        address: "Bhagirath-1, l.h road surat",
        state: "gujarat",
    },

    contact: "8511001899",
    email: "hardikgohil4700@gmail.com",
}, {
    fristname: "jaydip",
    lastname: "zala",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: "vesu  surat",
        state: "gujarat",
    },

    contact: "9399505126",
    email: "Jaydip@gmail.com",
}, {
    fristname: "maya",
    lastname: " patel",
    age: 18,
    gender: "femal",
    address: {
        city: "surat",
        address: "varachha  surat",
        state: "gujarat",
    },
    contact: "9499505567",
    email: "maya123@gmail.com",
}, {
    fristname: "jay",
    lastname: " kalathiya",
    age: 20,
    gender: "male",
    address: {
        city: "surat",
        address: "bapu nagar",
        state: "gujarat",
    },

    contact: "9146526352",
    email: "jay123@gmail.com",
}, {
    fristname: "chirag",
    lastname: " parmar",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: "sudama nagar",
        state: "gujarat",
    },

    contact: "914565452",
    email: "chirag20@gmail.com",
}, {
    fristname: "rajveer",
    lastname: " dabhi",
    age: 16,
    gender: "male",
    address: {
        city: "surat",
        address: "hirabaug surat",
        state: "gujarat",
    },
    contact: "9144665263",
    email: "raj123@gmail.com",
}, {
    fristname: "Rohit",
    lastname: "gamara",
    age: 22,
    gender: "male",
    address: {
        city: "surat",
        address: "sudama chowk  surat",
        state: "gujarat",
    },

    contact: "914565241",
    email: "rohit520@gmail.com",
}, {
    fristname: "mina",
    lastname: " Sharma",
    age: 20,
    gender: "male",
    address: {
        city: "surat",
        address: " sita nagar , surat",
        state: "gujarat",
    },

    contact: "9152457890",
    email: "mina456@gmail.com",
}, {
    fristname: "Nikhil",
    lastname: "Kalsariya",
    age: 17,
    gender: "male",
    address: {
        city: "surat",
        address: " dabholi , surat",
        state: "gujarat",
    },

    contact: "9192668586",
    email: "Nikhil120@gmail.com",
}, {
    fristname: "Pariya",
    lastname: " patel",
    age: 20,
    gender: "femal",
    address: {
        city: "surat",
        address: "Kataranga, surat",
        state: "gujarat",
    },

    contact: "91101235242",
    email: "pariya10@gmail.com",
}, {
    fristname: "mahesh",
    lastname: "goswami",
    age: 15,
    gender: "male",
    address: {
        city: "surat",
        address: "  c- 120 dabholi , surat",
        state: "gujarat",
    },

    contact: "9133125242",
    email: "mahesh01@gmail.com",
}, {
    fristname: "Vishal",
    lastname: " dabhi",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: "maruti chowk",
        state: "gujarat",
    },

    contact: "9112012467",
    email: " Vishal@gmail.com",
}, {
    fristname: "Vijay",
    lastname: "Parmar",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: " amroli, surat",
        state: "gujarat",
    },

    contact: "9145451289",
    email: "changania@gmail.com",
}, {
    fristname: "Tushar",
    lastname: "chavda",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: "udhna surat",
        state: "gujarat",
    },

    contact: "9135626392",
    email: "Tushar45@gmail.com",
}, {
    fristname: "Ajay",
    lastname: "sonlaki",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: "sitanaga, surat",
        state: "gujarat",
    },

    contact: "9100152120",
    email: "ajay78@gmail.com",
}, {
    fristname: "rahul",
    lastname: " vakani",
    age: 22,
    gender: "male",
    address: {
        city: "surat",
        address: "mota varchha surat",
        state: "gujarat",
    },

    contact: "9123894280",
    email: "rahul@gmail.com",
}, {
    fristname: "het",
    lastname: "makvana",
    age: 17,
    gender: "male",
    address: {
        city: "surat",
        address: " nana varchha surat",
        state: "gujarat",
    },

    contact: "9110120456",
    email: "het@gmail.com",
}, {
    fristname: "manisha",
    lastname: " patel",
    age: 17,
    gender: "femal",
    address: {
        city: "surat",
        address: "mini bazar, surat",
        state: "gujarat",
    },

    contact: "9114725253",
    email: "manisha@gmail.com",
}, {
    fristname: "Payal",
    lastname: "Parmar",
    age: 17,
    gender: "femal",
    address: {
        city: "surat",
        address: " maruti chowk surat",
        state: "gujarat",
    },

    contact: "9123305240",
    email: "Payal234@gmail.com",
}, {
    
    fristname: "Komal",
    lastname: "Kalsariya",
    age: 17,
    gender: "femal",
    address: {
        city: "surat",
        address: "bhagirath-1 surat",
        state: "gujarat",
    },

    contact: "9115525263",
    email: "Komal123@gmail.com",
},]
student.forEach((object) => {

    StudantData.innerHTML += (`<div class="col-4"><div class="card p-2 mt-5 bg-dark text-warning  ">
    <div class="d-flex mx-2 ">
    <h3>Name : ${object.fristname}
    </h3>
    <h3 class="mx-2">  ${object.lastname}
    </h3>
    </div>
    <h3>age :  ${object.age}
    
    </h3><h3>gender :  ${object.gender}
    </h3><h3>state : ${object.address.state}
    </h3><h3>city : ${object.address.city}
    </h3><h3>Address :  ${object.address.address}
    </h3><h3>contact :  ${object.contact}</h3><h3>
    email :  ${object.email}</h3></div></div>`);
});