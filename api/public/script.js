"use-strict";

const API_URL = "http://localhost:3000"

window.addEventListener('load', function () {
    window.fetch(API_URL + "/stats")
        .then(res => res.json())
        .then(({ metadata, quantities, ...rest }) => {
            printVariants(rest)
            printAll(metadata)
        })
        .catch(console.log)
})

// Create all possible combinations
function getCombinations(quantities) {
    const results = []

    // Transform qty into an array. Eg: 4 => [0, 1, 2, 3]
    function quantityToCollection(qty) {
        return Array(qty).fill(0).map((_, i) => i)
    }

    // Recursive function that's list all combinations
    // @dev mute the results var
    function combination(terms, acc = '') {
        let isLast = terms.length === 1

        for (let i = 0; i < terms[0].length; i++) {
            let item = acc + '/' + terms[0][i].toString()
            if (isLast) {
                results.push(item)
            } else {
                combination(terms.slice(1), item)
            }
        }
    }

    combination(quantities.map(quantityToCollection))

    return results
}

// return. a > img + span
function createImage(url, name = '') {
    const image = document.createElement('img')
    const link = document.createElement('a')
    link.setAttribute('href', url)
    image.setAttribute("src", url)
    link.classList = "p-1 block pointer w-1/2 sm:w-1/3 md:w-1/6"
    link.appendChild(image)
    if (name) {
        const span = document.createElement('span')
        span.innerText = name
        link.appendChild(span)
    }
    return link
}

function printVariants(metadata) {
    const baseUrl = API_URL + "/svg-trait"

    for (const [traitName, choices] of Object.entries(metadata)) {
        const resultsElement = document.getElementById(traitName)

        for (let i = 0; i < choices.length; i++) {
            const name = choices[i];
            const url = baseUrl + "/" + traitName.slice(0, traitName.length - 1) + "/" + i
            const image = createImage(url, name)
            resultsElement.appendChild(image)
        }
    }
}

function printAll(metadata) {
    const results = getCombinations(Object.values(metadata))
    const baseUrl = API_URL + "/svg"
    const urls = results.map((pathname, index) => baseUrl + "/" + index + pathname)
    const resultsElement = document.getElementById("results")
    const qtyElement = document.getElementById("quantity")
    const qtyElementPercent = document.getElementById("quantity_percent")

    qtyElement.innerText = urls.length.toString()
    qtyElementPercent.innerText = ((urls.length * 100 / 10_000).toFixed(2)).toString()

    for (const url of urls.slice(0, 1_000)) {
        const image = createImage(url)
        resultsElement.appendChild(image)
    }
}
