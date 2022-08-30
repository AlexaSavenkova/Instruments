console.log('loadScript')

function loadScript(arg1, callback = null) {
  if (typeof arg1 === 'string') {
    const script = document.createElement('script')
    script.src = arg1
    script.onload = callback
    document.body.appendChild(script)
  } else if (Array.isArray(arg1)) {
      arg1.forEach((url) => {
        const script = document.createElement('script')
        script.src = url
        script.onload = callback(url)
        document.body.appendChild(script)
      } )
  } else if (typeof arg1 === 'function') {
     arg1()
  }
}