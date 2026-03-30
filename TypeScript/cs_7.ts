enum Role {
    Doctor = "Doctor",
    Nurse = "Nurse", 
    Admin = "Admin"
}

interface Staff {
    id : number;
    name : string;
    role : Role;
}

const staffMembers : Array<Staff> = [
    {id : 1, name : "Dr. sam", role : Role.Admin},
    {id : 2, name : "Dr. Ram", role : Role.Doctor},
    {id : 3, name : "Dr.suraj", role : Role.Nurse}
];

console.log(staffMembers);


function printSummary(staffList : Array<Staff>) : void {
    staffList.forEach((member : Staff) => {
        console.log(`${member.name} -- ${member.role}.`)
    });
};

printSummary(staffMembers);
