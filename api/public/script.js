"use-strict";

// http://localhost:3000
// https://cryptodicks-api.herokuapp.com/
const API_URL = ""

const backgroundItems = [90000, 80000, 70000, 60000, 50000, 40000, 30000, 23000, 16000, 11000, 7000, 4000, 3000, 2000, 1000, 0]
const skinItems = [90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 15000, 10000, 5000, 1000, 0]
const hatItems = [70000, 64000, 58000, 52000, 46000, 40000, 34000, 28000, 22000, 16000, 10000, 5000, 3000, 1500, 500, 0]
const eyeItems = [35000, 22000, 10000, 6000, 3000, 1000, 0]
const mouseItems = [10000, 6000, 3500, 2000, 1000, 1000, 0]
const clotheItems = [12000, 5000, 0]
const armItems = [8000, 0]
const specialItems = [2000, 1000, 0]

const intervals = [backgroundItems, skinItems, hatItems, eyeItems, mouseItems, clotheItems, armItems, specialItems]

window.addEventListener('load', function () {
    window.fetch(API_URL + "/stats")
        .then(res => res.json())
        .then((metadata) => {
            printVariants(metadata)
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

function get10KWithRarity() {
    function randomSelect(interval) {
        const random = Math.random() * 1e7 % 1e5
        for (let i = 0; i < interval.length; i++) {
            if (random >= interval[i]) {
                return i
            }
        }
    }

    function getRandomSelection() {
        // If we have a special element, we have to remove some properties.
        const special = randomSelect(specialItems)
        if (special !== 0) {
            return "/" + intervals.slice(0, 2).map(randomSelect).join("/") + "/0/0/0/0/0/" + special
        }

        // If we have the blanket clothe, don't append mouse
        const clothe = randomSelect(clotheItems)
        if (clothe === 1) {
            return "/" + intervals.slice(0, 4).map(randomSelect).join("/") + "/0/" + clothe + "/" + randomSelect(armItems) + "/" + special
        }

        // If we have the cosmonaut helmet clothe, don't append mouse
        const hat = randomSelect(hatItems)
        if (hat === 14) {
            return "/" + intervals.slice(0, 2).map(randomSelect).join("/") + "/" + hat + "/" + randomSelect(eyeItems) + "/0/" + clothe + "/" + randomSelect(armItems) + "/" + special
        }

        // Else fully random except the special who must not change
        return "/" + intervals.slice(0, 2).map(randomSelect).join("/") + "/" + hat + "/" + randomSelect(eyeItems) + "/" + randomSelect(mouseItems) + "/" + clothe + "/" + randomSelect(armItems) + "/" + special
    }

    return Array(10e3).fill(0).map(() => getRandomSelection())
}

// return. a > img + span
function createImage(url, name = '', rarityPercent = 0) {
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

        if (rarityPercent) {
            const rarity = document.createElement('span')
            rarity.innerText = ` (${rarityPercent.toFixed(2)}%)`
            link.appendChild(rarity)
        }
    }
    return link
}

function printVariants(metadata) {
    const baseUrl = API_URL + "/svg-trait"
    const resultsElement = document.getElementById("variants")

    let i = 0
    for (const [traitName, choices] of Object.entries(metadata)) {
        const currentInterval = intervals[i]
        i++
        const title = document.createElement('code')
        title.classList = "text-lg sm:text-2xl font-medium"
        title.innerText = traitName
        resultsElement.appendChild(title)

        const variantsDiv = document.createElement("div")
        variantsDiv.classList = "flex flex-wrap mx-auto -mx-1 mb-8"

        for (let j = 0; j < choices.length; j++) {
            const size = j === 0
                ? 1e5 - currentInterval[j]
                : currentInterval[j - 1] - currentInterval[j]
            const rarityPercent = 100 * size / 1e5
            const name = choices[j];
            const url = baseUrl + "/" + traitName.slice(0, traitName.length - 1) + "/" + j
            const image = createImage(url, name, rarityPercent)
            variantsDiv.appendChild(image)
        }

        resultsElement.appendChild(variantsDiv)
    }
}

function printAll(metadata) {
    const all = getCombinations(Object.values(metadata).map(values => values.length))
    const results = get10KWithRarity()
    const baseUrl = API_URL + "/svg"
    const urls = results.map((pathname, index) => baseUrl + "/" + index + pathname)
    const resultsElement = document.getElementById("results")
    const qtyElement = document.getElementById("quantity")
    const capElement = document.getElementById("capacity")
    const qtyElementPercent = document.getElementById("quantity_percent")

    qtyElement.innerText = urls.length.toString()
    capElement.innerText = all.length.toString()
    qtyElementPercent.innerText = ((urls.length * 100 / 10_000).toFixed(2)).toString()

    for (const url of urls.slice(0, 1_000)) {
        const image = createImage(url)
        resultsElement.appendChild(image)
    }
}
