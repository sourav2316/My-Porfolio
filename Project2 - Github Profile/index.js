const url = "https://api.github.com/users";
const inputEl = document.getElementById("inputType");
const searchEl = document.getElementById("searchBtn");
const profileEl = document.getElementById("profileCont");
const loadingEl = document.getElementById("loading");

const generateProf = (profile) => {
    return(
        `
        <div class="profilebox">
            <div class="top">
                <div class="left">
                    <div class="avatar">
                        <img src="${profile.avatar_url}" alt="Profile Pic"/>
                    </div>
                    <div class="self">
                        <h1><span>Name : </span>${profile.name}</h1>
                        <span>Username : ${profile.login}</span>
                    </div>
                </div>
                <a href="${profile.html_url}" target="_blank">
                <button class="primBtn">Check Profile</button>
                </a>
            </div>
    
            <div class="about">
                <h2>About</h2>
                <p>
                    ${profile.bio}
                </p>
            </div>
    
            <div class="status">
                <div class="statitem">
                    <h3>Followers</h3>
                    <p>${profile.followers}</p>
                </div>
                <div class="statitem">
                    <h3>Following</h3>
                    <p>${profile.following}</p>
                </div>
                <div class="statitem">
                    <h3>Repos</h3>
                    <p>${profile.public_repos}</p>
                </div>
            </div>
        </div>
        `
    )
};

const fetchProfile = async() => {
    const username =inputEl.value;

    loadingEl.innerText = "Loading...";
    loadingEl.style.color = "black";

    try{
    const res = await fetch(`${url}/${username}`)
    const data = await res.json();

        if(data.bio){
            loadingEl.innerText = "";
            profileEl.innerHTML = generateProf(data);
        } else{
            loadingEl.innerHTML = "No profile found";
            loadingEl.style.color = "red";
            profileEl.innerHTML = "";
        }
    console.log(data);
    } catch(err){
        console.log({err});
        profileEl.innerText = "";
    }
};


searchEl.addEventListener("click", fetchProfile);