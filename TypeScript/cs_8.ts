let s : number;

console.log(s);

type User = {
    name : string;
    age : number | null;
    email? : string;
};

let user1 : User = {
    name : "sarvan", age : null, email: "sarvan@gamil.com"
};

let user2 : User = {
    name : "sam", age : 23
};

console.log(user1);
console.log(user2);

type Profile = {
    username : string;
    bio : string | null;
    avatarUrl? : string;
};

let profile1 : Profile = {
    username : "sarvan", bio : "I am MERN developer"
};

let profile2 : Profile = {
    username : "sam sundhar", bio : null, avatarUrl : "https://example.com"
};

function showProfile(profile : Profile) : void {
    const bio = profile.bio === null ? "Bio is not Provided" : profile.bio;
    const avatarUrl = profile.avatarUrl ? profile.avatarUrl : "Avatar Url not provided";

    console.log(`${profile.username}- ${bio}- ${avatarUrl}.`);
}


showProfile(profile1);
showProfile(profile2);


