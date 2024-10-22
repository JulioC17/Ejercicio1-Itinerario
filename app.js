const incorrecto1 = document.getElementById("incorrecto1")
const respuestaCorrecta = document.createElement("p")
respuestaCorrecta.classList.add("escondido")
respuestaCorrecta.innerHTML = "Esta Evaluacion está mal realizada ya que la altura mínima de las oficinas sí puede ser de 2,5 metros si decide reducirlas, pero el del almacén deben ser de 3 metros o más"
incorrecto1.appendChild(respuestaCorrecta)

incorrecto1.addEventListener("click", () => {
    respuestaCorrecta.classList.toggle("visible")
}
)

const incorrecto2 = document.getElementById("incorrecto2")
const respuestaCorrecta2 = document.createElement("p")
respuestaCorrecta2.classList.add("escondido")
respuestaCorrecta2.innerHTML = "Esta Evaluacion está mal realizada ya que los trabajadores deben tener 2 metros cuadrados de superficie libre, por lo que si tienen 3, no necesita cambiar nada"
incorrecto2.appendChild(respuestaCorrecta2)

incorrecto2.addEventListener("click", () => {
    respuestaCorrecta2.classList.toggle("visible")
}
)

const incorrecto3 = document.getElementById("incorrecto3")
const respuestaCorrecta3 = document.createElement("p")
respuestaCorrecta3.classList.add("escondido")
respuestaCorrecta3.innerHTML = "Esta Evaluacion está mal realizada ya que si el suelo es deslizante necesita ser cambiado, en caso de desnivel es necesario proteger mediante barandillas u otros sistemas de protección de seguridad equivalente, que podrán tener partes móviles cuando sea necesario"
incorrecto3.appendChild(respuestaCorrecta3)

incorrecto3.addEventListener("click", () => {
    respuestaCorrecta3.classList.toggle("visible")
}
)

const incorrecto4 = document.getElementById("incorrecto4")
const respuestaCorrecta4 = document.createElement("p")
respuestaCorrecta4.classList.add("escondido")
respuestaCorrecta4.innerHTML = "Esta Evaluacion no está mal del todo, en lugares donde la barandilla sea de 100 cm se pueden quedar así, en los casos donde no haya barandilla o sea inferior a 90 cm se deberan de instalar o ajustar a esa m'inima altura de 90 cm"
incorrecto4.appendChild(respuestaCorrecta4)

incorrecto4.addEventListener("click", () => {
    respuestaCorrecta4.classList.toggle("visible")
}
)



