const unreadablize = () => {
  const style = document.createElement('style')
  style.innerText = `body {
    filter: url(#displacementFilter);
}
`
  document.head.appendChild(style)
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.innerHTML = `<filter id="displacementFilter">
<feTurbulence type="turbulence" baseFrequency="0" numOctaves="1" result="turbulence" />
<feDisplacementMap in2="turbulence" in="SourceGraphic" scale="37" xChannelSelector="R" yChannelSelector="G" />
</filter>
`
  document.body.appendChild(svg)

  let count = 0
  setInterval(() => {
    const el = document.querySelector('feTurbulence')

    if (el) {
      el.setAttribute(
        'baseFrequency',
        `${0.023 + 0.001 * (Math.sin(count / 100))}`,
      )
      count++
    }
  }, 50)
}

unreadablize()
