const pictures = [
    "https://img.freepik.com/premium-photo/man-bicycle-land-full-lanterns-digital-art-style-illustration-painting-fantasy-concept-man-bicycle_743201-8374.jpg?w=996",
    "https://img.freepik.com/free-vector/gradient-lo-fi-illustration_23-2149375749.jpg?t=st=1703831798~exp=1703832398~hmac=f3cda75cc58e582f4578d18ec7bde84decf6618e905f397d603bfc8bdc536f2e",
    "https://img.freepik.com/free-photo/bright-pop-landscape-design_23-2149213461.jpg?w=996&t=st=1703831818~exp=1703832418~hmac=0f50bc53a0978a0dd02b716ec640b5eaa28c060e80ee267701f63dc266c6acee",
    "https://img.freepik.com/free-photo/men-women-embrace-sunset-generative-ai_188544-12581.jpg?t=st=1703831827~exp=1703832427~hmac=8d221f7ecfa2ff6d6b0d3864cc8c346e58b2e2095d47f57704bff4387840fb52",
    "https://img.freepik.com/free-photo/moon-sky-night-background-asset-game-2d-futuristic-generative-ai_191095-2049.jpg?t=st=1703828973~exp=1703832573~hmac=b619ca08ec095f054ff030aa063a7cde21da79372999fe67258c404bc923106e&w=996",
    "https://img.freepik.com/free-photo/cyberpunk-urban-scenery_23-2150712616.jpg?t=st=1703831000~exp=1703834600~hmac=c16c89eb532a2e97b4b670be0573863797b39a0b057cfef6426f69b5fc66947b&w=996"
]
const buttons = document.querySelectorAll(".btn")
const image = document.querySelector(".image-container")

let counter = 0;
buttons.forEach(function (button){
    button.addEventListener('click', (e) => {
        if(button.classList.contains('btn-left')){
            counter--;
            if(counter < 0){
                counter = pictures.length - 1;
            }
            image.style.background = `url(${pictures[counter]})`
        }
        if(button.classList.contains('btn-right')){
            counter++;
            if(counter > pictures.length - 1){
                counter = 0;
            }
            image.style.background = `url(${pictures[counter]})`
        }
    })
})