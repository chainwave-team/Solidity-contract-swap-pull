"use-strict";

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

window.addEventListener('load', function () {
    const results = getCombinations([
        14, // Background colors
        8, // Dicks colors
        4, // Hats
        // 1, // Clothes
        // 1, // Skins
    ])

    const baseUrl = "http://localhost:3000/svg"
    const urls = results.map(pathname => baseUrl + pathname)
    const resultsElement = document.getElementById("results")
    const qtyElement = document.getElementById("quantity")
    const qtyElementPercent = document.getElementById("quantity_percent")

    qtyElement.innerText = urls.length.toString()
    qtyElementPercent.innerText = ((urls.length * 100 / 10_000).toFixed(2)).toString()

    for (const url of urls) {
        const image = document.createElement('img')
        const link = document.createElement('a')
        link.setAttribute('href', url)
        image.setAttribute("src", url)
        link.classList = "p-1 block pointer w-1/2 sm:w-1/3 md:w-1/6"
        link.appendChild(image)
        resultsElement.appendChild(link)
    }
})