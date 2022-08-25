
console.log('useFull')
loadScript('js/c.js', () => {
  console.log('from useFull -> testing string loading js/c.js')
})

loadScript(['js/a.js', 'js/b.js'], (url) => {
  console.log('from useFull -> testing array, loading ', url)
})

loadScript(()=> {
  console.log('from useFull -> testing function ')
})