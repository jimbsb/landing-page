(function(){if(!document.querySelector('#custom-config.custom-config')) return;
const mainDom = document.querySelector('#custom-config.custom-config');
document.querySelector('#custom-config.custom-config .toggle-button').addEventListener('click', function() {
    console.log("clicked");
    console.log(this.parentElement);
    this.parentElement.parentElement.classList.toggle('expanded');
});

function toggleExpanded() {
    const configElement = document.getElementById('custom-config');
    configElement.classList.toggle('expanded');
}})();