
//=================================================

const user = document.getElementById('user');
const send = document.getElementById('send');

send.onclick = function () {
    const count = user.value;
    fetch('https://dog.ceo/api/breed/hound/images/random/' + count)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => {
            const pic = data.message[0]
            // wrapper.style.background = img; А так не работает почемуто
            image = document.createElement('img')
            image.src = pic;
            wrapper.appendChild(image)
        })
}
