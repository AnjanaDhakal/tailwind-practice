tinymce.init({
    selector: 'textarea#premiumskinsandicons-naked',
    skin: 'naked',
    icons: 'small',
    plugins: 'code image link lists emoticons',
    toolbar: 'bold italic  forecolor backcolor | link image code | align | bullist numlist emoticons sliding',
    menubar: false,
    statusbar: false,
    height: 100,
    images_upload_url: 'postAccepter.php',
});


function Openbar() {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
}
var allFields = document.querySelectorAll(".tab");

for (var i = 0; i < allFields.length; i++) {

    allFields[i].addEventListener("keyup", function (event) {

        if (event.keyCode === 13) {

            event.preventDefault();
            if (this.parentElement.nextElementSibling.querySelector('input')) {
                this.parentElement.nextElementSibling.querySelector('input').focus();
            }
        }
    });

}

const accordion = document.querySelector('#accordion');
accordion.addEventListener('click', function (event) {
    if (event.target.tagName === 'H2') {
        event.target.classList.toggle('active');
        const openH2s = document.querySelectorAll('h2 > h3.active');
        for (let i = 0; i < openH2s.length; i++) {
            if (openH2s[i] !== event.target) {
                openH2s[i].classList.remove('active');
            }
        }
        event.target.nextElementSibling.classList.toggle('open');
    } else if (event.target.tagName === 'H3') {
        event.target.classList.toggle('active');
        event.target.nextElementSibling.classList.toggle('open');
    } else if (event.target.tagName === 'H4') {
        event.target.classList.toggle('active');
        event.target.nextElementSibling.classList.toggle('open');
    } else if (event.target.tagName === 'H5') {
        event.target.classList.toggle('active');
        event.target.nextElementSibling.classList.toggle('open');
    }
});


/*search by name*/ 












const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-card-container]")
const searchInput = document.querySelector("[data-search]")


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
      const isVisible =
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value)
      user.element.classList.toggle("hide", !isVisible)
    })
  }) 
data.forEach(user => {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
        const Table = userCardTemplate.content.cloneNode(true).childen[0]
        const thead = Table.querySelector("[data-thead")
        const tbody = Table.querySelector("[data-tbody")
        thead.textcontent = user . name
        tbody.textcontent = user . body
        userCardContainer.append(Table)
        return { thead: user.name, tbody: user.body, element: Table }
    });

})


