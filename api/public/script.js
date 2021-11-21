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
        12, // Background colors
        7, // Dicks colors
        3, // Hats
        1, // Clothes
        1, // Skins
    ])

    const baseUrl = "http://localhost:3000/svg"
    const urls = results.map(pathname => baseUrl + pathname)
    const resultsElement = document.getElementById("results")
    const qtyElement = document.getElementById("quantity")

    qtyElement.innerText = urls.length.toString()

    for (const url of urls) {
        const image = document.createElement('img')
        image.setAttribute("src", url)
        image.classList = "p-1 w-1/2 sm:w-1/3 md:w-1/6"
        resultsElement.appendChild(image)
    }
})