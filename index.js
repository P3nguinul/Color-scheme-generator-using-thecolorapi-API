
const getColorSchemeBtn = document.getElementById("getColorBtn")
const colorPicker = document.getElementById("colorPicker")
const colorSelect = document.getElementById("colorSelect")
const colorsContainer = document.getElementById('colorsContainer')

getColorSchemeBtn.addEventListener('click', function(e){
    e.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${colorSelect.value}&count=5`, {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        let colorContainerHtml = ''
        
        data.colors.forEach((color, index) => {
            colorContainerHtml += `<div class="color">
                                     <div id="color${index+1}" data-hex="${color.hex.value}" class="color-length">
                                    </div>
                                         <p id="color${index+1}hex">${color.hex.value}</p> 
                                     </div>`
                                })
              colorsContainer.innerHTML = colorContainerHtml
              console.log(colorContainerHtml)
                                
            const color1 = document.getElementById("color1")
            const color2 = document.getElementById("color2")
            const color3 = document.getElementById("color3")
            const color4 = document.getElementById("color4")
            const color5 = document.getElementById("color5")

            const color1hex = document.getElementById("color1hex")
            const color2hex = document.getElementById("color2hex")
            const color3hex = document.getElementById("color3hex")
            const color4hex = document.getElementById("color4hex")
            const color5hex = document.getElementById("color5hex")

            let colors = [color1, color2, color3, color4, color5]
            let colorsHexes = [color1hex, color2hex, color3hex, color4hex, color5hex]
            
          data.colors.forEach((color, index) => {
            colors[index].style.backgroundColor = color.hex.value
            colorsHexes[index].textContent = color.hex.value
        })
})
})

colorsContainer.addEventListener('click', function(e){
    console.log(e.target.dataset.hex)
    navigator.clipboard.writeText(e.target.dataset.hex)
      .then(() => console.log(`Copied: ${e.target.dataset.hex}`))
      .catch(err => console.error("Clipboard error:", err));
    colorsContainer.addEventListener('click', function(e){
  
});

})
