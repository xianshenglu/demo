console.log('env')
window.env = ['production', 'sit', 'test'][Math.floor(Math.random() * 3)]
document.write(`<script src='js/${window.env}.js'><\/script>`)
